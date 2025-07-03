import React, { useState } from 'react';
import { ChevronRight, Target, Users, Camera, PenTool, Palette, Star, Monitor, Tv, MapPin, Globe } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSubtitle, setOpenSubtitle] = useState({});

  const services = [
    {
      id: 0,
      title: "Online Marketing",
      icon: <Globe className="w-5 h-5" />,
      subtitles: [
        {
          name: "Paid Ads & Digital Marketing",
          content: [
            "Managing ad campaigns on Facebook, Instagram, and TikTok",
            "Building goal-driven campaigns (sales, engagement, messages, traffic)",
            "Monetization setup for eligible pages (In-Stream Ads  Reels Bonuses)",
            "Rights Manager expertise to protect your content",
            "Creating smart funnels and analyzing performance"
          ]
        },
        {
          name: "Social Media Management",
          content: [
            "Monthly content calendars & creative planning",
            "Community management and audience engagement",
            " Publishing posts, Reels, and stories",
            "Performance tracking and optimization"
          ]
        },
        {
          name: "Creative Production",
          content: [
            "Product photography (studio, flatlay)",
            "Lifestyle photography (on-location or with models)",
            "Video production for Reels, Ads, TikToks, and more",
            "Graphic design for social media, ads, and more",
            "Editing, motion graphics, and color grading"
          ]
        },
        {
          name: "Content Creation",
          content: [
            "Writing scripts for Reels, Ads, and YouTube videos",
            "Visual storytelling & brand voice development",
            "Short-form content tailored to platforms",
          ]
        },
        {
          name: "Branding & Graphic Design",
          content: [
            "Logo design & full brand identity kits",
            "Custom post templates and campaign visuals",
            "Product packaging designs & marketing material mockups",
          ]
        },
        {
          name: "Influencer Marketing",
          content: [
            "Choosing the right influencers for your campaign",
            "Full management of collaboration & deliverables",
            "Measuring impact & ROI reporting"
          ]
        },
        
      ]
    },
    {
      id: 1,
      title: "Offline Marketing",
      icon: <MapPin className="w-5 h-5" />,
      subtitles: [
        {
          name: "Marketing Research & Strategy",
          content: [
            "Full market analysis: competitors, audience, trends",
            "Local area studies & growth planning",
            "Actionable strategies for real-world brand expansion"
          ]
        },
        {
          name: "Event Management & Brand Activations",
          content: [
            "Organizing product launches, activations, and corporate events",
            "Full logistics: venue, branding, invitations, media coverage",
            "Creating impactful live experiences that build connection"
          ]
        },
        {
          name: "Print & Field Marketing",
          content: [
            "Design & print of flyers, banners, roll-ups, business cards",
            "On-ground promo team coordination",
            "Seamless integration between online and offline marketing"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "TV & Radio Advertising",
      icon: <Tv className="w-5 h-5" />,
      subtitles: [
        {
          name: "Broadcast Production & Media Buying",
          content: [
            "Full TV commercial production (concept, script, shoot, edit)",
            "Radio ad production with scriptwriting and professional voiceovers",
            "Media buying on national & local TV or radio stations",
            "Ad scheduling and placement targeting the right audience"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Website Design & Development",
      icon: <Monitor className="w-5 h-5" />,
      subtitles: [
        {
          name: "Website Design & Development",
          content: [
            "Custom website design tailored to your brand",
            "Mobile & desktop responsive sites",
            "E-commerce development (online stores)",
            "Landing pages for product launches or ad campaigns",
            "SEO-ready structure for better visibility",
            "Optional site maintenance and updates"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        

        {/* Tab Navigation - Only Titles */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-2 bg-white rounded-2xl p-3 shadow-lg border border-gray-100">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base
                  ${activeTab === index
                    ? 'bg-main text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-main hover:bg-blue-50'
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
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
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
                        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
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
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-main mt-1 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
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