import { ReactNode, useState } from "react";
import { Button, HamburguerMenu } from "../components";

import Header from "../components/Header";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Header",
  component: Header,

  argTypes: {
    trackHeaderActive: true,
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <DevProvider>
      <Header {...args}>
        <HamburguerMenu open={open} setOpen={setOpen} side="left" width="120px" >
          a
        </HamburguerMenu>
        <Button onClick={() => console.log("21")}>Testar</Button>
      </Header>
    </DevProvider>
  );
};

export const HeaderComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderComponent.args = {
  trackHeaderActive: true,
};
