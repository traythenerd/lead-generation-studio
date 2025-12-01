import { Users, FileSpreadsheet, Mail, Search, Linkedin } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: Users,
    title: "B2B Lead Generation",
    description: "Targeted business contacts based on industry, role, company size, and location filters."
  }, {
    icon: FileSpreadsheet,
    title: "Prospect List Building",
    description: "Comprehensive prospect databases with verified decision-maker information."
  }, {
    icon: Mail,
    title: "Email List Building",
    description: "Verified email addresses with high deliverability rates for your outreach campaigns."
  }, {
    icon: Search,
    title: "Web Research",
    description: "Deep-dive research on companies, contacts, and market intelligence data."
  }, {
    icon: Linkedin,
    title: "LinkedIn-Based Research",
    description: "Professional profile extraction with job titles, company details, and connection data."
  }];
  return <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Comprehensive Lead Generation Solutions
          </h2>
          <p className="text-lg text-muted-foreground">From prospect research to verified contact data...  everything you need for successful B2B outreach.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => <div key={index} className="neumorphic neumorphic-hover p-8 rounded-2xl group animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;