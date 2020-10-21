import { useState, FormEvent } from "react";
import Head from "next/head";
import axios from "axios";

export default function form() {
  const [email, setEmail] = useState("");

  const handleSubscription = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    axios.post("/api/subscribe", { email });
  };
  return (
    <>
      <Head>
        <title>Form Page</title>
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 100 + "vh",
        }}
      >
        <form className="w-full max-w-sm" onSubmit={handleSubscription}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
