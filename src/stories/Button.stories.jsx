import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const PrimaryFilled = Template.bind({});
PrimaryFilled.args = {
  filled: true,
  label: "Primary Filled Button",
};

// export const SecondaryFilled = Template.bind({});
// Secondary.args = {
//   children: "Secondary Filled Button",
// };

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
