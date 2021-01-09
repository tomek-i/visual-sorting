import React from "react";

import { AnimationControl } from "../../components/molecules/AnimationControl";

export default {
  component: AnimationControl,
  title: "Molecules/AnimationControl",
};

const Template = (args) => <AnimationControl {...args} />;

export const Default = Template.bind({});
export const IsPlaying = Template.bind({});
Default.args = {};
IsPlaying.args = { isPlaying: true };
