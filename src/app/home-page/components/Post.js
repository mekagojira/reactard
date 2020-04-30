import PropTypes from "prop-types";
import Card from "../../shared/commons/Card";
import Link from "next/link";
import Badge from "../../shared/commons/Badge";

export default function Post(props) {
  const { post } = props;

  const renderTags = () => {
    if (!post.tags) return null;

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
    <Link href={`/post/${post.slug}`}>
      <a>
        <Card border="border-l-4 border-app">
          <h2 className="font-medium text-gray-900 text-xl mb-2">
            {post.title}
          </h2>
          <div className="pt-4">
            <div className="flex flex-wrap">
              {tags}
              <span className="text-sm text-gray-700">
                <span className="font-bold">{post?.publishedDate}</span>
              </span>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
