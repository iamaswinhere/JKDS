import { Monitor, Smartphone, Share2, TrendingUp, Search, Video, Sparkles, Code2, Wrench } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Website Development',
      description: 'High-performance, beautifully designed websites built with modern frameworks to convert visitors into customers.',
      icon: <Monitor size={32} color="var(--accent-primary)" />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences on any device.',
      icon: <Smartphone size={32} color="var(--accent-secondary)" />
    },
    {
      title: 'Social Media Handling',
      description: 'Comprehensive management of your social profiles to maintain a consistent and engaging brand voice.',
      icon: <Share2 size={32} color="#f43f5e" />
    },
    {
      title: 'Social Media Growth',
      description: 'Strategic campaigns and viral content creation designed to rapidly expand your audience and reach.',
      icon: <TrendingUp size={32} color="#10b981" />
    },
    {
      title: 'SEO',
      description: 'Advanced search engine optimization to ensure your brand ranks at the top of Google for relevant keywords.',
      icon: <Search size={32} color="#f59e0b" />
    },
    {
      title: 'Content Creation',
      description: 'Engaging reels, promotional videos, and creative visual storytelling crafted to captivate your audience.',
      icon: <Video size={32} color="#a855f7" />
    },
    {
      title: 'AI Content Creation',
      description: 'Next-generation AI-powered videos, visuals, and copywriting to scale your brand content faster.',
      icon: <Sparkles size={32} color="#06b6d4" />
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions and internal tools engineered to streamline your unique business workflows.',
      icon: <Code2 size={32} color="#3b82f6" />
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing updates, security monitoring, backups, and performance tuning to keep your site running smoothly.',
      icon: <Wrench size={32} color="#ec4899" />
    }
  ];

  const handleCardClick = (title) => {
    const text = `Hi JK Digital Solutions, I am interested in your ${title} services.`;
    const whatsappUrl = `https://wa.me/918921809791?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">
          End-to-end digital solutions designed to scale your business and dominate your industry.
        </p>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass-panel"
              onClick={() => handleCardClick(service.title)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
