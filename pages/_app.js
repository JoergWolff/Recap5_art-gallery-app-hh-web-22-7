// import { useImmerLocalStorageState } from "../lib/hooks";
import GlobalStyle from "../styles";
import { fetcher, URL } from "../lib/utils";
import useSWR from "swr";
import { createContext } from "react";
import React from "react";
import Layout from "../components/Layout";

export const globalDataContext = createContext();

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
      <globalDataContext.Provider value={data}>
        <GlobalStyle />
        <Layout />
        <Component {...pageProps} />
      </globalDataContext.Provider>
      {/* </SWRConfig> */}
    </>
  );
}
