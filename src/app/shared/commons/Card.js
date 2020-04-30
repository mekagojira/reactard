import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Card(props) {
  const classProps = classNames("overflow-hidden max-w", {
    [props.border || "border border-gray-500"]: true,
    [props.shadow || ""]: true,
    rounded: props.rounded,
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
  border: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.string,
};
