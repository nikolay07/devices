import React from "react";
import InputField from "../InputField/InputField";

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
export const arrTrue = (dataIn) => (!Array.isArray(dataIn) ? dataIn : arrNotEmpty(dataIn));
