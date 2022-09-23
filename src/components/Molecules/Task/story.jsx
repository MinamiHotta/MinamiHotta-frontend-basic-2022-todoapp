import React, { useState, useEffect } from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  checked: () => console.log("task completed"),
  taskName: "S text",
  onEditComplete: (taskName) => console.log(`taskname changed ${taskName}`),
};
