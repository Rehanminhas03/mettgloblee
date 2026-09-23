import { Reveal } from './Reveal';
import { WaIcon } from './WaIcon';

const LEADERS = [
  {
    role: 'FOUNDER',
    name: 'Hammad Ayub',
    copy: 'Leads marketing, paid ads, customer relationships, content direction and commercial positioning.',
    email: 'hammad@mettglobal.com',
  },
  {
    role: 'CO-FOUNDER',
    name: 'Muhammad Ahmad Aamir',
    copy: 'Leads business development, sales coordination, eCommerce, logistics, supply chain and operational execution.',
    email: 'ahmad@mettglobal.com',
  },
];

const TEAM = [
  { name: 'Rehan Minhas', role: 'Lead Web & Technical Delivery' },
  { name: 'Abdullah Randhawa', role: 'Web Development Specialist' },
  { name: 'Muhammad Rafay', role: 'Cybersecurity & Full-Stack Engineer' },
  { name: 'Farasat Ali', role: 'eCommerce Operations Specialist' },
  { name: 'Ali Hassan', role: 'Creative & eCommerce Specialist' },
  { name: 'Muhammad Ilyas', role: 'AI Automation Specialist' },
  { name: 'Junaid', role: 'AI Video & Automation Specialist' },
  { name: 'Mohsin Zarar', role: 'Full-Stack Developer' },
  { name: 'Shahrukh Butt', role: 'Project Coordination & Delivery Lead' },
];

/** `.team` — leadership cards, the U.S. lead panel and the wider roster. */
export function Team() {
  return (
    <section
      id="team"
      className="px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] bg-[#ece7de] py-[110px]"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        07 / CORE TEAM
      </div>

      <Reveal className="max-b900:grid-cols-1 max-b900:gap-8 my-[50px] grid grid-cols-[1fr_.7fr] items-end gap-[60px]">
        <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.065em]">
          Founder-led.
          <br />
          <span className="text-gold font-serif font-normal">
            Specialist-powered.
          </span>
        </h2>
        <p className="text-muted max-w-[650px] text-[18px] leading-[1.75]">
          This is MettGlobal&rsquo;s main operating team. It is supported by
          additional specialists and collaborators brought into engagements
          according to scope and technical need.
        </p>
      </Reveal>

      {/* .leadership — concentric rings bleed off each card's top-right */}
      <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-[18px]">
        {LEADERS.map(leader => (
          <article
            key={leader.email}
            className="bg-paper max-b560:min-h-[330px] max-b560:p-[30px] relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-[28px] p-10 before:absolute before:top-[-90px] before:right-[-80px] before:h-[280px] before:w-[280px] before:rounded-full before:border before:border-[rgba(184,137,45,0.28)] before:content-[''] after:absolute after:top-[-30px] after:right-[-20px] after:h-40 after:w-40 after:rounded-full after:bg-[radial-gradient(circle,var(--color-gold2),transparent_68%)] after:opacity-20 after:content-['']"
          >
            <span className="text-gold text-[11px] font-black tracking-[.2em]">
              {leader.role}
            </span>
            <h3 className="max-b560:text-[34px] my-[14px] text-[42px] tracking-[-.04em]">
              {leader.name}
            </h3>
            <p className="text-muted max-w-[560px] leading-[1.7]">
              {leader.copy}
            </p>
            <a
              href={`mailto:${leader.email}`}
              className="text-gold relative z-[1] mt-[14px] text-[13px] font-black tracking-[.02em] [overflow-wrap:anywhere]"
            >
              {leader.email}
            </a>
          </article>
        ))}
      </div>

      {/* .us-lead-card */}
      <div className="border-line max-b760:grid-cols-1 mt-[18px] mb-6 grid grid-cols-[1fr_auto] items-center gap-9 rounded-[26px] border bg-[linear-gradient(135deg,#fff,#f3ecdf)] p-[34px]">
        <div>
          <span className="text-gold text-[10px] font-black tracking-[.16em]">
            DIRECTOR, U.S. BUSINESS DEVELOPMENT · U.S. REPRESENTATIVE
          </span>
          <h3 className="my-2 text-[34px]">Usman Rafiq</h3>
          <p className="text-muted m-0 max-w-[680px]">
            Represents MettGlobal in the United States for business development,
            commercial conversations and U.S. client coordination.
          </p>
        </div>
        <div className="max-b760:justify-start flex flex-wrap justify-end gap-[10px]">
          <a
            href="https://wa.me/18328580716?text=Hi%20Usman%2C%20I%27d%20like%20to%20discuss%20MettGlobal%20services."
            target="_blank"
            rel="noopener"
            className="border-line flex items-center gap-[7px] rounded-full border bg-white px-[15px] py-[11px] text-xs font-extrabold"
          >
            <WaIcon className="!h-[23px] !w-[23px]" />
            WhatsApp
          </a>
          <a
            href="tel:+18328580716"
            className="border-line flex items-center gap-[7px] rounded-full border bg-white px-[15px] py-[11px] text-xs font-extrabold"
          >
            Call +1 (832) 858-0716
          </a>
          <a
            href="mailto:usman@mettglobal.com"
            className="border-line flex items-center gap-[7px] rounded-full border bg-white px-[15px] py-[11px] text-xs font-extrabold"
          >
            usman@mettglobal.com
          </a>
        </div>
      </div>

      {/* .team-list */}
      <div className="mt-[18px] border-t border-[#ccc4b6]">
        {TEAM.map(member => (
          <div
            key={member.name}
            className="max-b900:grid-cols-1 max-b900:gap-[5px] grid grid-cols-2 border-b border-[#ccc4b6] py-[19px]"
          >
            <strong className="text-[17px]">{member.name}</strong>
            <span className="text-muted">{member.role}</span>
          </div>
        ))}
      </div>

      {/* .extended */}
      <div className="max-b900:grid-cols-[60px_1fr] max-b560:grid-cols-1 max-b560:p-7 mt-10 grid grid-cols-[120px_1fr] gap-[35px] rounded-[28px] bg-black p-[45px] text-white">
        <span className="text-gold2 max-b900:text-[60px] text-[90px] leading-[.8]">
          +
        </span>
        <div>
          <h3 className="mt-0 mb-[10px] text-[32px]">
            Core team, backed by a wider specialist network.
          </h3>
          <p className="max-w-[800px] leading-[1.7] text-[#a8a49a]">
            Beyond the core team, MettGlobal works with additional developers,
            designers, marketers, operations resources and specialist
            collaborators based on project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
