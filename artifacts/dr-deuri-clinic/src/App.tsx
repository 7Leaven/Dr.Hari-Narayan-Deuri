import React, { useState, useEffect } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin,
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Eye, 
  CheckCircle2, 
  Clock,
  MapPin,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Microscope,
  Activity,
  Droplet,
  HeartPulse,
  Syringe,
  AlertCircle,
  Crosshair,
  User,
  BrainCircuit,
  Star,
} from 'lucide-react';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

// --- DATA --- //
const PHONE_NUMBER = "+91 84739 90626";
const PHONE_NUMBER_2 = "+91 99542 98387";
const whatsappMessage = `👋 Welcome to Dr. Hari Narayan Deuri's Eye Clinic. Our team will assist you as soon as possible.`;
const WHATSAPP_LINK = `https://wa.me/918473990626?text=${encodeURIComponent(whatsappMessage)}`;
const NARAYANPUR_PHONE = "+91 69003 45698";
const GOHPUR_PHONE = "+91 93653 69051";
const EMAIL = "contact@drdeuriclinic.com"; // Placeholder

const SERVICES = [
  { icon: Stethoscope, title: "Best Eye Examination", desc: "Complete eye health assessment using modern diagnostic techniques." },
  { icon: Eye, title: "Cataract Screening & Consultation", desc: "Early detection and guidance for cataract management." },
  { icon: Activity, title: "Glaucoma Screening", desc: "Regular eye pressure monitoring and optic nerve evaluation." },
  { icon: HeartPulse, title: "Diabetic Eye Examination", desc: "Retinal examination for diabetic patients to prevent vision loss." },
  { icon: Crosshair, title: "Vision Testing & Spectacle Prescription", desc: "Accurate power testing and prescription for glasses." },
  { icon: Droplet, title: "Dry Eye Treatment", desc: "Diagnosis and management of dry eye syndrome." },
  { icon: Microscope, title: "Eye Allergy Treatment", desc: "Treatment for itching, redness, watering, and allergies." },
  { icon: Syringe, title: "Eye Infection Treatment", desc: "Management of conjunctivitis and other eye infections." },
  { icon: AlertCircle, title: "Emergency Eye Care", desc: "Immediate care for eye injuries and emergencies." },
  { icon: User, title: "Foreign Body Removal", desc: "Safe removal of dust, metal particles, and foreign bodies." },
  { icon: Stethoscope, title: "General Medical Consultation", desc: "General health evaluation and medical advice." },
  { icon: BrainCircuit, title: "Clinical Psychiatry Consultation", desc: "Consultation based on clinical experience in psychiatry." },
];

const FEATURES = [
  "8+ Years Experience",
  "MBBS (AMCH) + DOMS (Guwahati)",
  "Emergency Eye Care",
  "Affordable Consultation",
  "Patient-Centered Treatment",
  "Best Eye Examination",
  "Clinical Experience at LGBRIMH",
  "Evidence-Based Treatment",
  "Trusted Across Assam"
];

const CONDITIONS = [
  "Cataract", "Glaucoma", "Dry Eyes", "Eye Allergy", "Eye Infection", 
  "Conjunctivitis", "Diabetic Retinopathy", "Blurred Vision", "Eye Pain", 
  "Red Eyes", "Watering Eyes", "Computer Vision Syndrome", "Refractive Errors", 
  "Eye Injury", "Foreign Body in Eye"
];

const TESTIMONIALS = [
  {
    name: "Ramesh Sharma",
    location: "Narayanpur",
    text: "Dr. Deuri is extremely patient and thorough. He explained my father's cataract issue so clearly. The treatment was affordable and the care was top-notch."
  },
  {
    name: "Sunita Das",
    location: "Lakhimpur",
    text: "I was suffering from severe dry eyes and computer vision syndrome. Dr. Deuri's prescription helped me recover within weeks. Truly the best eye doctor in the area."
  },
  {
    name: "Bikash Borah",
    location: "Gohpur",
    text: "I had a metal particle stuck in my eye and visited the Gohpur clinic for an emergency. He removed it safely with zero pain. Very grateful for his immediate attention."
  }
];

// --- COMPONENTS --- //

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-lg md:text-xl text-slate-900 leading-tight">
              Dr. Hari Narayan Deuri
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">EYE SPECIALIST,NARAYANPUR,GOHPUR,ASSAM </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors px-3 py-2"
            data-testid="link-call-nav"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            data-testid="btn-whatsapp-nav"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary px-4 py-3 rounded-xl font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Accepting New Patients</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Best Eye Doctor in <span className="text-primary">Narayanpur</span> & <span className="text-primary">Gohpur</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Trusted, affordable, and evidence-based eye treatment across Assam. 
              Led by Dr. Hari Narayan Deuri, bringing 8+ years of clinical excellence to your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call for Appointment
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Narayanpur Clinic</h3>
                  <p className="text-sm text-slate-500 mb-1">Drishti Opticals</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-1">
                    <Clock className="w-4 h-4" />
                    Everyday 3:30 PM – 6:30 PM
                  </div>
                  <a href={`tel:${NARAYANPUR_PHONE}`} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors">
                    <Phone className="w-3 h-3" />
                    {NARAYANPUR_PHONE}
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Gohpur Clinic</h3>
                  <p className="text-sm text-slate-500 mb-1">Laxmi Eye Opticals</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-1">
                    <Clock className="w-4 h-4" />
                    Everyday 1:00 PM – 2:30 PM
                  </div>
                  <a href={`tel:${GOHPUR_PHONE}`} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors">
                    <Phone className="w-3 h-3" />
                    {GOHPUR_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto border-8 border-white">
              <img 
                src="/images/doctor.jpeg"
                alt="Dr. Hari Narayan Deuri - Eye Specialist in Narayanpur and Gohpur, Assam" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif font-bold text-2xl mb-1 text-white/90 ">Dr. Hari Narayan Deuri</h3>
                <p className="text-white/90 font-medium">MBBS (AMCH) | DOMS (Guwahati)</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Meet Your Doctor</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg md:prose-xl text-slate-600 mx-auto"
          >
            <p className="lead text-xl text-slate-700 font-medium leading-relaxed mb-6">
              Dr. Hari Narayan Deuri is an experienced Eye Specialist (Ophthalmologist) with over 8 years of clinical experience, providing comprehensive and evidence-based eye care. He completed his MBBS from Assam Medical College (AMCH) and DOMS (Ophthalmology) from Guwahati.
            </p>
            <p className="mb-6">
              He specializes in comprehensive eye examinations, cataract screening, glaucoma management, spectacle prescription, diabetic eye screening, eye infections, emergency eye care, and vision treatment. Dr. Deuri also has clinical experience in Psychiatry (LGBRIMH, Tezpur) and Emergency Medicine, offering initial consultation and guidance for psychiatry-related concerns.
            </p>
            <p className="mb-6">
              Dr. Hari Narayan Deuri consults at Gohpur and Narayanpur, where patients regularly visit from Bihpuria, North Lakhimpur, Majuli, Biswanath, Tezpur, Dhemaji, Gogamukh, Harmuti, Itanagar, Naharlagun, Holongi, Banderdewa, Doimukh, and nearby areas of Arunachal Pradesh and across Assam.
            </p>
            <p>
              If you are searching for the best Eye Specialist in Gohpur, Eye Doctor in Narayanpur, Eye Doctor near Bihpuria, Eye Specialist near Majuli, Eye Doctor near Itanagar, Holongi, Naharlagun, or a trusted Ophthalmologist across Assam, Dr. Hari Narayan Deuri is committed to providing compassionate, affordable, and high-quality eye care for patients of all ages.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Best-in-class diagnostic and therapeutic eye care utilizing modern medical standards.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg leading-snug">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
            >
              Why Choose Dr. Deuri's Clinic?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-primary rounded-full mb-6" 
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 mb-8"
            >
              We believe every patient deserves honest, clear, and high-quality medical care. Our approach is built on trust, extensive experience, and a deep understanding of holistic health.
            </motion.p>
          </div>

          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {FEATURES.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3 opacity-80" />
                  <span className="font-medium text-slate-800 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Conditions = () => {
  return (
    <section className="py-16 bg-blue-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Conditions We Treat</h2>
          <p className="text-blue-100/80 text-lg">Best-in-class diagnosis and management for a wide range of ocular diseases and vision problems.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {CONDITIONS.map((condition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm md:text-base font-medium backdrop-blur-sm cursor-default transition-colors"
            >
              {condition}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            Patient Testimonials
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Hear from the people we've had the privilege to treat across Assam.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.location}, Assam</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Visit Our Clinics</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">Walk-ins and scheduled appointments welcome.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Call for Appointment</p>
                      <a href={`tel:${PHONE_NUMBER}`} className="block text-lg font-bold text-slate-900 hover:text-primary transition-colors">{PHONE_NUMBER}</a>
                      <a href={`tel:${PHONE_NUMBER_2}`} className="block text-lg font-bold text-slate-900 hover:text-primary transition-colors">{PHONE_NUMBER_2}</a>
                    </div>
                  </div>
                  
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="bg-[#25D366]/10 p-3 rounded-xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">WhatsApp Consultations</p>
                      <p className="text-lg font-bold text-slate-900">Message Us</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Narayanpur</h4>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Drishti Opticals<br/>
                    Narayanpur, Assam
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium bg-blue-50 px-3 py-2 rounded-lg mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Everyday 3:30 PM – 6:30 PM</span>
                  </div>
                  <a href={`tel:${NARAYANPUR_PHONE}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    {NARAYANPUR_PHONE}
                  </a>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Gohpur</h4>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Laxmi Eye Opticals<br/>
                    Hospital Road, Gohpur, Assam
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium bg-blue-50 px-3 py-2 rounded-lg mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Everyday 1:00 PM – 2:30 PM</span>
                  </div>
                  <a href={`tel:${GOHPUR_PHONE}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    {GOHPUR_PHONE}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 px-1">📍 Narayanpur Clinic</p>
                <iframe
                  title="Narayanpur Clinic Location"
                  src="https://maps.google.com/maps?q=Arugyam+Medical+Hall,+Narayanapur,+Assam+784164&output=embed"
                  className="w-full h-[230px] rounded-2xl border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 px-1">📍 Gohpur Clinic</p>
                <iframe
                  title="Gohpur Clinic Location"
                  src="https://maps.google.com/maps?q=Gohpur+Eye+Care,+NH+15,+Gohpur,+Assam+784168&output=embed"
                  className="w-full h-[230px] rounded-2xl border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Eye className="w-8 h-8 text-primary" />
              <div>
                <h2 className="font-serif font-bold text-xl leading-none text-white/90">Dr. Hari Narayan Deuri</h2>
                <span className="text-xs tracking-widest text-primary font-bold">EYE SPECIALIST</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Providing premium, compassionate, and evidence-based eye care services to patients across Narayanpur, Gohpur, and surrounding regions in Assam.
            </p>
            <div className="flex gap-4">
               {/* REPLACE ME */}
               {/*} <Facebook className="w-5 h-5 text-white" />*/}
          
              
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact & Locations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Clinic Locations</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Drishti Opticals, Narayanpur<br/>(3:30 PM – 6:30 PM)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Laxmi Eye Opticals, Gohpur<br/>(1:00 PM – 2:30 PM)</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors block">{PHONE_NUMBER}</a>
                  <a href={`tel:${PHONE_NUMBER_2}`} className="hover:text-primary transition-colors block">{PHONE_NUMBER_2}</a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Hari Narayan Deuri. All Rights Reserved.</p>
        <div className="mt-2 flex items-center justify-center gap-2">
    <span>Developed by</span>
    <a 
      href="https://www.linkedin.com/in/hrittikkumarsah" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-primary transition-colors"
    >
      <Linkedin className="w-4 h-4" />
    </a>
  </div>
        </div>
      </div>
    </footer>
  );
};


// --- MAIN APP COMPONENT --- //

function Home() {
  // SEO injection
  useEffect(() => {
    document.title = "Dr. Hari Narayan Deuri | Best Eye Specialist in Narayanpur & Gohpur, Assam";
    
    // Add meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Trusted and affordable eye care across Assam. Dr. Hari Narayan Deuri offers expert cataract screening, glaucoma treatment, and comprehensive eye exams. Visit our clinics in Narayanpur and Gohpur.');
    
    // Add OG tags
    const ogTags = [
      { property: 'og:title', content: 'Dr. Hari Narayan Deuri | Eye Specialist' },
      { property: 'og:description', content: 'Trusted and affordable eye care across Assam. Cataract screening, glaucoma treatment, and comprehensive eye exams.' },
      { property: 'og:type', content: 'website' }
    ];
    
    ogTags.forEach(tag => {
      let el = document.querySelector(`meta[property="${tag.property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', tag.property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <div className="min-h-screen w-full font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Conditions />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
