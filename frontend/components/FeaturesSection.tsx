export default function FeaturesSection() {
  return (
    <>
      <section className="rhythmic-bg-light py-section-padding-v px-margin-mobile md:px-gutter">
        <div className="container mx-auto max-w-container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-4 sticky top-24 mb-12 lg:mb-0">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-text mb-6">Why Rolin is the Standard</h2>
              <p className="font-body-md text-body-md text-gray-600 mb-8">We don't just offer haircuts; we provide an elevated grooming experience. Here's what sets us apart.</p>
              <button className="font-button-text text-button-text bg-charcoal-surface text-primary px-8 py-4 rounded hover:bg-black transition-colors">Book Now</button>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl light-card-shadow border-t-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">location_on</span>
                <h3 className="font-headline-md text-headline-md text-charcoal-text text-lg mb-3">Two Convenient Branches</h3>
                <p className="text-gray-600 text-sm">Accessible locations in Ruaka and Kiambu Road with ample parking and premium facilities.</p>
              </div>
              <div className="bg-white p-8 rounded-xl light-card-shadow border-t-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">groups</span>
                <h3 className="font-headline-md text-headline-md text-charcoal-text text-lg mb-3">Skilled Specialists</h3>
                <p className="text-gray-600 text-sm">Our team comprises highly trained barbers and wellness therapists dedicated to their craft.</p>
              </div>
              <div className="bg-white p-8 rounded-xl light-card-shadow border-t-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">health_and_safety</span>
                <h3 className="font-headline-md text-headline-md text-charcoal-text text-lg mb-3">Hygiene & Comfort First</h3>
                <p className="text-gray-600 text-sm">Impeccable sanitation standards and a luxurious environment designed for your comfort.</p>
              </div>
              <div className="bg-white p-8 rounded-xl light-card-shadow border-t-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">directions_walk</span>
                <h3 className="font-headline-md text-headline-md text-charcoal-text text-lg mb-3">Walk-ins Welcome</h3>
                <p className="text-gray-600 text-sm">While booking is recommended, we always strive to accommodate impromptu visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-16 px-margin-mobile md:px-gutter text-center">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-text mb-8">Ready for your next cut or spa day?</h2>
        <button className="font-button-text text-button-text bg-charcoal-surface text-primary px-10 py-4 rounded-lg hover:bg-black transition-colors shadow-xl">Book Now</button>
      </section>
    </>
  );
}
