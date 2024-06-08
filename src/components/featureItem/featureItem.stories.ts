
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FeatureItem } from './index';

const meta = {
  title: 'Example/FeatureItem',
  component: FeatureItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    icon:'01',
    title: 'Feature Icon',
    description: 'This is a feature icon',
    color: 'primary',
   },
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon:'01',
    title: 'Feature Icon',
    description: 'This is a feature icon',
    color: 'primary',
  },
};

export const Secondary: Story = {
    args: {
      icon:'02',
      title: 'Feature Icon',
      description: 'This is a feature icon',
      color: 'secondary',
    },
  };