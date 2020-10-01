import React from "react";
import InputField from "../InputField/InputField";
// import PropTypes from "prop-types";

export const Device = ({ config, type }) => {
  const typeNumber = (value) => {
    const number = Number(value) ? Number(value) : value;
    return typeof number === "number" ? <InputField num={number} /> : number;
  };
  const objTrue = (myobj) => {
    const arrObj = Object.entries(myobj);
    return (
      <ul className="device-list">
        {arrObj.map((item, i) => (
          <li key={i}>
            <span className="device-list__item">{item[0]}</span> :<span>{typeNumber(item[1])}</span>
          </li>
        ))}
      </ul>
    );
  };
  const objNotEmpty = (objects) => (Object.keys(objects).length !== 0 ? objTrue(objects) : null);
  const objData = (array) => array.map((obj, i) => <div key={i}>{objNotEmpty(obj)}</div>);
  const arrNotEmpty = (arr) => (arr.length !== 0 ? objData(arr) : "no data");
  const arrTrue = (dataIn) => (!Array.isArray(dataIn) ? dataIn : arrNotEmpty(dataIn));
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

// Device.propTypes = {
//   config: PropTypes.shape.isRequired,
//   type: PropTypes.shape.isRequired,
// };
