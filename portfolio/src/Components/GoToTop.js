import { FaArrowUp } from "react-icons/fa";
import React from "react";
import { useEffect, useState } from "react";

const GoToTop = () => {
    const [ visible, setVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({ top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if ( winScroll > 100 ){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    },[])

    return(
        <>
            {
                visible !== true &&
                <div className="fixed z-50 text-white bg-black bg-opacity-30 bottom-3 right-3 p-3 text-lg rounded-full cursor-pointer">
                    <FaArrowUp onClick={goToTop} />
                </div>
            }
        </>
    )
}
export default GoToTop;