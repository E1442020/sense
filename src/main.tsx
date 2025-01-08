import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./i18n";
import "./main.css";
import "@mantine/carousel/styles.css";
import { RouterProvider } from "react-router-dom";
import { allRouters } from "./router.tsx";
import {
  ColorSchemeScript,
  DirectionProvider,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import i18n from "./i18n";

const router = allRouters;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ColorSchemeScript forceColorScheme="light" />
    <DirectionProvider initialDirection={i18n.language == "en" ? "ltr" : "rtl"}>
      <MantineProvider
        theme={{
          primaryColor: "violet",
          colors: {
            violet: [
              "#f7ecff",
              "#e8d6fa",
              "#cdabf0",
              "#b17de6",
              "#9955de",
              "#8b3dda",
              "#8330d8",
              "#7123c0",
              "#641eac",
              "#571698",
            ],
            "sec-color": [
              "#ffe8ee",
              "#ffd0d8",
              "#fd9fb0",
              "#f96a84",
              "#f52248",
              "#f5103b",
              "#f63e5f",
              "#db002e",
              "#c40028",
              "#ac0020",
            ],
          },
        }}
      >
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </DirectionProvider>
  </>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/custom-sw.js") // Ensure the path matches your deployment
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
