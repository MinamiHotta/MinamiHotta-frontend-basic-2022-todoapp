import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Title",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

//Titleコンポーネントの定義
//React コンポーネントと HTML 要素は同列に扱うことができる
//例：div をStyledTextに変えた
