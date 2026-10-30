import type { ReactElement, ReactNode } from 'react';
import '@/styles/brand/auditor.css';

/*
 * The "Auditor": the page's illustrated narrator, a friendly senior security
 * engineer drawn as a hand-built inline SVG (no ids, flat fills), so any number
 * of instances can live on one page. Server-safe (no hooks, no client code).
 *
 * The figure is painted twice: first as a white "sticker" silhouette with a
 * fat round-joined stroke, then in colour with a dark ink outline on top.
 */

export type AuditorPose = 'idle' | 'point' | 'think' | 'present' | 'thumbs' | 'alert';

export type AuditorProps = {
  pose?: AuditorPose;
  /** Which way the body faces / points. Default 'right'. */
  facing?: 'left' | 'right';
  className?: string;
  /** Accessible label; omit for decorative use (renders aria-hidden). */
  label?: string;
};

/* ---------- palette ---------- */
const INK = '#17112B';
const WHITE = '#FFFFFF';
const SKIN = '#F4BE96';
const SKIN_SH = '#E29C70';
const HAIR = '#2B1D1A';
const HAIR_HI = '#4E3832';
const BEARD = '#8A5E4B';
const HOOD = '#6B3BEA';
const HOOD_SH = '#4A22B8';
const HOOD_DK = '#33168A';
const TEE = '#F5F2FC';
const TEE_SH = '#DDD5F1';
const PANTS = '#3B3747';
const PANTS_SH = '#2A2735';
const SHOE_SH = '#E3DEEE';
const SOLE = '#CFC8E0';
const OK = '#3FA34D';
const MOUTH = '#5E1F2E';
const BLUSH = '#F08C7E';
const VIOLET = '#6B3BEA';

const STICKER = 19; // white sticker stroke (about 9.5 units outside every edge)
const LINE = 3; // ink outline

type Pt = readonly [number, number];

type Paint = {
  sk: boolean;
  /** filled shape with ink outline (white blob in sticker pass) */
  S: (d: string, fill: string) => ReactElement;
  /** round tube (sleeves), outlined */
  T: (d: string, w: number, fill: string) => ReactElement;
  /** detail drawn only in the colour pass */
  D: (n: ReactNode) => ReactNode;
};

function painter(sk: boolean): Paint {
  return {
    sk,
    S: (d, fill) =>
      sk ? (
        <path d={d} fill={WHITE} stroke={WHITE} strokeWidth={STICKER} strokeLinejoin="round" />
      ) : (
        <path d={d} fill={fill} stroke={INK} strokeWidth={LINE} strokeLinejoin="round" strokeLinecap="round" />
      ),
    T: (d, w, fill) =>
      sk ? (
        <path d={d} fill="none" stroke={WHITE} strokeWidth={w + STICKER} strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <g>
          <path d={d} fill="none" stroke={INK} strokeWidth={w + LINE * 2} strokeLinecap="round" strokeLinejoin="round" />
          <path d={d} fill="none" stroke={fill} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ),
    D: (n) => (sk ? null : n),
  };
}

const ell = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0Z`;

const ink = (w = 2) => ({ fill: 'none', stroke: INK, strokeWidth: w, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const });

/* ---------- hands (local coords: wrist at 0,0) ---------- */

type HandKind = 'fist' | 'point' | 'palm' | 'thumb' | 'index' | 'relax' | 'clasp';

function Hand({ p, kind, at, rot = 0, flip = false }: { p: Paint; kind: HandKind; at: Pt; rot?: number; flip?: boolean }) {
  const t = `translate(${at[0]} ${at[1]}) rotate(${rot})${flip ? ' scale(1 -1)' : ''}`;
  let body: ReactNode = null;
  switch (kind) {
    case 'fist':
      body = (
        <>
          {p.S('M-5 -11C3 -14 15 -14 21 -10C27 -6 27 8 21 12C14 15 3 14 -5 11Z', SKIN)}
          {p.D(
            <>
              <path d="M24 -3H15M24 4H15" {...ink(1.8)} />
              <path d="M3 -12C8 -5 13 -4 18 -6" {...ink(1.8)} />
            </>,
          )}
        </>
      );
      break;
    case 'point':
      body = (
        <>
          {p.S('M-5 -11C3 -14 12 -14 18 -12.5L37 -12.5C43 -12.5 43 -4.5 37 -4.5L23 -4.5C27 -1 26 9 20 12C13 15 3 14 -5 11Z', SKIN)}
          {p.D(
            <>
              <path d="M23 -4.5C26 -2 25 3 20 3.5M21 4C23 7 21 10.5 16.5 10.5" {...ink(1.8)} />
              <path d="M2 -6C8 -2 14 -1 19 -3" {...ink(1.8)} />
              <path d="M33 -11.5V-5.5" stroke={SKIN_SH} strokeWidth={1.6} strokeLinecap="round" />
            </>,
          )}
        </>
      );
      break;
    case 'palm':
      body = (
        <>
          {p.S('M-5 -8C5 -12 13 -12 18 -11C22 -17 29 -19 31 -15C32 -12 28 -9 25 -6L37 -5.5C44 -5 44 3 37 4L18 7C10 10 2 11 -5 9Z', SKIN)}
          {p.D(
            <>
              <path d="M21 -1.5L36 -1.2M19 2.6L34 1.8" stroke={SKIN_SH} strokeWidth={1.6} strokeLinecap="round" />
              <path d="M8 -4C12 -1 16 -1 20 -3" stroke={SKIN_SH} strokeWidth={1.6} strokeLinecap="round" fill="none" />
            </>,
          )}
        </>
      );
      break;
    case 'thumb':
      body = (
        <>
          {p.S('M-11 -1L-12 -22C-12 -27 -9 -29 -5 -29L-5 -43C-5 -50 5 -50 5 -43L5 -29L9 -29C15 -29 15 -2 9 0C4 2 -6 2 -11 -1Z', SKIN)}
          {p.D(
            <>
              <path d="M1 -22H13M1 -15H13M1 -8H12" {...ink(1.8)} />
              <path d="M-5 -29C-3 -26 1 -25 4 -27" {...ink(1.6)} />
              <path d="M-2 -45H2" stroke={SKIN_SH} strokeWidth={1.8} strokeLinecap="round" />
            </>,
          )}
        </>
      );
      break;
    case 'index':
      body = (
        <>
          {p.S('M-12 -1L-12 -45C-12 -51 -3 -51 -3 -45L-3 -27L8 -27C14 -27 15 -2 9 0C3 2 -6 2 -12 -1Z', SKIN)}
          {p.D(
            <>
              <path d="M-3 -19H12M-3 -11H12" {...ink(1.8)} />
              <path d="M-12 -13C-7 -8 -1 -9 3 -14" {...ink(1.8)} />
              <path d="M-9.5 -46.5H-5.5" stroke={SKIN_SH} strokeWidth={1.8} strokeLinecap="round" />
            </>,
          )}
        </>
      );
      break;
    case 'relax':
      body = (
        <>
          {p.S('M-5 -10C1 -12 5 -14 9 -15C14 -16 17 -12 14 -10C20 -9 25 -5 26 0C27 5 24 9 19 10C12 12 3 12 -5 10Z', SKIN)}
          {p.D(<path d="M14 -3H24M13 3H23" stroke={SKIN_SH} strokeWidth={1.6} strokeLinecap="round" />)}
        </>
      );
      break;
    case 'clasp':
      body = (
        <>
          {p.S('M-15 -8C-9 -14 9 -14 15 -8C20 -2 19 10 11 14C4 17 -5 17 -11 13C-18 8 -20 -2 -15 -8Z', SKIN)}
          {p.D(
            <>
              <path d="M-4 -12C2 -14 9 -12 12 -7" {...ink(1.8)} />
              <path d="M-6 -2C0 3 7 3 12 0M-8 5C-2 10 6 10 11 7" {...ink(1.8)} />
            </>,
          )}
        </>
      );
      break;
  }
  return <g transform={t}>{body}</g>;
}

/* ---------- arms ---------- */

type ArmSpec = { pts: readonly [Pt, Pt, Pt]; hand: Omit<Parameters<typeof Hand>[0], 'p'> };

const SLEEVE = 25;

function Arm({ p, spec }: { p: Paint; spec: ArmSpec }) {
  const [s, e, w] = spec.pts;
  const d = `M${s[0]} ${s[1]}L${e[0]} ${e[1]}L${w[0]} ${w[1]}`;
  const k = 0.8;
  const c: Pt = [e[0] + (w[0] - e[0]) * k, e[1] + (w[1] - e[1]) * k];
  const cuff = `M${c[0].toFixed(1)} ${c[1].toFixed(1)}L${w[0]} ${w[1]}`;
  // fold crease at the elbow (colour pass only)
  return (
    <g>
      {p.T(d, SLEEVE, HOOD)}
      {p.T(cuff, SLEEVE - 2, HOOD_SH)}
      <Hand p={p} {...spec.hand} />
    </g>
  );
}

const SL: Pt = [90, 164];
const SR: Pt = [170, 164];

type PoseDef = {
  /** arms painted in order (later = in front) */
  arms: ArmSpec[];
  face: 'smile' | 'grin' | 'smirk' | 'hmm' | 'wow';
  brows: 'calm' | 'up' | 'one' | 'set';
  eyes: 'open' | 'look' | 'wide' | 'happy';
};

const POSES: Record<AuditorPose, PoseDef> = {
  idle: {
    arms: [
      { pts: [SL, [86, 236], [116, 280]], hand: { kind: 'relax', at: [116, 280], rot: 30 } },
      { pts: [SR, [174, 236], [142, 280]], hand: { kind: 'clasp', at: [131, 289], rot: 0 } },
    ],
    face: 'smile',
    brows: 'calm',
    eyes: 'open',
  },
  point: {
    arms: [
      { pts: [SL, [58, 222], [84, 262]], hand: { kind: 'fist', at: [84, 262], rot: 25, flip: true } },
      { pts: [SR, [204, 200], [224, 170]], hand: { kind: 'point', at: [224, 170], rot: -14 } },
    ],
    face: 'smirk',
    brows: 'set',
    eyes: 'look',
  },
  think: {
    arms: [
      { pts: [SR, [156, 242], [145, 160]], hand: { kind: 'fist', at: [145, 160], rot: -100, flip: true } },
      { pts: [SL, [88, 244], [140, 250]], hand: { kind: 'fist', at: [140, 250], rot: -6 } },
    ],
    face: 'hmm',
    brows: 'one',
    eyes: 'look',
  },
  present: {
    arms: [
      { pts: [SL, [80, 238], [110, 262]], hand: { kind: 'palm', at: [110, 262], rot: -16 } },
      { pts: [SR, [192, 232], [220, 222]], hand: { kind: 'palm', at: [220, 222], rot: -12 } },
    ],
    face: 'grin',
    brows: 'up',
    eyes: 'open',
  },
  thumbs: {
    arms: [
      { pts: [SL, [82, 236], [86, 300]], hand: { kind: 'relax', at: [86, 300], rot: 86 } },
      { pts: [SR, [198, 236], [206, 190]], hand: { kind: 'thumb', at: [206, 190], rot: 6 } },
    ],
    face: 'grin',
    brows: 'up',
    eyes: 'happy',
  },
  alert: {
    arms: [
      { pts: [SL, [80, 238], [110, 262]], hand: { kind: 'palm', at: [110, 262], rot: -16 } },
      { pts: [SR, [202, 222], [206, 166]], hand: { kind: 'index', at: [206, 166], rot: 4 } },
    ],
    face: 'wow',
    brows: 'up',
    eyes: 'wide',
  },
};

/* ---------- body parts ---------- */

function Legs({ p }: { p: Paint }) {
  return (
    <g>
      {/* sneakers */}
      {p.S('M84 505C88 499 118 499 121 505L123 522C123 530 118 534 110 534L77 534C69 534 67 525 71 519C75 513 80 511 84 505Z', WHITE)}
      {p.S('M176 505C172 499 142 499 139 505L137 522C137 530 142 534 150 534L183 534C191 534 193 525 189 519C185 513 180 511 176 505Z', WHITE)}
      {p.D(
        <>
          <path d="M69 527H123L123 522C123 530 118 534 110 534L77 534C72 534 69 531 69 527Z" fill={SOLE} />
          <path d="M191 527H137L137 522C137 530 142 534 150 534L183 534C188 534 191 531 191 527Z" fill={SOLE} />
          <path d="M70 527H123M190 527H137" {...ink(2)} />
          <path d="M77 534H110C118 534 123 530 123 522M183 534H150C142 534 137 530 137 522" {...ink(3)} />
          <path d="M115 506C116 513 117 520 117 526M145 506C144 513 143 520 143 526" stroke={SHOE_SH} strokeWidth={4} strokeLinecap="round" fill="none" />
          <path d="M92 512L104 510M90 518L104 516M168 512L156 510M170 518L156 516" stroke={VIOLET} strokeWidth={2.2} strokeLinecap="round" />
          <path d="M74 522C78 520 82 520 86 522M186 522C182 520 178 520 174 522" stroke={SHOE_SH} strokeWidth={2} strokeLinecap="round" fill="none" />
        </>,
      )}
      {/* trousers */}
      {p.S('M86 298L174 298L177 372L174 510L141 510L135 372Q130 352 125 372L119 510L86 510L83 372Z', PANTS)}
      {p.D(
        <>
          <path d="M125 372L119 510L108 510L117 384Z" fill={PANTS_SH} />
          <path d="M177 372L174 510L163 510L168 384Z" fill={PANTS_SH} />
          <path d="M100 430C104 433 110 433 113 430M147 430C151 433 157 433 161 430" {...ink(1.8)} />
          <path d="M96 470C101 472 106 472 110 469M150 469C154 472 160 472 165 470" stroke={PANTS_SH} strokeWidth={2} strokeLinecap="round" fill="none" />
          <path d="M130 312V350" {...ink(1.8)} />
          <path d="M86 510H119M141 510H174" {...ink(3)} />
        </>,
      )}
    </g>
  );
}

function Torso({ p }: { p: Paint }) {
  return (
    <g>
      {/* hood resting behind the neck */}
      {p.S('M98 152C97 134 113 124 130 124C147 124 163 134 162 152Z', HOOD_SH)}
      {/* hoodie body */}
      {p.S('M81 170C81 155 95 147 112 143L148 143C165 147 179 155 179 170L183 296C183 306 178 312 168 312L92 312C82 312 77 306 77 296Z', HOOD)}
      {p.D(
        <>
          {/* cel shade, light from upper left */}
          <path d="M163 150C173 154 179 160 179 170L183 296C183 306 178 312 168 312L161 312L166 176C166 166 165 157 163 150Z" fill={HOOD_SH} />
          {/* ribbed hem */}
          <path d="M78.5 296H121.6L121 310.5H92C83 310.5 78.5 305 78.5 296ZM181.5 296H138.4L139 310.5H168C177 310.5 181.5 305 181.5 296Z" fill={HOOD_SH} />
          <path d="M78 296H122M138 296H182" {...ink(2.2)} />
          {/* side pockets */}
          <path d="M86 244C96 246 101 262 102 288M174 244C164 246 159 262 158 288" {...ink(2)} />
        </>,
      )}
      {/* tee showing through the open zip */}
      {p.S('M116 143L144 143L139 312L121 312Z', TEE)}
      {p.D(
        <>
          <path d="M139 143L144 143L139 312L135 312Z" fill={TEE_SH} />
          <path d="M116 143L121 312M144 143L139 312" {...ink(3)} />
          {/* zipper tape */}
          <path d="M117.5 150L121.8 306M142.5 150L138.2 306" stroke={HOOD_DK} strokeWidth={2.4} strokeDasharray="1.6 2.6" fill="none" />
          {/* lanyard + ID */}
          <path d="M118 147L127 212M142 147L133 212" stroke={HOOD_DK} strokeWidth={3} strokeLinecap="round" fill="none" />
          <rect x={119} y={210} width={22} height={28} rx={3.5} fill={WHITE} stroke={INK} strokeWidth={2} />
          <rect x={119} y={210} width={22} height={8} rx={3.5} fill={VIOLET} />
                    <circle cx={130} cy={225} r={3.5} fill={TEE_SH} />
          <path d="M124 233H136" stroke={TEE_SH} strokeWidth={2} strokeLinecap="round" />
          {/* chest shield badge */}
          <g transform="translate(108 192) scale(.85)">
            <path d="M0 -11L9.5 -7.5V0.5C9.5 7 4.5 11 0 13C-4.5 11 -9.5 7 -9.5 0.5V-7.5Z" fill={OK} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
            <path d="M-4.2 0.6L-1.2 4L4.6 -3.4" fill="none" stroke={WHITE} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </>,
      )}
      {/* neck, its lower edge forms the tee collar */}
      {p.S('M117 110L143 110L144 146Q130 158 116 146Z', SKIN)}
      {p.D(
        <>
          <path d="M117 118C123 126 137 126 143 118L143.5 132C137 136 123 136 116.5 132Z" fill={SKIN_SH} />
          <path d="M115 145Q130 161 145 145" stroke={TEE_SH} strokeWidth={3.2} fill="none" />
          <path d="M114.5 143Q130 163 145.5 143" {...ink(2.4)} />
        </>,
      )}
    </g>
  );
}

function Head({ p, def }: { p: Paint; def: PoseDef }) {
  return (
    <g>
      {/* ears */}
      {p.S(ell(99, 93, 7.5, 10.5), SKIN)}
      {p.S(ell(161, 93, 7.5, 10.5), SKIN)}
      {p.D(<path d="M97 89C95 92 96 97 99 98M163 89C165 92 164 97 161 98" stroke={SKIN_SH} strokeWidth={2.2} strokeLinecap="round" fill="none" />)}
      {/* face */}
      {p.S('M99 80C99 54 112 42 130 42C148 42 161 54 161 80L161 98C161 118 147 130 130 130C113 130 99 118 99 98Z', SKIN)}
      {/* beard */}
      {p.sk ? (
        p.S('M99 94C100 121 114 135 130 135C146 135 160 121 161 94Z', WHITE)
      ) : (
        <>
          <path
            d="M100.5 92C101 104 103 110 108 112C113 107 121 104 130 106C139 104 147 107 152 112C157 110 159 104 159.5 92C161 98 161 104 160 110C157 124 145 135 130 135C115 135 103 124 100 110C99 104 99 98 100.5 92Z"
            fill={BEARD}
          />
                    <path d="M100 95C100 121 114 135 130 135C146 135 160 121 160 95" {...ink(3)} />
          <path d="M103 104C104 110 106 113 108 113M157 104C156 110 154 113 152 113" stroke="#6E4637" strokeWidth={1.4} strokeLinecap="round" fill="none" />
        </>
      )}
      {/* hair */}
      {p.S(
        'M98 90C93 66 97 44 112 35C116 26 132 22 146 27C160 31 168 46 166 66C165 76 163 84 162 90L159 90C158 78 156 69 151 62C147 67 141 66 137 63C131 67 122 67 117 61C112 65 107 67 104 63C101 72 100 80 101 90Z',
        HAIR,
      )}
      {p.D(
        <>
          <path d="M116 38C124 31 138 30 148 35" stroke={HAIR_HI} strokeWidth={3} strokeLinecap="round" fill="none" />
          <path d="M150 62C145 52 136 46 126 44" stroke={HAIR_HI} strokeWidth={2} strokeLinecap="round" fill="none" />
        </>,
      )}
      {p.D(<Face def={def} />)}
    </g>
  );
}

function Face({ def }: { def: PoseDef }) {
  const brow = {
    calm: 'M106 72Q115 66 124 70M136 70Q145 66 154 72',
    up: 'M105 68Q115 61 124 65M136 65Q145 61 155 68',
    one: 'M106 73Q115 69 124 72M136 64Q146 57 155 63',
    set: 'M106 71Q115 68 124 73M136 73Q145 68 154 71',
  }[def.brows];

  const lx = 116;
  const rx = 144;
  const ey = 88;
  const shift = def.eyes === 'look' ? 2.2 : 0;
  const eyeR = def.eyes === 'wide' ? { x: 4.4, y: 5.6 } : { x: 3.6, y: 4.6 };

  const mouth = {
    smile: <path d="M121 116Q130 123 139 116" {...ink(2.6)} />,
    grin: (
      <>
        <path d="M119 114Q130 117 141 114Q139 127 130 127Q121 127 119 114Z" fill={MOUTH} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <path d="M121.5 115.2Q130 117.6 138.5 115.2L137.6 118.6Q130 120.4 122.4 118.6Z" fill={WHITE} />
        <path d="M125 124.5Q130 121.5 135 124.5" stroke="#E86F7E" strokeWidth={2.4} strokeLinecap="round" fill="none" />
      </>
    ),
    smirk: <path d="M120 116Q131 122 141 112" {...ink(2.6)} />,
    hmm: <path d="M123 119Q129 116.5 137 119.5" {...ink(2.6)} />,
    wow: <path d={ell(130, 119, 4.6, 5.6)} fill={MOUTH} stroke={INK} strokeWidth={2.2} />,
  }[def.face];

  return (
    <g>
      {/* blush */}
      <path d={ell(107, 104, 5.5, 3.2)} fill={BLUSH} opacity={0.35} />
      <path d={ell(153, 104, 5.5, 3.2)} fill={BLUSH} opacity={0.35} />
      {/* nose */}
      <path d="M131 91Q135.5 100 131 103Q129 104 127 103" stroke={SKIN_SH} strokeWidth={2.4} strokeLinecap="round" fill="none" />
      {/* eyes */}
      <g className="acs-auditor__eyes">
        {def.eyes === 'happy' ? (
          <path d="M111 90Q116 84 121 90M139 90Q144 84 149 90" {...ink(2.8)} />
        ) : (
          <>
            <path d={ell(lx + shift, ey - shift * 0.4, eyeR.x, eyeR.y)} fill={INK} />
            <path d={ell(rx + shift, ey - shift * 0.4, eyeR.x, eyeR.y)} fill={INK} />
            <circle cx={lx + shift + 1.3} cy={ey - shift * 0.4 - 1.7} r={1.3} fill={WHITE} />
            <circle cx={rx + shift + 1.3} cy={ey - shift * 0.4 - 1.7} r={1.3} fill={WHITE} />
          </>
        )}
      </g>
      {/* round glasses */}
      <g>
        <circle cx={lx} cy={ey} r={12} fill={WHITE} fillOpacity={0.22} stroke={INK} strokeWidth={2.6} />
        <circle cx={rx} cy={ey} r={12} fill={WHITE} fillOpacity={0.22} stroke={INK} strokeWidth={2.6} />
        <path d="M128 86.5Q130 83.5 132 86.5M104 86L99 84M156 86L161 84" {...ink(2.6)} />
        <path d="M109 82Q112 79 116 79M137 82Q140 79 144 79" stroke={WHITE} strokeWidth={1.8} strokeLinecap="round" fill="none" opacity={0.85} />
      </g>
      {/* brows */}
      <path d={brow} stroke={HAIR} strokeWidth={3.6} strokeLinecap="round" fill="none" />
      {mouth}
    </g>
  );
}

function Figure({ p, def }: { p: Paint; def: PoseDef }) {
  return (
    <g>
      <Legs p={p} />
      <g className="acs-auditor__upper">
        <Torso p={p} />
        <Head p={p} def={def} />
        <g className="acs-auditor__arms">
          {def.arms.map((a, i) => (
            <Arm key={i} p={p} spec={a} />
          ))}
        </g>
      </g>
    </g>
  );
}

const sparkle = (x: number, y: number, s: number) =>
  `M${x} ${y - s}Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y}Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s}Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y}Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s}Z`;

function Accents({ pose }: { pose: AuditorPose }) {
  if (pose === 'thumbs') {
    return (
      <g className="acs-auditor__accent">
        <path className="acs-auditor__spark" d={sparkle(236, 128, 11)} fill={VIOLET} />
        <path className="acs-auditor__spark acs-auditor__spark--2" d={sparkle(182, 118, 6.5)} fill={OK} />
        <path className="acs-auditor__spark acs-auditor__spark--3" d={sparkle(244, 172, 6)} fill="#8B5CF6" />
      </g>
    );
  }
  if (pose === 'alert') {
    return (
      <g className="acs-auditor__accent acs-auditor__burst">
        <path d="M206 99L203 87M216 104L225 96M220 115L232 114" stroke={VIOLET} strokeWidth={3.2} strokeLinecap="round" fill="none" />
      </g>
    );
  }
  return null;
}

export default function Auditor({ pose = 'idle', facing = 'right', className = '', label }: AuditorProps) {
  const def = POSES[pose] ?? POSES.idle;
  const mirror = facing === 'left' ? 'matrix(-1 0 0 1 260 0)' : undefined;
  const a11y = label ? { role: 'img' as const } : { 'aria-hidden': true as const, focusable: 'false' as const };
  const qx = facing === 'left' ? 260 - 194 : 194;

  return (
    <svg
      className={`acs-auditor acs-auditor--${pose} ${className}`.trim()}
      viewBox="0 0 260 560"
      xmlns="http://www.w3.org/2000/svg"
      {...a11y}
    >
      {label ? <title>{label}</title> : null}
      {/* soft ground shadow */}
      <ellipse cx={130} cy={536} rx={86} ry={10} fill={VIOLET} opacity={0.12} />
      <ellipse cx={130} cy={535} rx={60} ry={6} fill={HOOD_DK} opacity={0.14} />
      <g transform={mirror}>
        <g className="acs-auditor__sticker">
          <Figure p={painter(true)} def={def} />
        </g>
        <Figure p={painter(false)} def={def} />
        <Accents pose={pose} />
      </g>
      {pose === 'think' ? (
        <g className="acs-auditor__accent acs-auditor__q">
          <text x={qx} y={48} textAnchor="middle" fontSize={34} fontWeight={800} fill={VIOLET} fontFamily="var(--acs-display, system-ui, sans-serif)">
            ?
          </text>
        </g>
      ) : null}
    </svg>
  );
}
