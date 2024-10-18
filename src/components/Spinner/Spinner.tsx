import React from "react";

const Spinner = () => (
  <div className="col-span-full flex justify-center mt-6">
    <div className="flex justify-center items-center py-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  </div>
);

export default Spinner;
