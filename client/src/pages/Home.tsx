/**
 * Traditional ICASSP Workshop style: centered academic information page,
 * white ground, restrained IEEE-blue hierarchy, and formal portrait listings.
 */
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import "../traditional-conference.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Program", href: "#program" },
  { label: "Updates", href: "#updates" },
  { label: "Organizers", href: "#organizers" },
];

const TOPICS = [
  "Robust multi-party perception, including speaker diarization, target-speaker extraction, and multi-speaker ASR.",
  "Native tool use, uncertainty-aware planning, clarification, and repair in spoken interactions.",
  "Full-duplex interaction, turn-taking, barge-in, backchannels, latency, and interruption handling.",
  "Modular, end-to-end, multi-agent, and dual-brain spoken-agent architectures.",
  "Evaluation linking component metrics to tool-call correctness, interaction timing, and task completion.",
  "Benchmarks, datasets, failure analysis, real-world deployment, and responsible interaction design.",
];

const PROGRAM = [
  ["09:00–09:10", "Opening remarks"],
  ["09:10–09:55", "Invited Talk 1"],
  ["09:55–10:55", "Oral Session 1"],
  ["10:55–11:20", "Coffee break & social"],
  ["11:20–12:05", "Invited Talk 2"],
  ["12:05–14:05", "Lunch & poster session"],
  ["14:05–15:05", "Oral Session 2"],
  ["15:05–15:50", "Invited Talk 3"],
  ["15:50–16:15", "Coffee break & social"],
  ["16:15–17:00", "Invited Talk 4"],
  ["17:00–18:00", "Demo session"],
];

const SPEAKERS = [
  { name: "Dong Yu", affiliation: "Capital One", image: "/images/speaker-dong-yu_1d1390dd.jpg" },
  { name: "Daniel Povey", affiliation: "Xiaomi", image: "/images/speaker-daniel-povey_20c6cbce.webp" },
  { name: "Abdelrahman Mohamed", affiliation: "Meta", image: "/images/speaker-abdelrahman-mohamed_2c4a185f.jpg" },
  { name: "Berrak Sisman", affiliation: "Johns Hopkins University", image: "/images/berrak-sisman_71dfa05c.jpg" },
];

const ORGANIZERS = [
  { name: "You (Neil) Zhang", role: "Lead Organizer", affiliation: "Dolby Laboratories · Telecom Paris", image: "/images/organizer-you-neil-zhang_dcc59d3b.jpg" },
  { name: "Sun Jiachen Luo", role: "Co-organizer", affiliation: "Technical University of Munich", image: "/images/organizer-sun-jiachen-luo_8c156803.jpg" },
  { name: "Minglun Han", role: "Program Chair", affiliation: "ByteDance Seed", image: "/images/organizer-minglun-han_fd003625.jpg" },
  { name: "Tianyu Shi", role: "Co-organizer", affiliation: "McGill University", image: "/images/organizer-tianyu-shi_6e081234.jpg" },
  { name: "Dongchao Yang", role: "Co-organizer", affiliation: "The Chinese University of Hong Kong", image: "/images/organizer-dongchao-yang_0eab3fdd.jpg" },
  { name: "Jingyao Wu", role: "Co-organizer", affiliation: "MIT", image: "/images/organizer-jingyao-wu_64109546.jpg" },
  { name: "Shengpeng Ji", role: "Co-organizer", affiliation: "Tencent Hunyuan", image: "/images/organizer-shengpeng-ji_08146693.jpg" },
  { name: "Xiulong Liu", role: "Co-organizer", affiliation: "Apple", image: "/images/organizer-xiulong-liu_6c5f2ec3.jpg" },
];

const ADVISORS = [
  { name: "Shinji Watanabe", affiliation: "Carnegie Mellon University", image: "/images/advisor-shinji-watanabe_7b330041.webp" },
  { name: "Jens Heitkaemper", affiliation: "Google DeepMind", image: "/images/advisor-jens-heitkaemper_969c3c20.jpg" },
  { name: "Björn W. Schuller", affiliation: "TUM · Imperial College London", image: "/images/advisor-bjorn-schuller_827baa28.jpg" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="conference-section-title">{children}</h2>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="conference-shell" id="home">
      <header className="conference-header">
        <div className="conference-header-inner">
          <a className="conference-brand" href="#home" onClick={closeMenu} aria-label="SpokenAgent home">
            <span className="conference-mark">SA</span>
            <span><strong>SpokenAgent</strong><small>ICASSP 2027 Satellite Workshop</small></span>
          </a>
          <nav className="conference-nav" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <button className="conference-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        <div className={`conference-mobile-nav ${menuOpen ? "open" : ""}`}>{NAV_ITEMS.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}</div>
      </header>

      <main>
        <section className="conference-title-block">
          <div className="conference-container">
            <p className="conference-kicker">IEEE ICASSP 2027 · Satellite Workshop</p>
            <h1>SpokenAgent: Robust Perception and Reasoning for Agentic Voice Interaction</h1>
            <p className="conference-subtitle">A full-day Workshop on reliable spoken agents in complex, real-world acoustic environments.</p>
            <div className="conference-meta"><span><b>Format:</b> Full-day Satellite Workshop</span><span><b>Venue:</b> ICASSP 2027 · To be announced</span><span><b>Status:</b> Workshop website online</span></div>
          </div>
        </section>

        <div className="conference-container conference-content">
          <section className="conference-section" id="about">
            <SectionTitle>About the Workshop</SectionTitle>
            <p>Spoken agents are moving beyond passive transcription toward systems that listen, reason, call tools, interact in full duplex, and act in real time. In realistic multi-party environments, however, errors in speaker attribution, target-speaker extraction, or recognition can propagate into incorrect tool calls, mistimed interruptions, and failed tasks.</p>
            <p>SpokenAgent brings together speech and audio processing, spoken-language modeling, NLP, and HCI to study these capabilities as one integrated system. The workshop aims to establish shared research questions and evaluation principles for spoken agents that reliably perceive, reason, interact, and act in complex real-world environments.</p>
          </section>

          <section className="conference-section" id="topics">
            <SectionTitle>Topics</SectionTitle>
            <p>We welcome theoretical, algorithmic, empirical, benchmark, systems, and position contributions in the following areas:</p>
            <ul className="conference-topic-list">{TOPICS.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          </section>

          <section className="conference-section conference-callout" id="cfp">
            <SectionTitle>Call for Papers</SectionTitle>
            <p>Contributions may include full papers in ICASSP format, short position or benchmark papers, and negative-result or failure-analysis reports. Accepted archival papers are planned for IEEE Xplore in accordance with ICASSP policy.</p>
            <p className="conference-emphasis">The official submission deadline, paper-submission system, and detailed author instructions will be announced with the ICASSP 2027 Workshop schedule.</p>
          </section>

          <section className="conference-section" id="updates">
            <SectionTitle>Important Dates and Updates</SectionTitle>
            <div className="conference-update-table" role="table" aria-label="Important dates and updates">
              <div role="row"><span>Workshop website</span><strong>Available now</strong></div>
              <div role="row"><span>Call for papers and submission link</span><strong>To be announced</strong></div>
              <div role="row"><span>Review and notification schedule</span><strong>To be announced</strong></div>
              <div role="row"><span>Technical program and presentation details</span><strong>To be announced</strong></div>
              <div role="row"><span>Workshop day</span><strong>ICASSP 2027 · To be announced</strong></div>
            </div>
          </section>

          <section className="conference-section" id="program">
            <SectionTitle>Tentative Program</SectionTitle>
            <p>The full-day program combines invited talks, peer-reviewed papers, posters, demonstrations, and discussion. Session times below are preliminary.</p>
            <div className="conference-program-table" role="table" aria-label="Tentative program">
              <div className="conference-program-head" role="row"><span>Time</span><span>Planned event</span></div>
              {PROGRAM.map(([time, event]) => <div key={time} role="row"><span>{time}</span><span>{event}</span></div>)}
            </div>
          </section>

          <section className="conference-section" id="speakers">
            <SectionTitle>Confirmed Invited Speakers</SectionTitle>
            <p>Confirmed invited speakers will contribute perspectives from industry and academia on reliable spoken-agent architectures and evaluation.</p>
            <div className="conference-speaker-grid">{SPEAKERS.map((person) => <article className="conference-speaker-card" key={person.name}><img src={person.image} alt={person.name} loading="lazy" /><div><h3>{person.name}</h3><p>{person.affiliation}</p><span>Confirmed invited speaker</span></div></article>)}</div>
          </section>

          <section className="conference-section" id="organizers">
            <SectionTitle>Organizing Committee</SectionTitle>
            <div className="conference-people-grid">{ORGANIZERS.map((person) => <article className="conference-person-card" key={person.name}><img src={person.image} alt={person.name} loading="lazy" /><div><h3>{person.name}</h3><p className="conference-role">{person.role}</p><p>{person.affiliation}</p></div></article>)}</div>
          </section>

          <section className="conference-section" id="advisors">
            <SectionTitle>Advisory Board</SectionTitle>
            <div className="conference-advisor-grid">{ADVISORS.map((person) => <article className="conference-advisor-card" key={person.name}><img src={person.image} alt={person.name} loading="lazy" /><div><h3>{person.name}</h3><p>{person.affiliation}</p></div></article>)}</div>
          </section>

          <section className="conference-contact"><SectionTitle>Contact</SectionTitle><p>For Workshop enquiries, please contact the organizers at <a href="mailto:you.zhang@rochester.edu">you.zhang@rochester.edu</a>.</p><a className="conference-contact-button" href="mailto:you.zhang@rochester.edu"><Mail size={16} /> Contact the Organizers</a></section>
        </div>
      </main>

      <footer className="conference-footer"><div className="conference-container"><span>SpokenAgent · ICASSP 2027 Satellite Workshop</span><span>Website information will be updated as official ICASSP 2027 details are released.</span></div></footer>
    </div>
  );
}
