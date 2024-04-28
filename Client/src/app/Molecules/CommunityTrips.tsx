import React from 'react';
import Image from 'next/image';
import back from '../../assets/Cairo.jpg'
import {Input} from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import Navbar from '../Organs/Welcome/Navbar';
import Footer from '../Organs/Welcome/Footer';
  

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark max-w-sm overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={back}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                <a href="#!" className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </a>
            </div>
            <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
                <p className="mb-4 text-base">{description}</p>
                <div className="flex justify-center">
                    <button type="button" className="inline-block rounded-3xl bg-amber-500 hover:bg-amber-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white">Button</button>
                </div>
            </div>
        </div>
    );
};

const CommunityTrips: React.FC = () => {
    const cards = [
        {
            id: 1,
            title: "Trip 1",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        },
        {
            id: 2,
            title: "Trip 2",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        },
        {
            id: 3,
            title: "Trip 3",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        },
        {
            id: 4,
            title: "Trip 4",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        },
        {
            id: 5,
            title: "Trip 5",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        },
        {
            id: 6,
            title: "Trip 6",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageSrc: ""
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="mb-16">
                <div className="space-y-2 text-center mt-4">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-5xl dark:text-white pt-4">Trip finder</h2>
                    <p className="text-amber-500 text-lg pt-1 pb-2"> Find trips created by other users and get inspired for your next trip! </p>
                    <div className="flex justify-center pt-1 pb-10">
                        <Input placeholder="Search a city or town" className="w-1/2 mb-2 relative mr-2" />
                        <Select>
                            <SelectTrigger className="w-[90px]">
                                <SelectValue placeholder="Days" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="9">9</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 p-4">
                    {cards.map(card => (
                        <Card key={card.id} title={card.title} description={card.description} imageSrc={card.imageSrc} />
                    ))}
                </div>
                <div className="flex justify-center my-8">
                    <button type="button" className="text-amber-500 bg-white border-4 border-double border-amber-500 hover:bg-amber-500 hover:text-white hover:border-white rounded-3xl text-md font-semibold px-8 py-2 text-center">Load more</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CommunityTrips;
