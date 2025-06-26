import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Camera, Heart, Mountain, Sunset, Star } from 'lucide-react';

const NainitalStory = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const storyData = [
    {
      title: "The Journey Begins",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "Arriving through the curves of lands to the mountains in a death nearing bus ride the driver aimed to make us feel the adventure. But entering the heaven is always adventurous",
      bgImage:"https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917939/nn10_gu42tr.jpg",
      storyImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917931/nn1_cf5x0p.jpg",
      overlay: "bg-black/40",
      point : "Just saw my death when on a sharp turn the bus was to collide with an army truck "
    },
    {
      title: "Hanuman Gadhi - The Peace You Want",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "After an exciting journey and settling into a cozy room, we decided to step out and embrace the magic of Nainital. Our first stop was the serene Hanuman Garhi Mandir, where perfect peace seemed to be waiting just for us. Temples, after all, are more than just places to visit — they are sanctuaries of hope and emotion, where the soul finds quiet strength.",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917939/nn11_xjaifv.jpg",
      storyImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917934/nb1_nicdyb.jpg",
      overlay: "bg-blue-900/30",
      point : "Due to lack of cash and none of acceptance of digital payments we were not able to buy prashad. Still got lot of blessings "
    },
    {
      title: "Moving Forward",
      icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "Lover's Bridge stretched out like a quiet promise suspended in time. Each step across its weathered planks felt like walking through a memory whispered by the wind. Below, the gentle stream caught the fading light, mirroring the golden hush of twilight. Hand-carved railings bore initials of stories long passed, etched deep like confessions only the mountains could keep. It wasn't just a bridge—it was where hearts paused, lingered, and sometimes left pieces behind.",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917951/nn12_prujzi.jpg",
     storyImage:  "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917933/nn2_drhcos.jpg",
      overlay: "bg-blue-900/35",
      point :"Out of nowhere, a group of Haryanvi singers pulled up in their car and burst into a powerful verse of a Haryanvi song, leaving us completely stunned and speechless. It was the most unexpected—and electrifying—moment of the day"
    },
    {
      title: "Khurpatal Lakefront",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "From the Khurpatal Lakefront, it felt like the entire Nainital unfolded before our eyes. The view was nothing short of poetic—hills layered like verses, the lake shimmering like a quiet rhyme. For a moment, we just stood there, soaking in a scene that felt straight out of a dream",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917956/nn13_xa2ohq.jpg",
      storyImage:"https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917932/nb2_oih1oq.jpg",
      overlay: "bg-teal-900/30",
     point : " On our guide's advice, we filled our bottles from a stream flowing straight from the mountains. It tasted so pure—it felt like nature's own energy drink, instantly refreshing us like nothing else could."
    },
    {
      title: "When Water Healed",
      icon: <Mountain className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "Standing by the waterfall in Nainital, it felt like the water was speaking straight to my soul—splashing onto me as if saying, 'There's no such thing as stress if you truly love nature.' That moment, so raw and pure, took me back to my childhood—to those carefree days when my mother used to pour water over my head while bathing me. It wasn't just water; it was joy, memory, and healing, all at once",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917944/nn16_pxlaqj.jpg",
      storyImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917931/nb3_fohnny.jpg",
      overlay: "bg-slate-800/40",
      point:"We watched kids splashing in the icy water, carefree and full of joy, untouched by the fear of falling ill. It reminded me that when your mind is free, your soul knows how to truly enjoy life."
    },
    {
      title: "Golden Hour Reflections",
      icon: <Sunset className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "Nainital Lake lies nestled in the heart of the hills, like a jewel cradled by the Himalayas. Its surface, calm and glassy, mirrors the drifting clouds above and the whispered dreams of those who walk its shores. Shaped like an eye, it watches over the town with a serene gaze, holding centuries of legends and longing in its depths. As wooden boats glide across the water, they carry more than travelers—they carry moments paused in time. In the early morning mist or the golden hue of sunset, the lake becomes a canvas where nature and nostalgia quietly meet",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917944/nn15_z0bh53.jpg",
      storyImage:  "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917930/imb5_s3wwb5.jpg",
      overlay: "bg-amber-900/25",
      point:"We were about to leave nainital with a frustrated mind without doing the boating but somehow we convinced each other to give it a try and yes the decision of spending an hour in lake gave us the best memory of the day ."
    },
    {
      title: "Carrying Nainital Home",
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      content: "Leaving Nainital felt strangely hollow — like leaving a part of yourself behind. The late-night mountain drive to Haldwani was both eerie and exhilarating, with the winding roads whispering goodbye through the darkness. At the moment, it didn't sting much — like how we leave childhood behind without realizing its weight. But now, with every breath of flatland air, I miss that quiet chaos, that misty charm. Nainital isn't just a place — it's a memory that blooms brighter in absence",
      bgImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917938/nn14_r5tm6h.jpg",
      storyImage: "https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917933/nn4_vi34f9.jpg",
      overlay: "bg-black/40",
      point:"While driving down to Haldwani at night, our driver bhaiya suddenly said, \"Yaha janwaron ka bhi khatra hai.\" In that instant, the fun turned into fear — the dark forest felt alive, and every sound outside made our hearts race."
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url("https://res.cloudinary.com/dnnl72vrp/image/upload/v1750917934/nn7_lkhkkj.jpg")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 drop-shadow-2xl">
            Nainital
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-xl sm:max-w-2xl mx-auto drop-shadow-lg px-4">
            A journey through the lake city that stole my heart
          </p>
          <button 
            onClick={() => scrollToSection(0)}
            className="group backdrop-blur-md border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Begin the Story
            <ChevronDown className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
          </button>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
        </div>
      </div>

      {/* Story Sections */}
      {storyData.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          className="min-h-screen flex items-center justify-center py-10 sm:py-16 lg:py-20 relative"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${section.bgImage}')`
            }}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 ${section.overlay}`} />
          
          {/* Parallax Effect Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={`transform transition-all duration-1000 ${
                isVisible[`section-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                {/* Content Card */}
                <div className="backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 backdrop-blur-lg rounded-full border border-white/30 shrink-0">
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-xl break-words">
                        {section.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-white/80">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Nainital, Uttarakhand</span>
                        </div>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full" />
                        <span className="text-xs sm:text-sm">Chapter {index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content with Photo Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* Photo Section */}
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
                      <div className="relative group">
                        <img
                          src={section.storyImage}
                          alt={section.title}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] border border-white/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl sm:rounded-2xl" />
                        
                        {/* Floating timestamp */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <div className="bg-black/50 backdrop-blur-lg rounded-full px-2 sm:px-3 py-1 border border-white/20">
                            <span className="text-white/90 text-xs font-medium">Chapter {index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Story Content */}
                    <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 font-light italic">
                            "{section.content}"
                          </p>
                        </div>
                        
                        {/* Story Details */}
                        <div className="backdrop-blur-lg border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                            <span className="text-white/90 font-medium text-sm sm:text-base">Story Moment</span>
                          </div>
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            {section.point}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements - Hidden on small screens for cleaner look */}
          <div className="hidden sm:block absolute top-1/4 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse" />
          <div className="hidden sm:block absolute top-1/3 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-ping" />
          <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce" />
        </div>
      ))}

      {/* Navigation Dots - Only on larger screens */}
      {!isMobile && (
        <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3 sm:space-y-4">
          {storyData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                isVisible[`section-${index}`] 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              title={`Chapter ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl">
            Until Next Time
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Every journey leaves footprints on our hearts. Nainital left mountains of memories, 
            reflections in pristine waters, and whispers of the wind through pine trees.
          </p>
          
          {/* Story Navigation */}
          <div className="backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Relive the Journey</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {storyData.slice(0, 4).map((story, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="group backdrop-blur-md border border-white/20 hover:border-white/40 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-white/80 group-hover:text-white mb-2 flex justify-center">
                    {story.icon}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 group-hover:text-white font-medium leading-tight">
                    {story.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NainitalStory;
