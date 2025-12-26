import React from "react";
import inventoryImage from "../images/minecraft_inventory.png";
import missing from "../images/missing.webp";
import { getItemIconUrl } from "../lib/itemIcon";

export interface InventoryItem {
  type: string;
  amount?: number;
  damage?: number;
}

export interface InventoryProps {
  scale?: number;
  items?: (InventoryItem | null)[];
}

export const Inventory: React.FC<InventoryProps> = ({
  items = [],
  scale = 1,
}) => {
  const columns = 9;
  const rows = 3;
  const slotSize = 16 * scale;
  const padding = 8 * scale;
  const gap = 2 * scale;
  const hotbarGap = 6 * scale;

  const renderSlot = (index: number, startIndex: number = 0) => {
    const slotIndex = startIndex + index;
    const item = items[slotIndex] ?? null;
    const amount = item?.amount ?? 0;
    const iconUrl = item ? getItemIconUrl(item.type, item.damage) ?? missing : missing;

    return (
      <div
        key={index}
        style={{
          position: "relative",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item && (
          <>
            <img
              src={iconUrl}
              alt={item.type}
              title={item.type}
              style={{
                width: slotSize,
                height: slotSize,
                imageRendering: "pixelated",
              }}
            />
            {amount > 1 && (
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  fontSize: 8 * scale,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "1px 1px 0 #3f3f3f",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {amount}
              </span>
            )}
          </>
        )}
      </div>
    );
  };

  const mainGridHeight = rows * slotSize + (rows - 1) * gap;
  const hotbarTop = padding + mainGridHeight + hotbarGap;

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${inventoryImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: 176 * scale,
        height: 90 * scale,
        imageRendering: "pixelated",
      }}
    >
      {/* Main inventory grid (3 rows) - items[9] to items[35] */}
      <div
        style={{
          position: "absolute",
          top: padding,
          left: padding,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, ${slotSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${slotSize}px)`,
          gap: gap,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) =>
          renderSlot(index, columns)
        )}
      </div>

      {/* Hotbar (4th row) - items[0] to items[8] */}
      <div
        style={{
          position: "absolute",
          top: hotbarTop,
          left: padding,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, ${slotSize}px)`,
          gridTemplateRows: `${slotSize}px`,
          gap: gap,
        }}
      >
        {Array.from({ length: columns }).map((_, index) =>
          renderSlot(index)
        )}
      </div>
    </div>
  );
};