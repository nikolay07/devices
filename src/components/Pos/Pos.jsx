import React from "react";
import PropTypes from "prop-types";
import Device from "../Device/Device";

const Pos = ({ POS, type }) => {
  return (
    <div className="device">
      {POS.map((posItem, i) => (
        <Device config={posItem} type={type} key={i} />
      ))}
    </div>
  );
};
export default Pos;

Pos.propTypes = {
  POS: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
