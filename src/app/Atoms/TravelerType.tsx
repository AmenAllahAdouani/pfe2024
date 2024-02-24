import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const TravelerType = () => {
  return (
    <div className="items-center justify-center pt-5">
      <h1 className="font-bold text-center text-xl py-4 pb-10">What Type of Traveler are you?</h1>
      <div className="flex items-center justify-center w-1/2 mx-auto">
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" className="p-16 rounded-lg border-slate-300 border-2">Foodie</ToggleGroupItem>
          <ToggleGroupItem value="b" className="p-16 rounded-lg border-slate-300 border-2">History Buff</ToggleGroupItem>
          <ToggleGroupItem value="c" className="p-16 rounded-lg border-slate-300 border-2">Style Icon</ToggleGroupItem>
          <ToggleGroupItem value="d" className="flex items-center justify-center p-16 rounded-lg border-slate-300 border-2">Adventures</ToggleGroupItem>
          <ToggleGroupItem value="e" className="p-16 rounded-lg border-slate-300 border-2">Art Lover</ToggleGroupItem>
          <ToggleGroupItem value="f" className="flex items-center justify-center p-16 rounded-lg border-slate-300 border-2">Night Owl</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export default TravelerType