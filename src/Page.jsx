import React, { useState } from "react";
import Carcomp from "./Carcomp";
import { Link, useParams } from "react-router-dom";
import Info from './carinfo.json';

function Page() {
    const { page } = useParams();
    const previousPg = page > 1 ? parseInt(page) - 1 : null;
    const nextPg = parseInt(page) + 1 < 10 ? parseInt(page) + 1 : null; 
    
    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    
    return (
        <div className="relative bg-gray-300">
            <div className="searchbar relative p-3">
                <input className="border-2 border-[#253d67] pl-2" type="text" name="search" placeholder="search car " onChange={inputHandler}/>
            
            </div>
            <div className=" grid grid-cols-3 h-fit w-[80vw] m-auto justify-between gap-2">
                {
                    Info.slice(6 * (parseInt(page) - 1), 6 * (parseInt(page) - 1)+ 6 ).map((car) => {
                        return (
                            <strong><Carcomp link={car.imgLink} name={car.name} input={inputText}  />
                            </strong>)
                    })
                }
            </div>
            <div className="flex justify-center text-center h-max">
                <Link to={`/page/${previousPg}`} className="bg-blue-100 p-2 border-2 border-blue-600" >  Previous </Link>
                <h4 className="text-center p-2">{previousPg && `${previousPg} , `}  <span className="rounded-lg border-2 border-black pr-2 pl-2">{parseInt(page)}</span> , {nextPg}</h4>
                <Link to={`/page/${nextPg}`} className="bg-blue-100 p-2 border-2 border-blue-600" >Next</Link>
            </div>
        </div>
    )
}
export default Page;