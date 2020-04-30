import PropTypes from "prop-types";
import Card from "../../shared/commons/Card";
import Link from "next/link";

export default function Post(props) {
  const { post } = props;

  return (
    <Card media={!!post.heroImage && <img src={post?.heroImage?.imageUrl} />}>
      <Link href={`/post/${post.id}`}>
        <h2 className="font-medium text-gray-800 text-xl mb-2">{post.title}</h2>
      </Link>
      <p className="text-gray-700 text-base">{post.description}</p>
      <div className="pt-4">
        <span className="text-sm text-gray-500 italic">
          bởi <span className="font-bold">{post?.author?.name}</span> lúc{" "}
          <span className="font-bold">{post?.publishedDate}</span>
        </span>
      </div>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
