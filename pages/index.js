import { useState } from "react";
import Head from 'next/head'
export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="ukpf0_hN5N4IQLTrvLSH2xd9kaWmk6E_TYRkjjNTI64" />
      </Head>
      <h1>Next - Lit - Lazy - Mutation</h1>
      <hr />
      <h3>On Click App visibility</h3>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        Click here to show form
      </button>
      <div>
        {visible?<pw-app></pw-app>:""}
      </div>
      <hr />
      <h1>Calling PW App</h1>
      <pw-app></pw-app>
      <hr />
      <h1>Calling Lit Elements one by one</h1>
      <pw-input></pw-input>
      <pw-button></pw-button>
      <pw-form></pw-form>
      <pw-element></pw-element>
      <pw-card link="https://www.facebook.com">
        <a href="https://www.linkedin.com">Slot Link: https://www.linkedin.com</a>
      </pw-card>
    </>
  );
}
