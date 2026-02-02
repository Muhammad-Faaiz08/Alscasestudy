import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { Card } from '../components/ui/card';
import { MessageSquare, BarChart3, Clock, Target, Users, TrendingUp, CheckCircle, AlertCircle, Activity } from 'lucide-react';
import appRatingImage from 'figma:asset/eaf2284300d9863400421fad9c69857ab6369b5c.png';
import improvementSuggestionsImage from 'figma:asset/3f896572b06facc47baa8b1cebb4d77d326a4b43.png';
import frustrationDataImage from 'figma:asset/43f04791defe27a55eb9dd3facf57a1e1f45ad76.png';

export function Assignment4() {
  const thinkAloudSteps = [
    {
      title: 'Participant Selection',
      desc: 'Recruit 3-5 ALS patients or caregivers familiar with their needs',
      icon: Users
    },
    {
      title: 'Task Scenarios',
      desc: 'Create realistic scenarios: sending a message, requesting help, navigating settings',
      icon: Target
    },
    {
      title: 'Observation Session',
      desc: 'Ask participants to verbalize their thoughts while using the prototype',
      icon: MessageSquare
    },
    {
      title: 'Data Collection',
      desc: 'Record verbal feedback, frustrations, confusion points, and moments of ease',
      icon: Activity
    },
    {
      title: 'Analysis',
      desc: 'Identify patterns in user behavior and pain points in the interface',
      icon: BarChart3
    }
  ];

  const thinkAloudBenefits = [
    'Reveals mental models and user expectations',
    'Identifies confusing UI elements in real-time',
    'Uncovers accessibility barriers that metrics might miss',
    'Provides qualitative insights into emotional responses'
  ];

  const usabilityMetrics = [
    {
      name: 'Task Completion Rate',
      icon: CheckCircle,
      description: 'Percentage of tasks successfully completed without assistance',
      target: '≥ 90%',
      color: 'accent',
      measurement: 'Number of completed tasks ÷ Total tasks × 100'
    },
    {
      name: 'Time on Task',
      icon: Clock,
      description: 'Average time taken to complete each task',
      target: '≤ 30 seconds per simple task',
      color: 'secondary',
      measurement: 'Record start and end time for each task'
    },
    {
      name: 'Error Rate',
      icon: AlertCircle,
      description: 'Frequency of user errors (wrong taps, navigation mistakes)',
      target: '≤ 5% error rate',
      color: 'primary',
      measurement: 'Number of errors ÷ Total interactions × 100'
    },
    {
      name: 'User Satisfaction',
      icon: TrendingUp,
      description: 'Post-test satisfaction survey using System Usability Scale (SUS)',
      target: 'SUS score ≥ 75',
      color: 'accent',
      measurement: '10-question survey, score 0-100'
    }
  ];

  const evaluationProcess = [
    {
      phase: 'Preparation',
      tasks: [
        'Develop test scenarios based on real use cases',
        'Create task lists and success criteria',
        'Prepare observation materials and consent forms',
        'Set up recording equipment (if permitted)'
      ]
    },
    {
      phase: 'Execution',
      tasks: [
        'Brief participants on think-aloud protocol',
        'Observe users completing tasks',
        'Take detailed notes on behaviors and comments',
        'Measure quantitative metrics simultaneously'
      ]
    },
    {
      phase: 'Analysis',
      tasks: [
        'Transcribe think-aloud sessions',
        'Calculate usability metrics',
        'Identify common pain points and patterns',
        'Prioritize issues by severity and frequency'
      ]
    },
    {
      phase: 'Iteration',
      tasks: [
        'Create design recommendations',
        'Implement high-priority fixes',
        'Retest with participants if possible',
        'Document improvements and rationale'
      ]
    }
  ];

  const successCriteria = [
    {
      criterion: 'Accessibility',
      indicator: 'Users can navigate using eye-tracking or large touch targets',
      status: 'critical'
    },
    {
      criterion: 'Efficiency',
      indicator: 'Core tasks completed in minimal steps with reduced physical effort',
      status: 'high'
    },
    {
      criterion: 'Error Prevention',
      indicator: 'Confirmation dialogs prevent accidental actions',
      status: 'high'
    },
    {
      criterion: 'Satisfaction',
      indicator: 'Users feel confident and independent using the app',
      status: 'critical'
    },
    {
      criterion: 'Learnability',
      indicator: 'New users understand the interface without extensive training',
      status: 'medium'
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
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Assignment 04</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Evaluation Techniques
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Validating design decisions through think aloud protocols and usability metrics
            </p>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Evaluate?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Evaluation ensures our design truly meets the needs of ALS patients. By combining <strong className="text-foreground">qualitative 
                insights from think-aloud sessions</strong> with <strong className="text-accent">quantitative usability metrics</strong>, 
                we can validate assumptions and identify areas for improvement.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Think Aloud Protocol</h3>
                  <p className="text-muted-foreground">
                    Qualitative method that reveals user thoughts, frustrations, and mental models in real-time
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Usability Metrics</h3>
                  <p className="text-muted-foreground">
                    Quantitative measurements that objectively assess efficiency, effectiveness, and satisfaction
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Think Aloud Protocol */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Think Aloud Protocol
            </h2>

            <Card className="p-8 lg:p-12 bg-muted/30 border-primary/20 mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Process Steps</h3>

              <div className="space-y-6 max-w-4xl mx-auto">
                {thinkAloudSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">Step {index + 1}</span>
                        <h3 className="font-bold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-primary/30">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {thinkAloudBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent/5">
                <h3 className="font-bold text-xl mb-4">Example Scenario</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm font-medium mb-2 text-primary">Task:</p>
                    <p className="text-sm text-muted-foreground">
                      "You need to send a message to your caregiver asking for water"
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <p className="text-sm font-medium mb-2 text-accent">Expected Verbalization:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "I see the big buttons... I'm tapping 'Request Help'... The message options are clear... 
                      I'm selecting 'Water'... The button is large enough, I didn't miss it..."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Usability Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Usability Metrics
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {usabilityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`p-6 h-full border-${metric.color}/30 hover:shadow-lg transition-all`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${metric.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{metric.name}</h3>
                        <p className="text-sm text-muted-foreground">{metric.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className={`p-3 bg-${metric.color}/10 rounded-lg border border-${metric.color}/20`}>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Target</p>
                        <p className={`font-bold text-${metric.color}`}>{metric.target}</p>
                      </div>

                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Measurement</p>
                        <p className="text-sm">{metric.measurement}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
              <h3 className="font-bold text-xl mb-6 text-center">Why These Metrics Matter</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Objective data</strong> complements subjective think-aloud feedback
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Benchmark progress</strong> across design iterations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Identify bottlenecks</strong> in user workflows
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Validate design decisions</strong> with measurable outcomes
                  </p>
                </div>
              </div>
            </Card>

            {/* Survey Results Evidence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="p-8 bg-muted/30 border-accent/30">
                <h3 className="font-bold text-2xl mb-6 text-center">User Feedback & Survey Results</h3>
                <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                  We collected comprehensive feedback from 12 participants to validate our design decisions and measure user satisfaction.
                </p>

                <div className="space-y-8">
                  {/* App Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      Overall Application Rating
                    </h4>
                    <div className="bg-white p-4 rounded-lg">
                      <img 
                        src={appRatingImage} 
                        alt="Application rating survey results showing average rating of 4.00 stars" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Result:</strong> Average rating of <strong className="text-accent">4.00/5.0</strong> with 
                        <strong className="text-accent"> 83.3%</strong> of users rating 4 or 5 stars, indicating strong user satisfaction.
                      </p>
                    </div>
                  </motion.div>

                  {/* Frustration Points */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-secondary" />
                      User Frustrations & Confusion Points
                    </h4>
                    <div className="bg-white p-4 rounded-lg">
                      <img 
                        src={frustrationDataImage} 
                        alt="Survey results showing what users found frustrating or confusing" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Key Finding:</strong> <strong className="text-secondary">33.4%</strong> reported "Nothing" 
                        as frustrating, while minor issues included poor responsiveness and slow performance—areas for future optimization.
                      </p>
                    </div>
                  </motion.div>

                  {/* Improvement Suggestions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Suggestions for Improvement
                    </h4>
                    <div className="bg-white p-4 rounded-lg">
                      <img 
                        src={improvementSuggestionsImage} 
                        alt="Survey results showing user suggestions for improvement" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Insights:</strong> Diverse feedback with <strong className="text-primary">16.7%</strong> suggesting 
                        quality improvements and speed enhancements, providing clear direction for iterative design improvements.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-xl border border-primary/30 text-center">
                  <p className="font-medium text-lg">
                    <strong>Data-Driven Design:</strong> These metrics validate our user-centered approach and guide continuous improvement.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.section>

          {/* Evaluation Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Complete Evaluation Process</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationProcess.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-primary/20 hover:shadow-lg transition-all">
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mb-3">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-xl">{phase.phase}</h3>
                    </div>

                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Success Criteria */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Success Criteria</h2>

            <Card className="p-8 bg-muted/30 border-accent/20">
              <div className="space-y-4 max-w-4xl mx-auto">
                {successCriteria.map((item, index) => (
                  <motion.div
                    key={item.criterion}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                  >
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'critical' ? 'bg-primary/20 text-primary' :
                      item.status === 'high' ? 'bg-accent/20 text-accent' :
                      'bg-secondary/20 text-secondary'
                    }`}>
                      {item.status.toUpperCase()}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{item.criterion}</h4>
                      <p className="text-sm text-muted-foreground">{item.indicator}</p>
                    </div>

                    <CheckCircle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/30">
              <h2 className="text-3xl font-bold mb-6 text-center">Evaluation Outcome</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  By combining <strong className="text-primary">think aloud protocols</strong> with <strong className="text-accent">quantitative 
                  usability metrics</strong>, we gain a comprehensive understanding of how well our design serves ALS patients.
                </p>
                
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-4 text-center">Expected Outcomes</h3>
                  <ul className="space-y-3">
                    {[
                      'Identify and fix usability issues before final implementation',
                      'Validate that design principles translate to real-world success',
                      'Ensure the application truly reduces frustration and effort',
                      'Build confidence that the solution meets genuine user needs'
                    ].map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/30 text-center">
                  <p className="font-medium">
                    <strong>Core Philosophy:</strong> Design is not done until it's tested with real users.
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}