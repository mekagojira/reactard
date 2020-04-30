import Post from "./components/Post";
import { useContext, useEffect } from "react";
import AppContext from "../shared/context/AppContext";
import { getBlogPost, getBlogEntries } from "../../services/contentful";
import Head from "next/head";

export default function PostContainer(props) {
  return (
    <>
      <Head>
        <title>{props && props.data ? props.data.title : "Reactard"} - Reactard</title>
      </Head>
      <Post {...props} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const postId = context?.params?.id;

  if (!postId) return;
  const data = await getBlogPost(postId);

  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export const getStaticPaths = async () => {
  const data = await getBlogEntries();
  const paths = data.map((post) => {
    return { params: { id: post.id } };
  });

  return { paths, fallback: true };
};
