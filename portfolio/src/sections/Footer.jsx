import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <footer className="relative bg-[var(--color-primary)] text-[var(--color-bg)] py-8 sm:py-10 text-center mt-12 sm:mt-16 transition-all duration-300">

        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">

          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-wider mb-4 text-[var(--color-bg)] hover:opacity-80 transition-opacity"
          >
            BAFARAG
          </a>

          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 text-xs sm:text-sm font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            </li>
            <li>
              <a href="#service" className="hover:text-white transition-colors">Service</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-3 mb-6">
            
            <a
              href="https://github.com/Abdullah-Bafarag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-[var(--color-bg)] text-[var(--color-primary)] p-2 rounded-lg hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 text-sm sm:text-base"
            >
              <FaGithub />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=00967775003583"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="bg-[var(--color-bg)] text-[var(--color-primary)] p-2 rounded-lg hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 text-sm sm:text-base"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/Abdullah_Bafarag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="bg-[var(--color-bg)] text-[var(--color-primary)] p-2 rounded-lg hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 text-sm sm:text-base"
            >
              <FaTelegramPlane />
            </a>
          </div>

          <div className="text-[11px] sm:text-xs opacity-80">
            <small>&copy; <a href="#" className="hover:underline font-semibold">Bafarag</a>. All rights reserved.</small>
          </div>

        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute left-4 sm:left-8 bottom-6 sm:bottom-8 bg-[var(--color-bg)] text-[var(--color-primary)] p-2.5 sm:p-3 rounded-xl border border-transparent hover:bg-white hover:text-[var(--color-bg)] transition-all duration-300 cursor-pointer shadow-md group"
        >
          <IoIosArrowUp className="text-base sm:text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

      </footer>
    </section>
  );
};

export default Footer