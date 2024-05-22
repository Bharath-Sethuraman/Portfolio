import CertificateImg from '../assets/certification.jpeg'
export default function Certifications() {
    return <section className='flex flex-col md:flex-row bg-blue-200 px-5 border-b-8 border-secondary'>
        <div className='py-5 px-14 md:w-1/2'>
            <img src={CertificateImg} alt='certificate'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[250px] font-bold '>Certifications</h1>
                <div>
                    <p className='text-2xl font-bold'>Web Development Course: </p>
                    <hr className="border-t-2 border-blue-300 my-4" />
                    <p className='text-2xl'><span className='bg-primary font-bold hover:text-white'>THE COMPLETE WEB DEVELOPMENT BOOTCAMP</span> [Udemy, November 30, 2023]</p>
                </div>
                <div className='py-5'>
                    <p className='text-2xl font-bold'>Core Java: </p>
                    <hr className="border-t-2 border-blue-300 my-4" />
                    <p className='text-2xl'><span className='bg-blue-400 font-bold hover:text-white'>CORE JAVA EASY (COVERS THE LATESTJAVA 17)</span> [Udemy, March, 2023]</p>
                </div>
            </div>
        </div>
    </section>
}