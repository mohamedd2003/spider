import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Target, Users, Camera, PenTool, Palette, Star, Monitor, Tv, MapPin, Globe } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSubtitle, setOpenSubtitle] = useState({});
  const { t } = useTranslation();

  const services = [
    {
      id: 0,
      title: t('services.onlineMarketing'),
      icon: <Globe className="w-5 h-5" />,
      subtitles: [
        {
          name: t('services.paidAds'),
          content: [
            t('services.paidAds_1'),
            t('services.paidAds_2'),
            t('services.paidAds_3'),
            t('services.paidAds_4'),
            t('services.paidAds_5'),
          ]
        },
        {
          name: t('services.socialMedia'),
          content: [
            t('services.socialMedia_1'),
            t('services.socialMedia_2'),
            t('services.socialMedia_3'),
            t('services.socialMedia_4'),
          ]
        },
        {
          name: t('services.creativeProduction'),
          content: [
            t('services.creativeProduction_1'),
            t('services.creativeProduction_2'),
            t('services.creativeProduction_3'),
            t('services.creativeProduction_4'),
            t('services.creativeProduction_5'),
          ]
        },
        {
          name: t('services.contentCreation'),
          content: [
            t('services.contentCreation_1'),
            t('services.contentCreation_2'),
            t('services.contentCreation_3'),
          ]
        },
        {
          name: t('services.brandingDesign'),
          content: [
            t('services.brandingDesign_1'),
            t('services.brandingDesign_2'),
            t('services.brandingDesign_3'),
          ]
        },
        {
          name: t('services.influencerMarketing'),
          content: [
            t('services.influencerMarketing_1'),
            t('services.influencerMarketing_2'),
            t('services.influencerMarketing_3'),
          ]
        },
      ]
    },
    {
      id: 1,
      title: t('services.offlineMarketing'),
      icon: <MapPin className="w-5 h-5" />,
      subtitles: [
        {
          name: t('services.marketResearch'),
          content: [
            t('services.marketResearch_1'),
            t('services.marketResearch_2'),
            t('services.marketResearch_3'),
          ]
        },
        {
          name: t('services.eventManagement'),
          content: [
            t('services.eventManagement_1'),
            t('services.eventManagement_2'),
            t('services.eventManagement_3'),
          ]
        },
        {
          name: t('services.printField'),
          content: [
            t('services.printField_1'),
            t('services.printField_2'),
            t('services.printField_3'),
          ]
        }
      ]
    },
    {
      id: 2,
      title: t('services.tvRadio'),
      icon: <Tv className="w-5 h-5" />,
      subtitles: [
        {
          name: t('services.broadcast'),
          content: [
            t('services.broadcast_1'),
            t('services.broadcast_2'),
            t('services.broadcast_3'),
            t('services.broadcast_4'),
          ]
        }
      ]
    },
    {
      id: 3,
      title: t('services.webDev'),
      icon: <Monitor className="w-5 h-5" />,
      subtitles: [
        {
          name: t('services.webDesign'),
          content: [
            t('services.webDesign_1'),
            t('services.webDesign_2'),
            t('services.webDesign_3'),
            t('services.webDesign_4'),
            t('services.webDesign_5'),
            t('services.webDesign_6'),
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        

        {/* Tab Navigation - Only Titles */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-2 bg-white dark:bg-gray-900 rounded-2xl p-2 sm:p-3 shadow-lg border border-gray-100 dark:border-gray-700">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm md:text-base
                  ${activeTab === index
                    ? 'bg-main text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:text-main hover:bg-blue-50 dark:hover:bg-white/10'
                  }
                  min-w-0 flex-shrink-0
                `}
              >
                {service.icon}
                <span className="whitespace-nowrap">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with Subtitles */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-4 sm:p-8 md:p-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                  transition-all duration-500 ease-in-out
                  ${activeTab === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 absolute pointer-events-none'
                  }
                `}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-main text-white rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                {/* Subtitles and their content */}
                <div className="space-y-8">
                  {service.subtitles.map((subtitle, subtitleIndex) => (
                    <div key={subtitleIndex} className="border-l-4 border-[#125e51] pl-6">
                      <button
                        type="button"
                        className="w-full text-left focus:outline-none"
                        onClick={() =>
                          setOpenSubtitle((prev) => ({
                            ...prev,
                            [activeTab]: prev[activeTab] === subtitleIndex ? null : subtitleIndex
                          }))
                        }
                      >
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-between">
                          {subtitle.name}
                          <span className={`transition-transform duration-200 ml-2 ${openSubtitle[activeTab] === subtitleIndex ? 'rotate-90' : ''}`}>
                            <ChevronRight className="w-4 h-4 text-main" />
                          </span>
                        </h4>
                      </button>
                      {openSubtitle[activeTab] === subtitleIndex && (
                        <div
                          className="grid md:grid-cols-2 gap-3 mb-4 transition-all duration-300 ease-in-out transform origin-top"
                          style={{
                            opacity: openSubtitle[activeTab] === subtitleIndex ? 1 : 0,
                            transform: openSubtitle[activeTab] === subtitleIndex ? 'scaleY(1)' : 'scaleY(0.95)',
                          }}
                        >
                          {subtitle.content.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-blue-50 dark:hover:bg-white/10 transition-colors duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-main mt-1 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Services;