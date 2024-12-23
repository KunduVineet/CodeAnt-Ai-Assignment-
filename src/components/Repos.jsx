import React from 'react';
import Sidebar from './Sidebar';
import repo from './RepoList';

const Repos = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Repositories Section */}
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-4">
                    <p className="font-bold text-2xl">Repositories</p>

                    <div className="flex items-center">
                        <img
                            src="./refresh.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            className="mr-2"
                        />
                        <button className="p-3 text-white bg-blue-500 rounded-lg border-2 border-blue-500 flex items-center gap-2">
                            + Add Repository
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4 p-4'>
                    <ul>
                        {repo.map((item, index) => (
                            <li key={index} className='border-2 p-2 rounded-lg ' style={{ marginBottom: '10px', listStyle: 'none' }}>
                                <div className='flex flex-row gap-4'>
                                    <h2 className='flex flex-row'>{item.name}</h2>
                                    <p className="flex items-center justify-center bg-blue-50 text-blue-400 h-8 w-27 rounded-lg"> {item.status} </p>
                                </div>
                                <div className='flex flex-row gap-4 mt-2'>
                                    <p className="flex items-center space-x-2">
                                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-1"></span>
                                        {item.type}
                                    </p>
                                    <p className='flex flex-row'> {item.size}</p>
                                    <p className='flex flex-row'>{item.updated}</p>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Repos;
