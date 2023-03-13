import type { Meta, StoryObj } from '@storybook/vue3';

import Input from './BaseInput.vue'

const meta: Meta<typeof Input> = {
  title: 'Example/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    primary: true,
    secondary: false,
    label: 'Button',
  },
};

