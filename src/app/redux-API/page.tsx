"use client";

import React, { useRef, useState } from "react";
import { useFetchBreedsQuery } from "@features/dogs/dogs-api-Slice";
import Image from "next/image";

function APIpage() {
  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useFetchBreedsQuery();

  return (
    <main className="py-10 flex flex-col items-center justify-center">
      <div className="">
        <p className="">Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
          name=""
          id=""
          className=""
        >
          <option value={5} className="">
            {5}
          </option>
          <option value={10} className="">
            {10}
          </option>
          <option value={15} className="">
            {15}
          </option>
          <option value={20} className="">
            {20}
          </option>
        </select>
      </div>
      <div className="py-5">Number of dogs fetched: {data.length}</div>
      <table className="">
        <thead className="mb-20">
          <tr>
            <th>Names</th>
            <th>Pictures</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <Image src={breed.image.url} alt="" height={250} width={250} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default APIpage;
