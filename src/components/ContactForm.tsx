import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/mqebbjjb", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("Thank you for your interest! I'll get back to you soon.");
            form.reset();
        } else {
            setStatus("Oops! There was a problem submitting your form.");
        }
    };

    return (
        <section className="contact-container">
            <h2 className="section-title">CONTACT ME</h2>
            {status? (
                <p className="form-status">{status}</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;