import React from 'react';
import { Users, LayoutGrid, Layers, MessageSquare, FileText, BarChart3, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart CRM',
    desc: 'Manage clients and candidates in one place. Track every interaction, follow-up, and deal status without switching between tools.',
  },
  {
    icon: LayoutGrid,
    title: 'Applicant Tracking (ATS)',
    desc: 'Visual Kanban pipeline across all your open roles. Drag candidates through stages. See your entire hiring funnel at a glance.',
  },
  {
    icon: Layers,
    title: 'AI Candidate Matching',
    desc: 'Describe a role in plain language. AI surfaces and scores best-fit candidates from your database instantly — with reasoning.',
  },
  {
    icon: MessageSquare,
    title: 'Automated Outreach',
    desc: 'Multi-step email and WhatsApp sequences that run on autopilot. Stay in touch with every candidate without lifting a finger.',
  },
  {
    icon: FileText,
    title: 'AI Resume Parser',
    desc: 'Upload a CV and get structured data instantly — skills, experience, contact details, everything extracted automatically.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Time-to-fill, source effectiveness, team activity, pipeline velocity. Know exactly what’s working so you can do more of it.',
  },
];

const steps = [
  { num: '01', title: 'Add the job requirement', desc: 'Paste or type your JD. Recruitizr auto-tags it with skills and seniority and opens your pipeline immediately.' },
  { num: '02', title: 'AI surfaces best-fit candidates', desc: 'Review a scored shortlist — not 200 unfiltered CVs. The AI explains why each candidate matches.' },
  { num: '03', title: 'Move candidates through pipeline', desc: 'Drag and drop across stages. Every update logs automatically. Clients can see real-time status.' },
  { num: '04', title: 'Place, report, and repeat', desc: 'Mark placement done. Track revenue, update your CRM, and see where to focus next. Close the loop fast.' },
];

const stats = [
  { value: '3×', label: 'Faster placements' },
  { value: '60%', label: 'Less admin time' },
  { value: '1', label: 'Platform for everything' },
  { value: 'AI', label: 'Native from day one' },
];

const mockCandidates = [
  { initials: 'PM', name: 'Priya M.', role: 'Sr. Software Eng.', status: 'Interview', color: 'blue' },
  { initials: 'RK', name: 'Rohan K.', role: 'Product Manager', status: 'Shortlisted', color: 'green' },
  { initials: 'AS', name: 'Anjali S.', role: 'Finance Analyst', status: 'Offer Sent', color: 'amber' },
  { initials: 'DP', name: 'Dev P.', role: 'Data Scientist', status: 'Screening', color: 'gray' },
  { initials: 'MT', name: 'Meera T.', role: 'HR Business Partner', status: 'Interview', color: 'blue' },
];

const statusClasses: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-700',
  gray: 'bg-gray-100 text-gray-600',
};

const Recruitizr: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-5">
          AI-Powered Recruitment
        </span>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-5 tracking-tight">
          The Smarter Way to<br />
          <span className="text-blue-600">Hire Faster</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Recruitizr combines CRM, ATS, and AI intelligence in one platform. Stop juggling spreadsheets and disconnected tools — place candidates 3× faster.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-corporate-blue text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Free <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 px-7 py-3 rounded-lg font-semibold hover:border-corporate-blue hover:text-corporate-blue transition-colors"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Why Recruitizr */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-4 tracking-tight">
              Why Your Recruitment<br />Process Matters
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The best candidates are off the market in 10 days. Recruitment teams that rely on spreadsheets and manual follow-ups lose them to faster competitors. Recruitizr gives your team the edge.
            </p>
            <ul className="space-y-4">
              {[
                'AI-powered candidate matching and scoring',
                'Visual pipeline to track every candidate at a glance',
                'Automated outreach so no candidate falls through',
                'Built for Indian HR consultancies and agencies',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-600" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,7 5,10 12,3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mock Dashboard */}
          <div className="rounded-2xl border border-gray-200 shadow-lg bg-blue-50 aspect-[4/3] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 w-[90%]">
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                <span className="font-bold text-sm text-gray-900">Active Candidates</span>
                <span className="bg-blue-50 text-blue-600 rounded-full px-3 py-0.5 text-xs font-semibold">● Live</span>
              </div>
              {mockCandidates.map((c) => (
                <div key={c.initials} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0 gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-corporate-blue flex-shrink-0">
                    {c.initials}
                  </div>
                  <span className="text-xs font-semibold text-gray-900 flex-1">{c.name}</span>
                  <span className="text-xs text-gray-500 flex-1 hidden sm:block">{c.role}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold whitespace-nowrap ${statusClasses[c.color]}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-blue-50/50" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              What You Get
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              Features Built for<br />Modern Recruitment Teams
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Everything your consultancy needs to source faster, screen smarter, and place more candidates — in one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
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

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
              How It Works
            </span>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-3 tracking-tight">
              From Requirement to<br />Placement in 4 Steps
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              A workflow that matches how real recruitment teams operate — no steep learning curve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-corporate-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-blue-100 hidden lg:block" />
                  )}
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-7 text-center">
                <span className="block font-extrabold text-4xl text-corporate-blue leading-none mb-2">{s.value}</span>
                <span className="text-gray-500 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="bg-corporate-blue rounded-3xl py-16 px-6 text-center max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight mb-4 tracking-tight">
            Ready to Place Faster?
          </h2>
          <p className="text-white/80 text-base max-w-md mx-auto mb-9">
            Join recruitment teams using Recruitizr to close roles quicker and grow their consultancy. Start free — no credit card needed.
          </p>
          <a
            href="https://recruitizr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-corporate-blue px-7 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Try Recruitizr Free <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Recruitizr;
