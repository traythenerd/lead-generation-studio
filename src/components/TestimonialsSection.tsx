import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Perfect for our cold outreach campaigns. High accuracy and great communication. Oliver delivered exactly what we needed.",
      author: "Marketing Director",
      company: "SaaS Agency",
    },
    {
      quote: "Helped us reach decision-makers we couldn't find internally. The data quality exceeded our expectations.",
      author: "Sales Lead",
      company: "Tech Startup",
    },
    {
      quote: "Fast turnaround and excellent ICP targeting. Our outbound response rates improved significantly.",
      author: "Growth Manager",
      company: "E-commerce Brand",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="neumorphic neumorphic-hover p-8 rounded-2xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
