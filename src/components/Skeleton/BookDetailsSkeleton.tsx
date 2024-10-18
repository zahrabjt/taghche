const BookDetailsSkeleton = () => {
    return (
        <div className="container mx-auto p-6 animate-pulse">
            <div className="w-48 h-64 bg-gray-200 mb-6"></div>
            <div className="h-8 bg-gray-200 rounded mb-2 w-48"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 w-32"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 w-24"></div>
            <div className="flex space-x-2 mb-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-5 h-5 bg-gray-200 rounded-full"></div>
                ))}
            </div>
            <div className="h-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-40"></div>
        </div>
    );
};

export default BookDetailsSkeleton;
