import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from 'react-router-hash-link';
import {
  Users,
  CreditCard,
  BarChart3,
  ShieldCheck,
  CalendarClock,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Dumbbell
} from 'lucide-react';
import Product from '../components/Product';
import './ProductPage.css';

const modules = [
  {
    title: 'Member & Attendance Automation',
    description:
      'Track daily check-ins, active memberships, freeze requests, and renewal alerts from one unified member directory.',
    icon: <Users size={28} color="var(--accent-secondary)" />
  },
  {
    title: 'Integrated Billing & Invoicing',
    description:
      'Automate recurring plan renewals, generate instant GST-ready invoices, and send automated payment reminders.',
    icon: <CreditCard size={28} color="#3b82f6" />
  },
  {
    title: 'Real-Time Revenue Analytics',
    description:
      'Monitor monthly recurring revenue, retention trends, churn risk, and trainer performance at a glance.',
    icon: <BarChart3 size={28} color="#10b981" />
  },
  {
    title: 'Access Control Integration',
    description:
      'Connect QR, RFID, or biometric door hardware so only active members gain seamless entry.',
    icon: <ShieldCheck size={28} color="#a855f7" />
  },
  {
    title: 'Trainer & Batch Scheduling',
    description:
      'Manage personal training sessions, group classes, and slot capacities without spreadsheet chaos.',
    icon: <CalendarClock size={28} color="#f59e0b" />
  },
  {
    title: 'Multi-Branch Cloud Sync',
    description:
      'Run a single studio or scale across multiple locations with role-based permissions and live cloud backups.',
    icon: <Cloud size={28} color="#ec4899" />
  }
];

const audiences = [
  {
    title: 'Independent Gyms',
    points: [
      'Replace manual registers and scattered spreadsheets',
      'Automate fee reminders so renewals never slip',
      'Launch fast with minimal staff training'
    ]
  },
  {
    title: 'Fitness & Yoga Studios',
    points: [
      'Manage class schedules and member attendance effortlessly',
      'Track package credits and trial-to-member conversions',
      'Keep members engaged with clean digital receipts'
    ]
  },
  {
    title: 'Multi-Branch Chains',
    points: [
      'Centralized dashboard for every branch in real time',
      'Role-based access for owners, managers, and trainers',
      'Compare branch revenue and growth side by side'
    ]
  }
];

const ProductPage = () => {
  return (
    <main className="product-page">
      <Helmet>
        <title>GymOS Product | JK Digital Solutions</title>
        <meta
          name="description"
          content="Explore GymOS by JK Digital Solutions — modern gym management software for member tracking, billing, access control, and real-time analytics."
        />
      </Helmet>

      <Product />

      <section className="product-modules-section">
        <div className="container">
          <h2 className="section-title">
            Built for <span className="text-gradient">Modern Gyms</span>
          </h2>
          <p className="section-subtitle">
            Every tool fitness owners need to save hours every week and scale recurring revenue.
          </p>

          <div className="product-modules-grid">
            {modules.map((mod, idx) => (
              <div key={idx} className="product-module-card glass-panel">
                <div className="product-module-icon">{mod.icon}</div>
                <h3 className="product-module-title">{mod.title}</h3>
                <p className="product-module-desc">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-audience-section">
        <div className="container">
          <h2 className="section-title">
            Who <span className="text-gradient">GymOS</span> Is For
          </h2>
          <p className="section-subtitle">
            Designed to adapt whether you operate one neighborhood gym or a growing fitness brand.
          </p>

          <div className="product-audience-grid">
            {audiences.map((item, idx) => (
              <div key={idx} className="product-audience-card glass-panel">
                <div className="product-audience-header">
                  <Dumbbell size={22} color="var(--accent-secondary)" />
                  <h3>{item.title}</h3>
                </div>
                <ul className="product-audience-list">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={18} color="var(--accent-secondary)" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="product-page-cta glass-panel">
            <h3 className="product-page-cta-title">
              Want a Live Walkthrough of <span className="text-gradient">GymOS</span>?
            </h3>
            <p className="product-page-cta-desc">
              Book a quick demo or join the early-access list to get priority onboarding for your fitness center.
            </p>
            <NavHashLink to="/#contact" smooth={true} className="btn btn-primary hover-scale">
              Request Early Access <ArrowRight size={18} />
            </NavHashLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
