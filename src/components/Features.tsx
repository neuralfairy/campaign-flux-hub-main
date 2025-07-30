import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Target, Zap, Users, TrendingUp, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Track campaign performance with advanced analytics and get actionable insights in real-time."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused targeting based on demographics, behavior, and intent."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "A/B Testing",
      description: "Optimize campaigns continuously with automated A/B testing and performance optimization."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Management",
      description: "Capture, nurture, and convert leads with our integrated CRM and automation tools."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Optimization",
      description: "Maximize return on investment with data-driven optimization and budget allocation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Channel Campaigns",
      description: "Execute campaigns across email, social, web, and mobile channels from one platform."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Powerful Features for</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Campaign Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize high-performing promotional campaigns that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;