// import React, { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const ToyTabs = () => {
//   const [data, setData] = useState([]);
//   console.log(data);
//   useEffect(() => {
//     fetch("https://kids-toys-website-servercode-code.vercel.app/category")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   const handleTabSelect = (index) => {
//     console.log(`Selected tab index: ${index}`);
//   };

//   return (
//     <div className="container mx-auto">
//       <Tabs onSelect={handleTabSelect}>
//         <TabList>
//           {data.map((category) => (
//             <Tab key={category.category}>{category.category}</Tab>
//           ))}
//         </TabList>

//         {data.map((category) => (
//           <TabPanel key={category.category}>
//             <Tabs>
//               <TabList>
//                 {category.subCategories.map((subCategory, subCategoryIndex) => (
//                   <Tab key={subCategoryIndex}>{subCategory.name}</Tab>
//                 ))}
//               </TabList>

//               {category.subCategories.map((subCategory, subCategoryIndex) => (
//                 <TabPanel key={subCategoryIndex}>
//                   <div className="grid grid-cols-2 gap-4">
//                     {subCategory.toys.slice(0, 2).map((toy, toyIndex) => (
//                       <div key={toyIndex} className="bg-white p-4 shadow-md">
//                         <div className="card card-side bg-base-100 ">
//                           <div className="bg-white rounded-lg  overflow-hidden">
//                             <div className="lg:flex">
//                               {/* Image side */}
//                               <div className="lg:w-1/2">
//                                 <figure>
//                                   <img
//                                     src={toy.picture}
//                                     alt={toy.name}
//                                     className=" w-5/2 h-1/2 mb-2 "
//                                   />
//                                 </figure>
//                               </div>

//                               {/* Text side */}
//                               <div className="lg:w-1/2 p-6">
//                                 <div className="card-body">
//                                   <h3 className="text-lg font-bold">
//                                     {toy.name}
//                                   </h3>
//                                   <div className=" items-center mb-2">
//                                     <span className="text-yellow-500 ">
//                                       {toy.rating}{" "}
//                                       <i className="fas fa-star"></i>
//                                     </span>
//                                     <span className="text-gray-600">
//                                       ({toy.rating})
//                                     </span>
//                                   </div>

//                                   <p className="text-gray-600 ">${toy.price}</p>

//                                   <button className="bg-indigo-500 btn-sm text-white   rounded">
//                                     View Details
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </TabPanel>
//               ))}
//             </Tabs>
//           </TabPanel>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default ToyTabs;
