import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


const Budget = () => {
  return (
    <div className="items-center justify-center pt-5">
      <h1 className="font-bold text-center text-xl py-4 pb-10">What is your Budget?</h1>
      <div className="flex items-center justify-center w-1/2 mx-auto">
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" className="p-20 m-2 rounded-lg border-slate-300 border-2">Economy</ToggleGroupItem>
          <ToggleGroupItem value="b" className="p-20 m-2 rounded-lg border-slate-300 border-2">Normal</ToggleGroupItem>
          <ToggleGroupItem value="c" className="p-20 m-2 rounded-lg border-slate-300 border-2">Luxury</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export default Budget