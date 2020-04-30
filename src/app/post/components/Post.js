import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../../shared/commons/Card";
import Article from "../../shared/commons/Article";
export default function Post(props) {
  const [_post, _setPost] = useState(props?.data);

  if (!_post.id) return null;

  return (
    <div>
      <div className="px-0 md:px-40">
        <h2 className="font-medium text-gray-800 text-xl mb-2">
          {_post.title}
        </h2>
        <Card border>
          <Article source={_post.body}></Article>
        </Card>
      </div>
    </div>
  );
}

Post.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
