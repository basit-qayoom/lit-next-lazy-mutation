import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import('lit-lazy')
  },[])
  return <Component {...pageProps} />;
}

export default MyApp;
