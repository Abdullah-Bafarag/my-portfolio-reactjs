import React from 'react';
import { cn } from '../utils/cn';

/**
 * مكون زر قابل لإعادة الاستخدام يتبع هوية المشروع مع إمكانية التخصيص الفردي.
 * 
 * @param {React.ReactNode} children - المحتوى داخل الزر (نص أو أيقونة)
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} variant - نمط الزر
 * @param {'sm' | 'md' | 'lg'} size - حجم الزر
 * @param {boolean} isLoading - حالة التحميل (تظهر مؤشر تحميل وتوقف التفاعل)
 * @param {string} className - كلاسات Tailwind إضافية للتخصيص المستقل
 */
export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    className = '',
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-sm transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none 
    active:scale-[0.98] cursor-pointer
  `;

    const variants = {
        primary: `
      bg-[var(--color-primary)] text-[var(--color-bg)]
      hover:bg-white hover:bg-[var(--color-white)]
    `,

        secondary: `
      bg-[var(--color-bg-variant)] text-[var(--color-white)] 
      hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]
    `,

        outline: `
      bg-transparent text-[var(--color-primary)] 
      border border-[var(--color-primary-variant)] 
      hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black
    `,

        ghost: `
      bg-transparent text-[var(--color-light)] 
      hover:text-[var(--color-white)] hover:bg-[var(--color-bg-variant)]
    `,
    };

    const sizes = {
        sm: "px-4 py-1.5 text-xs",
        md: "px-7 py-3 text-sm",
        lg: "px-8 py-3.5 text-base",
    };

    return (
        <button
            disabled={disabled || isLoading}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {isLoading && (
                <svg
                    className="animate-spin -ms-1 me-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            )}

            {children}
        </button>
    );
};