import React from "react";
import PropTypes from "prop-types";
import Device from "../Device/Device";

const CashAcceptor = ({ cashAcceptor }) => {
  return (
    <div className="device">
      {cashAcceptor.map((cashAccept, i) => (
        <Device config={cashAccept} key={i} />
      ))}
    </div>
  );
};
export default CashAcceptor;

CashAcceptor.propTypes = {
  cashAcceptor: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
