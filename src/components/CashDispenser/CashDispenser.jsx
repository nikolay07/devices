import React from "react";
import Device from "../Device/Device";
import PropTypes from "prop-types";

const CashDispenser = ({ cashDispenser, type }) => {
  return (
    <div className="device">
      {cashDispenser.map((cashDispens, i) => (
        <Device config={cashDispens} type={type} key={i} />
      ))}
    </div>
  );
};
export default CashDispenser;

CashDispenser.propTypes = {
  cashDispenser: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
