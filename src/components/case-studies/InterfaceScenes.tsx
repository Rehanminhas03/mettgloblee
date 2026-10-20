import type { ReactNode } from 'react';
import s from './interface-scenes.module.css';
const C = {
  gold: '#e0bc68',
  cream: '#f3eee2',
  muted: '#b8ad98',
  line: '#554e42',
  dark: '#171613',
  panel: '#211f1b',
  brown: '#67583e',
  metal: '#baa783',
};
type Point = { x: number; y: number };
function Text({
  x,
  y,
  children,
  size = 22,
  gold = false,
  center = false,
}: Point & {
  children: ReactNode;
  size?: number;
  gold?: boolean;
  center?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={gold ? C.gold : C.cream}
      fontSize={size}
      fontWeight={size >= 23 ? '600' : '500'}
      textAnchor={center ? 'middle' : undefined}
    >
      {children}
    </text>
  );
}
function Panel({
  x,
  y,
  w,
  h,
  children,
}: Point & { w: number; h: number; children?: ReactNode }) {
  return (
    <g data-scene-panel transform={`translate(${x} ${y})`}>
      <rect
        x="2"
        y="3"
        width={w}
        height={h}
        rx="10"
        fill="#080807"
        opacity=".28"
      />
      <rect width={w} height={h} rx="10" fill={C.panel} stroke={C.line} />
      {children}
    </g>
  );
}
function Check({ x, y, r = 12 }: Point & { r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={C.dark} stroke={C.gold} strokeWidth="1.5" />
      <path
        d={`m${-r * 0.45} 0 ${r * 0.3} ${r * 0.3} ${r * 0.62}-${r * 0.67}`}
        fill="none"
        stroke={C.gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
function Arrow({ x, y, w = 46 }: Point & { w?: number }) {
  return (
    <path
      d={`M${x} ${y}h${w}m-8-6 8 6-8 6`}
      fill="none"
      stroke={C.gold}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}
function Box({ x, y, scale = 1 }: Point & { scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="m0 13 25-13 25 13v34L25 60 0 47Z"
        fill="#6d5632"
        stroke={C.gold}
        strokeWidth="1.5"
      />
      <path
        d="m0 13 25 14 25-14M25 27v33M13 6l25 14v12l-9 5V25L5 12"
        fill="none"
        stroke={C.gold}
        strokeWidth="1.5"
      />
    </g>
  );
}
function Truck({ x, y, scale = 1 }: Point & { scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect width="86" height="47" rx="4" fill={C.cream} />
      <path d="M86 17h25l19 20v19H86Z" fill={C.metal} />
      <path d="M94 23h14l12 14H94Z" fill="#282823" />
      <path d="M0 48h130" stroke={C.muted} strokeWidth="6" />
      {[24, 104].map(cx => (
        <g key={cx}>
          <circle
            cx={cx}
            cy="55"
            r="12"
            fill="#0c0c0b"
            stroke={C.muted}
            strokeWidth="3"
          />
          <circle cx={cx} cy="55" r="4" fill={C.gold} />
        </g>
      ))}
    </g>
  );
}
/** A grounded side elevation: wheels and body share the road baseline. */
function Car({ x, y, scale = 1 }: Point & { scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="105" cy="76" rx="111" ry="11" fill="#080807" opacity=".55" />
      <path
        d="m4 44 28-8 29-32h84l37 32 24 7 5 24H0Z"
        fill={C.metal}
        stroke={C.muted}
        strokeWidth="1.5"
      />
      <path d="m48 34 22-23h31v23Zm61-23h30l28 23h-58Z" fill="#292c29" />
      <path
        d="M7 48h17m158 0h21M100 41v19m47-19h12"
        stroke={C.cream}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[42, 169].map(cx => (
        <g key={cx}>
          <circle
            cx={cx}
            cy="65"
            r="18"
            fill="#111210"
            stroke={C.muted}
            strokeWidth="3"
          />
          <circle cx={cx} cy="65" r="9" fill={C.cream} />
          <path d={`M${cx} 57v16m-8-8h16`} stroke={C.brown} strokeWidth="2" />
        </g>
      ))}
    </g>
  );
}
function Person({
  x,
  y,
  scale = 1,
  sitting = false,
}: Point & { scale?: number; sitting?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="14" cy="0" r="9" fill={C.cream} />
      <path
        d={
          sitting
            ? 'M14 17v46h32l10 75M14 27l-19 20'
            : 'M14 18v44M14 28-3 45m17-17 20 16M14 62 0 94m14-32 19 32'
        }
        stroke={C.muted}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}
function Shirt({ x, y, scale = 1 }: Point & { scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="m0 24 24-24 20 10L64 0l24 24-18 23-9-7v61H27V40l-9 7Z"
        fill={C.cream}
        stroke={C.gold}
        strokeWidth="2"
      />
      <path
        d="M33 5q11 23 22 0M30 87h28"
        fill="none"
        stroke={C.brown}
        strokeWidth="2"
      />
    </g>
  );
}
function Steps({ labels }: { labels: [string, string, string] }) {
  return (
    <g>
      {labels.map((label, n) => (
        <g key={label} transform={`translate(${28 + n * 198} 394)`}>
          <rect width="188" height="42" rx="6" fill={C.dark} stroke={C.line} />
          <rect
            className={`${s.phase} ${s['phase' + n]}`}
            width="188"
            height="42"
            rx="6"
            fill={C.gold}
            opacity=".18"
          />
          <Text x={94} y={28} size={20} center>
            {label}
          </Text>
        </g>
      ))}
    </g>
  );
}
function Scene({
  title,
  steps,
  children,
}: {
  title: string;
  steps: [string, string, string];
  children: ReactNode;
}) {
  return (
    <>
      <Text x={30} y={45} size={26} gold>
        {title}
      </Text>
      <path d="M30 65h580" stroke={C.line} opacity=".6" />
      <rect
        x="30"
        y="64"
        width="580"
        height="2"
        fill={C.gold}
        className={`${s.motion} ${s.timeline}`}
      />
      {children}
      <Steps labels={steps} />
    </>
  );
}
type MotionKind =
  'handoff' | 'parcel' | 'document' | 'drive' | 'mower' | 'route' | 'upload';
function Moving({ kind, children }: { kind: MotionKind; children: ReactNode }) {
  return <g className={`${s.motion} ${s[kind]}`}>{children}</g>;
}
function Claims() {
  return (
    <Scene
      title="Claims & reimbursements"
      steps={['Find the issue', 'Build evidence', 'Recover funds']}
    >
      <Panel x={30} y={94} w={176} h={258}>
        <Text x={16} y={29} size={22}>
          Claim sources
        </Text>
        <Text x={16} y={57} size={17} gold>
          Logistics courier
        </Text>
        <Text x={16} y={77} size={17} gold>
          claim
        </Text>
        <Box x={18} y={88} scale={0.36} />
        <path
          d="m34 93 5 2-2 4 5 3-4 3"
          fill="none"
          stroke={C.cream}
          strokeWidth="1.5"
        />
        <Text x={45} y={104} size={15}>
          Loss & damage
        </Text>
        <path d="M16 122h144" stroke={C.line} />
        <Text x={16} y={145} size={18} gold>
          E-commerce
        </Text>
        <Text x={16} y={165} size={17} gold>
          channels claim
        </Text>
        <Text x={16} y={188} size={14}>
          Amazon · Walmart
        </Text>
        <Text x={16} y={208} size={14}>
          Wish
        </Text>
        <g data-claims-status>
          <rect
            x="12"
            y="222"
            width="152"
            height="26"
            rx="4"
            fill={C.dark}
            stroke={C.line}
          />
          <Text x={88} y={240} size={15} center>
            Discrepancy found
          </Text>
        </g>
      </Panel>
      <Arrow x={211} y={224} w={23} />
      <Panel x={239} y={94} w={168} h={258}>
        <Text x={18} y={34} size={23}>
          Claim file
        </Text>
        {['Tracking', 'Invoice', 'Delivery', 'Inventory'].map((label, n) => (
          <g
            key={label}
            data-claim-evidence
            transform={`translate(14 ${56 + n * 40})`}
          >
            <rect width="140" height="34" rx="4" fill={C.dark} />
            <Text x={10} y={23} size={16}>
              {label}
            </Text>
            <g className={`${s.motion} ${s.evidence}`}>
              <Check x={126} y={17} r={8} />
            </g>
          </g>
        ))}
        <Text x={84} y={239} center size={18} gold>
          File & follow up
        </Text>
      </Panel>
      <Arrow x={412} y={224} w={23} />
      <Panel x={440} y={94} w={170} h={258}>
        <Text x={85} y={34} center size={23}>
          Resolution
        </Text>
        <path d="M33 87h104v92H33Z" fill="#4d3b1e" stroke={C.gold} />
        <g className={`${s.motion} ${s.banknote}`}>
          <path d="M46 74h77v39H46Z" fill={C.cream} />
          <text
            x="85"
            y="102"
            fontSize="27"
            textAnchor="middle"
            fontWeight="700"
            fill={C.brown}
          >
            £
          </text>
        </g>
        <path d="M33 116h104v63H33Z" fill={C.brown} stroke={C.gold} />
        <g className={`${s.phase} ${s.phase2}`}>
          <Check x={126} y={171} r={23} />
        </g>
        <Text x={85} y={224} size={20} center gold>
          Funds recovered
        </Text>
      </Panel>
      <Moving kind="document">
        <g transform="translate(213 196)">
          <rect width="18" height="25" rx="3" fill={C.cream} />
          <path d="M4 7h10M4 12h10M4 17h7" stroke={C.brown} />
        </g>
      </Moving>
    </Scene>
  );
}
function Rack({ x, y }: Point) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M0 0v137M134 0v137M0 55h134M0 121h134"
        stroke={C.muted}
        strokeWidth="6"
      />
      {[0, 1, 2, 3].map(n => (
        <Box
          key={n}
          x={10 + (n % 2) * 65}
          y={-2 + Math.floor(n / 2) * 65}
          scale={0.83}
        />
      ))}
    </g>
  );
}
function Warehouse() {
  return (
    <Scene
      title="A warehouse, managed remotely"
      steps={['Receive stock', 'Store & pick', 'Pack & dispatch']}
    >
      <path
        d="M27 157 211 91h165l177 66v188H27Z"
        fill="#23221c"
        stroke={C.line}
        strokeWidth="2"
      />
      <path
        d="M42 158h489M218 98v48M361 98v48"
        stroke={C.line}
        strokeWidth="3"
      />
      <Rack x={56} y={171} />
      <Rack x={221} y={171} />
      <rect
        x="395"
        y="181"
        width="126"
        height="137"
        rx="3"
        fill="#11120f"
        stroke={C.muted}
      />
      <path
        d="M405 191h106m-106 12h106m-106 12h106m-106 12h106"
        stroke={C.line}
        strokeWidth="3"
      />
      <Text x={458} y={264} center size={21} gold>
        DISPATCH
      </Text>
      <path d="M25 350h585" stroke={C.line} />
      <path d="M35 329h488" stroke={C.brown} strokeWidth="13" />
      {Array.from({ length: 20 }, (_, n) => (
        <circle key={n} cx={44 + n * 24} cy="329" r="3" fill={C.muted} />
      ))}
      <Moving kind="parcel">
        <Box x={47} y={285} scale={0.7} />
      </Moving>
      <Panel x={429} y={80} w={179} h={99}>
        <Text x={16} y={29} size={20}>
          Remote control
        </Text>
        <path d="M15 51h103m-103 20h75" stroke={C.line} strokeWidth="4" />
        <Check x={149} y={62} r={15} />
      </Panel>
      <Truck x={486} y={296} scale={0.84} />
      <path
        className={`${s.motion} ${s.connection}`}
        d="M431 130h-42v49"
        fill="none"
        stroke={C.gold}
        strokeWidth="2"
        strokeDasharray="5 6"
      />
    </Scene>
  );
}
function Sourcing() {
  return (
    <Scene
      title="From source to sale"
      steps={['Source materials', 'Make & check', 'List & sell']}
    >
      <Panel x={29} y={104} w={174} h={245}>
        <Text x={87} y={36} size={23} center>
          Source
        </Text>
        {[0, 1, 2].map(n => (
          <g key={n} transform={`translate(${30 + n * 39} ${91 + n * 13})`}>
            <path
              d="M0 0h29v88H0Z"
              fill={n === 1 ? C.gold : C.brown}
              stroke={C.gold}
            />
            <ellipse
              cx="14.5"
              cy="0"
              rx="14.5"
              ry="9"
              fill={C.cream}
              stroke={C.gold}
            />
            <ellipse cx="14.5" cy="0" rx="5" ry="3" fill={C.brown} />
          </g>
        ))}
        <Text x={87} y={218} size={20} center gold>
          Fabric & supplies
        </Text>
      </Panel>
      <Arrow x={207} y={229} w={23} />
      <Panel x={236} y={104} w={169} h={245}>
        <Text x={85} y={36} size={23} center>
          Production
        </Text>
        <Shirt x={43} y={65} scale={0.95} />
        <g className={`${s.motion} ${s.press}`}>
          <path d="M43 88h83v10H43Z" fill={C.brown} stroke={C.gold} />
          <path
            d="M85 88V64m-25 0h50"
            fill="none"
            stroke={C.gold}
            strokeWidth="4"
          />
        </g>
        <g className={`${s.phase} ${s.phase1}`}>
          <Check x={127} y={169} r={20} />
        </g>
        <Text x={85} y={218} size={20} center gold>
          Print & inspect
        </Text>
      </Panel>
      <Arrow x={410} y={229} w={23} />
      <Panel x={439} y={104} w={172} h={245}>
        <Text x={86} y={36} size={23} center>
          Marketplace
        </Text>
        <rect x="22" y="55" width="128" height="125" rx="8" fill={C.cream} />
        <Shirt x={56} y={66} scale={0.65} />
        <rect x="37" y="154" width="98" height="11" rx="5" fill={C.brown} />
        <Text x={86} y={218} size={20} center gold>
          Ready to sell
        </Text>
      </Panel>
      <Moving kind="handoff">
        <Box x={211} y={248} scale={0.32} />
      </Moving>
    </Scene>
  );
}
function Logistics() {
  return (
    <Scene
      title="Courier operations, end to end"
      steps={['Compare carriers', 'Move shipments', 'Check the bill']}
    >
      <path d="M40 306h557" stroke={C.line} strokeWidth="3" />
      <path d="M40 320h557" stroke={C.line} strokeDasharray="14 12" />
      <Panel x={30} y={98} w={172} h={175}>
        <Text x={16} y={34} size={22}>
          Carrier review
        </Text>
        {['Rates', 'Service', 'Coverage'].map((l, n) => (
          <g key={l}>
            <Text x={16} y={73 + n * 37} size={20}>
              {l}
            </Text>
            <Check x={146} y={66 + n * 37} r={10} />
          </g>
        ))}
      </Panel>
      <Moving kind="drive">
        <Truck x={214} y={244} scale={1.15} />
      </Moving>
      <Panel x={428} y={98} w={183} h={183}>
        <Text x={16} y={35} size={22}>
          Invoice audit
        </Text>
        <path d="M17 60h149m-149 33h149m-149 33h149" stroke={C.line} />
        <Text x={17} y={84} size={18}>
          Rates matched
        </Text>
        <Text x={17} y={117} size={18}>
          Charges checked
        </Text>
        <Text x={17} y={151} size={18} gold>
          Disputes followed
        </Text>
      </Panel>
      <Text x={30} y={365} size={20} gold>
        Carrier selection → shipment → reconciliation
      </Text>
    </Scene>
  );
}
function Commerce() {
  return (
    <Scene
      title="One operation. Multiple marketplaces."
      steps={['Sync listings', 'Manage orders', 'Fulfil & report']}
    >
      {['Amazon', 'Walmart', 'Shopify', 'eBay'].map((name, n) => (
        <g key={name}>
          <Panel x={30} y={91 + n * 66} w={145} h={49}>
            <Text x={73} y={32} size={22} center>
              {name}
            </Text>
          </Panel>
          <path
            d={`M176 ${116 + n * 66}h35V223h40`}
            fill="none"
            stroke={C.line}
            strokeWidth="2"
          />
        </g>
      ))}
      <Panel x={251} y={117} w={184} h={207}>
        <Text x={92} y={35} center size={23} gold>
          Inventory hub
        </Text>
        <Box x={67} y={68} />
        <Text x={92} y={168} center size={20}>
          Orders & stock
        </Text>
        <Text x={92} y={195} center size={18}>
          One connected flow
        </Text>
      </Panel>
      <Arrow x={441} y={223} w={28} />
      <Panel x={478} y={118} w={132} h={207}>
        <Text x={66} y={34} center size={21}>
          Dispatch
        </Text>
        <Box x={42} y={64} scale={0.9} />
        <g className={`${s.phase} ${s.phase2}`}>
          <Check x={93} y={123} r={18} />
        </g>
        <Text x={66} y={175} center size={20} gold>
          Fulfilment
        </Text>
      </Panel>
      <Moving kind="handoff">
        <circle cx="184" cy="223" r="6" fill={C.gold} />
      </Moving>
    </Scene>
  );
}
function Etsy() {
  return (
    <Scene
      title="Digital products, built for Etsy"
      steps={['Create products', 'Publish listings', 'Launch campaigns']}
    >
      <Panel x={30} y={97} w={231} h={253}>
        <Text x={18} y={35} size={22}>
          Design studio
        </Text>
        <rect x="18" y="55" width="127" height="174" rx="6" fill={C.cream} />
        <path
          d="M34 76h94m-94 14h57M34 112h94m-94 21h94m-94 21h94m-94 21h94m-94 21h94M58 105v105m32-105v105"
          stroke="#a18e67"
          strokeWidth="2"
        />
        <rect x="159" y="56" width="53" height="78" rx="5" fill={C.gold} />
        <path d="m168 113 18-40 18 40Z" stroke={C.brown} fill="none" />
        <rect x="159" y="149" width="53" height="78" rx="5" fill={C.brown} />
        <circle cx="186" cy="187" r="17" stroke={C.cream} fill="none" />
      </Panel>
      <Arrow x={270} y={222} w={41} />
      <Panel x={321} y={97} w={289} h={253}>
        <Text x={18} y={35} size={23} gold>
          Etsy storefront
        </Text>
        {[0, 1, 2, 3, 4, 5].map(n => (
          <g
            key={n}
            transform={`translate(${18 + (n % 3) * 87} ${55 + Math.floor(n / 3) * 87})`}
          >
            <rect
              width="77"
              height="76"
              rx="6"
              fill={n % 2 ? C.brown : C.cream}
            />
            <path
              d="M16 15h45v40H16Z"
              fill="none"
              stroke={n % 2 ? C.cream : C.brown}
            />
            <path
              d="M23 25h31m-31 9h21m-21 9h27"
              stroke={n % 2 ? C.gold : C.brown}
            />
            <path d="M17 65h43" stroke={C.gold} strokeWidth="3" />
          </g>
        ))}
      </Panel>
      <Moving kind="upload">
        <g transform="translate(275 199)">
          <rect width="25" height="33" rx="4" fill={C.gold} />
          <path
            d="m5 19 8-8 8 8m-8-8v18"
            stroke={C.dark}
            strokeWidth="2"
            fill="none"
          />
        </g>
      </Moving>
    </Scene>
  );
}
function Showroom({
  x,
  y,
  label = 'SHOWROOM',
  scale = 1,
}: Point & { label?: string; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 25 16 0h262l17 25v148H0Z"
        fill="#292720"
        stroke={C.line}
        strokeWidth="2"
      />
      <rect
        x="11"
        y="33"
        width="273"
        height="128"
        fill="#141813"
        stroke={C.muted}
      />
      <path
        d="M80 33v128m135-128v128M0 173h295"
        stroke={C.line}
        strokeWidth="3"
      />
      <Text x={147} y={23} size={18} center gold>
        {label}
      </Text>
      <path d="M21 43h52m14 0h119m15 0h54" stroke={C.gold} />
      <Car x={44} y={77} scale={0.95} />
    </g>
  );
}
function Campaign() {
  return (
    <Scene
      title="Jetour: from campaign to enquiry"
      steps={['Create content', 'Capture leads', 'Follow up']}
    >
      <Panel x={30} y={95} w={323} h={248}>
        <Text x={18} y={34} size={22}>
          Campaign creative
        </Text>
        <rect x="15" y="48" width="293" height="158" rx="7" fill="#393225" />
        <Car x={51} y={99} scale={1.05} />
        <Text x={31} y={79} size={21} gold>
          JETOUR ITTEHAD
        </Text>
        <path d="M18 226h180" stroke={C.gold} strokeWidth="5" />
      </Panel>
      <Arrow x={361} y={218} w={29} />
      <Panel x={400} y={95} w={210} h={248}>
        <Text x={18} y={34} size={22}>
          Lead handling
        </Text>
        {['New enquiry', 'Contacted', 'Visit scheduled'].map((l, n) => (
          <g key={l} transform={`translate(14 ${57 + n * 57})`}>
            <rect width="182" height="44" rx="8" fill={C.dark} />
            <Text x={12} y={29} size={20}>
              {l}
            </Text>
            <rect
              className={`${s.phase} ${s['phase' + n]}`}
              width="182"
              height="44"
              rx="8"
              fill={C.gold}
              opacity=".15"
            />
          </g>
        ))}
      </Panel>
      <Moving kind="handoff">
        <circle cx="366" cy="218" r="6" fill={C.gold} />
      </Moving>
    </Scene>
  );
}
function Connected() {
  return (
    <Scene
      title="Hyundai: a connected showroom"
      steps={['Discover online', 'Send an enquiry', 'Book a visit']}
    >
      <Showroom x={29} y={133} label="HYUNDAI ISLAMABAD" scale={1.04} />
      <path d="M34 329h303" stroke={C.line} strokeWidth="2" />
      <Text x={184} y={363} center size={21} gold>
        Showroom & digital presence
      </Text>
      <Arrow x={345} y={234} w={34} />
      <Panel x={392} y={100} w={218} h={253}>
        <Text x={18} y={35} size={23}>
          Website enquiry
        </Text>
        <rect x="17" y="57" width="184" height="41" rx="7" fill={C.dark} />
        <Text x={30} y={84} size={20}>
          Vehicle interest
        </Text>
        <rect x="17" y="110" width="184" height="41" rx="7" fill={C.dark} />
        <Text x={30} y={137} size={20}>
          Contact details
        </Text>
        <rect x="17" y="167" width="184" height="62" rx="8" fill="#514021" />
        <Text x={109} y={194} size={20} center>
          Showroom visit
        </Text>
        <Text x={109} y={217} size={18} center gold>
          Follow-up scheduled
        </Text>
      </Panel>
      <Moving kind="handoff">
        <circle cx="350" cy="234" r="6" fill={C.gold} />
      </Moving>
    </Scene>
  );
}
function StreetMap({ x, y }: Point) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="345" height="245" rx="12" fill="#25221b" stroke={C.line} />
      <g fill="#353024" stroke="#514735">
        {[0, 1, 2, 3, 4, 5].map(n => (
          <rect
            key={n}
            x={18 + (n % 3) * 108}
            y={18 + Math.floor(n / 3) * 120}
            width="81"
            height="89"
            rx="8"
          />
        ))}
      </g>
      <path
        d="M0 122h345M112 0v245M220 0v245"
        stroke="#181610"
        strokeWidth="17"
      />
      <path
        d="M25 122h195v93h86"
        stroke={C.gold}
        strokeWidth="3"
        fill="none"
        strokeDasharray="7 5"
      />
      <circle cx="25" cy="122" r="7" fill={C.cream} />
      <circle cx="306" cy="215" r="7" fill={C.gold} />
    </g>
  );
}
function Visits({ tracking = false }: { tracking?: boolean }) {
  return (
    <Scene
      title={
        tracking
          ? 'MyTrackee: vehicles on the map'
          : 'Capital Smart Motors: drive visits'
      }
      steps={
        tracking
          ? ['Locate vehicles', 'View positions', 'Track movement']
          : ['Build awareness', 'Capture interest', 'Showroom visit']
      }
    >
      {tracking ? (
        <>
          <StreetMap x={29} y={96} />
          <Moving kind="route">
            <g transform="translate(39 208)">
              <rect
                width="31"
                height="21"
                rx="7"
                fill={C.gold}
                stroke={C.cream}
              />
              <path d="M8 2v17m14-17v17" stroke={C.brown} strokeWidth="2" />
            </g>
          </Moving>
          <Panel x={398} y={96} w={213} h={245}>
            <Text x={16} y={34} size={23}>
              Tracking portal
            </Text>
            <path d="M106 69v86M63 112h86" stroke={C.line} />
            <circle cx="106" cy="112" r="37" fill="none" stroke={C.gold} />
            <circle
              className={`${s.motion} ${s.radar}`}
              cx="106"
              cy="112"
              r="29"
              fill="none"
              stroke={C.gold}
            />
            <circle cx="106" cy="112" r="7" fill={C.gold} />
            <Text x={106} y={188} size={21} center gold>
              Vehicle location
            </Text>
            <Text x={106} y={219} size={19} center>
              GPS → web portal
            </Text>
          </Panel>
        </>
      ) : (
        <>
          <Panel x={30} y={98} w={201} h={244}>
            <Text x={16} y={34} size={22}>
              Lead journey
            </Text>
            {['Social / Meta', 'Website form', 'Follow-up'].map((l, n) => (
              <g key={l}>
                <Text x={17} y={86 + n * 58} size={21} gold={n === 2}>
                  {l}
                </Text>
                {n < 2 ? (
                  <path
                    d={`M101 ${98 + n * 58}v21m-5-5 5 5 5-5`}
                    fill="none"
                    stroke={C.gold}
                  />
                ) : null}
              </g>
            ))}
          </Panel>
          <Arrow x={239} y={230} w={28} />
          <Showroom x={278} y={138} label="CAPITAL SMART MOTORS" scale={1.12} />
          <Moving kind="handoff">
            <circle cx="244" cy="230" r="6" fill={C.gold} />
          </Moving>
        </>
      )}
    </Scene>
  );
}
function Erp() {
  return (
    <Scene
      title="Dealership ERP / in development"
      steps={['Manage stock', 'Follow the sale', 'See the business']}
    >
      <Panel x={30} y={96} w={580} h={255}>
        <Text x={20} y={35} size={23}>
          One system. Three showrooms.
        </Text>
        <path d="M20 53h540" stroke={C.line} />
        {['Vehicles', 'Customers', 'Finance'].map((l, n) => (
          <g key={l} transform={`translate(${20 + n * 184} 71)`}>
            <rect width="172" height="49" rx="8" fill={C.dark} />
            <Text x={86} y={32} size={22} center gold>
              {l}
            </Text>
          </g>
        ))}
        <Car x={21} y={143} scale={0.72} />
        <path d="M201 145v85" stroke={C.line} />
        {['Customer enquiry', 'Vehicle handover', 'After-sales'].map((l, n) => (
          <g key={l}>
            <Text x={226} y={154 + n * 37} size={21}>
              {l}
            </Text>
            <g className={`${s.phase} ${s['phase' + n]}`}>
              <Check x={538} y={147 + n * 37} r={12} />
            </g>
          </g>
        ))}
      </Panel>
    </Scene>
  );
}
function Phone({
  x,
  y,
  title,
  children,
}: Point & { title: string; children?: ReactNode }) {
  return (
    <g data-scene-panel transform={`translate(${x} ${y})`}>
      <rect x="3" y="5" width="164" height="274" rx="22" fill="#080807" />
      <rect width="164" height="274" rx="22" fill={C.cream} stroke={C.muted} />
      <rect x="56" y="9" width="52" height="6" rx="3" fill={C.dark} />
      <text
        x="82"
        y="47"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fill={C.dark}
      >
        {title}
      </text>
      {children}
    </g>
  );
}
function SerenadaJourney() {
  return (
    <Scene
      title="Serenada: a clearer path to care"
      steps={['Search for care', 'Explore treatment', 'Request a visit']}
    >
      <Panel x={30} y={98} w={230} h={255}>
        <Text x={16} y={32} size={22}>
          Find the right care
        </Text>
        <rect
          x="16"
          y="54"
          width="198"
          height="43"
          rx="8"
          fill={C.dark}
          stroke={C.line}
        />
        <circle
          cx="34"
          cy="74"
          r="7"
          fill="none"
          stroke={C.gold}
          strokeWidth="1.5"
        />
        <path d="m39 80 6 6" stroke={C.gold} strokeWidth="1.5" />
        <Text x={52} y={81} size={17}>
          Care in Texas
        </Text>
        <g className={`${s.phase} ${s.phase0}`}>
          <rect
            x="15"
            y="112"
            width="200"
            height="111"
            rx="8"
            fill="none"
            stroke={C.gold}
          />
        </g>
        <Text x={28} y={141} size={23} gold>
          Serenada
        </Text>
        <Text x={28} y={169} size={17}>
          Georgetown · Waco
        </Text>
        <Text x={28} y={200} size={17}>
          Mental health care
        </Text>
        <Text x={16} y={242} size={16}>
          Search → website
        </Text>
      </Panel>
      <Arrow x={269} y={226} w={29} />
      <Panel x={309} y={98} w={301} h={255}>
        <Text x={17} y={32} size={23} gold>
          SERENADA
        </Text>
        <Text x={17} y={64} size={20}>
          Care, clearly explained
        </Text>
        {['Counselling', 'Medication'].map((label, n) => (
          <g key={label} transform={`translate(${16 + n * 140} 86)`}>
            <rect
              width="129"
              height="68"
              rx="7"
              fill={C.dark}
              stroke={C.line}
            />
            <Text x={12} y={30} size={17}>
              {label}
            </Text>
            <Text x={12} y={52} size={15}>
              Explore care
            </Text>
          </g>
        ))}
        <path d="M17 170h267" stroke={C.line} />
        <rect
          x="16"
          y="189"
          width="269"
          height="44"
          rx="8"
          fill="#3b3324"
          stroke={C.gold}
        />
        <Text x={150} y={218} size={21} center gold>
          Request an appointment
        </Text>
        <g className={`${s.phase} ${s.phase2}`}>
          <rect
            x="12"
            y="185"
            width="277"
            height="52"
            rx="10"
            fill="none"
            stroke={C.gold}
          />
        </g>
        <g transform="translate(16 86)">
          <rect
            className={`${s.motion} ${s.careFocus}`}
            width="129"
            height="68"
            rx="7"
            fill="none"
            stroke={C.gold}
          />
        </g>
      </Panel>
    </Scene>
  );
}

function LimoJourney() {
  return (
    <Scene
      title="Luxury travel, planned around you"
      steps={['Find the service', 'Plan the journey', 'Request a ride']}
    >
      <Panel x={30} y={96} w={230} h={260}>
        <Text x={17} y={32} size={22}>
          Website enquiry
        </Text>
        <circle cx="25" cy="77" r="5" fill={C.gold} />
        <path
          d="M25 86v55"
          stroke={C.gold}
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
        <circle
          cx="25"
          cy="151"
          r="5"
          fill="none"
          stroke={C.gold}
          strokeWidth="1.5"
        />
        <Text x={44} y={69} size={16} gold>
          Pick-up
        </Text>
        <Text x={44} y={94} size={20}>
          O’Hare Airport
        </Text>
        <Text x={44} y={143} size={16} gold>
          Destination
        </Text>
        <Text x={44} y={168} size={20}>
          Chicago
        </Text>
        <path d="M17 188h196" stroke={C.line} />
        <rect
          x="16"
          y="207"
          width="198"
          height="36"
          rx="7"
          fill="#3b3324"
          stroke={C.gold}
        />
        <Text x={115} y={232} size={20} center gold>
          Request a ride
        </Text>
      </Panel>
      <Arrow x={268} y={224} w={24} />
      <Panel x={300} y={96} w={310} h={260}>
        <Text x={17} y={32} size={22}>
          Pick-up to destination
        </Text>
        <rect
          x="16"
          y="50"
          width="278"
          height="96"
          rx="8"
          fill="#191a16"
          stroke={C.line}
        />
        <g fill="#302e26">
          <rect x="26" y="61" width="73" height="36" rx="3" />
          <rect x="112" y="61" width="56" height="36" rx="3" />
          <rect x="181" y="61" width="102" height="36" rx="3" />
          <rect x="111" y="111" width="57" height="25" rx="3" />
          <rect x="181" y="111" width="102" height="25" rx="3" />
        </g>
        <path
          d="M38 122h73V104h158"
          fill="none"
          stroke={C.gold}
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <circle cx="38" cy="122" r="4" fill={C.cream} />
        <circle cx="269" cy="104" r="5" fill="none" stroke={C.gold} />
        <g transform="translate(38 122)">
          <g className={`${s.motion} ${s.limoMarker}`}>
            <circle r="5" fill={C.gold} />
            <circle r="10" fill="none" stroke={C.gold} opacity=".35" />
          </g>
        </g>
        <Text x={25} y={169} size={17}>
          Airport
        </Text>
        <Text x={243} y={169} size={17}>
          City
        </Text>
        <path d="M16 246h278" stroke={C.line} strokeWidth="2" />
        <g className={`${s.motion} ${s.limoArrival}`}>
          <Car x={31} y={166} scale={0.94} />
        </g>
      </Panel>
    </Scene>
  );
}

function CarCareJourney() {
  return (
    <Scene
      title="SFYKEA: from booking to doorstep"
      steps={['Book a service', 'Assign a rider', 'Complete the wash']}
    >
      <Phone x={30} y={88} title="Car care">
        <rect x="14" y="64" width="136" height="56" rx="7" fill="#dfd2b7" />
        <text x="25" y="85" fill="#6b5121" fontSize="15">
          Service
        </text>
        <text x="25" y="108" fill={C.dark} fontSize="17" fontWeight="600">
          Doorstep wash
        </text>
        <text x="17" y="151" fill={C.dark} fontSize="17">
          Choose a slot
        </text>
        {[0, 1, 2].map(n => (
          <g key={n}>
            <rect
              x={15 + n * 46}
              y="167"
              width="41"
              height="27"
              rx="5"
              fill={n === 1 ? '#8a713b' : '#e0d8c8'}
            />
            {n === 1 ? (
              <path
                d="m72 180 4 4 9-10"
                stroke={C.cream}
                strokeWidth="2"
                fill="none"
              />
            ) : (
              <path
                d={`M${26 + n * 46} 180h18`}
                stroke="#8f8062"
                strokeWidth="2"
              />
            )}
          </g>
        ))}
        <rect x="14" y="216" width="136" height="38" rx="8" fill={C.dark} />
        <Text x={82} y={241} size={17} center gold>
          Confirm booking
        </Text>
      </Phone>
      <path
        d="M195 225h24v-68h26"
        stroke={C.gold}
        fill="none"
        strokeWidth="1.5"
      />
      <g transform="translate(200 214)">
        <g className={`${s.motion} ${s.bookingTransfer}`}>
          <rect width="25" height="22" rx="3" fill={C.cream} stroke={C.line} />
          <path
            d="M5 6h15m-15 5h15m-15 5h10"
            stroke={C.brown}
            strokeWidth="1.5"
          />
        </g>
      </g>
      <Panel x={245} y={95} w={365} h={127}>
        <Text x={17} y={31} size={22}>
          Admin & partner portals
        </Text>
        <Text x={17} y={58} size={17}>
          Bookings · riders · service areas
        </Text>
        {['Booking', 'Rider', 'Area'].map((label, n) => (
          <g key={label} transform={`translate(${16 + n * 113} 77)`}>
            <rect
              width="106"
              height="32"
              rx="5"
              fill={C.dark}
              stroke={C.line}
            />
            <Text x={53} y={22} size={17} center>
              {label}
            </Text>
            <rect
              className={`${s.phase} ${s['phase' + n]}`}
              width="106"
              height="32"
              rx="5"
              fill={C.gold}
              opacity=".1"
            />
          </g>
        ))}
      </Panel>
      <path
        d="M430 222v17m-5-6 5 6 5-6"
        stroke={C.gold}
        fill="none"
        strokeWidth="1.5"
      />
      <Panel x={245} y={244} w={365} h={118}>
        <path d="M12 102h155" stroke={C.line} strokeWidth="2" />
        <Car x={15} y={44} scale={0.67} />
        <g className={`${s.motion} ${s.serviceShine}`}>
          <path
            d="M127 52v16m-8-8h16m-66-4v10m-5-5h10"
            stroke={C.gold}
            strokeWidth="1.5"
          />
        </g>
        <Text x={177} y={31} size={21}>
          Doorstep service
        </Text>
        <Text x={177} y={62} size={17}>
          Rider assigned
        </Text>
        <g className={`${s.phase} ${s.phase2}`}>
          <Text x={177} y={94} size={17} gold>
            Wash completed
          </Text>
          <Check x={342} y={87} r={9} />
        </g>
      </Panel>
    </Scene>
  );
}

function Steel() {
  return (
    <Scene
      title="Ittehad Steel: built to be seen"
      steps={['Shape the story', 'Create content', 'Reach audiences']}
    >
      <g transform="translate(31 122)">
        {[0, 1, 2, 3, 4].map(n => (
          <g key={n} transform={`translate(${n * 18} ${n * 15})`}>
            <path d="m0 142 54-131h18L18 142Z" fill={C.brown} stroke={C.gold} />
            <path
              d="m5 128 18 2m-11-18 18 2m-11-18 18 2m-11-18 18 2m-11-18 18 2m-11-18 18 2"
              stroke={C.cream}
              opacity=".5"
            />
          </g>
        ))}
      </g>
      <Arrow x={188} y={230} w={34} />
      <Panel x={236} y={93} w={216} h={260}>
        <Text x={18} y={32} size={22}>
          Creative studio
        </Text>
        <rect x="16" y="49" width="184" height="153" rx="7" fill={C.cream} />
        <path
          d="m47 180 51-108h20L67 180m43 0 51-108h20l-51 108"
          fill={C.brown}
        />
        <Text x={108} y={229} size={22} center gold>
          ITTEHAD STEEL
        </Text>
      </Panel>
      <Arrow x={459} y={230} w={24} />
      <g transform="translate(492 115)">
        <rect width="115" height="170" rx="12" fill={C.dark} stroke={C.line} />
        <rect x="10" y="13" width="95" height="107" rx="7" fill={C.brown} />
        <path d="m44 48 30 20-30 20Z" fill={C.cream} />
        <path d="M12 138h91" stroke={C.gold} strokeWidth="3" />
        <rect
          className={`${s.motion} ${s.progress}`}
          x="12"
          y="137"
          width="91"
          height="3"
          fill={C.cream}
        />
        <Text x={58} y={204} center size={20}>
          Social & reels
        </Text>
      </g>
    </Scene>
  );
}
function Mowing() {
  return (
    <Scene
      title="Mowing: schedules become field work"
      steps={['Plan the route', 'Assign the crew', 'Complete the job']}
    >
      <path d="m29 168 129-76 129 76v150H29Z" fill="#2d2920" stroke={C.line} />
      <path
        d="m17 171 141-88 141 88"
        fill="none"
        stroke={C.gold}
        strokeWidth="5"
      />
      <rect
        x="110"
        y="202"
        width="77"
        height="116"
        fill={C.dark}
        stroke={C.line}
      />
      <rect
        x="49"
        y="195"
        width="40"
        height="55"
        fill={C.brown}
        stroke={C.gold}
      />
      <path d="M28 319h351v55H28Z" fill="#413922" />
      <path
        d="M29 331h350m-350 18h350m-350 18h350"
        stroke="#5b4e31"
        strokeWidth="8"
      />
      <Moving kind="mower">
        <g transform="translate(59 330)">
          <path d="M0 7h48v22H0Z" fill={C.gold} />
          <path
            d="M39 7 56-24h16"
            stroke={C.cream}
            strokeWidth="4"
            fill="none"
          />
          <circle cx="9" cy="29" r="9" fill={C.dark} stroke={C.muted} />
          <circle cx="41" cy="29" r="9" fill={C.dark} stroke={C.muted} />
        </g>
      </Moving>
      <Panel x={400} y={96} w={210} h={261}>
        <Text x={17} y={34} size={23}>
          Crew schedule
        </Text>
        {['Property route', 'Assigned crew', 'Job complete'].map((l, n) => (
          <g key={l} transform={`translate(14 ${59 + n * 59})`}>
            <rect width="182" height="45" rx="8" fill={C.dark} />
            <Text x={12} y={29} size={20}>
              {l}
            </Text>
            <rect
              className={`${s.phase} ${s['phase' + n]}`}
              width="182"
              height="45"
              rx="8"
              fill={C.gold}
              opacity=".17"
            />
          </g>
        ))}
      </Panel>
    </Scene>
  );
}
function Practice({ dental = false }: { dental?: boolean }) {
  return (
    <Scene
      title={
        dental
          ? 'Prospect Smile: search to appointment'
          : 'Serenada: make care easier to find'
      }
      steps={['Find the practice', 'Explore treatment', 'Request a visit']}
    >
      {dental ? (
        <g transform="translate(42 122)">
          <path
            d="M81 3c-39-24-77-2-68 39 9 42 7 113 31 114 18 0 16-54 37-54s19 54 37 54c24-1 22-72 31-114 9-41-29-63-68-39Z"
            fill={C.cream}
            stroke={C.gold}
            strokeWidth="3"
          />
          <path
            d="M56 12q25 14 50 0M28 43q-9-26 12-30"
            stroke="#baa779"
            fill="none"
            strokeWidth="4"
          />
          <path
            className={`${s.motion} ${s.sparkle}`}
            d="M164 49v33m-16-16h32M3 102v23m-11-11h22"
            stroke={C.gold}
            strokeWidth="3"
          />
        </g>
      ) : (
        <g transform="translate(32 112)">
          <path d="M17 120h121v25H17Z" fill={C.brown} stroke={C.gold} />
          <path
            d="M5 120V47q0-22 22-22h92q22 0 22 22v73"
            fill={C.panel}
            stroke={C.gold}
            strokeWidth="3"
          />
          <Person x={61} y={48} sitting scale={1.15} />
          <path d="M25 145v66m106-66v66" stroke={C.muted} strokeWidth="6" />
          <path
            d="M185 182v-114m0 54q-46-2-33-35 35 6 33 35m0-22q40-4 30-35-29 8-30 35"
            fill="#5b4f32"
            stroke={C.gold}
          />
          <path d="M161 181h48l-8 31h-32Z" fill={C.brown} />
        </g>
      )}
      <Arrow x={256} y={228} w={31} />
      <Panel x={304} y={98} w={306} h={250}>
        <Text x={18} y={35} size={23}>
          Website & local SEO
        </Text>
        <rect x="17" y="55" width="272" height="44" rx="22" fill={C.dark} />
        <circle
          cx="39"
          cy="76"
          r="8"
          stroke={C.gold}
          fill="none"
          strokeWidth="2"
        />
        <path d="m44 82 7 7" stroke={C.gold} strokeWidth="2" />
        <g className={`${s.motion} ${s.reveal}`}>
          <Text x={65} y={83} size={20}>
            {dental ? 'Dental care nearby' : 'Mental health care'}
          </Text>
        </g>
        <Text x={20} y={132} size={21}>
          Treatments & information
        </Text>
        <path d="M20 151h250m-250 20h201" stroke={C.line} strokeWidth="3" />
        <g
          className={`${s.motion} ${s.reveal}`}
          style={{ animationDelay: 'calc(var(--scene-cycle) * -0.5)' }}
        >
          <rect x="17" y="190" width="272" height="42" rx="10" fill="#514021" />
          <Text x={153} y={218} size={21} center gold>
            Request an appointment
          </Text>
        </g>
      </Panel>
    </Scene>
  );
}
/** Labelled process illustrations, never fabricated client interfaces or metrics. */
export function InterfaceScene({ slug }: { slug: string }) {
  switch (slug) {
    case 'claims-recovery':
      return <Claims />;
    case 'remote-warehouse-management':
      return <Warehouse />;
    case 'procurement-sourcing':
      return <Sourcing />;
    case 'courier-3pl-management':
      return <Logistics />;
    case 'multichannel-ecommerce-operations':
      return <Commerce />;
    case 'etsy-in-house-launch':
      return <Etsy />;
    case 'jetour-ittehad':
      return <Campaign />;
    case 'hyundai-islamabad':
      return <Connected />;
    case 'csm-ittehad':
      return <Visits />;
    case 'mytrackee-pakistan':
      return <Visits tracking />;
    case 'dealership-erp':
      return <Erp />;
    case 'sfykea':
      return <CarCareJourney />;
    case 'luxury-ohare-limo':
      return <LimoJourney />;
    case 'ittehad-steel':
      return <Steel />;
    case 'mowing':
      return <Mowing />;
    case 'serenada-mental-health':
      return <SerenadaJourney />;
    case 'prospect-smile':
      return <Practice dental />;
    default:
      return null;
  }
}
