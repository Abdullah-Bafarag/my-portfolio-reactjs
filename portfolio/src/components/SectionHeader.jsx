import React from 'react';
import { cn } from '../utils/cn';

/**
 * مكون عنوان الأقسام العام (TopSectionTitle)
 * @param {string} subtitle - العنوان الفرعي الصغير (H5)
 * @param {string} title - العنوان الرئيسي الكبير (H2)
 * @param {string} className - للتخصص الإضافي عند الحاجة
 * @param {boolean} center - لتحديد ما إذا كان العنوان في المنتصف (افتراضي: true)
 */
export const SectionHeader = ({
    subtitle,
    title,
    className = '',
    center = true,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex flex-col gap-1 mb-12 sm:mb-16',
                center ? 'text-center items-center' : 'text-start items-start',
                className
            )}
            {...props}
        >
            {subtitle && (
                <h5 className="text-xs sm:text-sm font-medium tracking-wide text-[var(--color-light)] capitalize">
                    {subtitle}
                </h5>
            )}

            {title && (
                <h2 className="text-1xl sm:text-2xl md:text-3xl  text-[var(--color-primary)] relative pb-2 capitalize">
                    {title}
                </h2>
            )}
        </div>
    );
};