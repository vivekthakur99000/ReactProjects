import React from "react";

function Cart() {
  return (
    <div>
      <h1>Your Cart (0)</h1>
      <div>
        <div className="">
          <p></p>
          <div className="">
            <p>1x</p>
            <p>@$5.50</p>
            <p>$5.50</p>
          </div>
        </div>
        <div className="">x</div>
      </div>
      <div>
        <div className="">
          <p></p>
          <div className="">
            <p>1x</p>
            <p>@$5.50</p>
            <p>$5.50</p>
          </div>
        </div>
        <div className="">x</div>
      </div>

      <div className="">
        <p>Order total</p>
        <p>$ 46.50</p>
      </div>

      <p>This is a <b>Carbon-neutral</b> delivery</p>
      <button>Confirm Order</button>
    </div>
  );
}

export default Cart;
