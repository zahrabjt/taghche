"use client";

import { useQuery } from "@tanstack/react-query";
import { getBookDetails } from "@/services/books";
import React from "react";
import { IBookDetails } from "@/types/interface";
import BookDetailsSkeleton from "@/components/Skeleton/BookDetailsSkeleton";
import { space } from "postcss/lib/list";
import Image from "next/image";
import { AddCircle } from "iconsax-react";
import Lable from "@/components/Lable/Lable";

function BookDetails({ params }: { params: { id: string; slug: string } }) {
  // const { data, isLoading, error } = useQuery<IBookDetails>({
  //   queryKey: ["book", params.id, params.slug],
  //   queryFn: () => getBookDetails(params.id, params.slug),
  // });
  // if (isLoading) {
  //   return <BookDetailsSkeleton />;
  // }
  const bookUrl = `https://taaghche.com/book/${params.id}`;
  // const book = data.pageProps?.bookPage?.book;

  return (
    <div className=" container mx-auto flex flex-col ">
      <div className=" grid lg:grid-cols-8 !w-full p-12 gap-x-5 mx-auto sm:grid-cols-2 gap-4 mt-28 sm:!mt-44">
        <div className=" col-span-2 flex  flex-col gap-y-6 !justify-start !items-center">
          <h1 className="text-3xl font-bold">
            {/* {book.title} */}
            من پیش از تو
          </h1>
          <Image
            src="/assets/images/Taaghche-Logo.png"
            className=" h-[70%] !w-full object-cover  rounded-xl shadow-xl"
            alt="taghche-logo"
            width="100"
            height="200"
          ></Image>
          {/* <img
            // src={book.coverUri}
            // alt={book.title}
            className=" h-[70%] object-cover  rounded-xl shadow-xl"
          /> */}
          <a
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition py-2  rounded-md flex gap-x-2 items-center bg-primary hover:bg-opacity-25 hover:!text-primary text-white px-4 "
          >
            <AddCircle size="16" color="white" className="hover:!bg-black" />
            جزئیات بیشتر
          </a>
        </div>
        <div className="col-span-6 py-16 flex gap-y-6 flex-col">
          <div className="flex">
            <Lable>نویسندگان</Lable>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                مجید بهجتی
                {/* {book.authors
                  .map((author) => `${author.firstName} ${author.lastName}`)
                  .join(", ")} */}
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className=" text-xl !font-bold text-gray-600 mx-4">ناشر :</div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                امیدگان زندگی
                {/* {book.publisher} */}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              تعداد صفحات :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                ۲۳۰
                {/* {book.numberOfPages}  */}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold  text-gray-600 mx-4">
              قیمت فیزیکی :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                ۳۲۰۰۰۰
                {/* {book.price} */}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              توضیحات :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                در دسته بندی روانشناسی قرار دارد
                {/* {book.description} */}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-xl !font-bold text-gray-600 mx-4">
              قیمت فیزیکی :
            </div>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                ۳۰۰۰۰۰۰۰
                {/* {book.price} */}
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
                  // fill={
                  //   index < Math.floor(book.rating) ? "currentColor" : "none"
                  // }
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
  );
}

export default BookDetails;

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
