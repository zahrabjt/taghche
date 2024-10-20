"use client";

import { useQuery } from "@tanstack/react-query";
import { getBookDetails } from "@/services/books";
import React from "react";
import { IBookDetails } from "@/types/interface";
import BookDetailsSkeleton from "@/components/Skeleton/BookDetailsSkeleton";
import { space } from "postcss/lib/list";
import Image from "next/image";
import { AddCircle, Share } from "iconsax-react";
import Lable from "@/components/Lable/Lable";
import Span from "@/components/Span/Span";

function BookDetails({ params }: { params: { id: string; slug: string } }) {
  // const { data, isLoading, error } = useQuery<IBookDetails>({
  //   queryKey: ["book", params.id, params.slug],
  //   queryFn: () => getBookDetails(params.id, params.slug),
  // });
  // if (error) {
  //   return <div>صفحات</div>;
  // }
  // if (isLoading) {
  //   return <BookDetailsSkeleton />;
  // }
  const bookUrl = `https://taaghche.com/book/${params.id}`;
  // const book = data?.pageProps?.bookPage?.book;

  return (
    <div className=" container mx-auto flex flex-col mb-10">
      <div className=" lg:grid lg:grid-cols-8 flex flex-col !w-full  mx-auto sm:grid-cols-2 gap-4 mb-10 mt-28 sm:!mt-44">
        <div className=" col-span-2 flex flex-col gap-y-6 px-4 !items-center my-10 ">
          <Image
            src="/assets/images/Taaghche-Logo.png"
            className=" h-[70%] !w-full object-cover  rounded-xl shadow-xl"
            alt="taghche-logo"
            width="100"
            height="200"
          ></Image>
          {/* <img
            src={book?.coverUri}
            alt={book?.title}
            className=" h-[70%] object-cover  rounded-xl shadow-xl"
          /> */}
          <div className="flex gap-x-4  lg:flex-row gap-y-2 !w-ful">
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition py-2 !w-ful rounded-md flex gap-x-2 items-center bg-primary hover:bg-opacity-70 hover:!scale-105 delay-150 duration-300 ease-in-out text-white px-2 "
            >
              <AddCircle size="16" color="white" />
              جزئیات بیشتر
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="transition py-2 rounded-md flex gap-x-2 items-center bg-primary hover:bg-opacity-70 hover:!scale-105 delay-150 duration-300 ease-in-out text-white px-2 "
            >
              <Share size="16" color="white" />
              اشتراک گذاری
            </a>
          </div>
        </div>
        <div className="col-span-6 my-10 !justify-start !items-start flex gap-y-6 flex-col lg:!items-start px-4 lg:!justify-start ">
          <div className="flex">
            <h1 className="text-2xl font-bold !text-primary">
              طاقچه
              {/* {book?.title} */}
            </h1>
          </div>
          <div className="flex items-center">
            <Lable type="detail">نویسندگان</Lable>
            <Span>
              مجید بهجتی
              {/* {book?.authors
                  .map(
                    (author: any) => `${author.firstName} ${author.lastName}`
                  )
                  .join(", ")} */}
            </Span>
          </div>
          <div className="flex ">
            <Lable type="detail">ناشر</Lable>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                مجید بهجتی
                {/* {book?.publisher} */}
              </p>
            </div>
          </div>
          <div className="flex">
            <Lable type="detail">تعداد صفحات</Lable>
            <div className="">
              <Span>
                {/* {book?.numberOfPages} */}
                370
              </Span>
            </div>
          </div>
          <div className="flex">
            <Lable type="detail"> قیمت فیزیکی</Lable>
            <div className="">
              <p className="text-lg font-medium text-gray-400 mx-4">
                230000
                {/* {book?.price} */}
              </p>
            </div>
          </div>
          <div className="flex">
            <Lable type="detail">قیمت</Lable>
            <div className="">
              <Span>
                230000
                {/* {book?.price} */}
              </Span>
            </div>
          </div>

          <div className="flex ">
            <Lable type="detail">امتیاز </Lable>
            <div className="flex items-center lg:mb-4 mr-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  // fill={
                  //   index < Math.floor(book?.rating) ? "currentColor" : "none"
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
          <div className="flex">
            <Lable type="detail">توضیحات</Lable>
            <div className="!text-justify">
              <Span>
                {/* {book?.description} */}
                این کتاب در صفحه روانشناسی قرار دارد.
              </Span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex !w-full flex-col gap-y-8  px-4 lg:!items-start items-center">
        <h2 className="!font-bold text-3xl ">معرفی کتاب طاقچه</h2>
        <text className="font-medium text-lg leading-[30px] !text-justify">
          کتاب صوتی شازده کوچولو اثر آنتوان دو سنت اگزوپری نویسنده‌ی فرانسوی است
          که در آوریل ۱۹۴۳ برای اولین بار (به انگلیسی و فرانسوی) در نیویورک
          منتشر شد. این کتاب با فروش بیش از ۲۰۰ میلیون نسخه جزء پرفروش‌ترین
          کتاب‌هاست. شازده کوچولو داستان پسرکی است که اخترک کوچک خود را برای کشف
          سیاره‌های دیگر ترک می‌کند و با افراد و ماجرای مختلفی روبرو می‌شود. این
          نسخه صوتی با ترجمه‌ی احمد شاملو و صدای جمعی از گویندگان توسط انتشارات
          نگاه منتشر و برای خرید و دانلود در{" "}
          <a
            className="text-primary !font-bold"
            href="https://taaghche.com/"
            target="_blank"
          >
            {" "}
            طاقچه
          </a>{" "}
          ارائه شده است.
        </text>
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
