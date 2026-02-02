import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { Card } from '../components/ui/card';
import { User, Smartphone, Eye, Hand, Brain, Heart, AlertCircle, TrendingDown, Activity, Camera } from 'lucide-react';
import evidenceImage from 'figma:asset/89f8d15f1faf2c297ac63244a7f9e269d3fda1a2.png';

export function Assignment1() {
  const taskSteps = [
    'Hold the phone properly',
    'Unlock without hand slipping',
    'Type in the search bar',
    'Tap the correct video',
    'Adjust volume or position',
  ];

  const physicalFactors = [
    { icon: Hand, title: 'Weak Grip Strength', desc: 'Difficulty holding objects including pens and phones' },
    { icon: TrendingDown, title: 'Limited Arm Movement', desc: 'Slow motor response and reduced range of motion' },
    { icon: Activity, title: 'Hand Tremors', desc: 'Instability causes shaky lines and imprecise movements' },
    { icon: AlertCircle, title: 'Rapid Fatigue', desc: 'Tiredness sets in within seconds of activity' },
  ];

  const perceptualFactors = [
    { title: 'Vision', desc: 'Usually normal in ALS patients', status: 'normal' },
    { title: 'Touch Sensitivity', desc: 'Reduced sensitivity affects pressure control', status: 'reduced' },
  ];

  const cognitiveFactors = [
    { title: 'Cognitive Ability', desc: 'Remains completely intact', status: 'intact' },
    { title: 'Challenge', desc: 'Not thinking but execution—motor pathways are damaged', status: 'impaired' },
    { title: 'Response Time', desc: 'Delays between intention and physical action', status: 'delayed' },
  ];

  const emotionalFactors = [
    { icon: Heart, title: 'Frustration', desc: 'Body cannot follow commands from the mind' },
    { icon: AlertCircle, title: 'Stress', desc: 'Dependency on others for simple tasks' },
    { icon: TrendingDown, title: 'Fear', desc: 'Losing independence over time' },
    { icon: Brain, title: 'Confidence', desc: 'Drop in self-confidence when attempting motor tasks' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <ScrollProgress />
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Assignment 01</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Understanding the User
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into the challenges faced by early-stage ALS patients in everyday digital interactions
            </p>
          </motion.div>

          {/* Introduction to ALS */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">What is ALS?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Amyotrophic Lateral Sclerosis (ALS)</strong> is a neurodegenerative disease 
                    that gradually destroys voluntary muscle control. In the advanced stage, the person loses the ability to move their 
                    limbs, hold objects, or speak clearly.
                  </p>
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                    <p className="text-accent-foreground/90 font-medium">
                      Their mind stays sharp, but their body stops responding.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Research Goal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To understand how motor limitations, fatigue, and communication difficulties affect basic real-world tasks. 
                  These insights will guide the design of software that actually fits their needs.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Task Description */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-secondary" />
              </div>
              The Chosen Task: Watching a YouTube Video
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 border-secondary/30">
                <h3 className="font-bold text-xl mb-4 text-secondary">For Most People</h3>
                <p className="text-muted-foreground">
                  Unlock → Search → Tap → Done. It's nothing—takes a few seconds.
                </p>
              </Card>

              <Card className="p-6 border-primary/30">
                <h3 className="font-bold text-xl mb-4 text-primary">For Early-Stage ALS Patients</h3>
                <p className="text-muted-foreground">
                  Movements are slower, less steady, and fatigue sets in surprisingly fast. Even mild motor changes make simple digital tasks feel heavy.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-muted/30">
              <h3 className="font-bold text-xl mb-6">Task Breakdown</h3>
              <div className="space-y-3">
                {taskSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{step}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Challenge:</strong> The patient can do these things, but not smoothly. The hand sometimes shakes, 
                  or they need to pause to rest fingers. Sometimes they tap the wrong spot and have to retry.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Human Factors Analysis */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Human Factors Analysis
            </h2>

            {/* Physical Factors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Hand className="w-7 h-7 text-primary" />
                Physical / Motor Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {physicalFactors.map((factor, index) => (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <factor.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{factor.title}</h4>
                          <p className="text-sm text-muted-foreground">{factor.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Perceptual Factors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-7 h-7 text-secondary" />
                Perceptual Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {perceptualFactors.map((factor, index) => (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-secondary/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">{factor.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          factor.status === 'normal' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                        }`}>
                          {factor.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{factor.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cognitive Factors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-7 h-7 text-accent" />
                Cognitive Factors
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {cognitiveFactors.map((factor, index) => (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-accent/20">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm">{factor.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          factor.status === 'intact' ? 'bg-accent/20 text-accent' : 
                          factor.status === 'impaired' ? 'bg-primary/20 text-primary' : 
                          'bg-secondary/20 text-secondary'
                        }`}>
                          {factor.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{factor.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="mt-6 p-6 bg-accent/10 border-accent/30">
                <p className="text-center font-medium text-accent-foreground">
                  💡 Key Insight: <strong>Cognitive ability remains intact.</strong> The challenge is execution, not thinking.
                </p>
              </Card>
            </div>

            {/* Emotional Factors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-7 h-7 text-primary" />
                Emotional / Psychological Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {emotionalFactors.map((factor, index) => (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <factor.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{factor.title}</h4>
                          <p className="text-sm text-muted-foreground">{factor.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Evidence Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Camera className="w-7 h-7 text-accent" />
                Evidence
              </h3>
              
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <div className="text-center mb-6">
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    During our research, we conducted field visits and interviews with ALS patients to understand their daily challenges 
                    and experiences with mobile technology.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-xl"
                >
                  <img 
                    src={evidenceImage} 
                    alt="Field research with ALS patient - researcher conducting interview and observing mobile device usage"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="mt-6 p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-bold text-lg mb-3 text-primary">Field Research Insights</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Through direct observation and conversation, we gained firsthand understanding of the physical, cognitive, 
                    and emotional factors that affect ALS patients' interaction with mobile devices. This evidence-based approach 
                    ensured our design decisions were grounded in real user needs and experiences.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.section>

          {/* Design Implications */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
              <h2 className="text-3xl font-bold mb-8 text-center">Implications for Future Software Design</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Motor Limitations Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Eye-tracking capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Voice commands (if speech is still available)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Large, easily selectable elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Minimal fine-motor input requirements</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 text-secondary">Fatigue Considerations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Fewer steps to complete tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Simplified interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Reduced need for sustained physical effort</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 text-accent">Cognitive Strength Utilization</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Clear instructions and structured layouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>No need to oversimplify information</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Emotional Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Avoid frustrating interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provide quick and clear feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Feel supportive rather than overwhelming</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/30">
                <p className="text-center text-lg font-medium">
                  <strong>Core Principle:</strong> The body limits the interaction, not the mind.
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <h2 className="text-3xl font-bold mb-6 text-center">What We Learned About Humans</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Working on this made us realize how easily we <strong className="text-foreground">underestimate simple everyday tasks</strong>. 
                  Writing a single sentence becomes a major effort when the body loses strength and control. The mind stays sharp, 
                  but the body blocks communication with the physical world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We learned that <strong className="text-foreground">designing for humans requires genuine empathy and understanding</strong>. 
                  Real-world limits should guide design decisions. Human-centered design is not about making something modern—it's about 
                  making something <strong className="text-accent">usable for people whose abilities are very different from ours</strong>.
                </p>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}