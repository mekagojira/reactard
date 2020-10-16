import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeRendered = (props) => {
    return (
        <SyntaxHighlighter
            language={props.language || 'javascript'}
            style={gruvboxDark}
        >
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
                    showLineNumbers
                    wrapLines
                    startingLineNumber={0}
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
