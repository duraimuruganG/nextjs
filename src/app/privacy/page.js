'use client';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from 'next/image';
import Hero from "@/components/common/Hero";
import {IMAGE_BASE_PATH} from "@/lib/constants";
 
const homeSlides = [
  {
     brand:  (
     <h1 className="text-[2.5rem] md:text-[3.5rem] font-regular mb-4"
        style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" , lineHeight: '1.1'}}
      >Protecting Your Privacy,<span style={{ color: "var(--color-paragraph)", fontFamily: "Sarcolenta, serif" }}> Securing Your Trust</span></h1>
  ),
    description:'Seamlessly create, manage, and optimize content with scalable and user-friendly solutions',
    button: "Contact us today!!",
  },
];

export default function privacy() {
  return (
    <>
       <Header />

        <div  className="px-[20px] md:px-[40px] lg:px-[40px] lg:mb-[48px] md:mb-[24px] py-[80px] text-gray-800 space-y-10">

       <Hero slides={homeSlides} bgimg={`${IMAGE_BASE_PATH}/Privacy-policy.svg`} style={{
             cursor: "grab",
             backgroundImage: `url(${IMAGE_BASE_PATH}/Privacy-policy.svg)`,
             backgroundPosition: "center right",
             backgroundRepeat: "no-repeat",
             backgroundSize: "contain",
           }}
           mobileStyle={{
             cursor: "grab",
             backgroundImage: `url(${IMAGE_BASE_PATH}/Privacy-policy.svg)`,
             backgroundPosition: "center center",
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
           }}
           />


        <div className="px-[20px] pt-[20px] pb-[40px] sm:pt-[30px] sm:mb-[100px] md:pt-[30px] md:pb-[80px] lg:pt-[30px] lg:pb-[100px] lg:mb-[48px] md:mb-[24px] text-gray-800 space-y-10">

           <div className="px-2 md:px-5 lg:px-15 py-10 md:py-16 lg:py-20 text-gray-800 space-y-10 border-[0.8px] border-solid border-[#C32C7B] rounded-[12px] bg-[#FFFBFD]">
                <section  >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Introduction</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">
                    At Fronseye, accessible from <a href="https://fronseye.com" className="text-pink-700 underline">https://fronseye.com</a>,
                    of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Fronseye and how we use it .
                    </p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.    
                    </p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Fronseye. This policy is not applicable to any information collected offline or via channels other than this website
                    </p>
                </section>

            
                <section>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Consent</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Information we collect</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                </section>

                <section style={{ color: 'rgba(58, 58, 58, 0.7)' }}>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">How we use your information</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Provide, operate, and maintain our website</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Improve, personalize, and expand our website</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Understand and analyze how you use our website</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Develop new products, services, features, and functionality</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Send you emails</span>
                        </li>
                        <li className="flex items-start space-x-2">
                        <Image src="/images/arrow.svg" alt="arrow" width={16} height={16} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>Find and prevent fraud</span>
                        </li>
                    </ul>
                </section>
            
                <section >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Log Files</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">
                    Fronseye follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information
                    </p>
                </section>

                <section>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Advertising Partners Privacy Policies</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">
                    You may consult this list to find the Privacy Policy for each of the advertising partners of Fronseye.
                    </p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Fronseye, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">Note that Fronseye has no access to or control over these cookies that are used by third-party advertisers.</p>
                </section>

                <section>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-bold text-pink-700">Third Party Privacy Policies</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">
                    Fronseye’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    </p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                    </p>
                </section>
            </div>

            <div className="px-2 md:px-5 lg:px-15 py-10 md:py-16 lg:py-20 text-gray-800 space-y-10 border-[0.8px] border-solid border-[#C32C7B] rounded-[12px] bg-[#FFFBFD]">
             
                <section style={{ color: 'rgba(58, 58, 58, 0.7)' }}>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">Under the CCPA, among other rights, California consumers have the right to:</p>
                    <ul className="list-disc list-inside mt-10 space-y-2">
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30} />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>Request that a business delete any personal data about the consumer that a business has collected.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</span>
                    </li>
                    </ul>
                </section>
 
                <section style={{ color: 'rgba(58, 58, 58, 0.7)' }}>
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">GDPR Data Protection Rights</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ul className="list-disc list-inside mt-10 space-y-2">
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate, or complete information you believe is incomplete.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }} >The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Image src="/images/click-circle.svg" alt="arrow" width={30} height={30}  />
                        <span style={{ fontFamily: 'var(--font-paragraph)' }}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</span>
                    </li>
                    </ul>
                </section>

            
                <section  >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[30px] font-semibold text-pink-600">Children’s Information</h2>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                    </p>
                    <p style={{ color: 'rgba(58, 58, 58, 0.7)' }} className="mt-2">Fronseye does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records</p>
                </section>
            </div>

 
  


        

        </div>

       <Footer />
    </>
  );
}