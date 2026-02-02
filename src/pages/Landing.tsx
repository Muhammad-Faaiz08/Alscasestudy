import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { ArrowRight, Users, Search, Palette, CheckCircle, Eye, Hand, Brain, Heart } from 'lucide-react';
import { Card } from '../components/ui/card';
import faryalImage from 'figma:asset/d4b9948a6fb2ff5540dd034367434d1d555713d7.png';
import jannatImage from 'figma:asset/c5ef779d33e84836cae2b52b301e48d77794e3a5.png';
import sulemanImage from 'figma:asset/f564c42b0215627145b08f0a6d9c347400b07abd.png';

export function Landing() {
  const assignments = [
    {
      number: '01',
      title: 'User Research',
      description: 'Understanding ALS patients and their challenges in everyday digital interactions',
      path: '/assignment-1',
      icon: Search,
      color: 'from-primary to-primary/70',
    },
    {
      number: '02',
      title: 'App Analysis',
      description: 'Comprehensive review of 30+ AAC applications and accessibility tools',
      path: '/assignment-2',
      icon: Eye,
      color: 'from-secondary to-secondary/70',
    },
    {
      number: '03',
      title: 'Solution Design',
      description: 'Creating an empathetic, accessible communication interface for ALS patients',
      path: '/assignment-3',
      icon: Palette,
      color: 'from-accent to-accent/70',
    },
    {
      number: '04',
      title: 'Evaluation',
      description: 'Think aloud protocols and usability metrics for design validation',
      path: '/assignment-4',
      icon: CheckCircle,
      color: 'from-primary/80 to-secondary',
    },
  ];

  const humanFactors = [
    { icon: Hand, label: 'Motor Limitations', desc: 'Weak grip, tremors, fatigue' },
    { icon: Eye, label: 'Eye Tracking', desc: 'Gaze-based interaction' },
    { icon: Brain, label: 'Cognition Intact', desc: 'Sharp mind, limited body' },
    { icon: Heart, label: 'Emotional Support', desc: 'Reducing frustration' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30"
            >
              <span className="text-sm font-medium text-primary">
                Human-Computer Interaction • University of Lahore
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Designing for
              <br />
              ALS Patients
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A comprehensive case study on creating accessible communication tools
              for individuals living with Amyotrophic Lateral Sclerosis
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/assignment-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Explore the Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const teamSection = document.getElementById('team');
                  if (teamSection) {
                    const navHeight = 64; // Height of fixed navigation
                    const targetPosition = teamSection.offsetTop - navHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-4 bg-card border-2 border-border rounded-xl font-medium hover:border-primary transition-all cursor-pointer"
              >
                <span className="text-foreground">Meet the Team</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Human Factors Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {humanFactors.map((factor, index) => (
              <motion.div
                key={factor.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow border-border/50 bg-card/80 backdrop-blur">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <factor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{factor.label}</h3>
                  <p className="text-sm text-muted-foreground">{factor.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Project Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From understanding user needs to creating empathetic design solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assignments.map((assignment, index) => (
              <motion.div
                key={assignment.path}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={assignment.path}>
                  <Card className="group h-full p-8 hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur overflow-hidden relative">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${assignment.color} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`text-6xl font-bold bg-gradient-to-br ${assignment.color} bg-clip-text text-transparent opacity-30`}>
                          {assignment.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <assignment.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {assignment.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {assignment.description}
                      </p>

                      <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Software Engineering Students • Section T
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { name: 'Suleman Jamil', id: '70149130' },
              { name: 'Faryal Shahid', id: '70152246' },
              { name: 'Jannat Ilyas', id: '70146683' },
            ].map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all border-border/50 bg-card/80 backdrop-blur">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    {member.name === 'Faryal Shahid' ? (
                      <img 
                        src={faryalImage} 
                        alt="Faryal Shahid" 
                        className="w-full h-full object-cover"
                      />
                    ) : member.name === 'Jannat Ilyas' ? (
                      <img 
                        src={jannatImage} 
                        alt="Jannat Ilyas" 
                        className="w-full h-full object-cover"
                      />
                    ) : member.name === 'Suleman Jamil' ? (
                      <img 
                        src={sulemanImage} 
                        alt="Suleman Jamil" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-primary" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.id}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
              <p className="text-lg">
                <span className="font-medium">Course:</span> Human-Computer Interaction (HCI)
              </p>
              <p className="text-muted-foreground mt-2">
                Department of Software Engineering • The University of Lahore
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2026 ALS Case Study. Created with care for accessibility and inclusion.</p>
        </div>
      </footer>
    </div>
  );
}