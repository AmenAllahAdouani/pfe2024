import React from 'react';
import { Button } from "@/components/ui/button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    infoContent: React.ReactNode;
    daysContent: React.ReactNode;
}
 
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, infoContent, daysContent }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/2">
                <div>
                    <img src={imageSrc} alt="Trip" className="w-full h-48 object-cover rounded-t" />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Trip Information</h2>
                    {infoContent}
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Trip Days</h2>
                    {daysContent}
                </div>
                <div className="flex justify-end p-4">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
