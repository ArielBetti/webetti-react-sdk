import React, { ReactNode } from "react";
import { MdPerson } from "react-icons/md";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/default";

import Dropdown from "../components/Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dropdown",
  component: Dropdown,

  argTypes: {
    label: "Lorem Ipsum",
    avatar:
      "https://avatars.dicebear.com/api/adventurer-neutral/webetti-react-sdk.svg",
    action: () => console.log("teste"),
    items: [
      {
        icon: <MdPerson size="15px" color="black" />,
        label: "teste",
        action: () => console.log("teste"),
      },
      {
        icon: <MdPerson size="15px" color="black" />,
        label: "teste",
        action: () => console.log("teste"),
      },
      {
        icon: <MdPerson size="15px" color="black" />,
        label: "teste",
        action: () => console.log("teste"),
      },
      {
        icon: <MdPerson size="15px" color="black" />,
        label: "teste",
        action: () => console.log("teste"),
      },
    ],
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => (
  <ThemeProvider theme={defaultTheme()}>
    <div style={{ maxWidth: "200px" }}>
      <Dropdown {...args} />
    </div>
  </ThemeProvider>
);

export const DropdownComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DropdownComponent.args = {
  label: "Lorem Ipsum",
  avatar:
    "https://avatars.dicebear.com/api/adventurer-neutral/webetti-react-sdk.svg",
  action: () => console.log("teste"),
  items: [
    {
      icon: <MdPerson size="15px" color="black" />,
      label: "teste",
      action: () => console.log("teste"),
    },
    {
      icon: <MdPerson size="15px" color="black" />,
      label: "teste",
      action: () => console.log("teste"),
    },
    {
      icon: <MdPerson size="15px" color="black" />,
      label: "teste",
      action: () => console.log("teste"),
    },
    {
      icon: <MdPerson size="15px" color="black" />,
      label: "teste",
      action: () => console.log("teste"),
    },
    {
      icon: <MdPerson size="15px" color="black" />,
      label: "teste",
      action: () => console.log("teste"),
    },
  ],
};
