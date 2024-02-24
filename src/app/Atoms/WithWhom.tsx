import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const WithWhom = () => {
  return (
    <div className="items-center justify-center pt-5">
      <h1 className="font-bold text-center text-xl py-4 pb-10">With whom are you traveling ?</h1>
      <div className="flex items-center justify-center w-1/2 mx-auto">
        <ToggleGroup type="single">
          <ToggleGroupItem value="a" className="p-20 m-2 rounded-lg border-slate-300 border-2">Family</ToggleGroupItem>
          <ToggleGroupItem value="b" className="p-20 m-2 rounded-lg border-slate-300 border-2">Partner</ToggleGroupItem>
          <ToggleGroupItem value="c" className="p-20 m-2 rounded-lg border-slate-300 border-2">Friends</ToggleGroupItem>
          <ToggleGroupItem value="d" className="p-20 m-2 rounded-lg border-slate-300 border-2">Myself</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export default WithWhom