import React from "react";
import inventoryImage from "../images/minecraft_inventory.png";

export const Inventory = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${inventoryImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: 352,
        height: 166,
        imageRendering: "pixelated",
      }}
    />
  );
};