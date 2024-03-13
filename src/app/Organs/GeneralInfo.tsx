import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import placeImage from '../../assets/place.jpg';
import Image from 'next/image';

function createData(
  fCol: string,
  sCol: string
) {
  return { fCol, sCol};
}

const rows = [
  createData('Currency', 'MAD'),
  createData('Exchange Rate of 1 USD to MAD', 'MAD 9.78'),
  createData('Timezone', 'GMT+1'),
  createData('Language', 'Arabic Berber French'),
  createData('Weather', ' 18.47°C'),
  createData('Best Way to Get Around', 'Bus Train Taxi'),
];

const GeneralInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-28 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 h-screen pt-10">
      {/* LEFT */}
      <div className="flex flex-1 flex-col items-start xl:w-1/2">
        <h1 className="font-bold text-3xl pb-1">3 Days trip in Morocco</h1>
        <p className="text-xs pb-1">Budget: 0 USD - 1100 USD .Outdoor adventures .Historical landmarks .Shopping</p>
        <div className="max-w-md pb-4"> {/* Adjust the max-width as needed */}
          <Image src={placeImage} alt="Place" className="rounded-lg" />
        </div>
        <p className="text-xs pb-2">Morocco is a diverse and culturally rich country located in North Africa, with a <br /> fascinating history and stunning landscapes.</p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col xl:w-1/2 mt-8 flex-wrap gap-5">
        <h1 className="font-bold text-lg">General Infomation</h1>
        <TableContainer>
          <Table className="min-w-full lg:min-w-0">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.fCol}>
                  <TableCell component="th" scope="row" className="border-none text-xs">
                    {row.fCol}
                  </TableCell>
                  <TableCell align="right" className="border-none text-xs">{row.sCol}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  )
}

export default GeneralInfo