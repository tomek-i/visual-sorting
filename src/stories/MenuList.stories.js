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
  items: [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Quick Sort 3",
    "Heap Sort",
    "Shell Sort",
  ],
  onSelect: (item) => {
    console.log("clicked: ", item);
  },
};
