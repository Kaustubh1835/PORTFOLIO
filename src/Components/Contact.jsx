import { useState } from 'react';


function Contact() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black p-4" id='Contact'>
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center bg-black">
          {/* form element */}
          <div className="w-full flex items-center justify-center bg-black p-4">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl text-gray-300 font-bold mb-6 text-center">INFO</h2>
              <div className="text-gray-300 mb-4">
                <div className='mb-4'>
                  <a href="https://mail.google.com/mail" className='hover:underline'>
                    <li>kaustubhbodakhe1835@gmail.com</li>
                  </a>
                </div>
                <div className='mb-4'>
                  <li>+919561201835</li>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Contact;