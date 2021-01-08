import React from "react";

import { MenuList } from "../components/molecules/Menu";

export default {
  component: MenuList,
  title: "Menu List",
};

const Template = (args) => <MenuList {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  items: ["1 Item", "2 Item", "3 Item"],
};
