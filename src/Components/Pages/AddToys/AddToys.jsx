// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import ParticlesBg from "particles-bg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const AddToys = () => {
//   const { user } = useContext(AuthContext);
//   const [toys, setToys] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const pictureUrl = form.pictureUrl.value;
//     const name = form.name.value;
//     const sellerName = form.sellerName.value;
//     const email = user?.email;
//     const subCategory = form.subCategory.value;
//     const price = form.price.value;
//     const rating = form.rating.value;
//     const quantity = form.quantity.value;
//     const description = form.description.value;

//     const addToData = {
//       pictureUrl,
//       name,
//       sellerName,
//       email,
//       subCategory,
//       price,
//       rating,
//       quantity,
//       description,
//     };
//     console.log(addToData);

//     fetch("http://localhost:5000/addtoys", {
//       method: "POST",

//       headers: {
//         "content-type": "application/json",
//       },

//       body: JSON.stringify(addToData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.acknowledged === true) {
//           toast(" DATA ADDED Succes");
//         }
//         console.log(data);
//         form.reset();
//       });
//   };

//   return (
//     <div className="container mx-auto">
//       <ParticlesBg
//         className="mx-auto container"
//         type="circle"
//         bg={true}
//         num={5}
//       />
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label
//             htmlFor="pictureUrl"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Picture URL of the toy
//           </label>
//           <input
//             type="text"
//             id="pictureUrl"
//             name="pictureUrl"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="sellerName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Seller Name
//           </label>
//           <input
//             type="text"
//             id="sellerName"
//             name="sellerName"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="sellerEmail"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Seller Email
//           </label>
//           <input
//             defaultValue={user?.email}
//             type="email"
//             id="sellerEmail"
//             name="sellerEmail"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="subCategory"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Sub-category
//           </label>
//           <select
//             id="subCategory"
//             name="subCategory"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           >
//             <option value="">Select a sub-category</option>
//             <option value="Math Toys">Sports Cars</option>
//             <option value="Language Toys">Trucks</option>
//             <option value="Science Toys">Mini Fire Trucks</option>
//             <option value="Science Toys">Mini Police Cars</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="price"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="rating"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Rating
//           </label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             step="0.1"
//             min="0"
//             max="5"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="quantity"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Available Quantity
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="description"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Detail description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//           ></textarea>
//         </div>
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
//           >
//             Add Toy
//           </button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddToys;
