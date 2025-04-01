import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

 
const EndingPage = () => {
    
      return (
        <>
          <header>
            <Link to="/">
              <img src="7speaking_logo.png" alt="logo" className="h-12" />
            </Link>
          </header>
          <div className="min-h-screen flex justify-center bg-[var(--light-grey)]">
            <div className="white-card flex flex-col gap-4 items-center h-fit mt-32">
                <h2>Qu'elle était le motif du meurtre ?</h2>

                <form className="flex flex-col gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Entrez votre réponse"
                        className="border border-gray-300 rounded px-4 py-2 w-64"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Valider
                    </button>
                </form>
            </div>
          </div>
        </>
      );
    };

export default EndingPage;