import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="rhythmic-bg-dark py-section-padding-v px-margin-mobile md:px-gutter">
      <div className="container mx-auto max-w-container-max">
        <div className="text-center mb-16 space-y-4">
          <p className="font-eyebrow-label text-eyebrow-label text-primary uppercase">Our Expertise</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-off-white-text">Precision & Relaxation</h2>
          <div className="gold-divider w-24 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">content_cut</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Barbershop</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Classic cuts, fades, hot towel shaves, and beard sculpting by master barbers.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">face</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Hair & Locs</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Specialized loc maintenance, styling, coloring, and comprehensive hair care.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">pan_tool</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Nails</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Executive manicures and pedicures focused on clean, healthy nail care.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">spa</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Facials</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Deep cleansing and rejuvenating facial treatments tailored for men's skin.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">self_improvement</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Massage & Spa</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Therapeutic massages to relieve tension and promote total body wellness.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
          <div className="bg-charcoal-surface border border-primary/20 rounded-xl p-8 card-hover-lift flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 font-light">clean_hands</span>
            <h3 className="font-headline-md text-headline-md text-off-white-text mb-4 text-xl">Waxing</h3>
            <p className="text-on-surface-variant mb-6 flex-grow">Professional hair removal services ensuring a clean and polished look.</p>
            <Link href="#" className="font-button-text text-button-text text-primary hover:text-primary-fixed border-b border-transparent hover:border-primary pb-1 transition-all">View Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
