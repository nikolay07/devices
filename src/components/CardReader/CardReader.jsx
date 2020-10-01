import React from "react";
import PropTypes from "prop-types";
import Device from "../Device/Device";

const CardReader = ({ cardReader }) => {
  return (
    <div className="device">
      {cardReader.map((cardRead, i) => (
        <Device config={cardRead} key={i} />
      ))}
    </div>
  );
};
export default CardReader;

CardReader.propTypes = {
  cardReader: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
