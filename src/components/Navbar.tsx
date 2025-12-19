import { useState } from 'react';

type NavbarProps = {
  className?: string;
};

function Navbar({ className = '' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Customer Stories', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <nav className={`bg-blue-600 border-b border-blue-200 ${className}`}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-[60px] h-[72px] max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <span className="font-heading text-white text-xl">Primary</span>
          </a>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-[60px]">
          {/* Nav Links */}
          <div className="flex items-center gap-[48px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-base font-medium text-white hover:opacity-80 transition-opacity py-[14px] px-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="font-body text-base text-blue-500 bg-white hover:bg-blue-100 rounded-md px-3 py-[14px] transition-colors">
            Book a demo
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 h-[72px] bg-blue-600">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <span className="font-heading text-white text-lg">Primary</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <button className="font-body text-sm text-black-900 bg-white rounded-md px-4 py-2">
              Book a demo
            </button>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`bg-black-1000 overflow-hidden transition-all ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
          }`}
          style={{
            transitionDuration: isMobileMenuOpen ? '1000ms' : '1500ms',
            transitionDelay: isMobileMenuOpen ? '0ms' : '200ms',
          }}
        >
          <div className="flex flex-col gap-8 px-4 py-8">
            {navLinks.map((link, index) => {
              // Staggered delay on open: 500ms, 650ms, 800ms (starts halfway through container animation)
              // No delay on close (0ms)
              const delays = [500, 650, 800];
              const delay = isMobileMenuOpen ? delays[index] : 0;
              return (
                <div key={link.label} className="overflow-hidden h-[28px]">
                  <a
                    href={link.href}
                    className="font-body text-sm text-white hover:opacity-80 block"
                    style={{
                      transform: isMobileMenuOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, 150%, 0)',
                      opacity: isMobileMenuOpen ? 1 : 0,
                      willChange: 'transform, opacity',
                      transitionProperty: 'transform, opacity',
                      transitionDuration: isMobileMenuOpen ? '600ms' : '900ms',
                      transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
                      transitionDelay: isMobileMenuOpen ? `${delay}ms` : '0ms',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;