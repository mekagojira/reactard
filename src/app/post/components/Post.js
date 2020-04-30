import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBlogPost } from "../../../services/contentful";

export default function Post(props) {
  const [_post, _setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, [router]);

  const fetchPost = async () => {
    const postId = router?.query?.id;
    if (!postId) return;
    const data = await getBlogPost(postId);
    _setPost(data);
  };

  return <div></div>;
}

Post.propTypes = {
  changeTitle: PropTypes.func.isRequired,
};
