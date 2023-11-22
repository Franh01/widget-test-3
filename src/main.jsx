import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SocketProvider from "./context/SocketContext";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import * as translations from "./translations";

import moment from "moment";
import "moment/dist/locale/pt";
import "moment/dist/locale/es";

import { createTheme, ThemeProvider } from "@mui/material";
import { UserContextProvider } from "./context/UserContext";
import { SnackContextProvider } from "./context/SnackContext";
import { WidgetContextProvider } from "./context/WidgetContext";

import App from "./App";
import Landing from "./pages/Landing";
import ChatView from "./pages/ChatView";
import ShowQr from "./pages/ShowQr";
import { createSessionId } from "./common/createSessionId";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    mode: "light",
    primary: { main: "#ffa35a", light: "#ffbb8a", dark: "#d18842" },
    secondary: { main: "#087e8b", light: "#2495a1", dark: "#005d65" },
    success: { main: "#40c545", light: "#66d06a", dark: "#2c8930" },
    warning: { main: "#ff7028", light: "#ff8c53", dark: "#b24e1c" },
    info: { main: "#2994fd", light: "#53a9fd", dark: "#1c67b1" },
    text: { primary: "#444444", secondary: "#888888", disabled: "#dddddd" },
    error: {
      main: "#c40f3c",
      light: "#cf3f63",
      dark: "#890a2a",
    },
  },
  typography: {
    fontFamily: ["var(--font-family)"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px", // Cambiar el border-radius,
            paddingRight: "0px",
            // height: 40,
            // "&.Mui-focused fieldset": {
            //   borderColor: "#02817a",
            // },
            // Cambiar el color del borde en el estado sin foco
            "& fieldset": {
              // border: "none",
              borderColor: "#d9e1ec !important",
            },
          },
          "& .MuiOutlinedInput-input": {
            // Cambiar el color del texto del input
            color: "#888888",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

moment.locale(translations.lang);

i18next.init({
  interpolation: { escapeValue: false },
  lng: translations.lang,
  resources: {
    es: translations.es,
    en: translations.en,
    pt: translations.pt,
  },
});

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    // errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <Landing />,
        index: true,
      },
      {
        path: "qr/:channel",
        element: <ShowQr />,
        index: true,
      },
      {
        path: "chat",
        element: <ChatView />,
        index: true,
      },
    ],
  },
]);

createSessionId();

root.render(
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18next}>
      <SocketProvider>
        <UserContextProvider>
          <SnackContextProvider>
            <WidgetContextProvider>
              <RouterProvider router={router} />
            </WidgetContextProvider>
          </SnackContextProvider>
        </UserContextProvider>
      </SocketProvider>
    </I18nextProvider>
  </ThemeProvider>
);

document.body.setAttribute("translate", "no");
