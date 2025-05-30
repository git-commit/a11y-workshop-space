"use client";

import { useState } from "react";
import { Rates } from "./rates";
import { DEFAULT_NUM_OF_MONTH, monthlyRate, SpaceShip } from "@/api/spaceShips";
import { isShipInCart } from "@/api/shoppingCart";

export const Ship = ({
  ship,
  addToCart,
}: {
  ship: SpaceShip;
  addToCart: (shipId: string) => void;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  const availabilityClass =
    ship.inStock > 0
      ? ship.inStock > 5
        ? "bg-green-500"
        : "bg-yellow-500"
      : "bg-red-500";
  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded bg-gray-100 p-6 text-[#858585] shadow-sm">
        <p className="text-2xl">{ship.name}</p>
        <div className="flex flex-row gap-4">
          <img
            src={`/images${ship.image}`}
            height={256}
            width={256}
            className="m-4 rounded"
          />
          <div className="m-4 flex flex-col gap-4">
            <div>
              <b>Location: </b>
              {ship.location}
            </div>
            {ship.mileage && (
              <div>
                <b>Mileage (ly)</b>:{" "}
                <span data-testid="ship-mileage"> {ship.mileage}</span>
              </div>
            )}
            <div className="flex flex-col">
              <b>Availability:</b>
              <span
                className={
                  "h-[24px] w-[24px] rounded-3xl border border-gray-500 " +
                  availabilityClass
                }
              />
            </div>
            <div className="flex flex-col">
              <b>Price:</b>
              <span data-testid="ship-price">{ship.price}</span>
            </div>
            <div className="flex flex-col">
              <b>Monthly Rate:</b>
              <span>{monthlyRate(ship, numberOfRates).toFixed(2)}</span>
            </div>
            <div>
              <Rates
                numberOfRates={numberOfRates}
                setNumberOfRates={setNumberOfRates}
              />
              <div>Pay in {numberOfRates} Rates</div>
            </div>
            <button className="flex justify-end">
              <img
                src={
                  isShipInCart(ship.id)
                    ? "/images/cartAdded.png"
                    : "/images/cart.png"
                }
                className={
                  isShipInCart(ship.id)
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }
                onClick={() => addToCart(ship.id)}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
