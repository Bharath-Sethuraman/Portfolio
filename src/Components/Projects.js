import websiteImage1 from '../assets/todo.png'
import websiteImage2 from '../assets/twitterclone.jpeg'
import websiteImage3 from '../assets/secrets.jpg'
export default function Projects() {
    const config = {
        projectsummary: 'These are some of my best projects. I have built these with MERN Stack. Check them out.',
        projects: [
            {
                image: websiteImage1,
                description: 'Developed a user-friendly TO-DO list application using Node.js, MongoDB, and EJS for templating. Enabled single-user task management with add, edit, and delete capabilities for enhanced productivity.',
                link:'https://better-shoe-fish.cyclic.app/'
            },
            {
                image: websiteImage2,
                description: 'Developed a Twitter clone using the MERN stack, offering users a familiar social media experience. Implemented core functionalities like posting tweets, following users, and liking posts to enhance user engagement.',
                link: 'https://github.com/Bharath-Sethuraman/Twitter-clone'
            },
            {
                image: websiteImage3,
                description: 'This project employs Google authentication for seamless user registration, login, and logout processes. Users can securely share and view secrets, fostering a community-driven platform with enhanced privacy features.',
                link: 'https://github.com/Bharath-Sethuraman/secrets'
            }
        ]
    }
    
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white border-b-8 border-t-4 border-secondary"  id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                <p>{config.projectsummary}</p>
            </div>

        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href={project.link} target='_blank' rel="noopener noreferrer">
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt='project' />
                            <div className='project-desc'>
                                <p className='text-center py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    </section>
}