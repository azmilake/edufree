import { useState } from 'react';

const TestNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="py-10">
        <div className="container mx-auto font-poppins">
          <div className="flex items-center">
            <div className="w-2/12 flex items-center">
              <div className="h-10 w-10 bg-black text-white rounded font-bold flex items-center justify-center mr-4">
                B
              </div>
              Brand
            </div>
            <div className="w-8/12">
              <ul className="flex space-x-14 items-center">
                <li>
                  <a href="#" className="hover:underline">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    UI Design
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="hover:underline cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Lainnya
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-black text-white rounded shadow-xl mt-4">
                      <li className="hover:bg-gray-900">
                        <a
                          href="#"
                          className="flex py-3 px-6 border-b border-gray-800"
                        >
                          Internet
                        </a>
                      </li>
                      <li className="hover:bg-gray-900">
                        <a
                          href="#"
                          className="flex py-3 px-6 border-b border-gray-800"
                        >
                          Internet
                        </a>
                      </li>
                      <li className="hover:bg-gray-900">
                        <a href="#" className="flex py-3 px-6">
                          Internet
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-2/12">
              <input
                className="px-6 py-3 rounded-full bg-black bg-search"
                placeholder="Search ...."
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TestNavbar;
