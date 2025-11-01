import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
      description: "Button visual style variant",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Make button full width of container",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable button interaction",
    },
    children: {
      control: { type: "text" },
      description: "Button content",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Button",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// Special states
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// Interactive story with all controls
export const Interactive: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Interactive Button",
    fullWidth: false,
    disabled: false,
  },
};

// Combination story - shows all variants and sizes
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Primary Variant</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Secondary Variant</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="md">
            Medium
          </Button>
          <Button variant="secondary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Outline Variant</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="md">
            Medium
          </Button>
          <Button variant="outline" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Ghost Variant</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="ghost" size="sm">
            Small
          </Button>
          <Button variant="ghost" size="md">
            Medium
          </Button>
          <Button variant="ghost" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Destructive Variant</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="destructive" size="sm">
            Small
          </Button>
          <Button variant="destructive" size="md">
            Medium
          </Button>
          <Button variant="destructive" size="lg">
            Large
          </Button>
        </div>
      </div>
    </div>
  ),
};

// States story - shows different button states
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Normal States</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled States</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" disabled>
            Primary Disabled
          </Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
          <Button variant="destructive" disabled>
            Delete Disabled
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Full Width</h3>
        <div className="space-y-2">
          <Button variant="primary" fullWidth>
            Primary Full Width
          </Button>
          <Button variant="secondary" fullWidth>
            Secondary Full Width
          </Button>
        </div>
      </div>
    </div>
  ),
};

// With icons story (if you want to add icons later)
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="primary">
          <span>→</span>
          Primary with Icon
        </Button>
        <Button variant="secondary">
          Secondary with Icon
          <span>←</span>
        </Button>
        <Button variant="outline">
          <span>⚡</span>
          Outline with Icon
        </Button>
      </div>
    </div>
  ),
};
