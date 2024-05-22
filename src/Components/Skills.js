import React, { useState, useEffect } from 'react';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import GraduationImg from '../assets/skill.jpg';

export default function Skills() {
    const config = {
        frontEnd: [
            'HTML, CSS & Javascript',
            'React JS',
            'Bootsrap & Tailwind CSS',
        ],
        backEnd: [
            'Node JS',
            'Express JS',
            'Core Java'
        ],
        database: [
            'MongoDB',
            'SQL & MySQL',
            'PostgreSQL'
        ]
    };

    const [currentCategory, setCurrentCategory] = useState(0);
    const categories = [
        { title: 'Front End', skills: config.frontEnd },
        { title: 'Back End', skills: config.backEnd },
        { title: 'Database', skills: config.database }
    ];

    const handleNext = () => {
        setCurrentCategory((prev) => (prev + 1) % categories.length);
    };

    const handlePrevious = () => {
        setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='bg-white py-16'>
            <div className='flex justify-center items-center mb-5'>
                <h1 className='text-4xl border-b-4 border-primary px-10 font-bold'>Skills</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center px-5'>
                <ChevronDoubleLeftIcon
                    className='hidden md:block md:w-12 text-gray-400 p-2 cursor-pointer hover:text-gray-600'
                    onClick={handlePrevious}
                />
                <div className='w-full md:w-2/3 flex flex-col md:flex-row items-center p-2'>
                    <div className='flex flex-col md:w-1/2 px-3'>
                        <h1 className='text-black text-4xl mb-4'>
                            <span className='border-b-4 border-primary font-bold'>{categories[currentCategory].title}</span>
                        </h1>
                        <ul className='text-2xl py-4 w-full'>
                            {categories[currentCategory].skills.map(skill => (
                                <li key={skill} className='py-2 border-b border-gray-300'>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <img className='w-full md:w-1/2 md:h-full px-2 p-2 object-cover' src={GraduationImg} alt='education' />
                </div>
                <ChevronDoubleRightIcon
                    className='hidden md:block md:w-12 text-gray-400 p-2 cursor-pointer hover:text-gray-600'
                    onClick={handleNext}
                />
            </div>
        </section>
    );
}
