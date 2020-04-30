import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  gruvboxDark,
  agate,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeRendered = (props) => {
  return (
    <SyntaxHighlighter language={props.language || "javascript"} style={agate}>
      {props.value || props.children}
    </SyntaxHighlighter>
  );
};
export default function Article(props) {
  const { source } = props;
  return (
    <div className="article">
      {source ? (
        <ReactMarkdown
          source={source}
          renderers={{
            Code: CodeRendered,
            InlineCode: CodeRendered,
            code: CodeRendered,
            inlineCode: CodeRendered,
          }}
        />
      ) : (
        props.children
      )}
    </div>
  );
}

Article.propTypes = {
  source: PropTypes.string,
};
