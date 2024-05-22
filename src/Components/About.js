import AboutImg from '../assets/aboutinfo.jpeg'
export default function About() {
    const config = {
        line1: "Hi there! I'm S.Bharath, a web developer fueled by curiosity and creativity.With expertise in the MERN Stack, I'm on a mission to craft engaging digital experiences. Let's innovate together and bring ideas to life!",
        line2: 'I am proficient in MERN Stack - MongoDB, Express.js, React.js and Node.js',
        line3: 'Strong problem-solving, communication, and teamwork skills. Eager to contribute to innovative web projects.'
    }
    return <section className='flex flex-col md:flex-row bg-white px-5 border-b-8 border-secondary' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='about'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center px-4 text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p>{config.line3}</p>
            </div>
        </div>
    </section>
}