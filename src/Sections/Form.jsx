import React from "react";
import './Form.css'
import linkedin from '../assets/Icons/linkedin.png'
import github from '../assets/Icons/github.png'
import instagram from '../assets/Icons/instagram.png'
import facebook from '../assets/Icons/facebook.png'
import email from '../assets/Icons/email.png'

const Form = () => {
    return (
        <div id="contact" className="flex flex-col md:flex-row max-w-5xl mx-auto my-10 rounded-lg overflow-hidden shadow-lg">
            {/* Left Side */}
            <div className="bg-white p-6 md:w-1/2">
                <h2 className="formH text-2xl font-bold mb-4 ">Let's get in touch</h2>
                <p className="textp mb-6">
                    Whether it's a project or just a hello, I'd love to hear from you!
                </p>
                <div className="mb-4">
                    <p className="textp flex items-center">
                        📍 <span className="ml-2">Lucknow, UP, India</span>
                    </p>
                    <p className="textp flex items-center  mt-2">
                        📧 <span className="ml-2">pavankushwaha@gmail.com</span>
                    </p>
                    <p className="textp flex items-center  mt-2">
                        📞 <span className="ml-2">‪+91 7800874042‬</span>
                    </p>
                </div>
                <p className="textp mt-6">Connect with us:</p>
                <div className="flex mt-2 space-x-3 ">
                    <a href="#"><span className=""><img src={linkedin} className="relative top-1.5 w-[40px] h-[40px]"/></span></a>

                    <a href="#"><span className=""><img src={github} className="relative top-1  w-[45px] h-[45px]"/></span></a>

                    <a href="#"><span className=""><img src={instagram} className="relative top-1.5  w-[40px] h-[40px]"/></span></a>

                    <a href="#"><span className=""><img src={facebook} className="relative top-2  bg-red-600 w-[35px] h-[35px] rounded-[10px] p-[4px]"/></span></a>

                     <a href="#"><span className=""><img src={email} className="relative top-2  bg-red-600 w-[35px] h-[35px] rounded-[10px] p-[4px]"/></span></a>
                </div>
            </div>

            {/* Right Side */}
            <div className="bg-[#c0bebe] p-6 md:w-1/2 border-white">
                <h2 className="text-2xl font-bold text-white mb-4 ">Contact us</h2>
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-4"
                >
                    {/* Hidden fields */}
                    <input 
                    type="hidden" 
                    name="access_key" 
                    value="92ac1a52-d79a-4485-9915-8b786290af4f" />
                    {/* <input
                        type="hidden"
                        name="_next"
                        value="https://mohitmauryadev.github.io/New-Portfolio/"
                    /> */}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        className="w-full px-4 py-2 rounded border  focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 rounded border  focus:outline-none"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                        className="w-full px-4 py-2 rounded border  focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 rounded border  focus:outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-white  font-semibold py-2 rounded-2xl hover:bg-pink-100"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;