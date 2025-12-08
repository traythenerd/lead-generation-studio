import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    formDataObj.append("form-name", "quote-request");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      toast({
        title: "Quote Request Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours."
      });

      setFormData({
        name: "",
        email: "",
        business: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
              Let's Build a Targeted Lead List for Your Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Share your requirements and I'll provide a custom quote within 24 hours.
            </p>
          </div>

          <form 
            name="quote-request" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="neumorphic p-8 sm:p-10 rounded-2xl animate-fade-up delay-200"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="neumorphic-inset border-0 rounded-xl h-12 px-4 focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required className="neumorphic-inset border-0 rounded-xl h-12 px-4 focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="business" className="text-sm font-medium text-foreground">
                Business / Website
              </label>
              <Input id="business" name="business" value={formData.business} onChange={handleChange} placeholder="www.yourcompany.com" className="neumorphic-inset border-0 rounded-xl h-12 px-4 focus:ring-2 focus:ring-primary/20" />
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="requirements" className="text-sm font-medium text-foreground">
                Requirements / Targeting Details
              </label>
              <Textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Describe your ideal customer profile, target industries, company sizes, job titles, locations, or any specific criteria..." rows={5} required className="neumorphic-inset border-0 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-primary/20" />
            </div>

            

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full gradient-accent text-primary-foreground rounded-xl py-6 text-base font-semibold shadow-soft hover:shadow-hover transition-all duration-300 group"
            >
              {isSubmitting ? "Sending..." : "Request a Quote"}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactSection;
