import React from "react";

import { PlayButton } from "../../components/atoms/PlayButton";

export default {
  component: PlayButton,
  title: "Atoms/PlayButton",
};

const Template = (args) => <PlayButton {...args} />;

export const Default = Template.bind({});
export const Play = Template.bind({});
export const Pause = Template.bind({});
export const Step = Template.bind({});
export const Reset = Template.bind({});
Default.args = {};

Play.args = { type: "PLAY", size: 5 };

Step.args = { type: "STEP", size: 3 };
Pause.args = { type: "PAUSE", size: 3 };

Reset.args = { type: "RESET", size: 3 };
