import React from 'react';

/**
 * مكون عرض مهارة برمجية / لغة
 * @param {string} image - مسار أو رابط صورة/شعار اللغة
 * @param {string} name - اسم لغة البرمجة أو التقنية
 * @param {string} category - مجال العمل (مثل: Frontend, Backend, Mobile)
 */
export const SkillCard = ({ image, name, category, className = '' }) => {
    return (
        <div
            className={`bg-[var(--color-bg-variant)] border border-transparent 
      hover:bg-transparent hover:border-[var(--color-bg-variant)] 
      transition-all duration-300 rounded-xl sm:rounded-2xl 
      p-4 sm:p-5 flex flex-col items-center justify-center 
      text-center gap-2 cursor-default group ${className}`}
        >
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-2 rounded-lg bg-[var(--color-bg)] transition-transform duration-300 group-hover:scale-110">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>

            <h4 className="text-sm sm:text-base font-semibold tracking-wide text-white">
                {name}
            </h4>

            <span className="text-[10px] sm:text-xs text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-0.5 rounded-full font-medium">
                {category}
            </span>
        </div>
    );
};