import React from "react";
import carimg from "./car-63930_1280.jpg";
import Info from './carinfo.json';

function Carcomp(promp) {
    const filteredData = Info.filter((el) => {
        
        if (promp.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(promp.input)
        }
    })
    
    
    return (
        <div>
            {filteredData.map((item) => {
                
                
            })}
            <div className="relative w-[320px] h-[300px] bg-[#daf9ff] flex-col justify-center rounded-[30px] ">
                <img className="w-[99%] m-auto  h-[70%] rounded-[30px]" src= {promp.link} alt="carimg" />
                <div className="flex justify-between"> <h2 className="ml-2">{promp.name} </h2> <p className="mr-2 rounded-[10px] border-[0.1px] border-[#1a303c] p-[1px]">year</p></div>
    

            </div>
        
        </div>
    )
}
export default Carcomp;