import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg">
        <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="./pic.jpg"
            alt="profile image"
          />
          <div>
            <p className="flex items-baseline">
              <span className=" text-green-500 mr-2 text-sm font-medium">Shivam Gutpa</span>
              <span className="text-xs text-gray-500">01/13/3021</span>
            </p>
            <p className="text-gray-300">
              English language is full of peculiarities, but collective nouns are among the most remarkable. But what is a collective noun? Collective nouns are used to refer to a group of people or things,
            </p>
          </div>
        </div>

        <div className="mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            English language is full of peculiarities, but collective nouns are among the most remarkable. But what is a collective noun? Collective nouns are used to refer to a group of people or things,
          </p>
        </div>

        <div className="mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            English language is full of peculiarities, but collective nouns are among the most remarkable.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
