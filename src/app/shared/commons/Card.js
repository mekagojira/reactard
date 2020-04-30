import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="rounded overflow-hidden shadow-xl max-w">
      {props.media}
      <div className="px-6 py-4 bg-white">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  media: PropTypes.object,
};
