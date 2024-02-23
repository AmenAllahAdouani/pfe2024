import React from 'react'
import { Progress } from "@/components/ui/progress"

const Appbar = () => {
  return (
    <div className="bg-gray-300 py-10 m-0">
        <div className="flex justify-center">
            <div className="text-center">
                <div className="text-black pb-4">
                    <h1 className="font-roboto font-bold text-2xl leading-9">AI Trip Planner</h1>
                    <h3 className="font-semibold text-xl leading-10">Powered By <span className='font-pacifico font-bold not-italic'>Tabaani</span></h3>
                </div>
            </div>
        </div>
        <div>
            <Progress value={20} className='w-full bg-white'/>
        </div>
    </div>
  )
}

export default Appbar