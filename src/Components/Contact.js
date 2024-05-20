import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";
export default function Contact() {
    const config = {
        social: {
            twitter: 'https://x.com/Bharath_0723',
            whatsapp: 'https://wa.me/8610429090',
            linkedin: 'https://www.linkedin.com/in/bharath-sethuraman-86ba65227/'
        },
        email: 'bharathsethuraman23@gmail.com',
        phone: '8610429090'
    }
    return <section className='flex flex-col bg-primary px-5 py-32  text-white border-b-8 border-t-4 border-secondary' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span><a className="text-blue-50 underline hover:text-black" href={"mailto:" + config.email}>{config.email}</a></p>
            <p className='py-2'><span className='font-bold'>Phone :</span><a className="text-blue-50 underline hover:text-black" href={"tel:+91" + config.phone}>{config.phone}</a></p>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'>
                    <AiOutlineTwitter size={40} />
                </a>
                <a href={config.social.whatsapp} className='pr-5 hover:text-white'>
                    <AiOutlineWhatsApp size={40} />
                </a>
                <a href={config.social.linkedin} className='hover:text-white'>
                    <AiOutlineLinkedin size={40} />
                </a>
            </div>
        </div>
    </section>
}