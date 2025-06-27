import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  CheckCircle, Phone, Users, Target, TrendingUp, DollarSign, Clock, Star, Zap, Scale, Handshake,
  XCircle, BarChart, Search, Lightbulb, Shield, Briefcase, Award, CalendarCheck,
  DollarSign as DollarSignIcon, Timer, Link, ThumbsUp, X, Bot, Eye, UserCheck,
  TrendingDown, ShoppingCart, AlertTriangle, Flame
} from 'lucide-react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProposalPage from '@/components/ProposalPage.jsx';
import gammaPages from '@/gammaConfig';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const challenges = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Stuck at the Same Revenue",
      description:
        "Your business has plateaued and you can't seem to break through to the next level of growth.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-500" />,
      title: "Only Attracting Price Shoppers",
      description:
        "You're constantly competing on price instead of value, eroding your profit margins.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Low-Quality Leads from Lead Platforms",
      description:
        "You're paying for leads that waste your time and rarely convert into profitable jobs.",
    },
    {
      icon: <Flame className="w-8 h-8 text-red-500" />,
      title: "Burnt by Cheap Marketing Agencies",
      description:
        "You've been disappointed by agencies that overpromise and underdeliver on results.",
    },
  ];

  const glintaroPartnership = [
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: "Checkout Our AI Market Dominator System",
      description:
        "Our exclusive AI Market Dominator system—trusted by less than 3% of companies—combines advanced technology and human insight to deliver top-quality flooring job opportunities straight to you.",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Zero Effort, Maximum Results",
      description:
        "We handle everything from outreach to qualification and trust-building, so you can focus on your craft and closing jobs.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-green-500" />,
      title: "Advanced Qualification—AI Meets Human Insight",
      description:
        "Every opportunity is double-checked by AI and experienced humans, ensuring you only meet serious, ready-to-hire homeowners.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      title: "Seamless Handoff & Close",
      description:
        "Receive pre-qualified, high-intent job opportunities. You quote and close—simple, efficient, and profitable.",
    },
  ];

  const whatContractorsWant = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Consistent, High-Value Projects",
      description:
        "A steady pipeline of serious, ready-to-act clients—not just tire-kickers or price shoppers. Fill your calendar with profitable flooring every month.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Transparency and Trust",
      description:
        "Clear, honest communication about costs, expectations, and project scope, with no hidden fees or surprises. Our performance-based model ensures alignment.",
    },
    {
      icon: <Star className="w-8 h-8 text-green-500" />,
      title: "Reputation and Local Dominance",
      description:
        "Tools and support to build a strong reputation, collect positive reviews, and stand out as the go-to expert in your local market.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "No Time Wasted",
      description:
        "Only connect with homeowners who are genuinely interested and qualified, so you can maximize your time and profits, focusing on what you do best.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      title: "Support and True Partnership",
      description:
        "A partner who is invested in your success, understands the flooring industry, and shares the risk, working alongside you to achieve your growth goals.",
    },
  ];

  const whatSetsUsApart = [
    {
      icon: <DollarSignIcon className="w-8 h-8 text-green-500" />,
      title: "Performance-Based Partnership",
      description: "No retainer fees—invest only when you win a job.",
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Complete Transparency",
      description:
        "Track every opportunity and result, so you always know your ROI.",
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Industry Expertise",
      description:
        "We specialize exclusively in flooring contractors, understanding your unique challenges and opportunities.",
    },
  ];

  const whoWePartnerWith = [
    {
      icon: <ThumbsUp className="w-8 h-8 text-green-500" />,
      title: "Proven Track Record",
      description: "Have a proven track record of positive customer reviews",
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "High Close Rate",
      description: "Consistently close jobs when given qualified opportunities",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Growth Commitment",
      description:
        "Are committed to delivering quality work and growing your business",
    },
  ];

  const notRightFit = [
    {
      icon: <X className="w-8 h-8 text-red-500" />,
      title: "Lack Positive Reviews",
      description: "Lack positive reviews or a history of satisfied customers",
    },
    {
      icon: <X className="w-8 h-8 text-red-500" />,
      title: "Low Close Rate",
      description: "Struggle to close jobs even with qualified prospects",
    },
    {
      icon: <X className="w-8 h-8 text-red-500" />,
      title: "Not Ready to Invest",
      description: "Aren't ready to invest in your own growth",
    },
  ];

  const faqs = [
    {
      question: "When do I pay for your service?",
      answer:
        "Our fees are exclusively tied to your success. You only pay when you close a job from a lead we provide.",
    },
    {
      question: "What types of flooring projects do you specialize in?",
      answer:
        "We can target a wide range of flooring projects, including hardwood, laminate, tile, carpet, and luxury vinyl—tailored to your expertise.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Most of our partners begin receiving qualified job opportunities within a few weeks of launching our partnership.",
    },
    {
      question: "What if a lead doesn't convert?",
      answer:
        "Our performance-based model means there's no financial risk for unconverted leads. We are committed to delivering only the highest quality opportunities.",
    },
  ];
  return (
    <Router>
      <Routes>
        {/* DYNAMIC GAMMA ROUTES */}
        {gammaPages.map((page, index) => (
          <Route
            key={index}
            path={page.path}
            element={
              <ProposalPage gammaLink={page.gammaLink} title={page.title} />
            }
          />
        ))}

        {/* Your existing main website route - ENSURE THIS IS THE LAST ROUTE */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white">
              {/* Header */}
              <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <div className="text-2xl font-bold text-white">GLINTARO</div>
                  <nav className="hidden md:flex space-x-8">
                    <a
                      href="#challenges"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      CHALLENGES
                    </a>
                    <a
                      href="#partnership"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      PARTNERSHIP
                    </a>
                    <a
                      href="#what-contractors-want"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      WHAT YOU WANT
                    </a>
                    <a
                      href="#what-sets-us-apart"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      WHAT SETS US APART
                    </a>
                    <a
                      href="#faq"
                      className="text-gray-300 hover:text-green-500 transition-colors"
                    >
                      FAQ
                    </a>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-4 h-4 text-green-500" />
                    <span className="text-sm">+1 (231) 599 9809</span>
                  </div>
                </div>
              </header>

              {/* Hero Section */}
              <section className="pt-24 pb-16 px-4">
                <div className="container mx-auto text-center">
                  <div className="mb-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm">
                      Don\'t Pay Us If You Don\'t Get the Job
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Unlock Consistent, High-Quality Flooring Jobs
                    <br />
                    <span className="text-green-500">
                      on a Partnership Basis
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                    We deliver ready-to-quote flooring projects straight to you.
                    No chasing, no cold calls—just real opportunities.
                    <span className="text-green-500 font-semibold">
                      {" "}
                      You only pay when you win a job.
                    </span>
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 text-lg rounded-full">
                    Book Your Intro Call
                  </Button>
                </div>
              </section>

              {/* Challenges Section */}
              <section id="challenges" className="py-16 px-4 bg-gray-900/50">
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Are These Challenges Holding You Back?
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {challenges.map((challenge, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {challenge.icon}
                          </div>
                          <CardTitle className="text-white">
                            {challenge.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {challenge.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* The Glintaro Partnership Section */}
              <section id="partnership" className="py-16 px-4">
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    The Glintaro Partnership: Your Competitive Edge
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {glintaroPartnership.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <CardTitle className="text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* What Flooring Contractors Really Want Section */}
              <section
                id="what-contractors-want"
                className="py-16 px-4 bg-gray-900/50"
              >
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    What Flooring Contractors Really Want
                  </h2>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whatContractorsWant.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <CardTitle className="text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* What Sets Us Apart Section */}
              <section id="what-sets-us-apart" className="py-16 px-4">
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    What Sets Us Apart
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whatSetsUsApart.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <CardTitle className="text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Partnership Built on Mutual Success */}
              <section className="py-16 px-4 bg-gray-900/50">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    A Partnership Built on Mutual Success
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                    As we invest our resources and expertise into your growth,
                    we can\'t work with everyone. We seek partners who are
                    equally committed to excellence—flooring contractors who
                    consistently deliver outstanding results, have a strong
                    track record of positive client experiences, and maintain a
                    high close rate. This ensures our partnership is built on a
                    solid foundation of mutual success.
                  </p>
                  <p className="text-lg text-green-400 font-semibold">
                    We work only with flooring contractors, and we want each of
                    our clients to dominate their local area.
                  </p>
                </div>
              </section>

              {/* Who We Partner With Section */}
              <section className="py-16 px-4">
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Who We Partner With
                  </h2>
                  <p className="text-xl text-gray-300 text-center mb-12">
                    You\'re a great fit if you:
                  </p>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {whoWePartnerWith.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <CardTitle className="text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    We are not the right fit if you:
                  </h3>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {notRightFit.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900 border-gray-700 text-center"
                      >
                        <CardHeader>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <CardTitle className="text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-16 px-4 bg-green-500/10">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Flooring Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                    Book a quick 30-minute call with us to discover how our AI
                    Market Dominator System can deliver 20-25 high-value
                    flooring jobs to you in the next 90 days. No obligations,
                    just actionable insights.
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 text-lg rounded-full">
                    Book Your Intro Call
                  </Button>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="py-16 px-4">
                <div className="container mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Frequently Asked Questions
                  </h2>
                  <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="mb-8 p-6 bg-gray-900 border border-gray-700 rounded-lg"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-950 py-8 px-4 text-center text-gray-500 text-sm">
                <div className="container mx-auto">
                  <p>&copy; 2024 Glintaro. All rights reserved.</p>
                  <p className="mt-2">Privacy Policy | Terms of Service</p>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
