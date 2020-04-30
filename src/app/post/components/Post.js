import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBlogPost } from "../../../services/contentful";
import Card from "../../shared/commons/Card";

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
    props.setTitle(data.title);
  };

  if (!_post.id) return null;

  return (
    <div>
      <div className="px-0 md:px-40">
        <h2 className="font-medium text-gray-800 text-xl mb-2">
          {_post.title}
        </h2>
        <Card border>
          <div
            dangerouslySetInnerHTML={{
              __html: _post.body,
            }}
          ></div>
        </Card>
      </div>
    </div>
  );
}

Post.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
