import Post from "./components/Post";
import { useContext } from "react";
import AppContext from "../shared/context/AppContext";
import { getBlogPost } from "../../services/contentful";

export default function PostContainer(props) {
  const app = useContext(AppContext);

  const changeTitle = (name) => {
    app?.title?.setTitle(name);
  };

  return <Post {...props} setTitle={changeTitle} />;
}

export const getServerSideProps = async (context) => {
  const postId = context?.query?.id;
  if (!postId) return;

  const data = await getBlogPost(postId);

  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
