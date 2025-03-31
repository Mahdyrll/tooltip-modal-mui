import React, { useState } from "react";
import volumeUp from '../images/Vector.svg';
import bookMark from '../images/Vector (1).svg';
import { Button } from "@mui/material";
import Level from '../images/Frame 169.svg';

export default function ToolTip ():React.JSX.Element {
    //show more button handler
    const [ expand , setExpand ] = useState<boolean>(false);

    const expandButtonHandler = ():void => {
        setExpand(!expand)
    }
//*******************************/
    const arrayLength = (array: string[]): string[] => {
        let result = [...array];

        while (result.length < 47) {
            result = [...result, ...array]
        };

        return result.slice(0, 47)
    };

    let wordsArray = ["Betterment .", " Gain .", " rising .", " improvement.", " rising .", " improvement. "]

    const meaningBox = arrayLength(wordsArray);
    const synonymBox = meaningBox.slice(0, 19);
    const oppositeBox = meaningBox.slice(0, 9);
////////////////////////////////////
    return(
        <div id="tooltip-container" className="bg-[#231F2F] w-[346px] mr-auto ml-auto mt-20 rounded-[20px] shadow-[0px_2px_6px_2px_#00000026] pb-4">
            <div className="flex items-center justify-between px-6 pt-3">
                <div className="flex items-center">
                    <span className="text-[18px] font-medium text-white tracking-[0.1px] mr-1">miglioramento</span>
                    <span className="text-sm text-[#CBCBCB] font-medium">/ Noun</span>
                </div>
                <div className="flex items-center">
                    <img className="mr-6" src={volumeUp} alt="volumeUp"/>
                    <img src={bookMark} alt="bookMark"/>
                </div>
            </div>
            {!expand ? (
                <div className="px-6">
                    <div className="text-[#CBCBCB] font-normal text-sm mt-3">
                        {wordsArray}
                    </div>
                    <div className="flex items-center mt-9 justify-between">
                        <Button variant="contained" sx={{backgroundColor: 'transparent', borderColor: '#6157C8', borderStyle: 'solid', borderWidth: '1px', borderRadius: '20px', paddingY: '4px', paddingX: '12px', fontWeight: '500', fontSize: '13px', color: '#6157C8', textTransform: 'unset', '&:hover': {backgroundColor: 'white', cursor: 'pointer', transitionDelay: '100ms', transitionDuration: '100ms', borderColor: 'white'}}} 
                        onClick={expandButtonHandler}>Show more</Button>
                        <div className="flex items-center">
                            <img src={Level} alt="level" className="w-[14.9px] h-[15.19px] mr-2"/>
                            <p className="text-[#CBCBCB] font-medium text-sm">Mid level</p>
                        </div>
                    </div>
                </div>
            ): (
                <div className="px-3 mt-7">
                    <div className="box-style">
                        <p className="box-title">Meaning</p>
                        <div className="box-words">
                            {meaningBox}
                        </div>
                    </div>
                    <div className="box-style">
                        <p className="box-title">Synonym</p>
                        <div className="box-words">
                            {synonymBox}
                        </div>
                    </div>
                    <div className="box-style">
                        <p className="box-title">Opposite</p>
                        <div className="box-words">
                            {oppositeBox}
                        </div>
                    </div>
                    <div className="flex items-center mt-4 px-3 justify-end">
                        <img src={Level} alt="level" className="w-[14.9px] h-[15.19px] mr-2"/>
                        <p className="text-[#CBCBCB] font-medium text-sm">Mid level</p>
                    </div>
                </div>
            )}
        </div>
    );
};