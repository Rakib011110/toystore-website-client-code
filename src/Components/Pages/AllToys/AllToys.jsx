import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyDetails from "../../ToysCategory/ToyDetails";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllToys = () => {
  const [alltoys, setAllToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/addtoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  // const openModal = (toy) => {
  //   setSelectedToy(toy);
  // };

  const closeModal = () => {
    setSelectedToy(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = alltoys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gap-5 mt-10 container mx-auto">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md w-64"
        />
        <button
          className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <tr key={toy._id}>
              <td>
                <button className="btn btn-sm btn-circle"></button>
              </td>
              <td>
                <div className="avatar">
                  <div className="rounded w-24 h-24">
                    <img src={toy.pictureUrl} alt="" />
                  </div>
                </div>
              </td>
              <td>Seller: {toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>Price ${toy.price}</td>
              <td>Available: {toy.quantity}</td>
              <td>
                <button
                  className="btn bg-indigo-600 text-white"
                  onClick={() => openModal(toy)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedToy && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <ToyDetails toy={selectedToy} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default AllToys;
