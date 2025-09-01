import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import linkedinIcon from '@iconify/icons-simple-icons/linkedin';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import youtubeIcon from "@iconify/icons-simple-icons/youtube";


export default function Social() {

  return (
            <section className="px-[40px] pt-2 pb-12 w-full text-center">
            <div className="flex justify-center">
                <div className="flex items-center justify-between gap-6 p-8 w-[787px] bg-pink-200 rounded-lg shadow-md">
                    <div className="flex flex-col items-center text-center w-full gap-6">
                        <h3
                            style={{ color: "var(--color-title)" }}
                            className="text-lg font-regular">
                            Follow us <span style={{ color: "var(--color-paragraph)" }}>On!</span>
                        </h3>

                        <div className="flex gap-4 justify-center">
                            <a href="#" aria-label="Follow us on Facebook">
                            <Icon icon={facebookIcon} width="24" height="24" color="var(--color-title)" />
                            </a>
                            <a href="#" aria-label="Follow us on YouTube">
                            <Icon icon={youtubeIcon} width="24" height="24" color="var(--color-title)" />
                            </a>
                            <a href="#" aria-label="Follow us on LinkedIn">
                            <Icon icon={linkedinIcon} width="24" height="24" color="var(--color-title)" />
                            </a>
                            <a href="#" aria-label="Follow us on Instagram">
                            <Icon icon={instagramIcon} width="24" height="24" color="var(--color-title)" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
  );
} 