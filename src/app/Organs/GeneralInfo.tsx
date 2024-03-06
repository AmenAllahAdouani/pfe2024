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
    <section className="max-container padding-container flex flex-col gap-20 mx-5 md:mx-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="font-bold text-3xl pb-1">3 Days trip in Morocco</h1>
        <p className="text-xs pb-1">Budget: 0 USD - 1100 USD .Outdoor adventures .Historical landmarks .Shopping</p>
        <div className="max-w-md pb-4"> {/* Adjust the max-width as needed */}
          <Image src={placeImage} alt="Place"  className="rounded-lg" />
        </div>
        <p className="text-xs pb-2">Morocco is a diverse and culturally rich country located in North Africa, with a <br /> fascinating history and stunning landscapes.</p>
      </div>

      {/* RIGHT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 my-11 flex-wrap gap-5">
        <h1 className="font-bold text-lg">General Infomation</h1>
        <TableContainer>
          <Table className="min-w-full lg:min-w-0">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.fCol}>
                  <TableCell component="th" scope="row" className="border-none">
                    {row.fCol}
                  </TableCell>
                  <TableCell align="right" className="border-none">{row.sCol}</TableCell>
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