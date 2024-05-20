import ResumeImg from '../assets/resume.jpg'
export default function Resume() {
    const config = {
        link: 'https://gold-lanae-48.tiiny.site/'
    }
    return <section className='flex flex-col md:flex-row bg-white px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' alt='resume' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a target='_blank' rel="noopener noreferrer" href={config.link} className='btn'>Download</a></p>
            </div>
        </div>
    </section>
}