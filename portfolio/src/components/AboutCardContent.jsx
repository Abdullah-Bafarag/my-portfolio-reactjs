import React from 'react';

/**
 * مكون البطاقة التوضيحية لفرع About
 * @param {React.ReactNode} icon - الأيقونة والمررّة كعنصر (مثل <FaAward />)
 * @param {string} title - العنوان الرئيسي للبطاقة
 * @param {string} subtitle - الوصف الفرعي في الأسفل
 */
export const AboutCardContent = ({ icon: Icon, title, subtitle, className = '' }) => {
    return (
        <div className={`bg-[var(--color-bg-variant)] border border-transparent hover:bg-transparent hover:border-[var(--color-bg-variant)] transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 cursor-default ${className}`}>

            {Icon && <Icon className="text-xl sm:text-2xl text-[var(--color-primary)] mb-0.5 sm:mb-1" />}

            <h5 className="text-xs sm:text-sm font-semibold tracking-wide">{title}</h5>

            <small className="text-[10px] sm:text-xs text-[var(--color-light)]">{subtitle}</small>

        </div>
    );
};