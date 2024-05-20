import React, { useEffect } from 'react';
import HeroImg from '../assets/bharath.jpg';
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";

const Typewriter = ({ textArray, period }) => {
  useEffect(() => {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          this.tick();
        }, delta);
      }
    }

    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    // Inject CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff }';
    document.body.appendChild(css);

    return () => {
      // Cleanup the injected CSS
      document.body.removeChild(css);
    };
  }, [textArray, period]);

  return (
    <p
      className="typewrite text-2xl"
      data-period={period}
      data-type={JSON.stringify(textArray)}
    >
      <span className="wrap"></span>
    </p>
  );
};

export default function Hero() {
  const config = {
    subtitle: [
      'Im a Full-stack developer',
      'Im a Web developer',
      'Im a MERN Stack developer'
    ],
    social: {
      twitter: 'https://x.com/Bharath_0723',
      whatsapp: 'https://wa.me/8610429090',
      linkedin: 'https://www.linkedin.com/in/bharath-sethuraman-86ba65227/'
    }
  }

  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center border-b-8 border-secondary'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>
          Hi, <br /> Im <span className='text-black'>Bharath</span> Sethuraman
        </h1>
        <Typewriter textArray={config.subtitle} period="2000" />
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
      <img className='md:w-1/3' src={HeroImg} alt="Hero" />
    </section>
  );
}
