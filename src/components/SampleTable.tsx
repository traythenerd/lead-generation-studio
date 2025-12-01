const SampleTable = () => {
  const sampleData = [
    {
      name: "Sarah Smith",
      title: "COO",
      company: "GrowthTech",
      email: "sarah@growthtech.com",
      linkedin: "/sarahsmith",
      location: "Canada",
    },
    {
      name: "Michael Chen",
      title: "VP Sales",
      company: "CloudScale Inc",
      email: "m.chen@cloudscale.io",
      linkedin: "/michaelchen",
      location: "USA",
    },
    {
      name: "Emma Wilson",
      title: "Head of Marketing",
      company: "DataFlow",
      email: "emma@dataflow.co",
      linkedin: "/emmawilson",
      location: "UK",
    },
    {
      name: "James Rodriguez",
      title: "CEO",
      company: "StartupHub",
      email: "james@startuphub.com",
      linkedin: "/jamesrodriguez",
      location: "Australia",
    },
  ];

  return (
    <section id="sample" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Sample Output
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Example Output You Will Receive
          </h2>
          <p className="text-lg text-muted-foreground">
            Clean, organized, and ready-to-use lead data delivered in your preferred format.
          </p>
        </div>

        <div className="neumorphic rounded-2xl overflow-hidden animate-fade-up delay-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">LinkedIn</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-t border-border transition-colors hover:bg-muted/30 ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.title}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.company}</td>
                    <td className="px-6 py-4 text-sm text-primary">{row.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.linkedin}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleTable;
