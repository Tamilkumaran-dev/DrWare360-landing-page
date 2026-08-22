"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DemoDialog } from "@/components/demo-dialog";
import {
  Activity,
  AlarmClockCheck,
  ArrowRight,
  BarChart3,
  BellRing,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileClock,
  FileText,
  Fingerprint,
  HeartPulse,
  History,
  Hospital,
  LayoutDashboard,
  ListChecks,
  Menu,
  MessageSquareText,
  Network,
  Pill,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  UserCog,
  Users,
  UsersRound,
  X,
} from "lucide-react";

const APP_URL = "https://ui.drware360.com";

const featureGroups = [
  {
    eyebrow: "Front desk flow",
    title: "From booking to bedside, without the bottlenecks.",
    description:
      "Give reception teams one calm workspace for appointments, arrivals, token assignment and live patient movement.",
    color: "blue",
    icon: CalendarCheck2,
    features: [
      { icon: CalendarCheck2, title: "Appointment booking", text: "Find doctors, view schedules and book the right slot." },
      { icon: ClipboardCheck, title: "Smart check-in", text: "Confirm arrivals while preserving the allocated token." },
      { icon: Radio, title: "Live queue", text: "Track waiting, vitals, consultation and completion in real time." },
      { icon: Clock3, title: "Availability", text: "Coordinate hospital hours, doctor schedules and capacity." },
    ],
  },
  {
    eyebrow: "Clinical continuity",
    title: "Every consultation keeps the next step in view.",
    description:
      "Bring visit context, prescriptions, follow-ups and patient history into a connected clinical rhythm.",
    color: "coral",
    icon: Stethoscope,
    features: [
      { icon: Stethoscope, title: "Consultations", text: "Move through structured clinical workflows with clarity." },
      { icon: Pill, title: "Prescriptions", text: "Maintain medicine catalogues and prescription records." },
      { icon: ListChecks, title: "Follow-up lists", text: "Keep upcoming patient follow-ups visible and actionable." },
      { icon: History, title: "Clinical history", text: "Review consultation history across the care journey." },
    ],
  },
  {
    eyebrow: "Hospital operations",
    title: "Control at every layer. Complexity nowhere in sight.",
    description:
      "Run people, permissions, policies and hospital administration from a role-aware operating layer.",
    color: "mint",
    icon: Hospital,
    features: [
      { icon: UserCog, title: "Staff management", text: "Onboard teams, roles, departments and working details." },
      { icon: ShieldCheck, title: "Access control", text: "Shape access with groups and capability-based permissions." },
      { icon: BellRing, title: "Announcements", text: "Keep hospital teams aligned with timely updates." },
      { icon: FileClock, title: "Audit logs", text: "Follow important system activity with an accountable trail." },
    ],
  },
];

const roleCards = [
  { icon: UserCheck, role: "Patients", text: "Book visits and revisit appointment history." },
  { icon: Stethoscope, role: "Doctors", text: "Own availability, queue, consultations and follow-ups." },
  { icon: ClipboardCheck, role: "Reception", text: "Coordinate booking, check-in and patient movement." },
  { icon: HeartPulse, role: "Nurses", text: "Stay close to queues, vitals and care progression." },
  { icon: Pill, role: "Pharmacists", text: "Manage prescriptions from a focused workspace." },
  { icon: Hospital, role: "Hospital admins", text: "Operate staff, access, schedules and oversight." },
  { icon: Network, role: "System admins", text: "Manage hospitals, master data, policies and governance." },
];

const journey = [
  { number: "01", title: "Discover availability", text: "Match care needs with the right doctor and schedule.", icon: Search },
  { number: "02", title: "Book & prepare", text: "Create the appointment and allocate the visit slot.", icon: CalendarCheck2 },
  { number: "03", title: "Arrive & check in", text: "Confirm the patient and move them into the live flow.", icon: ClipboardCheck },
  { number: "04", title: "Consult & prescribe", text: "Complete the visit with a connected clinical record.", icon: Stethoscope },
  { number: "05", title: "Follow through", text: "Keep history, follow-ups and continuity easy to reach.", icon: ListChecks },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="DrWare360 home">
      {compact ? (
        <span className="brand-compact"><HeartPulse aria-hidden="true" />D<span>360</span></span>
      ) : (
        <Image src="/drware360-wordmark.svg" width={220} height={69} alt="DrWare360" priority />
      )}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDemoDialogOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-active", menuOpen);
    return () => document.body.classList.remove("menu-active");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#features">Features</a>
            <a href="#roles">For every role</a>
            <a href="#security">Control</a>
          </nav>
          <div className="header-actions">
            <a className="text-link" href={`${APP_URL}/login`}>Staff login</a>
            <a href="#" className="button button-small" onClick={(e) => { e.preventDefault(); setDemoDialogOpen(true); }}>Open DrWare360 <ArrowRight /></a>
          </div>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav aria-label="Mobile navigation">
            <a href="#platform" onClick={closeMenu}>Platform <ChevronRight /></a>
            <a href="#features" onClick={closeMenu}>Features <ChevronRight /></a>
            <a href="#roles" onClick={closeMenu}>For every role <ChevronRight /></a>
            <a href="#security" onClick={closeMenu}>Control <ChevronRight /></a>
            <a href={`${APP_URL}/login`} onClick={closeMenu}>Staff login <ChevronRight /></a>
          </nav>
          <a href="#" className="button" onClick={(e) => { e.preventDefault(); closeMenu(); setDemoDialogOpen(true); }}>Open DrWare360 <ArrowRight /></a>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <div className="shell hero-layout">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow light"><span><Sparkles /></span> One connected healthcare workspace</div>
            <h1>Care moves better when everything moves <em>together.</em></h1>
            <p className="hero-lede">
              DrWare360 connects patients, care teams and hospital operations—from the first appointment to every follow-up after it.
            </p>
            <div className="hero-ctas">
              <a href="#" className="button button-bright" onClick={(e) => { e.preventDefault(); setDemoDialogOpen(true); }}>Launch DrWare360 <ArrowRight /></a>
              <a className="button button-ghost" href="#platform">See the platform <ChevronRight /></a>
            </div>
            <div className="hero-proof">
              <div><strong>7</strong><span>role-aware portals</span></div>
              <div><strong>Live</strong><span>queue visibility</span></div>
              <div><strong>360°</strong><span>operational view</span></div>
            </div>
          </div>

          <div className="product-stage" data-reveal>
            <div className="stage-halo" />
            <div className="float-chip chip-top"><span><Radio /></span><div><small>Queue status</small><strong>Live & connected</strong></div></div>
            <div className="float-chip chip-bottom"><span><AlarmClockCheck /></span><div><small>Next patient</small><strong>Ready in 04 min</strong></div></div>
            <div className="app-window">
              <div className="window-topbar">
                <div className="window-brand"><span><HeartPulse /></span><b>DrWare<span>360</span></b></div>
                <div className="window-search"><Search /><span>Search patients...</span></div>
                <div className="window-avatar">AR</div>
              </div>
              <div className="window-body">
                <aside className="window-sidebar" aria-hidden="true">
                  <span className="active"><LayoutDashboard /></span>
                  <span><Users /></span>
                  <span><CalendarCheck2 /></span>
                  <span><Radio /></span>
                  <span><Pill /></span>
                  <span><FileText /></span>
                </aside>
                <div className="window-content">
                  <div className="window-heading"><div><small>Thursday, 6 August</small><h3>Good morning, Asha.</h3></div><button><BellRing /></button></div>
                  <div className="metric-row">
                    <div className="mini-metric blue"><span><CalendarCheck2 /></span><div><small>Appointments</small><strong>48</strong><em>+8 today</em></div></div>
                    <div className="mini-metric mint"><span><UserCheck /></span><div><small>Checked in</small><strong>31</strong><em>65% arrived</em></div></div>
                    <div className="mini-metric coral"><span><Clock3 /></span><div><small>Avg. wait</small><strong>12m</strong><em>3m faster</em></div></div>
                  </div>
                  <div className="window-panels">
                    <div className="queue-panel">
                      <div className="panel-title"><div><i /> Live patient flow</div><span>View all</span></div>
                      {[
                        ["JS", "John Samuel", "A-014", "In consultation", "active"],
                        ["PM", "Priya Menon", "A-015", "Vitals taken", "ready"],
                        ["RK", "Rohan Kumar", "A-016", "Waiting", "waiting"],
                      ].map((row) => (
                        <div className="patient-row" key={row[2]}>
                          <span className="patient-avatar">{row[0]}</span>
                          <div><strong>{row[1]}</strong><small>Token {row[2]}</small></div>
                          <em className={row[4]}>{row[3]}</em>
                        </div>
                      ))}
                    </div>
                    <div className="chart-panel">
                      <div className="panel-title"><div>Weekly visits</div><span>Aug</span></div>
                      <div className="chart-value">284 <small>+12.4%</small></div>
                      <div className="bar-chart" aria-hidden="true">
                        {[42, 60, 48, 78, 67, 92, 55].map((height, index) => <i key={index} style={{ height: `${height}%` }}><span /></i>)}
                      </div>
                      <div className="chart-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-fade" />
      </section>

      <section className="role-ribbon" aria-label="Supported healthcare roles">
        <div className="ribbon-track">
          {["Patients", "Doctors", "Receptionists", "Nurses", "Pharmacists", "Hospital administrators", "System administrators", "Patients", "Doctors", "Receptionists", "Nurses", "Pharmacists", "Hospital administrators", "System administrators"].map((role, index) => (
            <span key={`${role}-${index}`}><CheckCircle2 /> {role}</span>
          ))}
        </div>
      </section>

      <section id="platform" className="section section-intro">
        <div className="shell">
          <div className="section-heading centered" data-reveal>
            <div className="eyebrow"><span><Activity /></span> One platform. One pulse.</div>
            <h2>Healthcare is a team sport.<br /><em>Your software should know that.</em></h2>
            <p>DrWare360 brings the patient journey and hospital operation into one living system—so every role sees what matters and knows what comes next.</p>
          </div>
          <div className="platform-bento" data-reveal>
            <article className="bento-card bento-journey">
              <div className="bento-copy">
                <span className="card-icon blue"><HeartPulse /></span>
                <h3>A continuous patient journey</h3>
                <p>Booking, arrival, consultation, prescription and follow-up stay connected instead of becoming isolated moments.</p>
              </div>
              <div className="journey-mini" aria-hidden="true">
                <span className="done"><Check /></span><i /><span className="done"><Check /></span><i /><span className="current"><Stethoscope /></span><i /><span><Pill /></span>
              </div>
            </article>
            <article className="bento-card bento-realtime">
              <div className="live-badge"><i /> Live now</div>
              <div className="realtime-number">12<span>min</span></div>
              <p>Average patient wait</p>
              <div className="pulse-line" aria-hidden="true"><span /></div>
            </article>
            <article className="bento-card bento-control">
              <div className="permission-stack" aria-hidden="true">
                <div><span className="initial blue-bg">DR</span><div><strong>Doctor</strong><small>Consultation access</small></div><CheckCircle2 /></div>
                <div><span className="initial coral-bg">RC</span><div><strong>Reception</strong><small>Scheduling access</small></div><CheckCircle2 /></div>
                <div><span className="initial mint-bg">PH</span><div><strong>Pharmacy</strong><small>Prescription access</small></div><CheckCircle2 /></div>
              </div>
              <div className="bento-copy"><span className="card-icon mint"><Fingerprint /></span><h3>The right access, by design</h3><p>Role-aware portals and capability-based permissions keep every workspace focused.</p></div>
            </article>
            <article className="bento-card bento-insight">
              <div className="bento-copy"><span className="card-icon coral"><BarChart3 /></span><h3>Operations you can actually see</h3><p>Follow appointments, patient flow, activity and hospital performance from clear dashboards.</p></div>
              <div className="insight-visual" aria-hidden="true">
                <div className="donut"><span>78<small>%</small></span></div>
                <div className="insight-legend"><span><i className="dot-blue" />Completed <b>78%</b></span><span><i className="dot-pale" />Remaining <b>22%</b></span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="features" className="section feature-section">
        <div className="shell">
          <div className="section-heading split" data-reveal>
            <div><div className="eyebrow"><span><Sparkles /></span> Built for the whole operation</div><h2>Everything your hospital needs to <em>move as one.</em></h2></div>
            <p>Deep enough for daily operations. Clear enough for every role. Connected enough to remove the handoff gaps.</p>
          </div>
          <div className="feature-groups">
            {featureGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <article className={`feature-group ${group.color}`} key={group.eyebrow} data-reveal>
                  <div className="feature-group-copy">
                    <span className="group-number"><GroupIcon /></span>
                    <div className="group-eyebrow">{group.eyebrow}</div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className="feature-list">
                    {group.features.map((feature) => {
                      const Icon = feature.icon;
                      return <div className="feature-item" key={feature.title}><span><Icon /></span><div><h4>{feature.title}</h4><p>{feature.text}</p></div></div>;
                    })}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="more-features" data-reveal>
            {[
              [Users, "Patient directory", "A searchable hospital-wide patient workspace."],
              [UsersRound, "Groups & teams", "Organize people around real operational responsibilities."],
              [Clock3, "Working hours", "Coordinate hospital and doctor availability."],
              [CalendarCheck2, "Leaves & holidays", "Keep schedule-impacting dates visible."],
              [MessageSquareText, "Notifications", "Bring important account and workflow updates forward."],
              [FileText, "Master data", "Manage hospitals and clinical catalogues centrally."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof Users;
              return <div className="small-feature" key={title as string}><FeatureIcon /><div><h4>{title as string}</h4><p>{text as string}</p></div></div>;
            })}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="shell">
          <div className="journey-header" data-reveal>
            <div className="eyebrow light"><span><Activity /></span> One patient, one connected path</div>
            <h2>Five moments.<br /><em>One effortless flow.</em></h2>
          </div>
          <div className="journey-track" data-reveal>
            {journey.map((step) => {
              const Icon = step.icon;
              return <article className="journey-step" key={step.number}><div className="journey-step-top"><span>{step.number}</span><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="roles" className="section roles-section">
        <div className="shell roles-layout">
          <div className="roles-copy" data-reveal>
            <div className="eyebrow"><span><UsersRound /></span> Made for every role</div>
            <h2>One system.<br /><em>A workspace that feels personal.</em></h2>
            <p>Each person gets a view shaped around their responsibility—without breaking the shared operational picture.</p>
            <a href="#" className="inline-link" onClick={(e) => { e.preventDefault(); setDemoDialogOpen(true); }}>Explore DrWare360 <ArrowRight /></a>
          </div>
          <div className="role-cards" data-reveal>
            {roleCards.map((card, index) => {
              const Icon = card.icon;
              return <article className="role-card" key={card.role} style={{ "--index": index } as React.CSSProperties}><span><Icon /></span><div><h3>{card.role}</h3><p>{card.text}</p></div><ChevronRight /></article>;
            })}
          </div>
        </div>
      </section>

      <section id="security" className="section control-section">
        <div className="shell control-layout">
          <div className="control-visual" data-reveal>
            <div className="shield-orbit orbit-one"><span><UserCheck /></span></div>
            <div className="shield-orbit orbit-two"><span><FileClock /></span></div>
            <div className="shield-core"><ShieldCheck /><strong>Controlled</strong><span>Role-aware access</span></div>
            <div className="audit-card"><div><FileClock /><span>Audit event recorded</span></div><CheckCircle2 /></div>
            <div className="access-card"><span>QUEUE.READ</span><strong>Access granted</strong><CheckCircle2 /></div>
          </div>
          <div className="control-copy" data-reveal>
            <div className="eyebrow light"><span><ShieldCheck /></span> Confidence built in</div>
            <h2>Clarity for teams.<br /><em>Control for operators.</em></h2>
            <p>DrWare360 combines role-aware routing, capability-based actions and accountable activity records to keep complex operations understandable.</p>
            <ul>
              <li><CheckCircle2 /><span><strong>Capability-based permissions</strong>Granular access aligned to real responsibilities.</span></li>
              <li><CheckCircle2 /><span><strong>Role-aware portals</strong>Focused routes and workflows for every account type.</span></li>
              <li><CheckCircle2 /><span><strong>Audit visibility</strong>A clear trail for important operational activity.</span></li>
              <li><CheckCircle2 /><span><strong>System oversight</strong>Hospital, master-data and policy administration.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="shell cta-card" data-reveal>
          <div className="cta-grid" />
          <div className="cta-orb" />
          <div className="cta-copy">
            <div className="eyebrow light"><span><HeartPulse /></span> Care. Connect. Complete.</div>
            <h2>Give every care journey<br />a better rhythm.</h2>
            <p>Bring your patients, teams and operations together with DrWare360.</p>
            <div className="hero-ctas">
              <a href="#" className="button button-bright" onClick={(e) => { e.preventDefault(); setDemoDialogOpen(true); }}>Open DrWare360 <ArrowRight /></a>
              <a className="button button-ghost" href={`${APP_URL}/patient/login`}>Patient portal <ChevronRight /></a>
            </div>
          </div>
          <div className="cta-mark" aria-hidden="true"><HeartPulse /></div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div><Logo /><p>A connected operating platform for modern healthcare teams.</p></div>
          <div className="footer-links"><div><strong>Platform</strong><a href="#platform">Overview</a><a href="#features">Features</a><a href="#roles">For every role</a></div><div><strong>Portals</strong><a href={`${APP_URL}/login`}>Staff portal</a><a href={`${APP_URL}/patient/login`}>Patient portal</a><a href={`${APP_URL}/master/login`}>System administration</a></div></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} DrWare360. All rights reserved.</span><span>Care <i /> Connect <i /> Complete</span></div>
      </footer>
      <DemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </main>
  );
}
