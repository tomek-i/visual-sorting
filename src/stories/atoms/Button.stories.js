import React from "react";

import { Button } from "../../components/atoms/Button";

export default {
  component: Button,
  title: "Atoms/Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const WithHref = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  text: "Button",
};
WithHref.args = {
  ...Default.args,
  href: "http://example.com",
};

Disabled.args = {
  ...WithHref.args,
  disabled: true,
};
