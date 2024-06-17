import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { KeyboardKey, KeyPosition, KeyboardKeyProps } from "./KeyboardKey";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Keyboard/Key",
  component: KeyboardKey,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof KeyboardKey>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Top: Story = {
  args: { letter: "H" },
};

export const Bottom: Story = {
  args: {
    position: KeyPosition.Bottom,
    letter: "R",
  },
};
export const Middle: Story = {
  args: {
    position: KeyPosition.Middle,
    letter: "*",
  },
};
export const Number_Bar: Story = {
  args: {
    position: KeyPosition.NumBar,
    letter: "#",
  },
};
