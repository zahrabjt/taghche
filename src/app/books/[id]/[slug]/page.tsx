"use client";

import { useQuery } from "@tanstack/react-query";
import { getBookDetails } from "@/services/books";
import React from "react";
import { IBookDetails } from "@/types/interface";
import BookDetailsSkeleton from "@/components/Skeleton/BookDetailsSkeleton";
import { space } from "postcss/lib/list";

function BookDetails({ params }: { params: { id: string; slug: string } }) {
  const { data, isLoading, error } = useQuery<IBookDetails>({
    queryKey: ["book", params.id, params.slug],
    queryFn: () => getBookDetails(params.id, params.slug),
  });

  if (isLoading) {
    return <BookDetailsSkeleton />;
  }

  const bookUrl = `https://taaghche.com/book/${params.id}`;
  const book = data.pageProps?.bookPage?.book;
  return (
    <div className=" container mx-auto flex flex-col">
      <div className=" grid grid-cols-8 !w-full p-12 gap-x-5">
        <div className=" col-span-2 flex  flex-col gap-y-6 !justify-start !items-center">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <img
            src={book.coverUri}
            alt={book.title}
            className=" h-[70%] object-cover  rounded-xl shadow-xl"
          />
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 rounded-md text-white px-4 py-2  hover:bg-blue-200 transition"
          >
            مشاهده جزئیات
          </a>
        </div>
        <div className="col-span-6 py-16 flex gap-y-6 flex-col">
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              نویسندگان :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.authors
                  .map((author) => `${author.firstName} ${author.lastName}`)
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className=" text-xl !font-bold text-gray-600 mx-4">ناشر :</div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.publisher}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              تعداد صفحات :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.numberOfPages}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold  text-gray-600 mx-4">
              قیمت فیزیکی :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.price}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              توضیحات :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.description}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              قیمت فیزیکی :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                {book.price}
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              امتیاز :
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    index < Math.floor(book.rating) ? "currentColor" : "none"
                  }
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
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
        </div>
      </div>
      <div className="bg-blue-200 flex !w-full">
        <h2>معرفی کتاب</h2>
      </div>
    </div>

    // <div className="container mx-auto p-6 ">
    //   <img
    //     src={book.coverUri}
    //     alt={book.title}
    //     className="w-48 h-64 object-cover mb-6"
    //   />

    //   <h1 className="text-3xl font-bold mb-2">{book.title}</h1>

    //   <p className="text-lg text-gray-600 mb-4">
    //     نویسندگان:{" "}
    //     {book.authors
    //       .map((author) => `${author.firstName} ${author.lastName}`)
    //       .join(", ")}
    //   </p>

    //   <p className="text-lg font-bold text-green-600 mb-4">
    //     قیمت: {book.price}
    //   </p>

    //   <div className="flex items-center mb-4">
    //     {[...Array(5)].map((_, index) => (
    //       <svg
    //         key={index}
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill={index < Math.floor(book.rating) ? "currentColor" : "none"}
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         className="w-5 h-5 text-yellow-400"
    //         strokeWidth="2"
    //       >
    //         <path
    //           fill="currentColor"
    //           d="M12 17.27l4.18 2.18-1.64-5.03L20 8.24h-5.19L12 3 9.19 8.24H4l3.46 6.18-1.64 5.03L12 17.27z"
    //         />
    //       </svg>
    //     ))}
    //   </div>

    //   <p className="text-base text-gray-700 mb-4">{book.description}</p>

    //   <a
    //     href={bookUrl}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    //   >
    //     مشاهده جزئیات
    //   </a>

    //   <div className="flex space-x-2 mt-4">
    //     <a
    //       href={`https://wa.me/?text=${encodeURIComponent(
    //         book.title
    //       )} - ${encodeURIComponent(bookUrl)}`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    //     >
    //       واتساپ
    //     </a>
    //     <a
    //       href={`https://t.me/share/url?url=${encodeURIComponent(
    //         bookUrl
    //       )}&text=${encodeURIComponent(book.title)}`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
    //     >
    //       تلگرام
    //     </a>
    //     <a
    //       href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
    //         book.title
    //       )}&url=${encodeURIComponent(bookUrl)}`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    //     >
    //       توییتر
    //     </a>
    //     <a
    //       href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    //         bookUrl
    //       )}`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
    //     >
    //       فیسبوک
    //     </a>
    //   </div>
    // </div>
  );
}

export default BookDetails;
