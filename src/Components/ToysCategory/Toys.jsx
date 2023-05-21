import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyTabsDetails from "./ToyTabsDetails";
import ParticlesBg from "particles-bg";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Toys = () => {
  const [categories, setCategories] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://kids-toys-website-servercode-code.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  const hanleDetailsRouter = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer:
        '<a  as={Link}  href="/login" className="text-red-600">You Have to login ?</a>',
    });
  };

  return (
    <div className="container bg-none mx-auto">
      <ParticlesBg
        className="mx-auto container"
        type="ball"
        bg={true}
        num={5}
      />
      <div>
        <h3 className="font-extrabold rounded-full text-indigo-600 mt-10  font-serif shadow-lg w-72 mx-auto mb-7 p-4">
          <span className="text-red-600 "> SHOP </span> BY CATEGORY
        </h3>
      </div>
      <Tabs>
        <TabList className="  rounded-lg w-1/2 mx-auto text-indigo-600 font-bold">
          {categories.map((category, index) => (
            <Tab key={index}>{category.CategoryName}</Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto"
            >
              {category.toys.map((toy, subIndex) => (
                <div
                  key={subIndex}
                  className=" p-4 shadow-md border rounded-full border-indigo-600"
                >
                  <div>
                    <div className="lg:flex rounded-3xl">
                      {/* Image side */}
                      <div className="lg:w-1/2 ">
                        <figure>
                          <img
                            src={toy.picture}
                            alt={toy.name}
                            className=" w-full h-72 mx-auto  rounded-full p-4 "
                          />
                        </figure>
                      </div>

                      {/* Text side */}
                      <div className="lg:w-1/2 p-6">
                        <div className="card-body">
                          <h3 className="text-lg font-bold">{toy.name}</h3>
                          <div className=" items-center mb-2">
                            <span className="text-yellow-500 ">
                              {toy.rating} <i className="fas fa-star"></i>
                            </span>
                            <span className="text-gray-600">
                              ({toy.rating})
                            </span>
                          </div>

                          <p className="text-gray-600 ">${toy.price}</p>

                          {user ? (
                            <>
                              <button
                                onClick={() => openModal(toy)}
                                className="bg-indigo-500 btn-sm  text-white   rounded"
                              >
                                View Details
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="bg-indigo-500 btn-sm  text-white   rounded"
                                onClick={hanleDetailsRouter}
                              >
                                {" "}
                                View Details
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>

      <div>
        {selectedToy && (
          <div className="fixed inset-0  flex items-center justify-center">
            <ToyTabsDetails toy={selectedToy} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toys;
