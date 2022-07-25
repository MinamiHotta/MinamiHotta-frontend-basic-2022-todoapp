//indexで作成したコンポーネントをstorybookに登録するためのもの
//コンポーネントを作成する際は毎回これをコピペ
//ただし、9行目のtitleの名前だけ変える
import React from "react";
import Component from "./index";

export default {
  component: Title,
  title: "Atoms/Title",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind([]);
