import React, { useState } from 'react';

/**
 * FloatingNav Component
 * @param {Array} items - مصفوفة العناصر تحتوي على { id, icon: IconComponent, href, label }
 * @param {string} initialActiveId - الـ ID الخاص بالعنصر المفعّل افتراضياً
 * @param {function} onItemClick - دالة اختيارية تنفذ عند الضغط على أي زر
 */
export const FloatingNav = ({
    items = [],
    initialActiveId = '#',
    onItemClick
}) => {
    const [activeNav, setActiveNav] = useState(initialActiveId);

    const handleNavClick = (id, href, e) => {
        setActiveNav(id);
        if (onItemClick) onItemClick(id, href, e);
    };

    if (!items.length) return null;

    return (
        <nav
            aria-label="Floating Navigation"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3 px-4 sm:px-4 py-2 rounded-full bg-[var(--color-bg)]/50 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300"
        >
            {items.map(({ id, icon: Icon, href, label }) => {
                const isActive = activeNav === id;

                return (
                    <a
                        key={id}
                        href={href}
                        title={label}
                        aria-label={label}
                        onClick={(e) => handleNavClick(id, href, e)}
                        className={`p-2.5 sm:p-3 rounded-full text-base sm:text-lg transition-all duration-300 relative group flex items-center justify-center ${isActive
                                ? 'bg-[var(--color-primary)] text-white scale-105 shadow-md'
                                : 'text-[var(--color-light)] hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {Icon && <Icon />}

                        {label && (
                            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-[var(--color-bg-variant)] text-white text-[10px] sm:text-xs py-1 px-2 rounded-md shadow-lg border border-white/10 whitespace-nowrap pointer-events-none">
                                {label}
                            </span>
                        )}
                    </a>
                );
            })}
        </nav>
    );
};