import type { Meta, StoryObj } from "@storybook/react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./MenuBar";

const meta: Meta<typeof Menubar> = {
  component: Menubar,
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

const menu_items = ["png", "jpeg", "bmp"];

export const WithGroup: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            {menu_items.map((menu_item) => (
              <MenubarItem>{menu_item}</MenubarItem>
            ))}
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithRadioItems: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={menu_items[0]}>
            {menu_items.map((menu_item) => (
              <MenubarRadioItem value={menu_item} key={menu_item}>
                {menu_item}
              </MenubarRadioItem>
            ))}
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>...</MenubarItem>
          <MenubarItem>...</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Checkbox item</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithSubMenus: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>..</MenubarItem>
          <MenubarItem>..</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Sub menu →</MenubarSubTrigger>
            <MenubarSubContent>
              {menu_items.map((menu_item) => (
                <MenubarItem>{menu_item}</MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>..</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled inset>
            ...
          </MenubarItem>
          <MenubarItem inset>...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>...</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Label</MenubarLabel>
          <MenubarItem>...</MenubarItem>
          <MenubarItem>...</MenubarItem>
          <MenubarItem>...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const WithComplexItems: Story = {
  render: () => (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>…</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent>
            <MenubarItem>
              <img src="https://ui-avatars.com/api/?name=John+Doe" />
              John Doe
            </MenubarItem>
            <MenubarItem>
              <img src="https://ui-avatars.com/api/?name=Deez+Nuts" />
              Deezy Nutso
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </Menubar>
  ),
};
