// import { useState } from 'react';

// const TestNavbar = () => {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <div className="min-h-screen">
//       <nav className="py-10 bg-black text-white">
//         <div className="container mx-auto font-poppins">
//           <div className="flex items-center justify-center">
//             <div className="w-3/12 lg:hidden">
//               <button>
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g opacity="0.4">
//                     <path
//                       d="M3 12H21"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M3 6H21"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M3 18H21"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </g>
//                 </svg>
//               </button>
//             </div>
//             <div className="md:w-6/12 lg:w-2/12 flex items-center">
//               <div className="h-10 w-10 bg-black text-white rounded font-bold flex items-center justify-center mr-4">
//                 B
//               </div>
//               Brand
//             </div>
//             <div className="w-3/12 lg:hidden">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g opacity="0.4">
//                   <path
//                     d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M21 21L16.65 16.65"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </g>
//               </svg>
//             </div>
//             <div className="w-8/12 hidden">
//               <ul className="flex space-x-14 items-center">
//                 <li>
//                   <a href="#" className="hover:underline">
//                     UI Design
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     UI Design
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     UI Design
//                   </a>
//                 </li>
//                 <li className="relative">
//                   <a
//                     className="hover:underline cursor-pointer"
//                     onClick={() => setDropdown(!dropdown)}
//                   >
//                     Lainnya
//                   </a>
//                   {dropdown && (
//                     <ul className="absolute w-[200px] bg-black text-white rounded shadow-xl mt-4">
//                       <li className="hover:bg-gray-900">
//                         <a
//                           href="#"
//                           className="flex py-3 px-6 border-b border-gray-800"
//                         >
//                           Internet
//                         </a>
//                       </li>
//                       <li className="hover:bg-gray-900">
//                         <a
//                           href="#"
//                           className="flex py-3 px-6 border-b border-gray-800"
//                         >
//                           Internet
//                         </a>
//                       </li>
//                       <li className="hover:bg-gray-900">
//                         <a href="#" className="flex py-3 px-6">
//                           Internet
//                         </a>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//               </ul>
//             </div>
//             <div className="w-2/12 hidden">
//               <input
//                 className="px-6 py-3 rounded-full bg-black bg-search"
//                 placeholder="Search ...."
//               />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default TestNavbar;
