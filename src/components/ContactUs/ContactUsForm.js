import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        // name: '',
        // companyName: '',
        // email: '',
        // phoneNumber: '',
        // message: '',
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log('Form Data:', formData);

        // // Prepare the email template parameters
        // const templateParams = {
        //     from_name: formData.name,
        //     from_company: formData.companyName,
        //     from_email: formData.email,
        //     from_phone: formData.phoneNumber,
        //     message: formData.message,
        // };
        

        // console.log('Template Params:', templateParams); 

        // // Send the email using EmailJS
        // emailjs.sendForm('service_3zo1xzx', 'template_es2ulzq', e.target, 'ODgmuPov3zbSha4AJ')
        //     .then((result) => {
        //         console.log(result.text);
        //         toast.success('Email sent successfully');
        //     })
        //     .catch((error) => {
        //         console.log(error.text);
        //         toast.error('Email sending failed');
        //     });
    };
    return (
        <div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="text"
                            name="from_company"
                            placeholder="Enter Your Company Name"
                            className="input input-bordered"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="text"
                            name="from_phone"
                            placeholder="Enter Your Number"
                            className="input input-bordered"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <textarea
                            name="message"
                            className="textarea textarea-success w-full"
                            placeholder="Message"
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
