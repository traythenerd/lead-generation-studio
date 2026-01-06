import { CheckCircle2 } from "lucide-react";
const AboutSection = () => {
  const highlights = ["Custom ICP (Ideal Customer Profile) targeting", "Verified email addresses", "LinkedIn profile URLs included", "CRM-ready CSV/Excel delivery", "Tech stack & company size filtering", "Fast turnaround (24-72 hours)"];
  return <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase">
              About the Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Precision-Driven B2B Lead Generation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">I specialize in delivering high-quality, verified B2B contact data tailored to your exact target market. Whether you're running outbound campaigns, building sales pipelines, or scaling your agency's reach...  I provide the foundation for successful outreach.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in web research, LinkedIn-based prospecting, and data enrichment, every lead list is crafted to match your ideal customer profile with precision and accuracy.
            </p>
          </div>

          {/* Right Card */}
          <div className="animate-fade-up delay-200">
            <div className="neumorphic p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                What You Get
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
