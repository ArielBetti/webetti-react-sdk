import { ReactNode } from "react";
import { Heading } from "../components";

import Drawer from "../components/Drawer";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Drawer",
  component: Drawer,

  argTypes: {
    width: '',
    side: 'left' || 'right',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => {
  return (
    <DevProvider>
      <Drawer {...args}>
        <Heading variant="heading-5">
          Drawer
        </Heading>
      </Drawer>
    </DevProvider>
  );
};

export const DrawerComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DrawerComponent.args = {
  width: '250px',
  side: 'left',
};
