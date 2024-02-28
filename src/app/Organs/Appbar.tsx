import React from 'react'
import { Progress } from "@/components/ui/progress"

const Appbar = () => {
  return (
    <div className="bg-white md:py-8">
        <div className="flex justify-center">
            <div className="text-center md:px-0">
                <div className="text-black md:pb-4">
                    <h1 className="font-roboto font-bold text-xl md:text-2xl leading-9">AI Trip Planner</h1>
                    <h3 className="font-semibold text-lg md:text-xl leading-10">Powered By <span className='font-pacifico font-bold not-italic'>Tabaani</span></h3>
                </div>
            </div>
        </div>
        <div className="mt-0 md:mt-4">
            <Progress value={20} className="w-full bg-gray-200"/>
        </div>
    </div>
  )
}

export default Appbar