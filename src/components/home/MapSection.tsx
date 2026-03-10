const MapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold font-display italic text-sm tracking-widest uppercase mb-2">Visit Us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Our Location</h2>
          <p className="text-muted-foreground">X Road, TMR Enclave, Hanuman Nagar Colony, Meerpet, Hyderabad, Telangana 500097</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-card h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2!2d78.5264!3d17.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeerpet%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Touch Kailash Tours Office Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
