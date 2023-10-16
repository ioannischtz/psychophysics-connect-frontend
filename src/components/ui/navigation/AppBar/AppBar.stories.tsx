import type { Meta, StoryObj } from "@storybook/react";

import AppBar from "./AppBar";
import { Bird, Cog } from "lucide-react";
import { Button } from "../../form/Button/Button";

const meta: Meta<typeof AppBar> = {
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AppBar>;

const DemoLogo = () => (
  <div className="flex justify-between space-x-1">
    <Bird />
    <p>Brand Name</p>
  </div>
);

const nav_links = ["Home", "About", "Contact"];

const DemoNav = () => (
  <ul className="flex justify-between space-x-4">
    {nav_links.map((link) => (
      <li key={link} id={link}>
        <a href={`#${link}`} onClick={(evt) => evt.preventDefault()}>
          {link}
        </a>
      </li>
    ))}
  </ul>
);

const DemoSettings = <Button children={<Cog />} size="icon" variant="ghost" />;

const ActionButton = <Button children="Action" />;

export const Default: Story = {
  render: () => (
    <AppBar
      logo={<DemoLogo />}
      nav={<DemoNav />}
      settings={DemoSettings}
      actionButton={ActionButton}
    />
  ),
};
