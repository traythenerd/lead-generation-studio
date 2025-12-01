import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const ServiceTiers = () => {
  const tiers = [
    {
      name: "Starter",
      subtitle: "For small campaigns",
      features: [
        "Verified contact details",
        "Basic ICP filtering",
        "CSV/Excel delivery",
        "Email support <br><br>",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      subtitle: "For agencies",
      features: [
        "Custom ICP targeting",
        "Verified emails & LinkedIn URLs",
        "Priority delivery",
        "Dedicated support",
        "Data enrichment included",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      subtitle: "Advanced targeting",
      features: [
        "Tech-based filters",
        "CRM-ready formatting",
        "Buyer persona segmentation",
        "Company intelligence data",
        "Priority support",
      ],
      highlighted: false,
    },
    {
      name: "Custom Bundle",
      subtitle: "For ongoing datasets",
      features: [
        "Fully tailored quote",
        "Ongoing data delivery",
        "Custom filtering criteria",
        "Dedicated account manager",
        "Volume discounts",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="tiers" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Service Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible options designed for businesses of all sizes. Request a quote for tailored pricing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl animate-fade-up ${
                tier.highlighted
                  ? "bg-background shadow-hover border-2 border-primary"
                  : "neumorphic neumorphic-hover"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full gradient-accent text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tier.subtitle}</p>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-xl ${
                    tier.highlighted
                      ? "gradient-accent text-primary-foreground shadow-soft hover:shadow-hover"
                      : "bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary"
                  } transition-all duration-300`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <a href="#contact">Request a Quote</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;
