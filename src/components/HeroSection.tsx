import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Mail, Target } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen gradient-hero pt-32 pb-20 flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              B2B Lead Generation Specialist
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Hi, I'm <span className="text-gradient">Oliver</span>
                <br />
                <span className="text-muted-foreground font-medium text-3xl sm:text-4xl lg:text-5xl">Let's Talk Work.</span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed">
              Targeted B2B Lead Generation & List Building for High-Quality Outreach
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Accurate, niche-specific business contacts for agencies, startups, and fast-growing teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="gradient-accent text-primary-foreground rounded-xl px-8 py-6 text-base font-semibold shadow-soft hover:shadow-hover transition-all duration-300 group">
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl px-8 py-6 text-base font-semibold border-2 border-border hover:border-primary hover:text-primary transition-all duration-300">
                <a href="#tiers">View Service Tiers</a>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-up delay-200">
            <div className="neumorphic p-8 rounded-2xl">
              {/* Analytics Dashboard Mockup */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Lead Analytics</h3>
                  <span className="text-sm text-muted-foreground">This Month</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="neumorphic-inset p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">2,847</p>
                        <p className="text-xs text-muted-foreground">Leads Found</p>
                      </div>
                    </div>
                  </div>
                  <div className="neumorphic-inset p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">98.2%</p>
                        <p className="text-xs text-muted-foreground">Verified</p>
                      </div>
                    </div>
                  </div>
                  <div className="neumorphic-inset p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Target className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">ICP</p>
                        <p className="text-xs text-muted-foreground">Targeted</p>
                      </div>
                    </div>
                  </div>
                  <div className="neumorphic-inset p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">24h</p>
                        <p className="text-xs text-muted-foreground">Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Bars */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20">SaaS</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-4/5 gradient-accent rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20">Agencies</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 gradient-accent rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20">E-commerce</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-2/3 gradient-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary/10 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-muted animate-float delay-300" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;