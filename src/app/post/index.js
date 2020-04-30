import Post from "./components/Post";
import { useContext } from "react";
import AppContext from "../shared/context/AppContext";

export default function PostContainer(props) {
  const app = useContext(AppContext);

  const changeTitle = (name) => {
    app?.title?.setTitle(name);
  };

  return <Post {...props} setTitle={changeTitle} />;
}
