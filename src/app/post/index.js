import Post from "./components/Post";

export default function PostContainer(props) {
  const changeTitle = (name) => {};
  return <Post {...props} changeTitle={changeTitle} />;
}
