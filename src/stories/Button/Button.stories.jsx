import React from "react";

import { Button } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  label: "Outlined Button",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Large Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Small Button',
// };
