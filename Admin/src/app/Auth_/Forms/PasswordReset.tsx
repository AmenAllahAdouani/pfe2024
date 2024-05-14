import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '@/firebase';


interface PasswordResetProps {
  onClose: () => void;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ onClose }) => {

  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Check your email for the password reset link.');
      setMessage('Check your email for the password reset link.');
      setEmail(''); // Optionally clear the email input after successful operation
    } catch (error: any) {
      // Logging the error can help understand what went wrong if needed
      console.error("Password Reset Error:", error);
      setMessage('Failed to send password reset email. Please try again later.');
    }
  };

  return (
    <div className="password-reset-modal text-center w-100 h-80">
      <form onSubmit={handleSubmit}> 
        <h2 className="font-bold text-lg text-center py-4">Reset Password</h2>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="my-2 p-2 border rounded w-full"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-evenly my-4">
          <button type="submit" className="bg-amber-500 text-white rounded px-4 py-2">
            Send Reset Email
          </button>
          <button type="button" onClick={onClose} className="text-amber-500 border border-amber-500 rounded px-4 py-2">
            Close
          </button>
        </div>
        {message && <p className="text-sm mt-2 text-amber-500">{message}</p>}
      </form>
    </div>
  );
}

export default PasswordReset;

