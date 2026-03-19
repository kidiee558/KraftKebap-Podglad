import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Award, ChevronRight, Menu, X, ExternalLink, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://github.com/kidiee558/KraftKebap/blob/main/logopoprawne.png?raw=true";

const MEAT_IMAGES = [
  "https://github.com/kidiee558/KraftKebap/blob/main/599809059_18328495297246911_5175760395138560062_n.jpg?raw=true",
  "https://github.com/kidiee558/KraftKebap/blob/main/587532809_18328495648246911_8222227881680595727_n.jpg?raw=true",
  "https://github.com/kidiee558/KraftKebap/blob/main/587421482_18328495270246911_3015336002903315320_n.jpg?raw=true",
  "https://github.com/kidiee558/KraftKebap/blob/main/586688613_18328495657246911_7344040469263774384_n.jpg?raw=true"
];

const VIDEOS = [
  {
    url: "https://github.com/kidiee558/KraftKebap/raw/refs/heads/main/czikenkraftkebap.mp4",
    title: "NASZ KURCZAK"
  },
  {
    url: "https://github.com/kidiee558/KraftKebap/raw/refs/heads/main/kanapkawypasxd.mp4",
    title: "WYPASIONA KANAPKA"
  },
  {
    url: "https://github.com/kidiee558/KraftKebap/raw/refs/heads/main/miensko.mp4",
    title: "ŚWIEŻE MIĘSO"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-kraft-black text-zinc-100 font-sans selection:bg-kraft-gold selection:text-kraft-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-kraft-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
              <img src={LOGO_URL} alt="Kraft Kebap Logo" className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`} />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="font-sans font-bold text-sm tracking-widest hover:text-kraft-gold transition-colors uppercase">O nas</a>
              <a href="#meat" onClick={(e) => { e.preventDefault(); scrollToSection('meat'); }} className="font-sans font-bold text-sm tracking-widest hover:text-kraft-gold transition-colors uppercase">Nasze Mięso</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="font-sans font-bold text-sm tracking-widest hover:text-kraft-gold transition-colors uppercase">Galeria</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="font-sans font-bold text-sm tracking-widest hover:text-kraft-gold transition-colors uppercase">Kontakt</a>
              <a 
                href="tel:+48724338376" 
                className="inline-flex items-center justify-center px-6 py-3 bg-kraft-gold text-kraft-black rounded-full hover:bg-white transition-all duration-300 font-sans font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(212,163,91,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                ZAMÓW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-kraft-gold hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-kraft-black/95 backdrop-blur-md overflow-hidden border-t border-zinc-800"
            >
              <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="w-full text-center py-3 font-display text-2xl tracking-widest hover:text-kraft-gold uppercase">O nas</a>
                <a href="#meat" onClick={(e) => { e.preventDefault(); scrollToSection('meat'); }} className="w-full text-center py-3 font-display text-2xl tracking-widest hover:text-kraft-gold uppercase">Nasze Mięso</a>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="w-full text-center py-3 font-display text-2xl tracking-widest hover:text-kraft-gold uppercase">Galeria</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="w-full text-center py-3 font-display text-2xl tracking-widest hover:text-kraft-gold uppercase">Kontakt</a>
                <a 
                  href="tel:+48724338376" 
                  className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-kraft-gold text-kraft-black rounded-full font-sans font-black text-lg uppercase tracking-widest shadow-[0_0_15px_rgba(212,163,91,0.4)]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  724 338 376
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 sm:pt-32 sm:pb-32 overflow-hidden bg-kraft-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={MEAT_IMAGES[0]} 
            alt="Kraft Kebap Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kraft-black via-kraft-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-street-texture mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center -mt-16 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-2 sm:mb-12"
          >
            <img src={LOGO_URL} alt="Kraft Kebap" className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg sm:text-2xl md:text-4xl text-white mb-4 sm:mb-10 max-w-2xl mx-auto font-display tracking-widest uppercase text-glow">
              Ręczna robota. Prawdziwe mięso. Zero masówki.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <a 
                href="tel:+48724338376" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-10 sm:py-4 bg-kraft-gold text-kraft-black rounded-full hover:bg-white transition-all duration-300 font-sans font-black text-xs sm:text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(212,163,91,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                ZAMÓW TERAZ
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-10 sm:py-4 bg-transparent border-2 border-kraft-gold text-kraft-gold rounded-full hover:bg-kraft-gold hover:text-kraft-black transition-all duration-300 font-sans font-black text-xs sm:text-lg uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,163,91,0.5)]"
              >
                JAK DOJECHAĆ
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Slanted Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-kraft-dark skew-section origin-bottom-left z-20 translate-y-16"></div>
      </section>

      {/* Info Bar */}
      <div className="bg-kraft-dark text-white py-16 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a 
            href="https://www.google.com/search?sxsrf=ANbL-n5C9W-AjJ14GvQMl47AP-xLZmpggQ:1773862819415&q=Kraft+Kebap+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTQzMjEyszA1tTAzNzA1NTIx3MDI-IpRyLsoMa1EwTs1KbFAwb8gMy8zdRErFkEAzj45NUQAAAA&rldimm=5162426855867055241&tbm=lcl&hl=pl-PL#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16 group cursor-pointer"
          >
            <div className="flex space-x-2 mb-4 group-hover:scale-110 transition-transform duration-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 text-kraft-gold fill-current drop-shadow-[0_0_12px_rgba(212,163,91,0.8)]" />
              ))}
            </div>
            <span className="font-display text-3xl md:text-4xl tracking-widest text-white mb-2 group-hover:text-kraft-gold transition-colors">OCENA 5.0 NA GOOGLE</span>
            <span className="font-sans text-zinc-400 mb-6 font-medium">na podstawie ponad 100 opinii</span>
            <div className="inline-flex items-center justify-center px-8 py-3 bg-kraft-gold text-kraft-black rounded-full group-hover:bg-white transition-all duration-300 font-sans font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(212,163,91,0.4)]">
              <Star className="w-4 h-4 mr-2" />
              SPRAWDŹ NASZE OPINIE
            </div>
          </motion.a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-kraft-gold/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-kraft-gold/10 flex items-center justify-center mb-4 text-kraft-gold">
                <MapPin className="w-8 h-8" />
              </div>
              <span className="font-display text-4xl tracking-wider mb-2">MORAWIN 2A</span>
              <span className="font-sans font-medium text-zinc-400">62-834 CEKÓW</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-kraft-gold/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-kraft-gold/10 flex items-center justify-center mb-4 text-kraft-gold">
                <Clock className="w-8 h-8" />
              </div>
              <span className="font-display text-2xl lg:text-3xl tracking-wider mb-2">WTOREK-NIEDZIELA</span>
              <span className="font-sans font-medium text-zinc-400">12:00 - 20:00</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-kraft-gold/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-kraft-gold/10 flex items-center justify-center mb-4 text-kraft-gold">
                <Phone className="w-8 h-8" />
              </div>
              <span className="font-display text-4xl tracking-wider mb-2">ZADZWOŃ</span>
              <span className="font-sans font-bold text-kraft-gold text-xl">724-338-376</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About / Meat Section */}
      <section id="meat" className="py-32 bg-kraft-black relative overflow-hidden">
        <div className="absolute inset-0 bg-street-texture opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 text-kraft-gold font-sans font-bold tracking-widest uppercase mb-4">
                <Flame className="w-5 h-5" />
                <span>Prawdziwy Kebab</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-white mb-6 leading-[0.9] whitespace-nowrap">
                RĘCZNA PRODUKCJA.<br/>
                <span className="text-kraft-gold text-glow">BEZ KOMPROMISÓW.</span>
              </h2>
              
              <p className="text-zinc-400 text-lg font-sans leading-relaxed mb-10">
                Mięso zawarte w naszym kebabie charakteryzuje się w 100% ręcznym procesem produkcji. 
                Nie używamy gotowych, masowych bloków mięsnych. Każda porcja to starannie dobrane składniki 
                i rzemieślnicza praca.
              </p>
              
              <div className="bg-gradient-to-br from-zinc-900 to-kraft-black p-2 sm:p-8 rounded-3xl border border-zinc-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-kraft-gold/5 rounded-full blur-3xl group-hover:bg-kraft-gold/10 transition-colors"></div>
                <h3 className="text-3xl sm:text-4xl text-white mb-4 mt-2 ml-2 sm:mt-0 sm:ml-0 flex items-center font-display tracking-wider">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-kraft-gold mr-3 flex-shrink-0" />
                  MIĘSO OD PIRI-PIRI
                </h3>
                <p className="text-zinc-400 font-sans mb-6 ml-2 sm:ml-0 text-sm sm:text-base">
                  Jesteśmy dumni, że używamy kultowego mięsa od Piri-Piri, co gwarantuje niepowtarzalny smak i najwyższą jakość, docenianą przez smakoszy w całej Polsce.
                </p>
                <div className="w-full flex justify-center">
                  {/* Wersja mobilna (idealnie dopasowany box do przeskalowanego iframe) */}
                  <div className="block sm:hidden w-[280px] h-[472px] rounded-xl overflow-hidden bg-white relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[590px] origin-top scale-[0.80]">
                      <iframe 
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpiripirilublin%2Fposts%2Fpfbid02J81yWKHngiUr2uwm9EWNwdFMnsiP59YSwL9bBFZL5kuZvJc5ihYkmm6kh2WoxkPbl&show_text=true&width=350" 
                        width="350" 
                        height="590" 
                        style={{ border: 'none', overflow: 'hidden' }} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                  {/* Wersja desktopowa */}
                  <div className="hidden sm:flex w-[500px] h-[740px] rounded-xl bg-white overflow-hidden justify-center">
                    <iframe 
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpiripirilublin%2Fposts%2Fpfbid02J81yWKHngiUr2uwm9EWNwdFMnsiP59YSwL9bBFZL5kuZvJc5ihYkmm6kh2WoxkPbl&show_text=true&width=500" 
                      width="500" 
                      height="740" 
                      style={{ border: 'none', overflow: 'hidden' }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 relative"
            >
              <div className="absolute inset-0 bg-kraft-gold/20 blur-[100px] rounded-full -z-10"></div>
              
              {/* Main Prominent Image (The Meat) */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-kraft-gold/30 relative group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-kraft-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                  <span className="text-kraft-gold font-display text-2xl tracking-widest">Prawdziwe Mięso</span>
                </div>
                <img 
                  src="https://github.com/kidiee558/KraftKebap/blob/main/587532809_18328495648246911_8222227881680595727_n.jpg?raw=true" 
                  alt="Kraft Kebap Główne Mięso" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>

              {/* Secondary Images Grid */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-800 aspect-[4/3] md:aspect-video">
                  <img 
                    src="https://github.com/kidiee558/KraftKebap/blob/main/599809059_18328495297246911_5175760395138560062_n.jpg?raw=true" 
                    alt="Kraft Kebap Detal 1" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-800 aspect-square">
                    <img 
                      src="https://github.com/kidiee558/KraftKebap/blob/main/587421482_18328495270246911_3015336002903315320_n.jpg?raw=true" 
                      alt="Kraft Kebap Detal 2" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-800 aspect-square">
                    <img 
                      src="https://github.com/kidiee558/KraftKebap/blob/main/586688613_18328495657246911_7344040469263774384_n.jpg?raw=true" 
                      alt="Kraft Kebap Detal 3" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section (Slanted) */}
      <section id="about" className="py-32 bg-kraft-gold text-kraft-black relative skew-section my-16">
        <div className="skew-section-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
              <img 
                src="https://github.com/kidiee558/KraftKebap/blob/main/wyroznienie.jpg?raw=true" 
                alt="Orły Gastronomii 2026" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-center md:text-left"
            >
              <div className="inline-flex items-center space-x-2 text-kraft-black font-sans font-black tracking-widest uppercase mb-4 bg-white/30 px-4 py-1 rounded-full">
                <Award className="w-5 h-5" />
                <span>Wyróżnienie</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl mb-6 leading-[0.85]">
                LAUREAT PLEBISCYTU<br/>
                <span className="text-white drop-shadow-md whitespace-nowrap">ORŁY GASTRONOMII</span><br/>
                <span className="text-white drop-shadow-md">2026</span>
              </h2>
              <p className="text-kraft-black/80 font-sans font-medium text-lg leading-relaxed">
                Dzięki Waszemu zaufaniu i naszym staraniom o najwyższą jakość, zostaliśmy wyróżnieni w prestiżowym plebiscycie Orły Gastronomii. To dla nas ogromny zaszczyt i motywacja do dalszego serwowania najlepszego kebaba w regionie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery / Videos */}
      <section id="gallery" className="py-32 bg-kraft-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-street-texture opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl text-white mb-4">ZOBACZ TO NA <span className="text-kraft-gold text-glow">WŁASNE OCZY</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VIDEOS.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group rounded-3xl overflow-hidden bg-kraft-black border border-zinc-800 hover:border-kraft-gold/50 transition-colors shadow-2xl"
              >
                <div className="aspect-[9/16] relative bg-black">
                  <video 
                    src={video.url} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kraft-black via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-3xl text-white font-display tracking-wider drop-shadow-lg">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-32 bg-kraft-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl text-white mb-12">ODWIEDŹ <span className="text-kraft-gold text-glow">NAS</span></h2>
              
              <div className="space-y-12">
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mr-6 group-hover:border-kraft-gold transition-colors">
                    <MapPin className="w-8 h-8 text-kraft-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-display tracking-wider">ADRES</h3>
                    <p className="text-zinc-400 font-sans text-lg">Morawin 2A<br/>62-834 Ceków</p>
                    <a 
                      href="https://www.google.com/maps/dir//Kraft+Kebap,+2A,+62-834+Morawin/@50.0662272,19.939328,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471add2534caaf8b:0x47a49fdfaae47c89!2m2!1d18.2630148!2d51.8488792?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-kraft-gold hover:text-white transition-colors font-sans font-bold text-sm uppercase tracking-widest"
                    >
                      WYZNACZ TRASĘ <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mr-6 group-hover:border-kraft-gold transition-colors">
                    <Clock className="w-8 h-8 text-kraft-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-display tracking-wider">GODZINY OTWARCIA</h3>
                    <p className="text-zinc-400 font-sans text-lg">Wtorek - Niedziela<br/>12:00 - 20:00</p>
                    <p className="text-kraft-gold/80 font-sans text-sm font-bold mt-2 uppercase tracking-wider">Poniedziałek: Zamknięte</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mr-6 group-hover:border-kraft-gold transition-colors">
                    <Phone className="w-8 h-8 text-kraft-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2 font-display tracking-wider">ZAMÓWIENIA</h3>
                    <p className="text-5xl text-kraft-gold mb-6 font-display tracking-wider">724-338-376</p>
                    <a 
                      href="tel:+48724338376"
                      className="inline-flex items-center justify-center px-8 py-4 bg-kraft-gold text-kraft-black rounded-full hover:bg-white transition-all duration-300 font-sans font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(212,163,91,0.4)] hover:scale-105"
                    >
                      ZADZWOŃ TERAZ
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[600px] rounded-3xl overflow-hidden shadow-2xl relative bg-kraft-dark border border-zinc-800"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156516.3243958933!2d18.11883359146118!3d51.84887920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471add2534caaf8b%3A0x47a49fdfaae47c89!2sKraft%20Kebap!5e0!3m2!1spl!2spl!4v1710788000000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kraft-black py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex flex-col items-center">
            <img src={LOGO_URL} alt="Kraft Kebap Logo" className="h-16 w-auto mb-4 grayscale opacity-50" />
            <div>
              <h2 className="text-3xl text-kraft-gold font-display tracking-wider">
                KRAFT KEBAP
              </h2>
              <p className="text-zinc-600 font-sans font-medium text-xs mt-2 uppercase tracking-widest">© {new Date().getFullYear()} WSZELKIE PRAWA ZASTRZEŻONE.</p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://share.google/fk8EbUImK6fhbfEjR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:text-kraft-gold hover:bg-zinc-800 transition-all">
              <span className="sr-only">Google Profile</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
