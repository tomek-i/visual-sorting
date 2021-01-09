import React from "react";

import { MenuDropDown } from "../../components/molecules/Menu";

export default {
  component: MenuDropDown,
  title: "Molecules/Menu/Menu Drop Down",
};

const Template = (args) => <MenuDropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  items: ["1 Item", "2 Item", "3 Item"],
};
