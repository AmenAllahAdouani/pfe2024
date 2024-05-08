import React, { useEffect, useState } from 'react';
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

const DestinationDisplay: React.FC = () => {
    const [destinationName, setDestinationName] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageAlt, setImageAlt] = useState<string>('');
    
    const key="6632d26bb80e2186831e3b3f"
    useEffect(() => {
      
      const fetchTrips = async () => {
        if(destinationName===''){
        try {
          const response = await axios.get(`http://localhost:3001/api/trips/trips/${key}`);
          setDestinationName(response.data.Destination.name);
        } catch (error) {
          console.error('Error fetching trips:', error);
        }}
      };
  
      fetchTrips();
    }, []);
  

    useEffect(() => {
      const fetchImage = async () => {
        let vari=destinationName;
        const accessKey = "iI2yfYLptzSLsfdk134vS1InKO7_Tp58WixYDSBw45A";
        const url = `https://api.unsplash.com/search/photos?page=1&query=${vari}&client_id=${accessKey}`;
        try {
          const response = await axios.get(url);
          console.log(response);
            setImageUrl(response.data.results[0].urls.small);
        } catch (error) {
          console.error('Error fetching image from Unsplash:', error);
          setImageUrl('');
          setImageAlt('Failed to load image');
        }
      }; 

      fetchImage();

    }, [destinationName]);
  
    return (
      <div>
        <h1>{destinationName || 'Loading destination...'}</h1>
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
        ) : (
          <p>{imageAlt}</p>
        )}
      </div>
    );
  };

export default DestinationDisplay;
