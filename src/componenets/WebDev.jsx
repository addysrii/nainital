import React from 'react';
import { Code, Layers, Gauge, Lock, Palette, Laptop, ArrowRight, Globe, CheckCircle2 } from 'lucide-react';

const WebDev = () => {
  const features = [
    {
      id: 1,
      icon: <Layers className="w-8 h-8 text-sky-400" />,
      title: "Custom CMS Solutions",
      description: "Tailored content management systems for galleries and museums to easily manage digital collections and exhibitions."
    },
    {
      id: 2,
      icon: <Gauge className="w-8 h-8 text-pink-500" />,
      title: "High Performance",
      description: "Optimized web applications that deliver seamless experiences even with large media collections."
    },
    {
      id: 3,
      icon: <Laptop className="w-8 h-8 text-yellow-400" />,
      title: "Responsive Design",
      description: "Fluid layouts that adapt perfectly to all devices, ensuring your content looks great everywhere."
    },
    {
      id: 4,
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Secure Architecture",
      description: "Built-in security measures to protect your digital assets and user data with industry best practices."
    },
    {
      id: 5,
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "Modern Stack",
      description: "Built with cutting-edge technologies like React, Next.js, and Node.js for optimal performance."
    },
    {
      id: 6,
      icon: <Palette className="w-8 h-8 text-green-500" />,
      title: "Custom Design",
      description: "Unique, branded interfaces that reflect your institution's identity while ensuring accessibility."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your needs and goals to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design",
      description: "Creating wireframes and visual designs that align with your brand identity."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean, maintainable code and regular updates."
    },
    {
      step: "04",
      title: "Deployment",
      description: "Thorough testing and smooth deployment to ensure everything works perfectly."
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js", "TypeScript", "MongoDB",
    "AWS & Cloud", "GraphQL", "Tailwind CSS", "Docker"
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      {/* Hero Section */}
      <div className="relative text-center mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-pink-500/10 blur-3xl -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-8 pb-2">
          Web Development Solutions
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mt-4 font-medium">
          Creating immersive digital experiences for cultural institutions with modern web technologies
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-64 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full blur-sm"></div>
        
        {/* Hero Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="group relative bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-sky-400/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-1"
          >
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-sky-400/50 rounded-br-lg"></div>

            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-200 font-medium leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-16 border border-sky-400/30">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-red-500/5 to-yellow-400/5 rounded-lg"></div>
        <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-sky-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-16 border border-sky-400/30">
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500/50 rounded-tl-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-sky-400/50 rounded-br-lg"></div>

        <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center">
          Our Development Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="text-6xl font-bold text-yellow-400/10 absolute -top-8 -left-4">
                {step.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-200 font-medium">
                  {step.description}
                </p>
              </div>
              {index !== processSteps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-sky-400/30" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-pink-500/10 blur-2xl -z-10"></div>
        <Globe className="w-16 h-16 mx-auto mb-6 text-sky-400/50" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help bring your cultural institution into the digital age with a custom web solution.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold rounded-lg hover:opacity-90 transition-all hover:scale-105 duration-300 shadow-lg shadow-pink-500/20">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default WebDev;