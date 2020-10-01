import React from "react";
import devices from "./data";
import CardReader from "./components/CardReader/CardReader";
import CashAcceptor from "./components/CashAcceptor/CashAcceptor";
import CashDispenser from "./components/CashDispenser/CashDispenser";
import Pos from "./components/Pos/Pos";
import Printer from "./components/Printer/Printer";
import ProductDispenser from "./components/ProductDispenser/ProductDispenser";

export const App = () => {
  const dataTree = devices.api.deviceTree;
  const dataTypeMap = devices.api.deviceTreeTypeMap;
  return (
    <div className="devices">
      <CardReader cardReader={dataTree.CardReader} />
      <CashAcceptor cashAcceptor={dataTree.CashAcceptor} />
      <CashDispenser cashDispenser={dataTree.CashDispenser} type={dataTypeMap.CashDispenser} />
      <Pos POS={dataTree.POS} type={dataTypeMap.POS} />
      <Printer printers={dataTree.Printer} />
      <ProductDispenser productDispenser={dataTree.ProductDispenser} type={dataTypeMap.ProductDispenser} />
    </div>
  );
};

export default App;
