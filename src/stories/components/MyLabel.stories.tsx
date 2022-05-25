import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select", options: ["normal", "h1", "h2", "h3"] },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (props) => <MyLabel {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic label",
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "AllCaps label",
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary label",
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Secondary label",
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: "Secondary label",
  size: "normal",
  fontColor: "#1fc291",
};
