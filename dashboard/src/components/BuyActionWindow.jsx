import React from "react";

const BuyActionWindow = ({ uid }) => {
  const handleBuy = () => {
    console.log(`Buying stock with UID: ${uid}`);
    // You can add logic here for buying the stock
  };

  return (
    <div className="buy-action-window">
      <h3>Buy {uid}</h3>
      <button onClick={handleBuy}>Confirm Buy</button>
      <button>Cancel</button>
    </div>
  );
};

export default BuyActionWindow;
