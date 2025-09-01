// components/Footer.tsx
import Icon from '@/components/common/Icon';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#232228] text-[#fff] border-t border-[#444] pt-10 pb-2 px-2 md:px-8 font-[FuturaTOT-Boo,Arial,sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x divide-[#444]">
        
        {/* Logo & About */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start pr-10 mb-8 md:mb-0">
          <Image
            src="/images/Footer_fronseye_logo.png"
            alt="Fronseye Logo"
            width={180}
            height={50}
            className="mb-4"
          />
          <p className="text-xs leading-relaxed text-[#fff] max-w-xs text-center md:text-left opacity-80">
            Fronseye Tech n Trade Private Limited company is incorporated under Ministry of Corporate Affairs and is limited by shares. The main objective of the company is Software Product development and is approved and recognized by Central Govt&rsquo;s DPIIT and State Govt&rsquo;s StartupTN as a &quot;Startup Company&quot;
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[160px] px-10 mb-8 md:mb-0">
          <h4 className="font-bold text-base mb-2 text-[#fff] tracking-wide" style={{ fontFamily: 'Futura T OT' }}>Quick links</h4>
          <div className="h-0.5 w-16 mb-2" style={{ background: 'var(--color-title)' }} />
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Products</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Services</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Solutions</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>About us</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Blog</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Contact us</a></li>
          </ul>

          <h4 className="font-bold text-base mt-6 mb-2 text-[#fff] tracking-wide" style={{ fontFamily: 'Futura T OT' }}>Imp links</h4>
          <div className="h-0.5 w-16 mb-2" style={{ background: 'var(--color-title)' }} />
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Privacy Policy</a></li>
            <li><a href="/terms-and-condition" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[var(--color-title)] transition-colors" style={{ fontFamily: 'Futura T OT' }}>Career</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[220px] px-10 mb-8 md:mb-0">
          <h4 className="font-bold text-base mb-2 text-[#fff] tracking-wide" style={{ fontFamily: 'Futura T OT' }}>Contact us</h4>
          <div className="h-0.5 w-16 mb-2" style={{ background: 'var(--color-title)' }} />
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><Icon name="PhoneCall" color="var(--color-title)" /> <span className="opacity-90">+ 91 81482 71282</span></li>
            <li className="flex items-start gap-2"><Icon name="Mail" color="var(--color-title)" /> <span className="opacity-90">hello@fronseye.com</span></li>
            <li className="flex items-start gap-2"><Icon name="MapPin" size={40} color="var(--color-title)" /> <span className="opacity-90">India: No 143, Guna Complex, I Floor, P.H. Road, Maduravoyal, Chennai 600 095<br />US: No 2, Glen Lane, Ellington, CT, 06029</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] px-10 flex flex-col items-center md:items-start">
          <h4 className="font-bold text-base mb-2 text-[#fff] tracking-wide" style={{ fontFamily: 'Futura T OT' }}>Join Our Exclusive Newsletter</h4>
          <div className="h-0.5 w-16 mb-2" style={{ background: 'var(--color-title)' }} />
          <p className="text-xs text-[#fff] opacity-80 mb-3 text-center md:text-left">
            Stay ahead with Fronseye! Get the latest tech insights, updates, and innovations delivered straight to your inbox. Join our community of forward-thinkers today!
          </p>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 pt-4 border-t border-[#444] gap-4 pl-4">
        <div className="text-xs text-[#fff] opacity-60">Copyright © 2025. All rights reserved.</div>
        <div className="flex gap-3">
          <a href="#" className="bg-[#35343a] rounded-full p-2 hover:bg-[var(--color-title)] transition-colors"><Icon name="Facebook" size={18} color="#fff" /></a>
          <a href="#" className="bg-[#35343a] rounded-full p-2 hover:bg-[var(--color-title)] transition-colors"><Icon name="Instagram" size={18} color="#fff" /></a>
          <a href="#" className="bg-[#35343a] rounded-full p-2 hover:bg-[var(--color-title)] transition-colors"><Icon name="Linkedin" size={18} color="#fff" /></a>
        </div>
      </div>
    </footer>
  );
}
