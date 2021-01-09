import React from "react";

import { Menu, MenuDropDown } from "../../components/molecules/Menu";

export default {
  component: Menu,
  title: "Molecules/Menu/Menu",
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
export const WithOpenSubmenu = Template.bind({});

Default.args = {
  text: "Menu Name",
};
WithOpenSubmenu.args = {
  ...Default.args,
  open: true,
  items: ["1 Item", "2 Item", "3 Item", "4 Item", "5 Item"],
};
