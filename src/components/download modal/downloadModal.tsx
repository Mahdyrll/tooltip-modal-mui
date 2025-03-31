import React, { useState } from "react";
import premium from '../images/Vector.png';
import free from '../images/Vector (1).png';
import { Button } from "@mui/material";

type subFormatType = {
    format: string;
    mode: "Premium" | "Free";
};

const subFormatTypes: subFormatType[] = [
    { format: "CVS", mode: "Premium"},
    { format: "Excel", mode: "Premium"},
    { format: "JSON", mode: "Premium"},
    { format: "HTML", mode: "Premium"},
    { format: "Anki", mode: "Premium"},
    { format: "Text", mode: "Free"}
]


export default function DownloadModal () {
    const [ selectedFormat , setSelectedFormat ] = useState<string>("Text");

    const handleFormat = (format: string) => {
        setSelectedFormat(format);
    };

    return (
        <div className="w-[17.5rem] mobile:w-[17.7rem] mobile:mt-24 md:mt-36 bg-gradient241 pb-3 from-[#391A48] from-0% to-66.6% to-[#1C1A26] mr-auto ml-auto mt-16 rounded-3xl border-solid border-[#380C9D] border-[1px]">
            <div>
                <p className="text-lg font-bold text-white text-center mt-5">Select the subtitle format</p>
                <div className="mt-5">
                    <ul>
                        {subFormatTypes.map((type, index) => (
                            <li key={index} className={`flex border-t border-b border-[#2C2538] px-7 h-10 items-center cursor-pointer transition delay-100 ease-linear
                                ${selectedFormat === type.format ? "bg-[#2D1D51]" : ""}`}
                                onClick={() => handleFormat(type.format)}>
                                <span className="text-white text-base font-medium h-19">{type.format}</span>
                                {type.mode === "Premium" ? (
                                    <div className="flex w-full items-center justify-end">
                                        <p className="text-[#ED2481] text-xs h-[0.875rem] mr-1">Premium</p>
                                        <img src={premium} alt="premium"/>
                                    </div>
                                ) : (
                                    <div className="flex w-full items-center justify-end">
                                        <p className="text-[#48C1E8] text-xs h-[0.875rem] mr-1">(Free)</p>
                                        <img src={free} alt="free" />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4 flex justify-between items-center px-5">
                    <Button variant="contained" sx={{fontSize: '14px', backgroundColor: "#1B1B21", borderWidth: "1px", borderStyle: "solid", borderColor: "#380C9D", borderRadius: "30px", paddingY: "8px", paddingX: "16px", textTransform: "capitalize", boxShadow: "0px 1px 4px 1px #00000040"}}>Cancel</Button>
                    <Button variant="contained" sx={{fontSize: "14px", backgroundImage: "linear-gradient(274.17deg, #C41BD3 5.71%, #790FCB 73.06%)", borderRadius: "100px", width: "150px", textTransform: "capitalize", height: "43px", boxShadow: "0px 0px 8px 0px #9413CE"}}>Download</Button>
                </div>
            </div>
        </div>
    );
};