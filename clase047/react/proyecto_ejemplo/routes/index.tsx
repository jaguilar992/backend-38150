import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { useState } from "preact/hooks";

export default function Home() {
  const [name, setName] = useState("Antonio");
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={0} />
        <input type="text" value={name} onchange={(e) => console.log(e)} />
        <p>Hola {name} </p>
      </div>
    </>
  );
}
