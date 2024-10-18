import React from "react";

const BookListSkeleton = () => (
  <div className="animate-pulse p-4">
    <div className="w-48 h-64 bg-gray-200 mb-4"></div>
    <div className="h-6 bg-gray-200 rounded mb-2 w-32"></div>
    <div className="h-4 bg-gray-200 rounded w-24"></div>
  </div>
);

export default BookListSkeleton;
