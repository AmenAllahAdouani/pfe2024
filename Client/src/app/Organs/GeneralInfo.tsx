import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Transport from '@mui/icons-material/DirectionsCar';
import Exchange from '@mui/icons-material/CurrencyExchange';
import Currency from '@mui/icons-material/Paid';
import Language from '@mui/icons-material/GTranslate';
import Weather from '@mui/icons-material/Thunderstorm';
import TimeZone from '@mui/icons-material/QueryBuilder';
import { SvgIconProps } from '@mui/material/SvgIcon';
import axios from 'axios';

interface Destination {
  name: string;
}

interface Trip {
  _id: string;
  destination: Destination;
}

interface UnsplashResponse {
results: Array<{
  urls: { small: string };
  alt_description: string;
}>;
}


function createData(
  Icon: React.ComponentType<SvgIconProps>,
  fCol: string,
  sCol: string
) {
  return { 
    Icon: <Icon sx={{ fontSize: 20 }} />,
    fCol, 
    sCol
  };
}



const GeneralInfo = () => {

    const [destinationName, setDestinationName] = useState<string>('');
    const [destinationCurrency, setDestinationCurrency] = useState<string>('');
    const [destinationTransport, setDestinationTransport] = useState<string>('');
    const [destinationLanguage, setDestinationLanguage] = useState<string>('');
    const [destinationTimezone, setDestinationTimezone] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageAlt, setImageAlt] = useState<string>('');
    const [numberOfDays, setNumberOfDays] = useState('');
    const [withWho, setWithWho] = useState<string>('');
    
    const key = localStorage.getItem('tripID');
    useEffect(() => {
      
      const fetchTrips = async () => {
        if(destinationName===''){
          try {
            const response = await axios.get(`http://localhost:3001/api/trips/trips/${key}`);
            setDestinationName(response.data.Destination.name);
            setDestinationCurrency(response.data.Destination.currency);
            setDestinationLanguage(response.data.Destination.language);
            setDestinationTransport(response.data.Destination.transport);
            setDestinationTimezone(response.data.Destination.timezone);
            setNumberOfDays(response.data.Duration.numberOfDays);
            setWithWho(response.data.WithWhom);
          } catch (error) {
            console.error('Error fetching trips:', error);
          }
        }
      };
  
      fetchTrips();
    }, []);
  

    useEffect(() => {
      const fetchImage = async () => {
        let vari=(destinationName);
        const accessKey = "iI2yfYLptzSLsfdk134vS1InKO7_Tp58WixYDSBw45A";
        const url = `https://api.unsplash.com/search/photos?page=1&query=${vari}&client_id=${accessKey}`;
        try {
          const response = await axios.get(url);
          setImageUrl(response.data.results[0].urls.small);
        } catch (error) {}
      }; 

      fetchImage();

    }, [destinationName]);

    const [weather, setWeather] = useState<string>('');
    useEffect(() => {
      const fetchWeather = async () => {
        if (destinationName) {
          const apiKey = '4448f5856678354b840d625704c46695';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${destinationName}&appid=${apiKey}&units=metric`;
            const response = await axios.get(url);
            const weatherData = response.data;
            const formattedWeather = `Temp: ${weatherData.main.temp}°C, ${weatherData.weather[0].main}`;
            setWeather(formattedWeather);
        }
      };
    
      fetchWeather();
    }, [destinationName]);

    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
      const fetchExchangeRate = async () => {
        if (destinationCurrency) {
          const apiKey = 'a5234bd990907c68cece1e31';
          const baseCurrency = 'USD';
          const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${destinationCurrency}`;
            const response = await axios.get(url);
            if (response.data && response.data.conversion_rate) {
              setExchangeRate(response.data.conversion_rate);
            } else {
              throw new Error('Failed to retrieve conversion rate');
            }
        }
      };
    
      fetchExchangeRate();
    }, [destinationCurrency]);


    const rows = [
      createData(Currency, 'Currency', destinationCurrency),
      createData(Exchange, `Exchange Rate of 1 USD to ${destinationCurrency}`, exchangeRate ? `${exchangeRate} ${destinationCurrency}` : 'N/A'),
      createData(TimeZone, 'Timezone', destinationTimezone),
      createData(Language, 'Language', destinationLanguage),
      createData(Weather, 'Weather', weather),
      createData(Transport, 'Best Way to Get Around', destinationTransport),
    ];


  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-28 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 pt-10">
      <div className="flex flex-1 flex-col items-start xl:w-1/2">
        <h1 className="font-bold text-2xl pb-1">{numberOfDays + ' Days Trip in ' + destinationName}</h1>
        <div className="max-w-md pt-2">
          <img src={imageUrl} alt={imageAlt} className="rounded-lg h-72 w-100" />
        </div>
      </div>

      <div className="flex flex-1 flex-col xl:w-1/2 flex-wrap gap-5">
        <h1 className="font-bold text-2xl">General Information</h1>
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
