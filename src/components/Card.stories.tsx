import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black-100 p-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card with some content inside.',
    padding: 'md',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'This is an outlined card.',
    padding: 'md',
  },
};

export const SmallPadding: Story = {
  args: {
    children: 'Small padding card.',
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  args: {
    children: 'Large padding card.',
    padding: 'lg',
  },
};