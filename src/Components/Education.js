import GraduationImg from '../assets/graduation.jpeg';

export default function Education() {
    const config = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            facebook: 'https://facebook.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/jvl-code'
        },
        bsc: 'Graduated with 76% in B.Sc. Computer Science from Yadava College, Madurai, India.',
        msc: 'Currently pursuing M.Sc. Computer Science with a GPA of 74.7% from Yadava College, Madurai, India.'
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-blue-200 justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-black text-4xl'><span className='border-b-4 border-primary font-bold'>Education</span>
                <div>
                    <p className='text-2xl py-2 font-semibold'>M.sc Computer Science - 2022 to 2024</p>
                    <hr className="border-t-2 border-blue-300 my-4" />
                    <p className='text-2xl'>{config.msc}</p>
                </div>
                <hr className="border-t-1 border-gray-200 my-4" />
                <div className='py-5'>
                    <p className='text-2xl font-semibold'>B.sc Computer Science - 2019 to 2022</p>
                    <hr className="border-t-2 border-blue-300 my-4" />
                    <p className='text-2xl'>{config.bsc}</p>
                </div>
            </h1>
        </div>
        <img className='md:w-1/3' src={GraduationImg} alt='education'/>
    </section>
}