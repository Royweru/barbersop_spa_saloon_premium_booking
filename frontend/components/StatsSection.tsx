export default function StatsSection() {
  return (
    <section className="rhythmic-bg-light py-section-padding-v px-margin-mobile md:px-gutter">
      <div className="container mx-auto max-w-container-max grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 mb-stack-lg lg:mb-0 relative">
          <div className="relative rounded-2xl overflow-hidden light-card-shadow">
            <img 
              className="w-full h-auto object-cover aspect-[4/5]" 
              alt="Spa room" 
              src="/images/spa-room.jpg" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl light-card-shadow border border-gray-100 hidden md:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <div>
                <p className="font-bold text-charcoal-text text-xl">4.9/5</p>
                <p className="text-sm text-gray-500">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-stack-lg">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-text">Your Grooming & Wellness Destination</h2>
          <div className="gold-divider w-16"></div>
          <p className="font-body-lg text-body-lg text-gray-600">Experience the perfect blend of traditional barbering and modern spa therapies. Our expert team is dedicated to providing meticulous service in an environment designed for ultimate relaxation and refined masculinity.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div>
              <p className="font-headline-xl text-headline-xl text-primary mb-2">2</p>
              <p className="font-button-text text-button-text text-charcoal-text">Branches in Nairobi</p>
            </div>
            <div>
              <p className="font-headline-xl text-headline-xl text-primary mb-2">10+</p>
              <p className="font-button-text text-button-text text-charcoal-text">Signature Services</p>
            </div>
            <div>
              <p className="font-headline-xl text-headline-xl text-primary mb-2">100s</p>
              <p className="font-button-text text-button-text text-charcoal-text">Of Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
