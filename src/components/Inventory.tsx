import React from "react";
import inventoryImage from "../images/minecraft_inventory.png";
import missing from "../images/missing.webp";
import { getItemIconUrl } from "../lib/itemIcon";

/** インベントリアイテム */
export interface InventoryItem {
  type: string;
  amount?: number;
}

export interface InventoryProps {
  items?: (InventoryItem | null)[];
}

export const Inventory: React.FC<InventoryProps> = ({ items = [] }) => {
  const columns = 9;
  const rows = 3;
  const slotSize = 16;
  const padding = 8;
  const gap = 2;
  const hotbarGap = 6;

  const renderSlot = (index: number, startIndex: number = 0) => {
    const slotIndex = startIndex + index;
    const item = items[slotIndex] ?? null;
    const amount = item?.amount ?? 0;
    const iconUrl = item ? getItemIconUrl(item.type) ?? missing : missing;

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
                  fontSize: 8,
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
        width: 176,
        height: 90,
        imageRendering: "pixelated",
      }}
    >
      {/* Main inventory grid (3 rows) */}
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
          renderSlot(index)
        )}
      </div>

      {/* Hotbar (4th row) */}
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
          renderSlot(index, columns * rows)
        )}
      </div>
    </div>
  );
};