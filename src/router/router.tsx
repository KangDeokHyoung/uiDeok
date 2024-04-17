import React from "react";
import { useRoutes } from "react-router-dom";
import { MainContentsLayout } from "layout";
import { Ui } from "pages";
import { Container } from "layout";
import Main from "pages/Main";

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainContentsLayout />,
      children: [
        {
          path: "info",
          element: <div>제 ui 설명 페이지입니다.</div>,
        },
        {
          path: "components",
          element: <Container />,
          children: [
            { path: "button", element: <Ui.ButtonPage /> },
            { path: "input", element: <Ui.InputPage /> },
            { path: "dialog", element: <Ui.DialogPage /> },
            { path: "checkbox", element: <Ui.CheckBoxPage /> },
            { path: "radio", element: <Ui.RadioPage /> },
            { path: "switch", element: <Ui.SwitchPage /> },
            { path: "accordion", element: <Ui.AccordionPage /> },
            { path: "popover", element: <Ui.PopoverPage /> },
            { path: "textarea", element: <Ui.TextAreaPage /> },
            { path: "table", element: <Ui.TablePage /> },
            { path: "tooltip", element: <Ui.TooltipPage /> },
            { path: "select", element: <Ui.SelectPage /> },
            { path: "toast", element: <Ui.ToastPage /> },
          ],
        },
        {
          index: true,
          element: <Main />,
        },
      ],
    },
  ]);
};
