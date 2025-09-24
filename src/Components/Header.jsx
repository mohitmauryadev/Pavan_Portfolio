import React, { useRef } from 'react';
import aboutSong from '../Audio/Pavan1.mp3';
import skillSong from '../Audio/Pavan2.mp3';

const Header = () => {
    const audioRef = useRef(null);

    // Play audio based on id
    const handleAudio = (id) => {
        // Stop previous audio if playing
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        // Play new audio for About or Skills
        if (id === 'about') {
            audioRef.current = new Audio(aboutSong);
            audioRef.current.play();
        } else if (id === 'skills') {
            audioRef.current = new Audio(skillSong);
            audioRef.current.play();
        } else {
            audioRef.current = null; // No audio for other sections
        }
    };

    // Scroll to section function
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        handleAudio(id); // Play audio on click
    };

    return (
        <nav className='NavBar flex font-bold gap-4 p-4 bg-white dark:bg-gray-900 sticky top-0 z-50'>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
    );
};

export default Header;
