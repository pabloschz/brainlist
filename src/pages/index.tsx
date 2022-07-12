import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const {data} = trpc.useQuery(["todo.getAll"]);
  const mutation = trpc.useMutation(['todo.createTodo']);

  return (
    <>
      <Head>
        <title>Brain List</title>
        <meta name="description" content="Brain List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button
      onClick={() => mutation.mutate({name: "new one from frontend"})}
    >
      Add todo!
    </button>
      <br></br>
      <div>
      {data?.map((todo) => 
      <div key={todo.id}> {todo.text} </div>)}
      </div>
    </>
  );
};

export default Home;
