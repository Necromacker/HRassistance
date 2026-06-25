import React from 'react';
import {
  ArrowRight, BarChart3, Brain, BriefcaseBusiness, Calendar, CheckCircle,
  ClipboardList, Database, FileText, GitBranch, Layers, LayoutGrid,
  MessageSquare, Phone, Search, Shield, Sparkles, Users, UserCheck, Zap
} from 'lucide-react';

const toolsReplaced = [
  { name: 'Spreadsheets', desc: 'All the trackers, lists, and sheets you maintain daily' },
  { name: 'CRM', desc: 'Client management and relationship tracking' },
  { name: 'ATS', desc: 'Applicant tracking from sourcing to placement' },
  { name: 'HRMS', desc: 'Attendance, leaves, and people management' },
  { name: 'Local Dashboards', desc: 'Real-time business intelligence and reporting' },
];

const products = [
  {
    name: 'RecruiterIQ',
    tagline: 'AI-powered recruitment tools',
    desc: '6 purpose-built AI tools trained on real recruitment workflows — JD Generator, Resume Screening & Ranking, Interview Question Generator, Candidate Insights, Role & Market Analyzer, and Company Intelligence.',
    icon: Brain,
  },
  {
    name: 'HireTrack',
    tagline: 'End-to-end recruitment pipeline',
    desc: 'From first call to final joining — track everything. Candidate calling reports, resume pipeline, interview scheduling, closures & offers, joining tracker, and job postings.',
    icon: GitBranch,
  },
  {
    name: 'TalentVault',
    tagline: 'AI candidate database',
    desc: 'Your private talent pool — every resume you\'ve ever sourced, searchable in seconds with AI-powered semantic search. Bulk import, smart tagging, and advanced filters.',
    icon: Database,
  },
  {
    name: 'HRMS',
    tagline: 'People management suite',
    desc: 'Attendance, leaves, performance, onboarding, exits — all in one place. Built for the unique needs of staffing firms, not generic corporates.',
    icon: Users,
  },
  {
    name: 'NextMove',
    tagline: 'Predictive analytics',
    desc: 'Data-driven insights to make smarter decisions — pipeline velocity, revenue tracking, team performance, and business forecasting.',
    icon: BarChart3,
  },
];

const painPoints = [
  { value: '5+', label: 'Tools juggled daily' },
  { value: '40%', label: 'Time lost to admin' },
  { value: '3×', label: 'Duplicate listings' },
  { value: '0', label: 'Real-time visibility' },
];

const platformFeatures = [
  {
    icon: Layers,
    title: 'All-in-One Operating System',
    desc: 'Combines CRM, ATS, and HRMS into a single platform tailored for recruitment agencies. Reduce costs, cut complexity, and get one source of truth.',
  },
  {
    icon: Sparkles,
    title: 'Recruiter-Centric AI',
    desc: 'AI that\'s trained on real recruitment workflows — from screening resumes to prepping interview panels. Not generic ChatGPT, but purpose-built tools.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Productivity',
    desc: 'Built-in analytics and dashboards help you track pipeline velocity, revenue, team performance, and make data-backed decisions.',
  },
  {
    icon: Shield,
    title: 'Privacy & Clean Data',
    desc: 'Built-in data hygiene, consent management, deduplication, and EEOC compliance. Every AI output requires human review before any decision.',
  },
];

const beforeAfter = {
  before: [
    '5+ disconnected tools and profiles',
    'Lost follow-ups and missed deadlines',
    'Manual calling and billing through copies',
    'Zero real-time visibility on pipeline',
    'Hours wasted matching CVs and creating JDs',
  ],
  after: [
    'CRM + ATS + AI in one login',
    'Automated reminders and task triggers',
    'Comprehensive activity and call logs',
    'Real-time dashboards by role and team',
    'AI does screening, JDs, and matching in seconds',
  ],
};

const Recruitizr: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          CRM + ATS + AI — One Platform
        </span>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-5 tracking-tight">
          Your recruitment firm's<br />
          <span className="text-blue-600">operating system.</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
          Built by recruiters, for recruiters — rooted in real mandates daily.
        </p>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          Stop juggling spreadsheets, disconnected tools, and manual follow-ups.
          Recruitizr brings your CRM, ATS, and AI intelligence into one platform —
          so your team closes more, faster.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-corporate-blue text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 px-7 py-3 rounded-lg font-semibold hover:border-corporate-blue hover:text-corporate-blue transition-colors"
          >
            Request a Demo
          </a>
        </div>
        <div className="flex gap-6 justify-center flex-wrap text-xs text-gray-400">
          <span>✓ No credit card required</span>
          <span>✓ Ready in 5 min or less</span>
          <span>✓ Compliance-first architecture</span>
        </div>
      </section>

      {/* 5 Tools Recruitizr Replaces */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              One Platform
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              5 tools Recruitizr replaces
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Most recruitment firms pay for 5+ subscriptions that don't talk to each other.
              Recruitizr consolidates them into one intelligent platform — saving you money and sanity.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {toolsReplaced.map((tool) => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all">
                <h3 className="font-bold text-sm text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">One subscription. One login. One platform for the team. ↓</p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              The Problem
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              Your team is drowning in spreadsheets
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Recruitment firms use spreadsheets, WhatsApp groups, and sticky notes across
              different logins. The result? Missed follow-ups, lost candidates, zero visibility, and revenue
              left on the table.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-7 text-center">
                <span className="block font-extrabold text-4xl text-corporate-blue leading-none mb-2">{s.value}</span>
                <span className="text-gray-500 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform */}
      <section className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              The Solution
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              One platform to drive your<br />entire business
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Replace fragmented tools with a single, intelligent system built for how
              recruitment agencies actually work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {platformFeatures.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              Products
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              5 products. One mission.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Each product solves a core challenge in the recruitment lifecycle — together, they give you a complete operating system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{p.tagline}</span>
                <h3 className="font-bold text-lg text-gray-900 mt-1 mb-3">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-12 tracking-tight text-center">
            Before vs. After Recruitizr
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-red-100 rounded-2xl p-8">
              <h3 className="font-bold text-sm text-red-500 uppercase tracking-wider mb-6">Without Recruitizr</h3>
              <ul className="space-y-4">
                {beforeAfter.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-green-100 rounded-2xl p-8">
              <h3 className="font-bold text-sm text-green-600 uppercase tracking-wider mb-6">With Recruitizr</h3>
              <ul className="space-y-4">
                {beforeAfter.after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* See it in Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
            Request a Demo
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
            See Recruitizr in action
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            Let's walk through how Recruitizr can replace your existing tools, boost your team's productivity, and give you
            real-time visibility into every mandate.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {[
              'Personalized demo for your team size and workflow',
              'See features in action with your own JDs',
              'Custom migration plan from your current tools',
              'No commitment — just a conversation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="bg-corporate-blue rounded-3xl py-16 px-6 text-center max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight mb-4 tracking-tight">
            Ready to ditch the spreadsheets?
          </h2>
          <p className="text-white/80 text-base max-w-md mx-auto mb-9">
            Join recruitment firms that run their entire business on Recruitizr — one platform, zero chaos.
          </p>
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-corporate-blue px-7 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Recruitizr;
