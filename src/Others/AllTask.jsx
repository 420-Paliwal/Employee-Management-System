import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AllTask = () => {
    const authData = useContext(AuthContext);
    console.log(authData.data.local_employees_data);

    return (
        <div id="AllTask" className="mt-10 mb-10 p-5 bg-[#1c1c1c] rounded-xl h-78">
            <div className="bg-black flex justify-between mt-4 rounded-lg items-center p-3">
            <h3 className='w-1/5 text-white'>Employee Name</h3>
                            <p className='w-1/5 text-blue-400'>New Task</p>
                            <p className='w-1/5 text-yellow-500'> Active Task</p>
                            <p className='w-1/5 text-green-500'>Completed Task</p>
                            <p className='w-1/5 text-red-500'>Failed Task</p>
            </div>
            <div className="h-50 overflow-auto ">
                {authData.data.local_employees_data.map((elem, key) => {
                    return (
                        <div
                            key={key}
                            className="border-1 border-emerald-400 flex flex-row justify-end mt-4 rounded-lg  p-3"
                        >
                            <h3 className='w-1/5 text-white'>{elem.firstName}</h3>
                            <p className='w-1/5 text-blue-400'>{elem.taskCount.newTask}</p>
                            <p className='w-1/5 text-yellow-500'>{elem.taskCount.active}</p>
                            <p className='w-1/5 text-green-500'>{elem.taskCount.completed}</p>
                            <p className='w-1/5 text-red-500'>{elem.taskCount.failed}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllTask;
