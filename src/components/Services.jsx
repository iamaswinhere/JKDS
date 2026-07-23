import { Monitor, Smartphone, Share2, TrendingUp, Search, Megaphone } from 'lucide-react';
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
      title: 'Ad Promotion',
      description: 'Data-driven Google and Instagram ad campaigns designed to maximize ROI and generate high-quality leads.',
      icon: <Megaphone size={32} color="#a855f7" />
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
