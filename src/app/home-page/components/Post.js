import PropTypes from "prop-types";
import Card from "../../shared/commons/Card";
import Link from "next/link";

export default function Post(props) {
  const { post } = props;

  return (
    <Card border>
      <Link href={`/post/${post.id}`}>
        <a className="font-medium text-gray-100 text-xl mb-2">{post.title}</a>
      </Link>
      <div className="pt-4">
        <span className="text-sm text-gray-200">
          <span className="font-bold">{post?.publishedDate}</span>
        </span>
      </div>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
