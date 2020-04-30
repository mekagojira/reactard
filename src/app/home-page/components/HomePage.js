import { useEffect } from "react";
import { getBlogEntries } from "../../../services/contentful";

export default function HomePage(props) {
  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const data = await getBlogEntries();
    console.log(data);
  };

  return <div className="container"></div>;
}
