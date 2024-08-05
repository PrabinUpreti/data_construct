import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.ts";
import RootLayout from "./components/custom/layout/RootLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RootLayout>
        <App />
      </RootLayout>
    </ReduxProvider>
  </React.StrictMode>
);
