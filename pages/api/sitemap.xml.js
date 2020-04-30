import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise, EnumChangefreq } from "sitemap";
import { createGzip } from "zlib";
import { getBlogEntries } from "../../src/services/contentful";

const getServerSideProps = async () => {
  const data = await getBlogEntries();

  return JSON.parse(JSON.stringify(data));
};

export default async (req, res) => {
  if (!res) return {};
  try {
    // Set response header
    res.setHeader("content-type", "application/xml");
    res.setHeader("Content-Encoding", "gzip");

    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: "https://reactard.xyz",
    });

    const pipeline = smStream.pipe(createGzip());
    // Add any static entries here
    smStream.write({
      url: "/",
      changefreq: EnumChangefreq.WEEKLY,
    });

    // E.g. we create a sitemap.xml for articles
    // Set articles change frequencey is weekly
    const articles = await getServerSideProps();
    articles.map((post) => {
      smStream.write({
        url: `/post/${post.slug}`,
        changefreq: EnumChangefreq.WEEKLY,
      });
    });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
