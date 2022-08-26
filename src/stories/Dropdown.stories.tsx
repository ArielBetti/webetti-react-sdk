import { ReactNode, useState } from "react";
import { MdPerson } from "react-icons/md";

import Dropdown from "../components/Dropdown";
import {
  Container,
  HamburguerMenu,
  HamburguerMenuItem,
  Header,
} from "../components";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dropdown",
  component: Dropdown,

  argTypes: {
    label: "Lorem Ipsum",
    avatarRadius: "square",
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
const Template = (args: any): ReactNode => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DevProvider>
      <div>
        <Dropdown {...args} />
      </div>
    </DevProvider>
  );
};

export const DropdownComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DropdownComponent.args = {
  label: "Lorem Ipsum",
  avatarRadius: "rounded",
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
