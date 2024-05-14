import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DeleteIcon from '@mui/icons-material/Delete';



const Hosts = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of Tabaani hosts.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead className="text-right">Place</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Avatar className="h-8 w-8 ml-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </TableCell>
                    <TableCell>Amen</TableCell>
                    <TableCell>The Architect</TableCell>
                    <TableCell className="text-right">Tunisia, Bizerte</TableCell>
                    <TableCell className="text-right">
                        <Button variant="outline" className="ml-1 p-2">
                            <SettingsSuggestIcon></SettingsSuggestIcon>
                        </Button>
                        <Button variant="outline" className="ml-1 p-2">
                            <DeleteIcon></DeleteIcon>
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </div>
  )
}

export default Hosts