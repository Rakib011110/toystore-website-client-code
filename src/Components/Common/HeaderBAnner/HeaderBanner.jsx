import React from "react";

const HeaderBanner = () => {
  return (
    <div>
      <div className="relative w-full h-full pb-10">
        <div className="hidden md:block">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png"
            alt
          />
        </div>

        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-4xl text-red-600 md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
              <span className="text-indigo-600"> Welcome</span> to our Toy Store
              Wonderland!
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>
                The next big thing starts here. Start building with Prodify and
                be the first to market with a product that is ready to take on
                the competition and delight your customers
              </h2>
            </div>
            <div className="lg:flex">
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Start building now
              </button>
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Try it out
              </button>
            </div>
          </div>
          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto  "
                src="https://target.scene7.com/is/image/Target/GUEST_4781cdd4-4bf7-42de-ba32-98f9401b06e9?wid=488&hei=488&fmt=pjpeg"
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full">
              <p tabIndex="0" className="text-white uppercase text-2xl mb-4">
                Qusique Tincidun sapien
              </p>
              <h1
                tabIndex="0"
                className="text-white text-4xl lg:text-6xl font-black mb-8"
              >
                Discover a treasure trove of toys
              </h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                At our toy store, we believe in the magic of play and the joy it
                brings to children of all ages. Step into a world filled with
                imagination, creativity, and endless possibilities. Whether
                you're a parent, a collector, or a child at heart, we have
                something special for everyone.
              </p>
              <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                <div className="sm:flex items-center py-2">
                  <div className="flex items-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="Toy name"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Toy Name"
                    />
                  </div>
                  <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="zip code"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Zip code"
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="insurance"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Insurance"
                    />
                  </div>
                </div>
                <button
                  role="button"
                  aria-label="search"
                  className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
                >
                  <img
                    className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                    alt="search"
                  />
                  <input
                    aria-label="search"
                    className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6"
                  />
                </button>
              </div>
            </div>
          </div>

          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Start building now
          </button>
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Try it out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
