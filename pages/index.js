import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Nav from "../components/nav";

export default function IndexPage() {
  const [session, loading] = useSession();

  const testAPI = async () => {
    const res = await fetch("http://localhost:5000/api/recipes", {
      method: "GET",
    });
    if (!res.ok) console.log("failure");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    testAPI();
  }, []);

  return (
    <>
      <Nav />
      <div className="py-20 mx-auto w-4/5 flex flex-col items-center">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </div>
    </>
  );
}
