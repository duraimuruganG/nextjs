'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import Hero from "@/components/common/Hero";



const homeSlides = [
  {
    black: "Terms & Conditions - Know Your",
    pink: "Rights & Responsibilities",
    description: `Stay informed about your rights and obligations while using our services. Read our updated Terms & Conditions to ensure a secure and seamless experience. For any questions, reach out to us anytime`,
    button: "Contact us today!!",
  },
];

export default function  termscondition() {
  return (    
    <>
  <Header />
 <Hero slides={homeSlides} bgimg="/images/terms-banner.png" /> 

    
    <main className="min-h-screen items-center justify-center bg-white p-6">
       
      <div className="px-2 md:px-5 lg:px-15 py-10 md:py-16 lg:py-20 text-gray-800 space-y-10 border-[0.8px] border-solid border-[#C32C7B] rounded-[12px] bg-[#FFFBFD] mb-20">
        {/* Main Heading */}
        <h1 style={{
         color: "var(--color-paragraph)",
          fontFamily: "Sarcolenta, serif",
        }} className="text-[40px] leading-none md:text-[50px] text-center mb-[15px]">
          Interpretation and <span className="text-C32C7B" style={{
          color: "var(--color-title)",
          fontFamily: "Sarcolenta, serif",
        }}>Definitions</span>
        </h1>

        <hr className="border-t border-2 border-[#C32C7B] w-24 lg:w-30 md:w-20 mx-auto  mb-4" />
        
        {/* Interpretation */}
        <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px] mb-1">Interpretation</h2>
        <p className="!text-[#3A3A3AB2] !font-[400] text-[15px] mb-6">
          The words of which the initial letter is capitalized have meanings defined under the following conditions.
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        
        {/* Definitions */}
        <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px] mb-1">Definitions</h2>
        <p className="!text-[#3A3A3AB2] !font-[400] text-[15px] mb-6">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="!text-[#3A3A3A] text-[15px] d:text-[20px] font-400 mb-6 space-y-1 pl-[0px]">
          <li className="flex items-start space-x-2" >
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /> <span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"> <b className="!text-[#3A3A3A] text-[16px] md:text-[20px]">Affiliate</b>  means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /><span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"> <b className="!text-[#3A3A3A]">Country</b>&nbsp;refers to: Tamil Nadu, India</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /><span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">Company</b> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Fronseye Tech n Trade Pvt Ltd, 1, North Mada Street, Maduravoyal, Chennai 600095</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /> <span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"> <b className="!text-[#3A3A3A]">Device</b> means any device that can access the Service such as a computer, a cellphone or a digital table</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /><span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">Service</b> refers to the Website</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /><span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">Terms and Conditions</b>(also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</span> 
          </li>
          <li className="flex items-start space-x-2"><Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} />
            <span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">Third-party Social Media Service</b> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service</span>
          </li>
          <li className="flex items-start space-x-2"><Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} />
            <span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">Website</b> refers to Fronseye, accessible from <a className="!text-[#C32C7B] underline" href="https://fronseye.com/"> https://fronseye.com/</a></span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src="/images/terms-icon.svg" alt="Logo" width={16} height={16} /><span className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]"><b className="!text-[#3A3A3A]">You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable</span>
          </li>
        </ul>
        
        {/* Acknowledgment */}
        <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px] mb-[18px]">Acknowledgment</h2>
        <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px]">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          <br/><br/>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          <br/><br/>
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          <br/><br/>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </p>
      </div>


<div className="px-2 md:px-5 lg:px-15 py-10 md:py-16 lg:py-20 text-gray-800 space-y-10 border-[0.8px] border-solid border-[#C32C7B] rounded-[12px] bg-[#FFFBFD]">
             
                <section >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px]">Links to Other Websites</h2>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                    </p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit</p>
                </section>
 
                <section >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px]">Termination</h2>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                    </p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Upon termination, Your right to use the Service will cease immediately</p>
                   
                </section>
 
 
                <section >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="!text-[#C32C7B] !font-[600] text-[23px] md:text-[30px]">Limitation of Liability</h2>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven’t purchased anything through the Service.
                    </p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permitted by law</p>
                </section>
 
 
 
                <section >
                    <h2 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[23px] md:text-[30px] font-semibold !text-[#C32C7B]">“AS IS” and “AS AVAILABLE” Disclaimer</h2>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                    </p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Without limiting the foregoing, neither the Company nor any of the company’s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon;
                    (ii) that the Service will be uninterrupted or error-free;
                    (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or
                    (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                    <p className="!text-[#3A3A3AB2] font-[400] text-[16px] md:text-[20px] mt-4">Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law</p>
                </section>
            </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 mb-10 mt-10">
 
        <div className="bg-[#FAF5F8] border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] border-[#C32C7B] rounded-[12px] px-[15px] py-[20px] text-center text-sm text-gray-700 h-[270px]">
          <h3 style={{ fontFamily: 'inter' }} className="text-[20px] leading-none font-semibold text-pink-600 mb-2">
            Governing Law
          </h3>
          <p style={{ fontFamily: 'inter' }} className="!text-[#3A3A3AB2] font-[400] text-[16px] mt-4">
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.
            Your use of the Application may also be subject to other local, state, national, or international laws.
          </p>
        </div>
      
      
        <div className="bg-[#FAF5F8] border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] border-[#C32C7B] rounded-[12px] px-[15px] py-[20px] text-center text-sm text-gray-700 h-[270px]">
          <h3 style={{ fontFamily: 'inter' }} className="text-[20px] leading-none font-semibold text-pink-600 mb-2">
            Disputes Resolution
          </h3>
          <p style={{ fontFamily: 'inter' }} className="!text-[#3A3A3AB2] font-[400] text-[16px] mt-4">
            If you have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
          </p>
        </div>
      
      
        <div className="bg-[#FAF5F8] border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] border-[#C32C7B] rounded-[12px] px-[15px] py-[20px] text-center text-sm text-gray-700 h-[270px]">
          <h3 style={{ fontFamily: 'inter' }} className="text-[20px] leading-none font-semibold text-pink-600 mb-2">
            For European Union (EU) Users
          </h3>
          <p style={{ fontFamily: 'inter' }} className="!text-[#3A3A3AB2] font-[400] text-[16px] mt-4">
            If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
          </p>
        </div>
      
      
        <div className="bg-[#FAF5F8] border-t-[2px] border-l-[2px] border-r-0 border-b-[10px] border-[#C32C7B] rounded-[12px] px-[15px] py-[20px] text-center text-sm text-gray-700 h-[270px]">
          <h3 style={{ fontFamily: 'inter' }} className="text-[20px] leading-none font-semibold text-pink-600 mb-2">
            United States Legal Compliance
          </h3>
          <p style={{ fontFamily: 'inter' }} className="!text-[#3A3A3AB2] font-[400] text-[16px] mt-4">
            You confirm that (i) you are not in a country subject to a U.S. government embargo or designated as a “terrorist-supporting” country,
            (ii) you are not on any U.S. government list of restricted or prohibited parties.
          </p>
        </div>
      </section>

      <div className="px-2 md:px-5 lg:px-15 py-10 md:py-16 lg:py-20 text-gray-800 space-y-10 border-[0.8px] border-solid border-[#C32C7B] rounded-[12px] bg-[#FFFBFD]">

                    <p
                    style={{ fontFamily: 'var(--font-title)' }}
                    className="text-[25px] md:text-[50px] font-normal text-center m-1.5"
                    >
                    Severability and <span className="!text-[#C32C7B] !font-[400] text-[30px] md:text-[50px]  ">Waiver</span>
                    </p>
                   <hr className="border-t border-2 border-[#C32C7B] w-24 lg:w-30 md:w-20 mx-auto  mb-4" />
               
                    <div className="mt-5 lg:mt-10 md:mt-8">
                        <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[23px] md:text-[30px] font-semibold text-pink-600">Severability</h3>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted
                        to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining
                        provisions will continue in full force and effect.
                        </p>
                    </div>
 
                 
                    <div className="mt-5 lg:mt-10 md:mt-8">
                        <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className=" text-[23px] md:text-[30px] font-semibold text-pink-600">Waiver</h3>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms
                        shall not affect a party’s ability to exercise such right or require such performance at any time thereafter nor shall
                        the waiver of a breach constitute a waiver of any subsequent breach.
                        </p>
                    </div>
 
                    <div className="mt-5 lg:mt-10 md:mt-8">
                        <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[23px] md:text-[30px] font-semibold text-pink-600">Translation Interpretation</h3>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        These Terms and Conditions may have been translated. If we have made them available to You on our Service, You agree
                        that the original English text shall prevail in the case of a dispute.
                        </p>
                    </div>
 
                   
                    <div className="mt-5 lg:mt-10 md:mt-8">
                        <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="md:text-[30px] text-[23px] font-semibold text-pink-600">Changes to These Terms and Conditions</h3>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material
                        We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What
                        constitutes a material change will be determined at Our sole discretion.
                        </p>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised
                        terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                        </p>
                    </div>
 
                    <div className="mt-5 lg:mt-10 md:mt-8">
                        <h3 style={{ fontFamily: 'var(--font-paragraph)' }} className="text-[23px] md:text-[30px] font-semibold text-pink-600">Contact Us</h3>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        If you have any questions about these Terms and Conditions, You can contact us:
                        </p>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        By email:  hello@fronseye.com
                        </p>
                        <p className="!text-[#3A3A3AB2] !font-[400] text-[16px] md:text-[20px]">
                        By visiting this page on our website:
                        <a href="/contact/" className=" underline ml-1 text-[#C32C7B]">https://fronseye.com/contact-us/</a>
                        </p>
                    </div>   
            </div>
    </main>


  <Footer />
</>
  );
}