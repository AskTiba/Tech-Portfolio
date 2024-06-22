"use client";

import Image from "next/image";
import star from "@public/images/icon-star.svg";
import Rating from "@components/Rating";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setRating } from "../../features/rating/ratingSlice";

import React from "react";

function Page() {
  const rate = [...Array(5)].map((val, index) => index + 1);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleRatingClick = (ratingValue: number) => {
    dispatch(setRating(ratingValue));
  };

  const handleSubmit = () => {
    router.push("/interactive-rating/thanks");
  };
  return (
    <main className="flex text-[15px] text-white bg-dark-blue h-screen w-screen justify-center items-center">
      <article className="bg-blue rounded-3xl p-5">
        <div className="size-8 flex justify-center items-center bg-blue-1 rounded-full mb-5">
          <Image src={star} alt="star" className="size-3" />
        </div>
        <h2 className="text-xl font-bold">How did we do?</h2>
        <p className="text-gray py-5 text-[14px]">
          Please let us know how we did with your{" "}
          <br className="xl:hidden max-[384px]:inline-block" /> support{" "}
          <br className="max-[384px]:hidden" /> request. All feedback is
          appreciated <br className="xl:hidden max-[384px]:inline-block" /> to
          help us <br className="max-[384px]:hidden" /> improve our offering!
        </p>
        <section className="flex space-x-7 max-[384px]:space-x-6 ">
          {rate.map((ratingValue) => (
            <Rating
              key={ratingValue}
              rating={ratingValue}
              onClick={handleRatingClick}
            />
          ))}
        </section>

        <button
          onClick={handleSubmit}
          className="mt-8 -tracking-tighter transition duration-200 hover:bg-white font-bold uppercase w-full bg-orange px-10 py-2 text-dark-blue rounded-3xl"
        >
          Submit
        </button>
      </article>
    </main>
  );
}

export default Page;
