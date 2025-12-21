export const Partners = () => {
  const partners = [
    {
      name: "SkillME",
      logo: "/PARTNERS/Skillyme LOGO.jpg",
    },
    {
      name: "SecretStartups",
      logo: "/PARTNERS/secretstartups_logo.jpeg",
    },
    {
      name: "SecretStartups",
      logo: "/PARTNERS/chiromo_forge_community.jpeg",
    },
    {
      name: "SecretStartups",
      logo: "/PARTNERS/digital_leap_africa.jpeg",
    },
    {
      name: "SecretStartups",
      logo: "/PARTNERS/techhut_community.jpeg",
    },
    {
      name: "SecretStartups",
      logo: "/PARTNERS/gdg_maseno_university.jpeg",
    },
  ];

  // Duplicate the partners array to create seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Our <span className="gradient-text-hero">Partners</span>
          </h2>
          <p className="text-muted-foreground">
            Collaborating with industry leaders to bring you the best experience
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="flex animate-scroll-slow hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: "200px" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
