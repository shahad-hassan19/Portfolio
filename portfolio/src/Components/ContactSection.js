import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
export default function ContactSection(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x02jmrm', 'template_czqjhqp', form.current, 'mv_jU07IPDEPAdBHe')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('E-mail sent!');
            }, (error) => {
                console.log(error.text);
            }
        );
    };
    return(
        <div id='contact-me' className=" bg-yellow-300 text-black w-full py-14 md:py-24 ">
            <div className=" mx-12 md:mx-6 lg:mx-8 xl:mx-24 grid grid-cols-1 lg:grid-cols-2 justify-around align-items-center  px-3">
                <div className=" text-center lg:text-left px-3">
                    <h1 className=" font-bold text-3.5xl mb-12 ">Let's get in touch</h1>
                    <div>
                        <p className=" text-justify text-xl mb-12">
                            I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.
                        </p>
                        <div>
                            <h3 className="text-xl mb-2 font-semibold">
                                Living in:
                            </h3>
                            <p className="text-lg mb-4">
                                Bhoora, Shamli, U.P., India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl mb-2 font-semibold">
                                Call:
                            </h3>
                            <p className="text-lg mb-4">
                                <a href="/home">(+91) 6398 223 144</a>
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start align-items-center font-bold pt-12">
                            <a href="https://www.facebook.com/shahad.chauhangurjar.9" rel='noreferrer' target='_blank' ><FaFacebook className='text-2xl mx-3 text-gray-700 hover:text-blue-900'/></a>
                            <a href="https://www.linkedin.com/in/shahad-hassan-82287a220" rel='noreferrer' target='_blank'><FaLinkedin className='text-2xl mx-3 text-gray-700 hover:text-blue-500'/></a>
                            <a href="https://twitter.com/ChauhanShahad03" rel='noreferrer' target='_blank'><FaXTwitter className='text-2xl mx-3 text-gray-700 hover:text-black'/></a>
                            <a href="https://github.com/shahad-hassan19" rel='noreferrer' target='_blank'><FaGithub className='text-2xl mx-3 text-gray-700 hover:text-black'/></a>
                            <a href="https://www.instagram.com/shahad_chauhan019/" rel='noreferrer' target='_blank'><FaInstagram className='text-2xl mx-3 text-gray-700 hover:text-pink-600'/></a>
                        </div>
                    </div>
                </div>
                <div className=" mt-12 lg:mt-0 lg:ml-20 lg:text-left px-3">
                    <h1 className= " font-bold text-center lg:text-left text-3.5xl mb-12 ">Contact Me</h1>
                    <form className=" flex justify-start align-items-center flex-col" ref={form} onSubmit={sendEmail}>
                        <div className="mt-6 px-3">
                            <label htmlFor="name" className="mb-2">What is your Name: </label>
                            <input type="text" name='user_name' id="name" className="appearance-none w-full bg-transparent pr-4 py-1 focus:outline-none border-b-2 border-gray-300 " />
                        </div>
                        <div className="mt-6 px-3">
                            <label htmlFor="email" className="mb-2">Your E-mail Address: </label>
                            <input type="email" name='user_email' id="email" className="bg-appearance-none w-full bg-transparent pr-4 py-1 focus:outline-none border-b-2 border-gray-300" />
                        </div>
                        <div className="mt-6 px-3">
                            <label htmlFor="message" className="mb-2">How can I help you?: </label>
                            <textarea id="message" name='message' className="bg-appearance-none w-full bg-transparent pr-4 py-1 focus:outline-none border-b-2 border-gray-300 "></textarea>
                        </div>
                        <button type='submit' value='send' className=" bg-black text-white mt-6 self-center lg:my-6 mx-3 w-40 h-12 py-3 px-10 font-medium ">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}