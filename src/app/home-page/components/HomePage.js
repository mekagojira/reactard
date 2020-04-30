import { useState } from "react";
import Post from "./Post";

export default function HomePage(props) {
  const [_posts] = useState(props.data || []);

  const renderPost = (posts) => {
    return posts.map((post) => {
      return (
        <div className="px-0 md:px-40 pb-4" key={post.id}>
          <Post post={post} />
        </div>
      );
    });
  };

  const posts = renderPost(_posts);

  return <div className="px-0 md:px-40">{posts}</div>;
}
