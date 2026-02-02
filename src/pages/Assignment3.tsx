import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { Card } from '../components/ui/card';
import { User, Target, Frown, Heart, Smartphone, ArrowRight, CheckCircle, Eye, Lightbulb, Palette, Layout } from 'lucide-react';
import wireframe1 from 'figma:asset/e7e74dd73123711796fcb74e7b284a2f8ec545aa.png';
import wireframe2 from 'figma:asset/9cc512bb63b493335de6f59437e6c2b517948bb6.png';

export function Assignment3() {
  const persona = {
    name: 'Ahmed Khan',
    age: 32,
    background: 'Office worker, living with early-stage ALS',
    disability: 'Amyotrophic Lateral Sclerosis (ALS)',
    physical: [
      'Limited hand movement',
      'Weak grip strength',
      'Slow motor response',
      'Hand tremors'
    ],
    cognitive: [
      'Cognition remains intact',
      'Fatigue may reduce attention over time'
    ],
    perceptual: [
      'Difficulty interacting with small UI elements'
    ],
    goals: [
      'Communicate easily with caregivers and family',
      'Request help independently',
      'Reduce frustration during app use'
    ],
    frustrations: [
      'Accidental taps',
      'Complex app layouts',
      'Too many steps for simple actions'
    ],
    context: 'Mobile phone usage at home or hospital'
  };

  const flowSteps = [
    { title: 'Welcome / Get Started', desc: 'Simple introduction screen' },
    { title: 'Sign Up / Login', desc: 'Minimal authentication' },
    { title: 'Profile Setup', desc: 'Basic user configuration' },
    { title: 'Head & Eye Tracking', desc: 'Calibration for accessibility' },
    { title: 'Home Dashboard', desc: 'Main communication interface' },
    { title: 'Settings', desc: 'Customization options' },
    { title: 'Exit', desc: 'Safe logout' }
  ];

  const designPrinciples = [
    {
      icon: Target,
      title: 'Large Touch Targets',
      desc: 'Reduce errors caused by hand tremors and imprecise movements',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Central Placement',
      desc: 'Important buttons in easy-to-reach areas minimize physical effort',
      color: 'accent'
    },
    {
      icon: Lightbulb,
      title: 'Simple Navigation',
      desc: 'Linear flow reduces fatigue and mental load',
      color: 'secondary'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation Screens',
      desc: 'Prevent accidental actions with clear feedback',
      color: 'primary'
    }
  ];

  const problemStatements = [
    {
      title: 'Small Touch Targets',
      problem: 'Existing apps have buttons too small for trembling hands',
      solution: 'Design with minimum 60px touch targets'
    },
    {
      title: 'Complex Navigation',
      problem: 'Deep menu structures cause confusion and fatigue',
      solution: 'Flat, linear navigation with clear hierarchy'
    },
    {
      title: 'Overcrowded Screens',
      problem: 'Too much information overwhelms users',
      solution: 'Minimalist layouts with focus on essential elements'
    },
    {
      title: 'Lack of Accessibility',
      problem: 'Few apps support eye-tracking or voice control',
      solution: 'Built-in head and eye tracking capabilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <ScrollProgress />
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Assignment 03</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Solution Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating an empathetic, accessible communication interface for ALS patients
            </p>
          </motion.div>

          {/* Problem Definition */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Problem Definition</h2>
            
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 mb-12">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ALS patients face significant challenges using mobile applications due to <strong className="text-foreground">slow and 
                unstable hand movements</strong>, difficulty tapping small buttons, accidental touches from tremors, and rapid fatigue. 
                Even simple tasks like sending a message or requesting help require substantial physical effort.
              </p>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-bold text-lg mb-3 text-primary">From Assignment 2 Research</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Existing applications often have small touch targets, complex navigation, overcrowded screens, 
                  and lack proper accessibility support for users with motor impairments.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {problemStatements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-accent/30 hover:shadow-lg transition-all">
                    <h3 className="font-bold text-xl mb-3 text-primary">{item.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Frown className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item.problem}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{item.solution}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* User Persona */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">User Persona</h2>

            <Card className="p-8 lg:p-12 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/30">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{persona.name}</h3>
                  <p className="text-xl text-muted-foreground mb-1">Age: {persona.age}</p>
                  <p className="text-muted-foreground mb-4">{persona.background}</p>
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-lg">
                    <p className="text-sm font-medium text-primary">{persona.disability}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-card rounded-xl border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <span className="text-primary">Physical Limitations</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {persona.physical.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-card rounded-xl border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <span className="text-accent">Cognitive Limitations</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {persona.cognitive.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-card rounded-xl border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Goals
                      </h4>
                      <ul className="space-y-1.5">
                        {persona.goals.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-card rounded-xl border border-border">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Frown className="w-5 h-5 text-primary" />
                        Frustrations
                      </h4>
                      <ul className="space-y-1.5">
                        {persona.frustrations.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/30">
                    <p className="text-sm font-medium">
                      <Smartphone className="w-4 h-4 inline mr-2" />
                      Context of Use: {persona.context}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Application Flow */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Application Flow</h2>
            
            <Card className="p-8 lg:p-12 bg-muted/30 border-accent/20">
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The application follows a <strong className="text-foreground">simple and linear flow</strong> to reduce user effort, 
                minimizing decision points and avoiding deep navigation to support motor limitations.
              </p>

              <div className="max-w-3xl mx-auto">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                        {index < flowSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-accent/50 mt-2" />
                        )}
                      </div>
                      
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Design Principles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Human-Centered Design Principles</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`p-6 h-full border-${principle.color}/30 hover:shadow-lg transition-all`}>
                    <div className={`w-14 h-14 mb-4 rounded-xl bg-${principle.color}/10 flex items-center justify-center`}>
                      <principle.icon className={`w-7 h-7 text-${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/30">
              <h3 className="font-bold text-xl mb-4 text-center">Why These Principles Matter</h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Issues identified in Assignment 2, such as <strong className="text-foreground">small buttons and cluttered layouts</strong>, 
                were deliberately avoided. Each design decision prioritizes <strong className="text-accent">accessibility, simplicity, and user dignity</strong>.
              </p>
            </Card>
          </motion.section>

          {/* Wireframing Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Wireframing</h2>
            
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Layout className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Low-Fidelity Wireframes</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                  Initial wireframes were created to map out the user journey and interaction flow, 
                  focusing on layout structure and functionality before moving to high-fidelity designs.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-lg"
                >
                  <img 
                    src={wireframe1} 
                    alt="Wireframe screens showing main app functionality including help, communication, and music features"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-lg"
                >
                  <img 
                    src={wireframe2} 
                    alt="Wireframe screens showing onboarding flow, authentication, and profile setup"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h4 className="font-bold text-lg mb-3 text-primary">Design Iterations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  These wireframes served as the foundation for our high-fidelity Figma designs, 
                  allowing us to test and refine the user flow before investing time in detailed visual design. 
                  The focus was on creating large, accessible touch targets and simple navigation patterns.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* UI Design Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">UI Design in Figma</h2>
            
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Palette className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">30 UI Screens Designed</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  The complete user interface was designed collaboratively in Figma, following accessibility 
                  and human-centered design principles throughout.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Large buttons for easy tapping',
                  'High-contrast colors for visual clarity',
                  'Simple layouts to reduce cognitive load',
                  'Minimal text input requirements',
                  'Clear feedback after each action',
                  'Consistent navigation patterns'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-card rounded-xl border border-border flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://www.figma.com/design/QaCvpWxk9oOMjeSwy06s7L/HCI-PROJECT-WORK-ALS-?node-id=0-1&p=f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                  >
                    View Figma Design
                    <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </a>
              </div>
            </Card>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <h2 className="text-3xl font-bold mb-6 text-center">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                This assignment demonstrates how <strong className="text-foreground">human factors research can directly inform UI design</strong>. 
                By understanding the physical and emotional challenges faced by ALS patients, we designed an interface that prioritizes 
                <strong className="text-accent"> accessibility, simplicity, and user dignity</strong>. The final design reflects a 
                <strong className="text-primary"> truly human-centered approach</strong>.
              </p>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}