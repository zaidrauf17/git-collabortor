// import React from 'react'

// const Section1 = () => {
//   return (
//     <div>Section1</div>


//   )
// }

// export default Section1


import React from "react";

const Section1 = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Section 1
        </h1>

        <p className="text-gray-600 text-lg mb-6">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. In, asperiores.
        </p>

        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Section1;