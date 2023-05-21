import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const [update, setUpdate] = useState(data);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const addToData = {
      pictureUrl,
      name,
      price,
      description,
    };

    fetch(
      `https://kids-toys-website-servercode-code.vercel.app/addtoys/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Toys updated");
          setUpdate(data);
          const newUpdate = { ...update };
          setUpdate(newUpdate);
        }
        console.log(data);
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;

    const value = event.target.value;
    const newUpdate = { ...update };
    newUpdate[field] = value;
    setUpdate(newUpdate);
    console.log(field);
  };

  return (
    <div>
      <ParticlesBg
        className="mx-auto container"
        type="random"
        bg={true}
        num={5}
      />
      <div className="container mx-auto">
        <form onSubmit={handleUpdateUser} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="pictureUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              defaultValue={data.pictureUrl}
              name="pictureUrl"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              defaultValue={data.name}
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium text-gray-700"
            >
              Seller Name
            </label>
            <input
              defaultValue={data.sellerName}
              type="text"
              id="sellerName"
              name="sellerName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Seller Email
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Sub-category
            </label>
            <select
              id="subCategory"
              defaultValue={data.subCategory}
              name="subCategory"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select a sub-category</option>
              <option value="Math Toys">Sports Cars</option>
              <option value="Language Toys">Trucks</option>
              <option value="Science Toys">Mini Fire Trucks</option>
              <option value="Science Toys">Mini Police Cars</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              onChange={handleInputChange}
              type="number"
              defaultValue={data.price}
              id="price"
              name="price"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              defaultValue={data.quantity}
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Available Quantity
            </label>
            <input
              onChange={handleInputChange}
              type="number"
              id="quantity"
              name="quantity"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Detail description
            </label>
            <textarea
              onChange={handleInputChange}
              defaultValue={data.description}
              id="description"
              name="description"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateToys;
