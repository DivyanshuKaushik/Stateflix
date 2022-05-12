import Head from "next/head";
import StoreProvider from "../app/StoreProvider";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "../styles/globals.css";

import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";

import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";
import PrivateHeader from "../components/layout/PrivateHeader";
import store from "../app/store";
import axios from "axios";

const progress = new ProgressBar({
    size: 4,
    color: "#2061c9",
    className: "z-50",
    delay: 100,
  });
  
  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Stateflix</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* global state wrapper (Context Api) */}
            <Provider store={store}>
                <StoreProvider>
                    <div className="flex flex-col min-h-screen">
                        {/* private navbar  */}
                        {/* <PrivateHeader /> */}
                        {/* public header section containing navbar  */}
                        <Header />
                        {/* all pages  */}
                        <div className="flex-grow">
                        <Component {...pageProps} />

                        </div>
                        {/* footer section  */}
                        <Footer />
                    </div>
                </StoreProvider>

            </Provider>
        </>
    );
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp);
export default MyApp;

