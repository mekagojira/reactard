import { createClient } from "contentful";
import moment from "moment";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const convertImage = (rawImage) => {
  if (rawImage) {
    return {
      imageUrl: rawImage.file.url.replace("//", "http://"), 
      description: rawImage.description,
      title: rawImage.title,
    };
  }
  return null;
};

const convertAuthor = (rawAuthor) => {
  if (rawAuthor) {
    return {
      name: rawAuthor.name,
      phone: rawAuthor.phone,
      shortBio: rawAuthor.shortBio,
      title: rawAuthor.title,
      email: rawAuthor.email,
      company: rawAuthor.company,
      twitter: rawAuthor.twitter,
      facebook: rawAuthor.facebook,
      github: rawAuthor.github,
    };
  }
  return null;
};

const convertPost = (rawData) => {
  const rawPost = rawData.fields;
  const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
  const rawAuthor = rawPost.author ? rawPost.author.fields : null;
  return {
    id: rawData.sys.id,
    body: rawPost.body,
    description: rawPost.description,
    publishedDate: moment(rawPost.publishedDate).format("DD-MM-YYYY"),
    slug: rawPost.slug,
    tags: rawPost.tags,
    title: rawPost.title,
    heroImage: convertImage(rawHeroImage),
    author: convertAuthor(rawAuthor),
  };
};

export const getBlogEntries = async () => {
  return client
    .getEntries({
      content_type: "blogPost",
    })
    .then((entries) => {
      if (entries && entries.items && entries.items.length > 0) {
        const blogPosts = entries.items.map((entry) => convertPost(entry));
        return blogPosts;
      }
      return [];
    });
};

export const getBlogPost = async (search) => {
  return client
    .getEntries({
      content_type: "blogPost",
      ...search,
    })
    .then((entries) => {
      if (entries && entries.items && entries.items.length > 0) {
        const blogPosts = entries.items.map((entry) => convertPost(entry));
        return blogPosts[0];
      }
      return null;
    });
};
