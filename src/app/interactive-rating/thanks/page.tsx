"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import thanks from "@public/images/illustration-thank-you.svg";

function Page() {
  const searchParams = useSearchParams();
  const rating = searchParams.get("rating");

  return (
    <main className="flex justify-center items-center bg-dark-blue h-screen w-screen text-white">
      <article className="bg-blue flex flex-col items-center py-6 px-3 rounded-3xl">
        <div>
          <Image
            src={thanks}
            alt="thank you illustration"
            className="aspect-auto"
          />
        </div>
        <div className="text-orange bg-blue-1 py-1 px-5 rounded-3xl mt-8">
          You selected {rating} out of 5
        </div>
        <div className="text-xl font-bold my-5">Thank You!</div>
        <p className="text-center text-gray text-[14px]">
          We appreciate you taking the time to give a rating. <br /> If you ever
          need more support, don’t hesitate to <br /> get in touch!
        </p>
      </article>
    </main>
  );
}

export default Page;
