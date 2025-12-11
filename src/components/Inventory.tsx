import React from "react";
import inventoryImage from "../images/minecraft_inventory.png";

export const Inventory = () => {
  const columns = 9;
  const rows = 3;
  const slotSize = 16;
  const padding = 8;

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${inventoryImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: 176,
        height: 90,
        imageRendering: "pixelated",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: padding,
          left: padding,
          width: 176 - padding * 2,
          height: 90 - padding * 2,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, ${slotSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${slotSize}px)`,
          gap: 2,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => (
          <div
            key={index}
            style={{
              boxSizing: "border-box",
            }}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};