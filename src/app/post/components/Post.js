import PropTypes from "prop-types";
import { useState } from "react";
import Article from "../../shared/commons/Article";
import Link from "next/link";
import Button from "../../shared/commons/Button";
export default function Post(props) {
  const [_post, _setPost] = useState(props?.data);

  if (!_post.id) return null;

  return (
    <>
      <div className="px-0 md:px-64">
        <a>
          <h2 className="font-medium text-gray-900 text-2xl mb-4">
            {_post.title}
          </h2>
        </a>
        <Article source={_post.body}></Article>
      </div>
      <div className="flex justify-center py-4">
        <Link href="/">
          <a>
            <Button shadow>Quay lại</Button>
          </a>
        </Link>
      </div>
    </>
  );
}

Post.propTypes = {};
