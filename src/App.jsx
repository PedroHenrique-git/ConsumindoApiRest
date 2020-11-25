import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/index";
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Routes from "./routes";
import history from "./services/history";

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}
