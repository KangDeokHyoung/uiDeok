import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { MainContentsLayout } from "layout";
import { Ui } from "pages";
import { Container } from "layout";

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
          ],
        },
        {
          index: true,
          element: <div>제 ui 설명 페이지입니다. redirect</div>,
        },
      ],
    },
  ]);
};
