import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '../development/components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    classes: 'customClass',
    disabled: false,
    label: 'Click',
    onClick: () => {},
    primaryStyle: true,
    submitButton: false,
  },
};

export const Secondary: Story = {
  args: {
    classes: 'customClass',
    disabled: false,
    label: 'Click',
    onClick: () => {},
    primaryStyle: false,
    submitButton: false,
  },
};

export const Disabled: Story = {
  args: {
    classes: 'customClass',
    disabled: true,
    label: 'Click',
    onClick: () => {},
    primaryStyle: false,
    submitButton: false,
  },
};
