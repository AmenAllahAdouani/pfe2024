import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from '@/components/ui/button'

const WithWhom = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-5">
        <h1 className="font-bold text-center text-xl py-4 pb-10">With whom are you traveling ?</h1>
        <div className="w-full px-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
          <ToggleGroup type="single" className="flex flex-col sm:flex-row justify-center items-center">
            <ToggleGroupItem value="a" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">Family</ToggleGroupItem>
            <ToggleGroupItem value="b" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">Partner</ToggleGroupItem>
            <ToggleGroupItem value="c" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">Friends</ToggleGroupItem>
            <ToggleGroupItem value="d" className="min-w-[150px] min-h-[150px] md:w-auto md:flex-1 p-3 m-2 rounded-lg border-slate-300 border text-center">Myself</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="flex md:justify-end justify-center p-4 mt-16">
        <Button className="w-52 mr-20">Next</Button>
      </div>
    </div>
  )
}

export default WithWhom