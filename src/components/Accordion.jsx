// import { useState } from 'react';

// function AccordionItem({ title }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-2">
//       <div className="border rounded-md shadow-md">
//         <div
//           className="p-4 cursor-pointer bg-gray-200"
//           onClick={toggleAccordion}
//         >
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">{title}</h2>
//             <svg
//               className={`w-5 h-5 transition-transform ${
//                 isOpen ? 'transform rotate-180' : ''
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
//               />
//             </svg>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="bg-white p-4">
//             <p>This is the content of the accordion item.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const accordionItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {accordionItems.map((item, index) => (
//         <AccordionItem key={index} title={item} />
//       ))}
//     </div>
//   );
// }

// export default App;
