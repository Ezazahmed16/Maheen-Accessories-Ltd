import React from 'react'
import './ContactUs.css'
import ContactUsForm from './ContactUsForm'
import ContactMap from './ContactMap'

const ContactUs = () => {
    return (
        <div className=' bg-base-200'>
            <h1 className='text-4xl text-center font-bold pt-5'>Contact Us</h1>
            <div className="hero min-h-screen">
                <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2">

                    <div className="">
                        <ContactMap />
                    </div>

                    <div className="">
                        <ContactUsForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs