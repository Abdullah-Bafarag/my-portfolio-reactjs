import React from 'react';

/**
 * مكون البطاقة التوضيحية لفرع About
 * @param {React.ReactNode} icon - الأيقونة والمررّة كعنصر (مثل <FaAward />)
 * @param {string} title - العنوان الرئيسي للبطاقة
 * @param {string} subtitle - الوصف الفرعي في الأسفل
 */
export const MessageCard = ({
    icon: Icon,
    title,
    subtitle,
    actionText = "Send Message",
    href,
    onClick,
    className = '' }) => {

    const Component = href ? 'a' : onClick ? 'button' : 'div';

    return (

        <Component
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            onClick={onClick}
            className={`group bg-[var(--color-bg-variant)] border border-transparent 
            hover:bg-transparent hover:border-[var(--color-primary)] 
            transition-all duration-300 rounded-sm sm:rounded-lg 
            mb-4 sm:mb-6
            p-4 sm:p-6 flex flex-col items-center justify-center text-center 
            gap-1.5 sm:gap-2 cursor-pointer xl:w-7/6 w-full ${className}`}
        >


                {Icon && <Icon className="text-xl sm:text-2xl text-[var(--color-white)] mb-0.5 sm:mb-1" />}

                <h5 className="text-xs sm:text-sm font-semibold tracking-wide">{title}</h5>

                <small className="text-[10px] sm:text-xs text-[var(--color-light)]">{subtitle}</small>

            <span className="mt-2 text-[11px] sm:text-xs text-[var(--color-primary)] font-medium flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                {actionText} &rarr;
            </span>
        </Component>
    );
};