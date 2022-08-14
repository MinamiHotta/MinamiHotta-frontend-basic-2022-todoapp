import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

//動作確認のために、defaultValueの値と、イベント発生時にコンソールに出現する印を任意で設定しました。いずれも、マージの際には消去します。
Default.args = {
  defaultValue: "a",
  onEditComplete: (e) => {
    console.log("★");
  },
};
