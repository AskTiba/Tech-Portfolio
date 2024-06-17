import React from "react";

type RatingProps = {
  rating: number;
  onClick: (rating: number) => void;
};

function Rating({ rating, onClick }: RatingProps) {
  return (
    <div
      className="size-10 transition duration-200 rounded-full bg-blue-1 cursor-pointer hover:bg-orange hover:text-dark-blue active:bg-white active:text-black flex justify-center items-center"
      onClick={() => onClick(rating)}
    >
      {rating}
    </div>
  );
}

export default Rating;
