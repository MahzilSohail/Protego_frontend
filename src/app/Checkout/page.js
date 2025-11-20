"use client";
import Footer from "@/components/custom/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div>
    <div className="max-w-4xl mx-auto mt-28 px-6 pb-20">
      <h1 className="text-3xl font-semibold mb-6 text-blue-900">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Order Summary */}
          <div className="border rounded-lg p-4 mb-6 bg-white shadow-sm">
            <h2 className="text-xl font-medium mb-3">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  Rs.{" "}
                  {(
                    Number(String(item.price).replace(/[^0-9]/g, "")) *
                    item.quantity
                  ).toLocaleString()}
                </span>
              </div>
            ))}

            <p className="flex justify-between font-semibold text-lg mt-3">
              <span>Total: </span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </p>
          </div>

          {/* Shipping Info */}
          <div className="border rounded-lg p-4 bg-white shadow-sm mb-6">
            <h2 className="text-xl font-medium mb-3">Shipping Information</h2>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Complete Address"
                className="w-full border p-2 rounded h-24"
              ></textarea>
              <input
                type="number"
                placeholder="Postal Code"
                className="w-full border p-2 rounded"
              />

              {/* Delivery Options */}
              <div className="border rounded-lg p-4 mt-6">
                <h2 className="text-xl font-medium mb-4">Delivery Options</h2>
                <label className="flex items-center justify-between border p-3 rounded cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={deliveryOption === "standard"}
                      onChange={() => setDeliveryOption("standard")}
                    />
                    <span className="font-medium">Standard Shipping</span>
                  </div>
                  <span>Rs. 249</span>
                </label>
              </div>

              {/* Payment Section */}
              <div className="border rounded-lg p-4 mt-6">
                <h2 className="text-xl font-medium mb-4">Payment</h2>

                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-full border p-2 rounded mb-4"
                />

                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    Cash on Delivery
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    Debit / Credit Card
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full border p-2 rounded"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Expiration Month"
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Expiration Year"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Security Code"
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Cardholder Name"
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    <label className="flex items-center gap-2 mt-2">
                      <input type="checkbox" defaultChecked />
                      Billing Address Same as Shipping
                    </label>
                  </div>
                )}
              </div>

              {/* Place Order Button */}
              <Link href={"/Confirm/"}>
              <button
                type="button"
                className="w-full mt-6 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
              >
                Place Order
              </button>
              </Link>
            </form>
          </div>
        </>
      )}
      
    </div>
    <Footer/>
    </div>
  );
}
