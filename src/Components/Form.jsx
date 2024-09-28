import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    let handle = (e) => {
        e.preventDefault();

        let serviceId = 'service_n5ljq9c';
        let templateId = 'template_difx26v';
        let publicKey = 'WDS10LfRELKL4Ovqp';

        let params = {
            from_name: name,
            from_email: email,
        };

        emailjs.send(serviceId, templateId, params, publicKey)
            .then((response) => {
                console.log("email sent successfully ", response);
                setName("");
                setEmail("");
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="flex items-center justify-center bg-black">
                <form onSubmit={handle} className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Form;