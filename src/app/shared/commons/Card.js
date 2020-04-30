import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Card(props) {
  const classProps = classNames("rounded overflow-hidden max-w", {
    "border border-gray-100": props.border,
    [props.shadow || ""]: true,
  });

  return (
    <div className={classProps}>
      {props.media}
      <div className="px-6 py-4">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  media: PropTypes.object,
  border: PropTypes.bool,
  shadow: PropTypes.string,
};
