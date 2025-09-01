import React from "react";

export default function Vision() {
  return (
        <section className="px-[40px] py-12">
            <div className="text-center mb-8">
                <h2
                className="text-2xl md:text-3xl font-regular mb-4 text-center"
                style={{ color: "var(--color-title)", fontFamily: "Sarcolenta, serif" }}
                >
                Tech Behind the <span style={{ color: "var(--color-paragraph)" }}>Vision</span>
                </h2>
                <hr
                className="w-16 border-t-2 mb-6 mx-auto"
                style={{ borderColor: "var(--color-title)" }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Frontend Technologies */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  Frontend Technologies
                </div>
                <div className="grid grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/html5.svg" alt="HTML5" className="w-12 h-12 mb-2" />
                    <span className="text-xs">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/css3.svg" alt="CSS3" className="w-12 h-12 mb-2" />
                    <span className="text-xs">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/js.svg" alt="Javascript" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Javascript</span>
                  </div>
                </div>
              </div>

              {/* Dev Frameworks & Libraries */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  Dev Frameworks & Libraries
                </div>
                <div className="grid grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/reactjs.svg" alt="React" className="w-12 h-12 mb-2" />
                    <span className="text-xs">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/angular.svg" alt="AngularJS" className="w-12 h-12 mb-2" />
                    <span className="text-xs">AngularJS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/vuejs.svg" alt="Vue.js" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Vue.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/laravel.svg" alt="Laravel" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Laravel</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/codeigniter.svg" alt="CodeIgniter" className="w-12 h-12 mb-2" />
                    <span className="text-xs">CodeIgniter</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/bootstrap5.svg" alt="Bootstrap5" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Bootstrap 5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/flutter.svg" alt="Flutter" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Flutter</span>
                  </div>
                </div>
              </div>

              {/* Backend & Databases */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  Backend & Databases
                </div>
                <div className="grid grid-cols-3 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/python.svg" alt="Python" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/php.svg" alt="PHP" className="w-12 h-12 mb-2" />
                    <span className="text-xs">PHP</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/mongodb.svg" alt="MongoDB" className="w-12 h-12 mb-2" />
                    <span className="text-xs">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/mysql.svg" alt="MySQL" className="w-12 h-12 mb-2" />
                    <span className="text-xs">MySQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/jquery.svg" alt="jQuery" className="w-12 h-12 mb-2" />
                    <span className="text-xs">jQuery</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/ajax.svg" alt="AJAX" className="w-12 h-12 mb-2" />
                    <span className="text-xs">AJAX</span>
                  </div>
                </div>
              </div>

              {/* E-commerce & CMS */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  E-commerce & CMS
                </div>
                <div className="grid grid-cols-3 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/wordpress.svg" alt="WordPress" className="w-12 h-12 mb-2" />
                    <span className="text-xs">WordPress</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/shopify.svg" alt="Shopify" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Shopify</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/drupal.svg" alt="Drupal" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Drupal</span>
                  </div>
                </div>
              </div>

              {/* Design Tools */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  Design Tools
                </div>
                <div className="grid grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/figma.svg" alt="Figma" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Figma</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/xd.svg" alt="Adobe XD" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Adobe XD</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/ai.svg" alt="Illustrator" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Illustrator</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/ps.svg" alt="Photoshop" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Photoshop</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/DaVinci_Resolve.svg" alt="Davinci Resolve" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Davinci Resolve</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/ae.svg" alt="After Effects" className="w-12 h-12 mb-2" />
                    <span className="text-xs">After Effects</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/pr.svg" alt="Premiere Pro" className="w-12 h-12 mb-2" />
                    <span className="text-xs">Premiere Pro</span>
                  </div>
                </div>
              </div>

              {/* Cloud & Hosting */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col min-h-[210px] border-[#333]">
                <div className="w-full text-center font-semibold text-lg mb-4 text-white bg-[#333] rounded-t-xl py-2">
                  Cloud & Hosting
                </div>
                <div className="grid grid-cols-3 gap-6 py-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/tech/aws.svg" alt="AWS" className="w-12 h-12 mb-2" />
                    <span className="text-xs">AWS</span>
                  </div>
                </div>
              </div>
            </div>

        </section>
  );

}