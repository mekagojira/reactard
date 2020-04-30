import { useEffect, useState } from "react";
import { getBlogEntries } from "../../../services/contentful";
import Post from "./Post";

export default function HomePage(props) {
  const [_posts, _setPosts] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const data = await getBlogEntries();
    _setPosts(data);
  };

  const renderPost = (posts) => {
    return posts.map((post) => {
      return (
        <div className="px-40 pb-4" key={post.id}>
          <Post post={post} />
        </div>
      );
    });
  };

  const posts = renderPost(_posts);

  return <div className="px-40">{posts}</div>;
}
