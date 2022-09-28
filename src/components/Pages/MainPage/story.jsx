import React, { useState, useEffect } from "react";
import AlertManager from "../../Organisms/AlertManager";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import Component from "./index";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => (
  <AlertHandlerProvider>
    <AlertManager />
    <Component {...args} />
  </AlertHandlerProvider>
);

export const Default = Template.bind({});
