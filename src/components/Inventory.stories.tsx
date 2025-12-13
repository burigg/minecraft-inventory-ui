import React from "react";
import { Inventory } from "./Inventory";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "components/Inventory",
  component: Inventory,
} as Meta<typeof Inventory>;

// const Template: StoryFn<typeof MinecraftInventory> = (args) => <MinecraftInventory {...args} />;

type Story = StoryObj<typeof Inventory>;

export const Primary: Story = {
  args: {
    items: [
      { 
        type: "APPLE_GOLDEN",
        amount: 12,
      },
      { type: "LAVA_BUCKET"},
      { type: "WATER_BUCKET"},
      // { type: "DIAMOND_SWORD" },
      // { type: "DIAMOND_PICKAXE" },
      // { type: "FISHING_ROD" },
      // { type: "LAVA_BUCKET" },
      // { type: "WATER_BUCKET" },
      // { type: "COBBLESTONE" },
    ],
  },
}