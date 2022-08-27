import { useState, ReactNode } from "react";
import { MdPerson } from "react-icons/md";
import { Button, Paragraph } from "../components";

import Modal from "../components/Modal";
import DevProvider from "../dev__provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal,

  argTypes: {
    title: "teste",
    textButton: "Testar",
    actionButton: () => console.log("teste"),
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any): ReactNode => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DevProvider>
      <Button onClick={() => setOpen(!open)}>Abrir</Button>
      <Modal open={open} setOpen={setOpen} {...args}>
        <Paragraph>Teste</Paragraph>
      </Modal>
    </DevProvider>
  );
};

export const ModalComponent: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalComponent.args = {
  title: "teste",
  textButton: "Testar",
  actionButton: () => console.log("teste"),
};
