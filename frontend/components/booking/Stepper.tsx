"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const steps = [
  { name: 'Options', path: '/booking' },
  { name: 'Services', path: '/booking/services' },
  { name: 'Professional', path: '/booking/professional' },
  { name: 'Time', path: '/booking/time' },
  { name: 'Confirm', path: '/booking/checkout' },
];

export default function Stepper() {
  const pathname = usePathname();

  return (
    <nav className="text-sm font-medium text-stone-400 flex flex-wrap items-center gap-2">
      {steps.map((step, index) => {
        // A simple way to highlight the active step and dim the rest
        const isActive = pathname === step.path;
        // Optionally make past steps clickable
        const stepIndex = steps.findIndex(s => s.path === pathname);
        const isPast = index < stepIndex;

        return (
          <React.Fragment key={step.path}>
            {isPast ? (
              <Link href={step.path} className="hover:text-charcoal transition-colors">
                {step.name}
              </Link>
            ) : (
              <span className={isActive ? 'text-charcoal' : ''}>{step.name}</span>
            )}
            
            {index < steps.length - 1 && <span>&gt;</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
