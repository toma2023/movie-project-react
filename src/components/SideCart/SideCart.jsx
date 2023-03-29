import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime)
    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {;
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
        const getBreakTimeFromStorage = localStorage.getItem("breakTime");
        setBreakTime(getBreakTimeFromStorage);
    }, [watchTime])
    const handleBreakTime = (breakTime) => {
        localStorage.setItem("breakTime", breakTime);
        setBreakTime(breakTime);
    }
    const handleComplete =()=>{
        toast("Wow so easy!");
      }
    return (
        <div>
            <h1>My Cart</h1>

            <div className="mt-5 text-center">
                <p>total watch time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add Break time</h5>
            <button onClick={() => handleBreakTime(15)} className="w-25 btn-circle m-1 btn btn-info">15</button>
            <button onClick={() => handleBreakTime(20)} className="w-25 btn-circle bg-warning btn btn-info">20</button>
            <button onClick={() => handleBreakTime(25)} className="w-25 btn-circle m-1 bg-danger btn btn-info">25</button>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className="mt-5 btn btn-info w-100">Complete</button>
        </div>
    );
};



export default SideCart;