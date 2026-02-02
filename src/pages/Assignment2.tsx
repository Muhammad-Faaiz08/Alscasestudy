import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Download, TrendingUp, TrendingDown, Eye, Hand, Brain, AlertCircle, Check, X } from 'lucide-react';
import { useState } from 'react';

interface App {
  name: string;
  developer: string;
  platform: string;
  rating: string;
  downloads: string;
  strengths: string[];
  weaknesses: string[];
  category: string;
}

export function Assignment2() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const apps: App[] = [
    {
      name: 'Look to Speak',
      developer: 'Google Creative Lab',
      platform: 'Android',
      rating: '4.1',
      downloads: '100k+',
      category: 'eye-tracking',
      strengths: [
        'Easy-to-understand spoken words',
        'Straightforward interface',
        'Works without internet',
        'Useful phrase/symbol collection'
      ],
      weaknesses: [
        'Relies on less precise head-tilts',
        'Difficult for less precise movements',
        'Few personalization options',
        'Noticeable delay in output'
      ]
    },
    {
      name: 'Messay',
      developer: 'NDK dev',
      platform: 'Android',
      rating: 'No rating',
      downloads: '10k+',
      category: 'eye-tracking',
      strengths: [
        'Multiple input options',
        'Full keyboard with fast word prediction',
        'Extensive customization for voice and sensitivity',
        'User can easily manage custom message lists'
      ],
      weaknesses: [
        'Requires a paid plan for unlimited use',
        'Needs frequent, precise eye calibration',
        'More complex to set up and navigate',
        'Privacy concerns regarding data collection'
      ]
    },
    {
      name: 'Blink Talker',
      developer: 'Legal prompt inc',
      platform: 'iOS',
      rating: 'No rating',
      downloads: 'N/A',
      category: 'blink-based',
      strengths: [
        'Works well with simple blink-based communication',
        'Lightweight and easy to set up',
        'Minimal distractions, focused on essential communication'
      ],
      weaknesses: [
        'Very basic functionality, lacks advanced features',
        'Requires user patience; slower communication',
        'Interface is minimal and not visually appealing'
      ]
    },
    {
      name: 'Proloquo2Go',
      developer: 'AssistiveWare',
      platform: 'iOS',
      rating: '5.0',
      downloads: 'N/A',
      category: 'aac',
      strengths: [
        'Comprehensive AAC solution',
        'Highly customizable vocabulary',
        'Professional grade interface',
        'Excellent support and documentation'
      ],
      weaknesses: [
        'Expensive (Rs 69,900)',
        'Steep learning curve',
        'May be overwhelming for beginners'
      ]
    },
    {
      name: 'VocableAAC',
      developer: 'WillowRoot Apps',
      platform: 'Android',
      rating: 'No rating',
      downloads: '5k+',
      category: 'aac',
      strengths: [
        'Clean, modern interface',
        'Supports multiple input methods',
        'Customizable vocabulary and phrases'
      ],
      weaknesses: [
        'Some advanced features are behind a paid version',
        'Limited support for eye-tracking input',
        'Can feel overwhelming for first-time users'
      ]
    },
    {
      name: 'OptiKey',
      developer: 'Julius Sweetland',
      platform: 'Windows',
      rating: '4.4k stars',
      downloads: '10k+',
      category: 'eye-tracking',
      strengths: [
        'Free and open-source',
        'Supports multiple input methods including eye-tracking',
        'Highly customizable for different accessibility needs'
      ],
      weaknesses: [
        'Interface is quite technical',
        'Setup for eye-tracking requires additional hardware',
        'Visual design is basic and not very polished'
      ]
    },
    {
      name: 'LetMeTalk',
      developer: 'AppNotize UG',
      platform: 'iOS',
      rating: '3.7',
      downloads: 'N/A',
      category: 'aac',
      strengths: [
        'Completely free and open-source',
        'Easy-to-use interface',
        'Supports unlimited vocabulary and customizable categories'
      ],
      weaknesses: [
        'Lacks advanced features like predictive text',
        'Design is very basic',
        'Occasional minor glitches'
      ]
    },
    {
      name: 'Avaz AAC',
      developer: 'Avaz, LLC',
      platform: 'Android',
      rating: '3.8',
      downloads: '50k+',
      category: 'aac',
      strengths: [
        'Highly customizable communication boards',
        'Supports multiple input methods',
        'Clean, professional interface with engaging visuals'
      ],
      weaknesses: [
        'Paid app, can be expensive for long-term use',
        'Initial setup and customization can be complex',
        'Some features may require additional training'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Apps', count: apps.length },
    { id: 'eye-tracking', label: 'Eye Tracking', count: apps.filter(a => a.category === 'eye-tracking').length },
    { id: 'aac', label: 'AAC Solutions', count: apps.filter(a => a.category === 'aac').length },
    { id: 'blink-based', label: 'Blink-Based', count: apps.filter(a => a.category === 'blink-based').length },
  ];

  const filteredApps = selectedCategory === 'all' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const keyFindings = [
    {
      icon: TrendingUp,
      title: 'Common Strengths',
      items: [
        'Picture-based communication is intuitive',
        'Offline functionality is highly valued',
        'Simple interfaces reduce cognitive load'
      ],
      color: 'accent'
    },
    {
      icon: TrendingDown,
      title: 'Common Weaknesses',
      items: [
        'Eye-tracking requires frequent calibration',
        'Many apps lack customization options',
        'High costs limit accessibility',
        'Setup complexity creates barriers'
      ],
      color: 'primary'
    },
    {
      icon: AlertCircle,
      title: 'Key Insights',
      items: [
        'Free apps often lack critical features',
        'Paid apps may be unaffordable for many users',
        'Eye-tracking accuracy varies greatly',
        'Few apps support multiple input methods'
      ],
      color: 'secondary'
    }
  ];

  const humanFactors = [
    { icon: Eye, label: 'Eyes', desc: 'Selecting phrases, navigating interface' },
    { icon: Hand, label: 'Touch', desc: 'Minimal to moderate tapping required' },
    { icon: Brain, label: 'Memory', desc: 'Choosing what to communicate' },
    { icon: AlertCircle, label: 'Ears', desc: 'Listening to spoken output' },
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
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">Assignment 02</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              App Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive review of 30+ AAC applications and accessibility tools for ALS patients
            </p>
          </motion.div>

          {/* Human Factors Used in Apps */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Human Factors in AAC Apps</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {humanFactors.map((factor, index) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all border-secondary/30">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                      <factor.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-bold mb-2">{factor.label}</h3>
                    <p className="text-sm text-muted-foreground">{factor.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                      : 'bg-card border border-border hover:border-secondary'
                  }`}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Apps Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all border-border/50 bg-card/90 backdrop-blur">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-primary">{app.name}</h3>
                        <Badge variant="outline" className="border-secondary/30 text-secondary">
                          {app.platform}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{app.developer}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{app.downloads}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-accent">
                          <TrendingUp className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="space-y-1.5">
                          {app.strengths.map((strength, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-primary">
                          <TrendingDown className="w-4 h-4" />
                          Weaknesses
                        </h4>
                        <ul className="space-y-1.5">
                          {app.weaknesses.map((weakness, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <X className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Findings */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Key Findings & Patterns
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {keyFindings.map((finding, index) => (
                <motion.div
                  key={finding.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`p-6 h-full border-${finding.color}/30 hover:shadow-lg transition-all`}>
                    <div className={`w-12 h-12 mb-4 rounded-xl bg-${finding.color}/10 flex items-center justify-center`}>
                      <finding.icon className={`w-6 h-6 text-${finding.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{finding.title}</h3>
                    <ul className="space-y-2">
                      {finding.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`text-${finding.color} mt-1`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Summary */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 border-secondary/30">
              <h2 className="text-3xl font-bold mb-6 text-center">Research Summary</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our analysis of <strong className="text-foreground">30+ AAC applications</strong> revealed significant gaps in 
                  accessibility and usability for ALS patients. While many apps offer basic communication features, few provide 
                  the comprehensive, affordable, and easy-to-use solutions that patients truly need.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Key takeaway:</strong> There is a critical need for an application that 
                  combines the best features—<span className="text-accent">eye-tracking, voice output, simple interface, and 
                  affordable pricing</span>—without sacrificing usability or requiring extensive setup.
                </p>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}