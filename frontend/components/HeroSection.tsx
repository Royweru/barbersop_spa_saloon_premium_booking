export default function HeroSection() {
  return (
    <section className="relative rhythmic-bg-dark h-[100dvh] flex items-center justify-center py-section-padding-v px-margin-mobile md:px-gutter overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-100" 
          style={{ backgroundImage: "url('/images/hero_salon_spa.png')" }}
        />
        {/* Adaptive Gradient: Solid dark overlay for mobile text readability, fading to right on desktop */}
        <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0D0D0D]/90 md:via-[#0D0D0D]/40 md:to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto max-w-container-max grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-8 space-y-stack-lg">
          <p className="font-eyebrow-label text-eyebrow-label text-primary uppercase tracking-widest">PREMIUM GROOMING & SPA · RUAKA & KIAMBU ROAD</p>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-off-white-text">Discover the Art of Precision Grooming</h1>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="font-button-text text-button-text bg-primary text-charcoal-text px-8 py-4 rounded hover:bg-primary-fixed transition-colors shadow-lg">Book Your Appointment</button>
            <button className="font-button-text text-button-text border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors">View Services</button>
          </div>
        </div>
        <div className="lg:col-span-4 mt-stack-lg lg:mt-0 flex justify-center lg:justify-end">
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-6 shadow-2xl max-w-sm w-full card-hover-lift">
            <div className="flex justify-between items-start mb-4">
              <span className="font-eyebrow-label text-eyebrow-label text-primary">Next Available Slot</span>
              <span className="bg-surface-container py-1 px-3 rounded-full text-xs text-on-surface-variant border border-outline-variant">Ruaka Branch</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/50" 
                alt="Barber portrait" 
                src="/images/barber-portrait.jpg" 
              />
              <div>
                <h3 className="font-headline-md text-headline-md text-off-white-text text-lg">Today, 2:30 PM</h3>
                <p className="text-on-surface-variant text-sm">with James (Master Barber)</p>
              </div>
            </div>
            <button className="w-full font-button-text text-button-text bg-success-green text-white px-4 py-3 rounded hover:opacity-90 transition-opacity text-center">Book This Slot</button>
          </div>
        </div>
      </div>
    </section>
  );
}
