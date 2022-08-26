import { ReactNode } from "react";
import { MdPerson } from "react-icons/md";

import Button from "../components/Button";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,

  argTypes: {
    text: "teste",
    disabled: false,
    onClick: () => console.log("teste"),
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => {
  return (
    <DevProvider>
      <Button {...args} />
    </DevProvider>
  );
};

export const ButtonComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonComponent.args = {
  text: "teste",
  disabled: false,
  onClick: () => console.log("teste"),
  variant: "secondary",
  children: (
    <>
      <MdPerson size="20px" />
      Teste
    </>
  ),
};
