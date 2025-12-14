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
    scale: 4,
    items: [
      { type: "DIAMOND_SWORD"},
      { type: "DIAMOND_PICKAXE"},
      { type: "FISHING_ROD"},
      { type: "LAVA_BUCKET"},
      { type: "WATER_BUCKET"},
      { type: "COBBLESTONE", amount: 64},
      { type: "GOLDEN_APPLE", amount: 12},
      { type: "GOLDEN_APPLE", amount: 1},
      { type: "COOKED_BEEF", amount: 64},
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { type: "LAVA_BUCKET"},
      { type: "WATER_BUCKET"},
      null,
      null,
      null,
      null,
      null,
      { type: "DIAMOND_AXE"},
      null,
      { type: "LAVA_BUCKET"},
      { type: "WATER_BUCKET"},
      { type: "WOOD", amount: 64},
      null,
      null,
      null,
    ],
  },
}