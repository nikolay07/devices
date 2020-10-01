import React from "react";
import PropTypes from "prop-types";
import Device from "../Device/Device";

const Printer = ({ printers }) => {
  return (
    <div className="device">
      {printers.map((printer, i) => (
        <Device config={printer} key={i} />
      ))}
    </div>
  );
};
export default Printer;

Printer.propTypes = {
  printers: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
