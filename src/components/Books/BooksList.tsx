"use client";

import { getBooks } from "@/services/books";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { IBook, IBooksResponse } from "@/types/interface";
import BookCard from "@/components/Books/BookCard";

const Books = () => {
    const {
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery<IBooksResponse>({
        queryKey: ["books"],
        queryFn: ({ pageParam = "0-0-0-16" }) => getBooks({ pageParam }),
        initialPageParam: "0-0-0-16",
        getNextPageParam: (lastPage) => {
            return lastPage?.hasMore ? lastPage.nextOffset : undefined;
        },
    });

    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isFetchingNextPage) return;

        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

    if (isFetching && !data) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
            {data?.pages.map((page: IBooksResponse) =>
                page.bookList.books.map((item: IBook) => (
                    <BookCard key={item.id} book={item} />
                ))
            )}

            <div ref={loadMoreRef} style={{ height: "20px", backgroundColor: "transparent" }}></div>

            {isFetchingNextPage && <h2>Loading more...</h2>}
        </div>
    );
};

export default Books;
