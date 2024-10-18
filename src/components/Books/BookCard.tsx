import React from "react";
import Link from "next/link";
import { IBook } from "@/types/interface";

const BookCard = ({ book }: { book: IBook }) => {
  const authorNames = book.authors
    .map((author) => `${author.firstName} ${author.lastName}`)
    .join(", ");

  return (
    <div className=" bg-[#f2e5d7] border rounded-lg shadow-md p-4 cursor-pointer">
      <Link
        href={`/books/${book.id}/${book.title.replace(/\s+/g, "-")}`}
        passHref
      >
        <div className="relative w-full h-50">
          <img
            src={book.coverUri}
            alt={book.title}
            className="!w-full !h-full object-cover"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg !items-center flex justify-center font-semibold truncate">
            {book.title}
          </h3>

          <p className="text-sm text-gray-600">نویسندگان: {authorNames}</p>

          <p className="text-lg font-bold text-green-600">قیمت: {book.price}</p>

          <div className="flex items-center mt-2">
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
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
