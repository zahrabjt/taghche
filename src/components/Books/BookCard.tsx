import React from "react";
import Link from "next/link";
import { IBook } from "@/types/interface";
import Lable from "../Lable/Lable";

const BookCard = ({ book }: { book: IBook }) => {
  const authorNames = book.authors
    .map((author) => `${author.firstName} ${author.lastName}`)
    .join(", ");

  return (
    <div className="bg-secondary border rounded-xl shadow-md px-4 py-2 cursor-pointer hover:!scale-105 transition delay-300 duration-300 ease-in-out">
      <Link
        className="flex flex-col gap-y-4"
        href={`/books/${book.id}/${book.title.replace(/\s+/g, "-")}`}
        passHref
      >
        <div className="relative w-full !h-50">
          <img
            src={book.coverUri}
            alt={book.title}
            className="!w-full !h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full !items-center flex justify-center mt-3">
          <h3 className="text-xl text-wrap  text-primary  !font-bold truncate">
            {book.title}
          </h3>
        </div>
        <div className="!w-full !items-center flex !justify-center md:!justify-start">
          <p className="md:text-sm lg:!text-sm !text-lg text-gray-400">
            <Lable type="card">نویسندگان</Lable> {authorNames}
          </p>
        </div>
        <div className="flex flex-col !justify-between lg:flex-row gap-y-3 !items-center ">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.floor(book.rating) ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  index < Math.floor(book.rating)
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
                strokeWidth="2"
              >
                <path
                  fill="currentColor"
                  d="M12 17.27l4.18 2.18-1.64-5.03L20 8.24h-5.19L12 3 9.19 8.24H4l3.46 6.18-1.64 5.03L12 17.27z"
                />
              </svg>
            ))}
          </div>
          <div className="flex !items-center justify-center ">
            <p className=" rounded-md text-sm px-1.5 py-0.5 bg-primary bg-opacity-90 font-bold text-secondary">
              {book.price} تومان
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
