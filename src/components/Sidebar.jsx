import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('repositories');

  const logOut = () => {
    navigate('/login');
  };

  // Function to handle selecting a repository
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const repos = ()  =>{
    navigate('/repos');
  }

  return (
    <>
      <div className="">
        {/* Logo Section */}

        {/* Sidebar */}
        <div className="w-64 h-screen p-4">
          <aside>
            <div className="flex items-center mb-6 justify-start ml-10">
              <img
                src="./image1.svg"
                alt="logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <p className="text-2xl font-bold text-gray-800">CodeAnt AI</p>
            </div>
            {/* Navigation Items */}
            <div className="flex flex-col gap-4 justify-start">
              <div className="p-4 border-b">
                <select className="w-full p-2 border rounded">
                  <option>UtkarshDhairyaPanwar</option>
                </select>
              </div>

              {/* Repositories */}
              <div
                onClick={() => handleSelectItem('repositories') || repos()}
                className={`flex items-center mb-1 px-2 rounded-md cursor-pointer ${selectedItem === 'repositories' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
              >
                <img
                  src="./home.svg"
                  alt="Repositories"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <p className="text-lg font-semibold">Repositories</p>
              </div>

              {/* Code Review */}
              <div
                onClick={() => handleSelectItem('codeReview')}
                className={`flex items-center mb-1 px-2 rounded-md cursor-pointer ${selectedItem === 'codeReview' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
              >
                <img
                  src="./code.svg"
                  alt="AI Code Review"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <p className="text-lg font-semibold">AI Code Review</p>
              </div>

              {/* Cloud */}
              <div
                onClick={() => handleSelectItem('cloud')}
                className={`flex items-center mb-1 px-2 rounded-md cursor-pointer ${selectedItem === 'cloud' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
              >
                <img
                  src="./cloud.svg"
                  alt="Cloud Security"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <p className="text-lg font-semibold">Cloud Security</p>
              </div>

              {/* Settings */}
              <div
                onClick={() => handleSelectItem('settings')}
                className={`flex items-center mb-1 px-2 rounded-md cursor-pointer ${selectedItem === 'settings' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
              >
                <img
                  src="./settings.svg"
                  alt="Settings"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <p className="text-lg font-semibold">Settings</p>
              </div>

              {/* Chat Support */}
              <div
                onClick={() => handleSelectItem('chatSupport')}
                className={`flex items-center mb-1 px-2 rounded-md cursor-pointer ${selectedItem === 'chatSupport' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                  }`}
              >
                <img
                  src="./support.svg"
                  alt="Chat Support"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <p className="text-lg font-semibold">Chat Support</p>
              </div>
            </div>

            {/* Logout Section */}
            <div
              onClick={logOut}
              className="flex items-center mt-6 hover:bg-red-100 p-2 rounded-md cursor-pointer"
            >
              <img
                src="./logout.svg"
                alt="LogOut"
                width={30}
                height={30}
                className="mr-2"
              />
              <p className="text-lg font-semibold text-red-600">LogOut</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
