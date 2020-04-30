import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

export default function Article(props) {
  const { source } = props;
  return (
    <div className="article">
      {source ? <ReactMarkdown source={source} /> : props.children}
    </div>
  );
}

Article.propTypes = {
  source: PropTypes.string,
};
