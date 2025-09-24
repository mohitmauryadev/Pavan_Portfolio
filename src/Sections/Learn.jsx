import React, { useRef } from "react";
import "./Learn.css";
import C from '../assets/Skill_img/C.png'
import python from '../assets/Skill_img/python.png'
import java from '../assets/Skill_img/java.png'
import Kotlin from '../assets/Skill_img/Kotlin.png'
import Javascript from '../assets/Skill_img/javascript.png'
import html from '../assets/Skill_img/html.png'
import css from '../assets/Skill_img/css.png'
import Bootstrap from '../assets/Skill_img/Bootstrap.png'
import Tailwind from '../assets/Skill_img/Tailwind.png'
import react from '../assets/Skill_img/react.svg'
import nodejs from '../assets/Skill_img/nodejs.png'
import express from '../assets/Skill_img/express.png'
import MongoDB from '../assets/Skill_img/MongoDB.png'
import DSA from '../assets/Skill_img/DSA.png'
import GitHub from '../assets/Skill_img/GitHub.png'
import flowbit from '../assets/Skill_img/flowbite.png'
import vite from '../assets/Skill_img/vite.png'


const Learn = () => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Gradient Position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

        // 3D Tilt Calculation
        const rotateX = ((y / rect.height) - 0.5) * 5;
        const rotateY = ((x / rect.width) - 0.5) * -5;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
        card.style.setProperty("--width", `0px`);
        card.style.setProperty("--height", `0px`);
    };

    return (
        <div id="skills" className="relative top-24 flex flex-wrap justify-center items-center mt-5 mb-24 gap-14">

            <div
                ref={cardRef}
                className="Learncard skillCard bg-white text-black flex flex-wrap justify-center gap-14"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave} >
                <h1 className="skilltopH w-[100%] text-center">Skills 🔧</h1>

                {/* <div className="flex flex-wrap gap-10 "> */}
                {/* C language card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px]  h-[200px] rounded-3xl">
                    <img src={C} className="relative top-[-10px] w[45px] h-[45px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">C ⚙</h1>
                        <p className="Ptext">Solid foundation in structured programming, memory management, and low-level problem-solving.
                        </p>
                    </div>
                </div>

                {/* Python language card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={python} className="relative top-[-20px] w[45px] h-[45px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">Python 🐍</h1>
                        <p className="Ptext">Versatile scripting skills for automation, data handling, and backend web development.

                        </p>
                    </div>
                </div>

                {/* java language card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={java} className="relative top-[-15px] w[45px] h-[45px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">Java ☕</h1>
                        <p className="Ptext">Object-oriented programming expertise with experience in building robust backend and Android apps.

                        </p>
                    </div>
                </div>

                {/* Kotlin language card
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={Kotlin} className="relative top-[-15px] w[45px] h-[45px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">Kotlin 📱</h1>
                        <p className="Ptext">Android app development with modern, safe, and expressive Kotlin code structure.
                        </p>
                    </div>
                </div> */}

                {/* Javascript language card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={Javascript} className="relative top-[-15px] w-[50px] h-[50px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">Javascript 💻 </h1>
                        <p className="Ptext">Proficient in dynamic, interactive frontends and full-stack development using modern frameworks.
                        </p>
                    </div>
                </div>

                {/* HTML  card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={html} className="relative top-[-25px] w-[50px] h-[50px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">HTML 🌐 </h1>
                        <p className="Ptext">Semantic, accessible, SEO-friendly markup for clean and structured web page design.

                        </p>
                    </div>
                </div>

                {/* CSS  card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={css} className="relative top-[-25px] w-[50px] h-[50px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">CSS 🎨 </h1>
                        <p className="Ptext">Responsive, animated, and visually appealing web styling using modern CSS techniques.


                        </p>
                    </div>
                </div>

                {/* BootStrap  card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={Bootstrap} className="relative top-[-25px] w-[50px] h-[50px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">Bootstrap 🧰 </h1>
                        <p className="Ptext">Fast prototyping with mobile-first responsive design using Bootstrap components and utilities.



                        </p>
                    </div>
                </div>

               
                {/* DSA  card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={DSA} className="relative top-[-25px] w-[50px] h-[60px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">DSA 📊  </h1>
                        <p className="Ptext">Strong grasp of algorithms and data structures for optimized coding and problem-solving.
                        </p>
                    </div>
                </div>

                {/* GitHub  card */}
                <div className="skillCards flex flex-col justify-center items-center w-[300px] h-[200px] rounded-3xl">
                    <img src={GitHub} className="relative top-[-25px] w-[50px] h-[60px] p-[5px] rounded-[50%] bg-white" />
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="Htext text-2xl font-bold">GitHub 🐙 </h1>
                        <p className="Ptext">Experienced in version control, code collaboration, and repository management.
                        </p>
                    </div>
                </div>

                {/* </div> */}


            </div>
        </div>
    );
};

export default Learn;