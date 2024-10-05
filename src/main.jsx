import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/storage/storage.js";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    <App />
  </Provider>
);
