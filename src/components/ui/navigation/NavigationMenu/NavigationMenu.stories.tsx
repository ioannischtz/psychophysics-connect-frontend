import type { Meta, StoryObj } from "@storybook/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./NavigationMenu";
import { navigationMenuTriggerStyle } from "./navigationMenuTriggerStyle";
import { Link } from "@radix-ui/react-navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

const nav_links = ["Home", "About", "Contact"];

const TemplateMenuList = () => (
  <NavigationMenuList>
    {nav_links.map((link) => (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{link}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-72 h-fit  flex justify-between p-4 space-x-4">
            <Link href="#" onClick={(evt) => evt.preventDefault()}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link}
              </NavigationMenuLink>
            </Link>
            <p className="italic">
              Some paragraph about <strong>{link}</strong>
            </p>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <TemplateMenuList />
    </NavigationMenu>
  ),
};

export const WithIndicator: Story = {
  render: () => (
    <NavigationMenu>
      <TemplateMenuList />
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
};

export const WithViewport: Story = {
  render: () => (
    <NavigationMenu>
      <TemplateMenuList />
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};
