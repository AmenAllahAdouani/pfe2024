import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import placeImage from '../../assets/place.jpg';
import Image from 'next/image';

import Transport from '@mui/icons-material/DirectionsCar';
import Exchange from '@mui/icons-material/CurrencyExchange';
import Currency from '@mui/icons-material/Paid';
import Language from '@mui/icons-material/GTranslate';
import Weather from '@mui/icons-material/Thunderstorm';
import TimeZone from '@mui/icons-material/QueryBuilder';
import { SvgIconProps } from '@mui/material/SvgIcon';

function createData(
  Icon: React.ComponentType<SvgIconProps>,
  fCol: string,
  sCol: string
) {
  return { 
    Icon: <Icon sx={{ fontSize: 20 }} />, // Adjust icon size here
    fCol, 
    sCol
  };
}

const rows = [
  createData(Currency, 'Currency', 'MAD'),
  createData(Exchange, 'Exchange Rate of 1 USD to MAD', 'MAD 9.78'),
  createData(TimeZone, 'Timezone', 'GMT+1'),
  createData(Language, 'Language', 'Arabic Berber French'),
  createData(Weather, 'Weather', ' 18.47°C'),
  createData(Transport, 'Best Way to Get Around', 'Bus Train Taxi'),
];

const GeneralInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-28 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 pt-10">
      <div className="flex flex-1 flex-col items-start xl:w-1/2">
        <h1 className="font-bold text-3xl pb-1">3 Days trip in Morocco</h1>
        <p className="text-xs pb-1">Budget: 0 USD - 1100 USD .Outdoor adventures .Historical landmarks .Shopping</p>
        <div className="max-w-md pb-4">
          <Image src={placeImage} alt="Place" className="rounded-lg" />
        </div>
        <p className="text-xs pb-2">Morocco is a diverse and culturally rich country located in North Africa, with a fascinating history and stunning landscapes.</p>
      </div>

      <div className="flex flex-1 flex-col xl:w-1/2 flex-wrap gap-5">
        <h1 className="font-bold text-lg">General Information</h1>
        <TableContainer>
          <Table className="w-full lg:w-auto"> 
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.fCol}>
                  <TableCell 
                    component="th" 
                    scope="row" 
                    className="border-none" 
                    sx={{ fontSize: '10px', padding: '16px' }}
                  >
                    {row.Icon} {row.fCol}
                  </TableCell>
                  <TableCell 
                    align="right" 
                    className="border-none" 
                    sx={{ fontSize: '11px', padding: '16px' }}
                  >
                    {row.sCol}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}

export default GeneralInfo;
