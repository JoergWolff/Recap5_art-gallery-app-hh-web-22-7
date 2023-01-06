// import { useImmerLocalStorageState } from "../lib/hooks";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { fetcher, URL } from "../lib/utils";
import useSWR from "swr";
import { useContext, createContext } from "react";
import React from "react";
import Layout from "../components/Layout";

export const myDataContext = createContext();

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{"ERROR: " + error.message}</h1>;
  }
  return (
    <>
      {/* <SWRConfig value={{ fetcher }}> */}
      <myDataContext.Provider value={data}>
        <GlobalStyle />
        <Layout />
        <Component {...pageProps} />
      </myDataContext.Provider>
      {/* </SWRConfig> */}
    </>
  );
}
