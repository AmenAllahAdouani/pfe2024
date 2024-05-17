import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '../Organs/Welcome/Navbar';
import Footer from '../Organs/Welcome/Footer';
import axios from 'axios';

interface Trip {
  id: string;
  Destination: {
    name: string;
  };
  Duration: {
    from: string;
    to: string;
    numberOfDays: number;
  };
}

interface CardProps {
  title: string;
  description: string;
  duration: {
    from: string;
    to: string;
    numberOfDays: number;
  };
}

const Card: React.FC<CardProps> = ({ title, description, duration }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const accessKey = 'iI2yfYLptzSLsfdk134vS1InKO7_Tp58WixYDSBw45A';
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${title}&client_id=${accessKey}`);
        const imageUrl = response.data.results[0]?.urls.regular || '/default-image.jpg';
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Failed to fetch image:', error);
        setImageSrc('/default-image.jpg');
      }
    };

    fetchImage();
  }, [title]);

  const formatDate = (date?: string): string => {
    return date ? new Date(date).toLocaleDateString() : "N/A";
  };

  return (
    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <a
          href="#!"
          className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></a>
      </div>
      <div className="p-6 text-surface dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <p className="mb-4 text-base">{description}</p>
        <p className="mb-4 text-sm">From: {formatDate(duration?.from) || "N/A"}</p>
        <p className="mb-4 text-sm">To: {formatDate(duration?.to) || "N/A"}</p>
        <p className="mb-4 text-sm">Days: {duration?.numberOfDays || 0}</p>
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-block rounded-3xl bg-amber-500 hover:bg-amber-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

const CommunityTrips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [visibleTrips, setVisibleTrips] = useState<number>(6);

  useEffect(() => {
    const fetchTrips = () => {
      axios.get<Trip[]>('http://localhost:3001/api/trips')
        .then(response => {
          setTrips(response.data);
        })
        .catch(error => {
          console.error('Failed to fetch trips:', error);
        });
    };

    fetchTrips();
  }, []);

  const loadMoreTrips = () => {
    setVisibleTrips(prevVisibleTrips => prevVisibleTrips + 6);
  };

  return (
    <div>
      <Navbar />
      <div className="mb-16">
        <div className="space-y-2 text-center mt-4">
          <h2 className="text-3xl font-bold text-gray-800 md:text-5xl dark:text-white pt-4">Trip finder</h2>
          <p className="text-amber-500 text-lg pt-1 pb-2">Find trips created by other users and get inspired for your next trip!</p>
          <div className="flex justify-center pt-1 pb-10">
            <Input placeholder="Search a city or town" className="w-1/2 mb-2 relative mr-2" />
            <Select>
              <SelectTrigger className="w-[90px]">
                <SelectValue placeholder="Days" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => i + 1).map(day => (
                  <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {trips.slice(0, visibleTrips).map((trip, index) => (
            <Card
              key={index}
              title={trip.Destination.name}
              description={`Trip from ${trip.Duration?.from || 'N/A'} to ${trip.Duration?.to || 'N/A'}`}
              duration={trip.Duration || { from: 'N/A', to: 'N/A', numberOfDays: 0 }}
            />
          ))}
        </div>
        {visibleTrips < trips.length && (
          <div className="flex justify-center my-8">
            <button type="button" onClick={loadMoreTrips} className="text-amber-500 bg-white border-4 border-double border-amber-500 hover:bg-amber-500 hover:text-white hover:border-white rounded-3xl text-md font-semibold px-8 py-2 text-center">
              Load more
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CommunityTrips;
