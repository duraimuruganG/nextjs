import Link from "next/link";
import Icon from "@/components/common/Icon";
import { useState } from "react";
import { IMAGE_BASE_PATH } from "@/lib/constants";

export default function Header() {
  // Dropdown data for each menu
  const dropdowns = {
    PRODUCTS: [
      { label: 'EngineerOps', icon: 'Settings', href: '#' },
      { label: 'Realshop', icon: 'ShoppingCart', href: '#' },
      { label: 'ClientOps', icon: 'User', href: '#' },
    ],
    SERVICES: [
      { label: 'Content Management Systems', icon: 'FileText', href: '#' },
      { label: 'Custom Software Development', icon: 'Code2', href: '#' },
      { label: 'E-commerce platform Development', icon: 'ShoppingBag', href: '#' },
      { label: 'Enterprise Application Development', icon: 'Building2', href: '#' },
      { label: 'Mobile App development', icon: 'Smartphone', href: '#' },
      { label: 'Software Testing Services', icon: 'CheckCircle2', href: '#' },
    ],
    SOLUTIONS: [
      { label: 'E-COMMERCE & ON-DEMAND SERVICES', isHeader: true },
      { label: 'Single/Multi-Vendor Ecommerce App', href: '#' },
      { label: 'Single/Multi-vendor Hotel Booking App', href: '#' },
      { label: 'Handyman App', href: '#' },
      { label: 'On-Demand Courier Delivery App', href: '#' },
      { label: 'Affiliate Management System', href: '#' },
      { label: 'BUSINESS MANAGEMENT', isHeader: true },
      { label: 'Hospital Management Software', href: '#' },
      { label: 'Medical Equipment Management App', href: '#' },
      { label: 'Event Management App', href: '#' },
      { label: 'Fitness Center Management App', href: '#' },
      { label: 'POS Application with Sales & Purchase', href: '#' },
      { label: 'Grievance Management App', href: '#' },
      { label: 'EDUCATION & SPECIALIZED PLATFORMS', isHeader: true },
      { label: 'Learning Management System (LMS)', href: '#' },
      { label: 'Real Estate Directory Listing App', href: '#' },
      { label: 'Crowd Funding App', href: '#' },
      { label: 'Job Portal App', href: '#' },
    ],
    'ABOUT US': [
      { label: 'About Company', icon: 'Info', href: 'about' },
      { label: 'Fronseye members', icon: 'Users', href: '#' },
    ],
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  let dropdownTimeout: NodeJS.Timeout;

  function renderDropdown(menu) {
    const items = dropdowns[menu];
    if (!items) return null;
    // Special layout for SOLUTIONS (multi-column)
    if (menu === 'SOLUTIONS') {
      return (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 z-30 w-[700px] bg-white rounded-lg shadow-xl border flex p-8 gap-0 transition-all duration-300
            ${openDropdown === menu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
          onMouseEnter={() => {
            clearTimeout(dropdownTimeout);
            setOpenDropdown(menu);
          }}
          onMouseLeave={() => {
            dropdownTimeout = setTimeout(() => setOpenDropdown(null), 80);
          }}
        >
          {/* 3 columns */}
          <div className="flex-1 pr-6 border-r">
            <h4 className="text-pink-700 font-bold text-lg mb-2" style={{fontFamily:'Sarcolenta'}}>E-COMMERCE & ON-DEMAND SERVICES</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {items.slice(1,6).map((item, i) => (
                <li key={i}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex-1 px-6 border-r">
            <h4 className="text-pink-700 font-bold text-lg mb-2" style={{fontFamily:'Sarcolenta'}}>BUSINESS MANAGEMENT</h4>
            <div className="h-1 w-16 bg-pink-700 mb-2" />
            <ul className="text-sm text-gray-700 space-y-1">
              {items.slice(7,13).map((item, i) => (
                <li key={i}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex-1 pl-6">
            <h4 className="text-pink-700 font-bold text-lg mb-2" style={{fontFamily:'Sarcolenta'}}>EDUCATION & SPECIALIZED PLATFORMS</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {items.slice(14).map((item, i) => (
                <li key={i}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    // Default: single column with icons
    return (
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-30 min-w-[220px] bg-white rounded-lg shadow-xl border p-4 transition-all duration-300
          ${openDropdown === menu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
        onMouseEnter={() => {
          clearTimeout(dropdownTimeout);
          setOpenDropdown(menu);
        }}
        onMouseLeave={() => {
          dropdownTimeout = setTimeout(() => setOpenDropdown(null), 80);
        }}
      >
        <ul className="space-y-2">
          {items.map((item, i) => (
            item.isHeader ? (
              <li key={i} className="font-bold text-pink-700 text-xs uppercase tracking-wider pt-2 pb-1">{item.label}</li>
            ) : (
              <li key={i}>
                <a href={item.href} className="flex items-center gap-2 hover:text-pink-600">
                  {item.icon && <Icon name={item.icon} />}
                  {item.label}
                </a>
              </li>
            )
          ))}
        </ul>
      </div>
    );
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 text-sm text-gray-800 justify-between items-center px-10 py-2 hidden custom993:flex">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span><Icon name="PhoneCall" /></span>
            <a href="tel:+918148271282" className="hover:underline">
              +91 81482 71282
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span><Icon name="MailPlus" /></span>
            <a href="mailto:hello@fronseye.com" className="hover:underline">
              hello@fronseye.com
            </a>
          </div>
        </div>
        <Link href="/book-meeting" className="flex items-center gap-1 hover:underline">
          Book a meeting <Icon name="MoveRight" />
        </Link>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="bg-white justify-between items-center px-10 py-4 hidden custom993:flex">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
  src={`${IMAGE_BASE_PATH}/Fronseye_logo.png`}
  alt="Fronseye Logo"
  className="h-8"
/>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-sm text-gray-800 relative">
          {['PRODUCTS', 'SERVICES', 'SOLUTIONS', 'ABOUT US'].map((menu) => (
            <li
              key={menu}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setOpenDropdown(menu);
              }}
              onMouseLeave={() => {
                dropdownTimeout = setTimeout(() => setOpenDropdown(null), 80);
              }}
            >
              <a
                href="#"
                className="flex items-center gap-1 hover:text-pink-600 focus:outline-none bg-transparent border-none cursor-pointer text-inherit select-none"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={openDropdown === menu}
                onClick={e => e.preventDefault()}
              >
                {menu}
                <span
                  className={`transition-transform duration-300 ${openDropdown === menu ? 'rotate-180' : ''}`}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <Icon name="ChevronDown" />
                </span>
              </a>
              {renderDropdown(menu)}
            </li>
          ))}
          <li>
            <Link href="/blog" className="hover:text-pink-600">
              BLOG
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile/Tablet (below 993px) */}
      <div className="bg-white w-full flex flex-row items-center justify-between py-4 px-10 custom993:hidden">
        {/* Logo left */}
        <div className="min-w-0 flex items-center">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="images/fronseye_logo.png" alt="Fronseye Logo" className="h-12" />
          </Link>
        </div>
        {/* Hamburger right */}
        {/* <div className="flex items-center flex-shrink-0">
          <button
            className="p-2 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div> */}
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 custom993:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="absolute right-0 top-0 w-4/5 max-w-xs h-full bg-pink-600 flex flex-col justify-between animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex-1 flex flex-col">
              <ul className="flex flex-col text-white text-base font-normal divide-y divide-pink-300">
                {['ABOUT US', 'PRODUCTS', 'SERVICES', 'SOLUTIONS'].map((menu) => (
                  <li key={menu} className="">
                    <a
                      href="#"
                      className="w-full flex items-center justify-between gap-2 px-4 py-3 focus:outline-none select-none"
                      aria-haspopup="true"
                      aria-expanded={mobileDropdownOpen === menu}
                      onClick={e => {
                        e.preventDefault();
                        setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
                      }}
                    >
                      <span>{menu.charAt(0) + menu.slice(1).toLowerCase()}</span>
                      <span className={`transition-transform duration-300 ${mobileDropdownOpen === menu ? 'rotate-180' : ''}`}
                        style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <Icon name="ChevronDown" />
                      </span>
                    </a>
                    {mobileDropdownOpen === menu && (
                      <ul className="pl-6 py-2 space-y-2 bg-pink-700/30">
                        {dropdowns[menu].map((item, i) => (
                          item.isHeader ? (
                            <li key={i} className="font-bold text-pink-100 text-xs uppercase tracking-wider pt-2 pb-1">{item.label}</li>
                          ) : (
                            <li key={i}>
                              <a href={item.href} className="flex items-center gap-2 hover:text-pink-200 text-pink-50 py-1">
                                {item.icon && <Icon name={item.icon} />}
                                {item.label}
                              </a>
                            </li>
                          )
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="">
                  <Link href="/blog" className="block px-4 py-3 hover:text-pink-200 text-white">
                    Blogs
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/contact"
                    className="block px-4 py-3 hover:text-pink-200 text-white"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Footer section with contact and social icons */}
            <div className="px-4 py-6 text-white text-sm border-t border-pink-400 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Icon name="Users" />
                <span>Book an Meeting</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="PhoneCall" />
                <span>+91 81482 71282</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MailPlus" />
                <span>hello@fronseye.com</span>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="bg-pink-700/60 rounded-full p-2 hover:bg-pink-800"><Icon name="Facebook" size={18} /></a>
                <a href="#" className="bg-pink-700/60 rounded-full p-2 hover:bg-pink-800"><Icon name="Instagram" size={18} /></a>
                <a href="#" className="bg-pink-700/60 rounded-full p-2 hover:bg-pink-800"><Icon name="Linkedin" size={18} /></a>
              </div>
            </div>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @media (min-width: 993px) {
          .custom993\:flex { display: flex !important; }
          .custom993\:hidden { display: none !important; }
        }
        @media (max-width: 992px) {
          .custom993\:flex { display: none !important; }
          .custom993\:hidden { display: flex !important; }
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease;
        }
      `}</style>
    </header>
  );
}
