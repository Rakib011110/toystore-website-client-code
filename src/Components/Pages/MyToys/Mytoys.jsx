import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(
      `https://kids-toys-website-servercode-code.vercel.app/addtoys/email/${user?.email}?sortOrder=${sortOrder}`
    )
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sortOrder]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(
        `https://kids-toys-website-servercode-code.vercel.app/addtoys/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted successfully");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  return (
    <div className="container mx-auto mt-20">
      <div>
        <button className="sort-btn mb-5" onClick={handleSort}>
          {sortOrder === "asc" ? (
            <i className=" btn bg-indigo-600"> SHOW LOW PRICE </i>
          ) : (
            <i className="btn  bg-indigo-600 "> SHOW HIGH PRICE </i>
          )}
        </button>
      </div>

      <table className="table w-full">
        {/* Head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Price </th>
            <th>Available Quantity</th>
            <th>Detail Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="mb-10 mt-5">
          {/* Data rows */}
          {toys.map((toy) => (
            <tr key={toy.id}>
              <th>
                <button className="btn btn-sm btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <td>
                <div className="avatar">
                  <div className="rounded w-24 h-24">
                    <img src={toy.pictureUrl} alt="Toy" />
                  </div>
                </div>
              </td>
              <td>PRICE $ {toy.price}</td>
              <td>AVAILABLE: {toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <Link to={`/addtoys/${toy._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <ToastContainer></ToastContainer>
      </table>
    </div>
  );
};

export default Mytoys;
