import React from 'react';
import { Progress } from "@/components/ui/progress";

// If you accept progress as a prop, you don't necessarily need to use context in Appbar
const Appbar = ({ progress }: { progress: number }) => {
    return (
        <div className="bg-white md:py-4">
            <div className="flex justify-center">
                <div className="text-center md:px-0">
                    <div className="text-black md:pb-2">
                        <h1 className="font-roboto font-bold text-lg md:text-xl leading-9">AI Trip Planner</h1>
                        <h3 className="font-semibold text-md md:text-lg leading-10">Powered By <span className='font-pacifico font-bold not-italic'>Tabaani</span></h3>
                    </div>
                </div>
            </div>
            <div className="mt-0 md:mt-2">
                <Progress value={progress} className="w-full bg-gray-200"/>
            </div>
        </div>
    );
};

export default Appbar;
