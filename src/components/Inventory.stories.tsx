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
    Primary: true,
    label: "Inventory",
  }
}