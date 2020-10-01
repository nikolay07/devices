import React from "react";
import Device from "../Device/Device";
import PropTypes from "prop-types";

export const ProductDispenser = ({ productDispenser, type }) => {
  return (
    <div className="device">
      {productDispenser.map((productDispens, i) => (
        <Device config={productDispens} type={type} key={i} />
      ))}
    </div>
  );
};
export default ProductDispenser;

ProductDispenser.propTypes = {
  productDispenser: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
