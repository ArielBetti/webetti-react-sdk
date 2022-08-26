import { ReactNode } from "react";

import Input from "../components/Input";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,

  argTypes: {
    label: "Lorem Ipsum",
    placeholder: "teste",
    disabled: true,
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => {
  return (
    <DevProvider>
      <Input {...args} />
    </DevProvider>
  );
};

export const InputComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputComponent.args = {
  label: "Nome",
  placeholder: "Escolha um nome",
  disabled: false,
};
