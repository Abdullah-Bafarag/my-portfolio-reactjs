import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './Button';

export const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_698c49j', 'template_3rm94ho', form.current, '_zeYY-VHTasImN4kb')

        e.target.reset()
    };

    const inputBorderStyle = {
        border: '1px solid var(--color-primary-variant)'
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">

            <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                style={inputBorderStyle}
                className="w-full p-3 rounded-lg bg-transparent text-white text-sm outline-none border border-transparent focus:border-[var(--color-primary)]"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputBorderStyle}
                className="w-full p-3 rounded-lg bg-transparent border-[var(--color-primary)] text-white text-sm outline-none border border-transparent focus:border-[var(--color-primary)]"
            />

            <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                required
                style={inputBorderStyle}
                className="w-full p-3 rounded-lg bg-transparent border-[var(--color-primary)] text-white text-sm outline-none border border-transparent focus:border-[var(--color-primary)] resize-none"
            ></textarea>

            <Button className='w-full lg:w-1/2'>Send Message</Button>

        </form>
    );
};