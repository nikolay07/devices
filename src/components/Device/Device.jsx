import React from "react";
import { arrTrue } from "./dataValidation";
import PropTypes from "prop-types";

const Device = ({ config }) => {
  const deviceConfig = [Object.entries(config)].flat();
  const newDevice = deviceConfig.map((item, i) => {
    const data = arrTrue(item[1]);
    return (
      <div key={i}>
        <span className="device__list_key">{item[0]}</span> : <span className="device__list_value">{data}</span>
      </div>
    );
  });
  return <div className="device__list">{newDevice}</div>;
};

export default Device;

Device.propTypes = {
  config: PropTypes.object.isRequired,
};
