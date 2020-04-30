import PropTypes from "prop-types";
import Card from "../../shared/commons/Card";
import Link from "next/link";
import Badge from "../../shared/commons/Badge";

export default function Post(props) {
  const { post } = props;

  const renderTags = () => {
    return post.tags.map((tag, i) => {
      return (
        <div className="mr-2" key={i}>
          <Badge>{tag}</Badge>
        </div>
      );
    });
  };

  const tags = renderTags();

  return (
    <Card border="border-l-4 border-app">
      <Link href={`/post/${post.id}`}>
        <a className="font-medium text-gray-900 text-xl mb-2">{post.title}</a>
      </Link>
      <div className="pt-4">
        <div className="flex flex-wrap">
          {tags}
          <span className="text-sm text-gray-700">
            <span className="font-bold">{post?.publishedDate}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
