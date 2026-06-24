export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/fourkay_background.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left: Glassmorphism Panel */}
        <div className="md:col-span-7 lg:col-span-6">
          <div className="bg-[#0D0D0D]/65 backdrop-blur-[16px] border border-primary/20 p-8 md:p-12 rounded-xl">
            <p className="font-eyebrow-label text-eyebrow-label text-primary uppercase mb-stack-md tracking-[0.2em]">Premium Grooming & Spa · Ruaka & Kiambu Road</p>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-off-white-text mb-stack-lg leading-tight">Discover the Art of Precision Grooming</h1>
            <div className="flex flex-col sm:flex-row gap-stack-md">
              <button className="bg-primary text-[#1A1410] font-button-text text-button-text px-8 py-4 rounded uppercase hover:bg-primary-container transition-colors duration-300 text-center">
                Book Your Appointment
              </button>
              <button className="border border-primary text-primary font-button-text text-button-text px-8 py-4 rounded uppercase hover:bg-primary/10 transition-colors duration-300 text-center">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* Right: Next Available Slot */}
        <div className="hidden md:block md:col-span-5 lg:col-span-4 lg:col-start-9">
          <div className="bg-charcoal-surface border border-primary p-6 rounded-xl shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
            <div className="flex items-center justify-between mb-stack-md">
              <h3 className="font-body-lg text-body-lg text-off-white-text font-semibold">Next Available Slot</h3>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            </div>
            <div className="flex items-center gap-stack-md mb-stack-lg p-4 bg-background rounded-lg border border-outline-variant">
              <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden flex-shrink-0 border border-primary/30">
                <img alt="Portrait of a professional barber" className="w-full h-full object-cover" src="/images/barber-portrait.jpg" />
              </div>
              <div>
                <p className="font-body-md text-body-md text-off-white-text font-medium">Master Barber</p>
                <p className="font-body-lg text-body-lg text-primary font-bold">Today, 2:30 PM</p>
              </div>
            </div>
            <button className="w-full bg-success-green text-white font-button-text text-button-text px-4 py-3 rounded uppercase hover:bg-opacity-90 transition-opacity duration-300 text-center tracking-wider">
              Book This Slot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
