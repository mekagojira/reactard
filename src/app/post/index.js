import Post from "./components/Post";
import { useContext, useEffect } from "react";
import AppContext from "../shared/context/AppContext";
import { getBlogPost, getBlogEntries } from "../../services/contentful";

export default function PostContainer(props) {
  const app = useContext(AppContext);
  const { data } = props;

  useEffect(() => {
    changeTitle();
  }, [data]);

  const changeTitle = () => {
    app?.title?.setTitle(data?.title);
  };

  return <Post {...props} setTitle={changeTitle} />;
}

export const getStaticProps = async (context) => {
  const postId = context?.query?.id;
  if (!postId) return;

  const data = await getBlogPost(postId);

  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export const getStaticPath = async () => {
  const data = await getBlogEntries();
  console.log(data);
  const paths = data.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};
