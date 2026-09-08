"use client";
// NavSidebar.tsx — 复制即用的导航栏(从「AI助手」头部往下、到「历史对话」之前,忠实复刻 Figma)。
// 用法:import NavSidebar from "./NavSidebar";  <NavSidebar />
// 样式与 5 个 hover 动画都在组件自带的 <style> 里,无需额外 CSS。
// 苹方字体:把 public/fonts/PingFang_SC-{Regular,Medium}.woff2 拷到你项目的 public/fonts 即生效;
// 没有也没关系,会自动回退系统中文字体(布局不变)。

const P = {
  union:
    "M11.1156 10.6079C12.1219 9.48187 12.7337 7.99579 12.7337 6.36684C12.7337 2.85053 9.88314 0 6.36684 0C2.85053 0 0 2.85053 0 6.36684C0 9.68075 2.53183 12.4033 5.7667 12.7058L6.31392 15.3845C6.40836 15.8468 7.00289 15.9834 7.28961 15.6086L11.1156 10.6079Z",
  ai1: "M8.88901 18.7937H5.95792L5.63225 14.2139H3.29505L2.93106 18.7937H0L2.3716 0.557037H6.45342L8.88901 18.7937ZM4.36786 4.01514L3.56325 11.759H5.38321L4.67439 4.01514H4.36786Z",
  ai2: "M10.5611 18.7937V0.557037H13.5305V18.7937H10.5611Z",
  ai3: "M29.8397 2.00112H33.403V18.973H29.1501V16.1737H30.7401V4.64172H29.5907L28.1922 19L25.5019 18.973L26.9661 4.64172H25.7592V2.00112H27.2343L27.4259 0.0206662H30.0313L29.8397 2.00112ZM24.6719 14.9359L25.1892 14.8947V17.6178L17.7178 18.0923V15.3692L18.2734 15.3279V0.364901H24.6719V14.9359ZM22.2773 15.0804V12.3366H20.6489V15.1835L22.2773 15.0804ZM22.2773 9.67537V7.4061H20.6489V9.67537H22.2773ZM22.2773 4.80676V2.84694H20.6489V4.80676H22.2773Z",
  ai4: "M46.0995 13.4506V18.8968H40.7546V16.3387H42.9577V13.4506H36.3867V10.8925H42.9577V8.12811H37.4021V5.73506H42.9577V3.07383H37.1914V0.515742H48.4176L51.4636 0V2.61997L48.5708 3.07383H46.0995V5.73506H51.1762V8.12811H46.0995V10.8925H52V13.4506H46.0995Z",
  collapseOuter:
    "M1.66667 3.66667C1.66667 2.5621 2.5621 1.66667 3.66667 1.66667H12.3333C13.4379 1.66667 14.3333 2.5621 14.3333 3.66667V12.3333C14.3333 13.4379 13.4379 14.3333 12.3333 14.3333H3.66667C2.5621 14.3333 1.66667 13.4379 1.66667 12.3333V3.66667Z",
  collapseBar:
    "M4.66667 5C4.66667 4.63181 4.96514 4.33333 5.33333 4.33333C5.70152 4.33333 6 4.63181 6 5V11C6 11.3682 5.70152 11.6667 5.33333 11.6667C4.96514 11.6667 4.66667 11.3682 4.66667 11L4.66667 5Z",
  bubble:
    "M1.66667 3.66667C1.66667 2.5621 2.5621 1.66667 3.66667 1.66667H12.3333C13.4379 1.66667 14.3333 2.5621 14.3333 3.66667V10.6667C14.3333 11.7712 13.4379 12.6667 12.3333 12.6667H9.12179C8.82673 12.6667 8.54001 12.7645 8.30653 12.945L5.53715 15.0849C5.31804 15.2542 5 15.0981 5 14.8212V13C5 12.8159 4.85076 12.6667 4.66667 12.6667H3.66667C2.5621 12.6667 1.66667 11.7712 1.66667 10.6667V3.66667Z",
  favBack:
    "M2.16667 5.1181C1.23572 5.1181 0.552906 5.99337 0.779422 6.89633L2.46088 13.5992C2.73269 14.6827 3.83938 15.3335 4.91841 15.0444L6.33333 14.6652",
  favLine1: "M8.66667 4.66667L11.6667 5.47051",
  favLine2: "M8 7L9.5 7.40192",
  bookDetail:
    "M8.14323 5.32899L12.4333 3.994L12.8295 5.26712L8.5394 6.60211L8.14323 5.32899Z",
  clockFace:
    "M14.3333 8C14.3333 11.4978 11.4978 14.3333 8 14.3333C4.5022 14.3333 1.66667 11.4978 1.66667 8C1.66667 4.5022 4.5022 1.66667 8 1.66667C11.4978 1.66667 14.3333 4.5022 14.3333 8Z",
  clockHands:
    "M7.66667 5.66667L7.66667 8.02108C7.66667 8.21894 7.75455 8.40657 7.90654 8.53323L9.66667 10",
  head:
    "M6.66667 3.66667C6.66667 5.32352 5.32352 6.66667 3.66667 6.66667C2.00981 6.66667 0.666667 5.32352 0.666667 3.66667C0.666667 2.00981 2.00981 0.666667 3.66667 0.666667C5.32352 0.666667 6.66667 2.00981 6.66667 3.66667Z",
  body:
    "M0.684863 3.31867C0.90225 1.79696 2.20549 0.666667 3.74265 0.666667H9.71813C11.2553 0.666667 12.5585 1.79696 12.7759 3.31867C12.9278 4.38199 12.1027 5.33333 11.0286 5.33333H2.43217C1.35805 5.33333 0.53296 4.38199 0.684863 3.31867Z",
};

function Header() {
  return (
    <div className="kimi-header">
      <div className="kimi-logo">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" fill="url(#lg0)" r="13" />
          <circle cx="13" cy="13" fill="url(#lg1)" r="13" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="lg0" x1="1.93669" x2="23.676" y1="5.76164" y2="20.0205">
              <stop stopColor="#24D1FC" /><stop offset="0.57" stopColor="#185EF1" /><stop offset="1" stopColor="#5108E7" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="lg1" x1="30.7895" x2="-6.85739" y1="44.85" y2="40.7854">
              <stop stopColor="#8B58FD" /><stop offset="0.131261" stopColor="#957BFF" /><stop offset="0.423047" stopColor="#516CF3" /><stop offset="0.622929" stopColor="#516CF3" /><stop offset="0.853645" stopColor="#3A7BFF" /><stop offset="1" stopColor="#2AA8FF" />
            </linearGradient>
          </defs>
        </svg>
        <span className="kimi-logo-mark">
          <svg width="12.7337" height="15.8248" viewBox="0 0 12.7337 15.8248" fill="none">
            <path clipRule="evenodd" d={P.union} fill="white" fillRule="evenodd" />
          </svg>
        </span>
      </div>
      <span className="kimi-wordmark">
        <svg width="52" height="19" viewBox="0 0 52 19" fill="none">
          <path d={P.ai1} fill="#222" /><path d={P.ai2} fill="#222" /><path d={P.ai3} fill="#222" /><path d={P.ai4} fill="#222" />
        </svg>
      </span>
      <span className="kimi-collapse" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d={P.collapseOuter} stroke="#5A5C66" strokeWidth="1.33333" />
          <path d={P.collapseBar} fill="#5A5C66" />
        </svg>
      </span>
    </div>
  );
}

export function IconNewChat() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g>
        <path d={P.bubble} stroke="#242529" strokeWidth="1.33333" />
        <rect fill="#242529" height="1.33333" rx="0.666667" width="6" x="5" y="6.66667" />
        <rect fill="#242529" height="1.33333" rx="0.666667" transform="rotate(90 8.66667 4.33333)" width="6" x="8.66667" y="4.33333" />
      </g></svg>
    </div>
  );
}
export function IconFavorite() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g>
        <path d={P.favBack} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
        <rect height="11.7188" rx="2" stroke="#242529" strokeWidth="1.33333" transform="rotate(15 6.76823 0.287326)" width="9.08473" x="6.76823" y="0.287326" />
        <path d={P.favLine1} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
        <path d={P.favLine2} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
      </g></svg>
    </div>
  );
}
export function IconLibrary() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g>
        <rect height="13.3333" rx="2" stroke="#242529" strokeWidth="1.33333" width="5.33333" x="1.33333" y="1.33333" />
        <rect height="12.4555" rx="2" stroke="#242529" strokeWidth="1.33333" transform="rotate(-15 7.08681 3.12153)" width="5.33333" x="7.08681" y="3.12153" />
        <rect fill="#242529" height="1.33333" width="4.66667" x="1.66667" y="4" />
        <path d={P.bookDetail} fill="#242529" />
      </g></svg>
    </div>
  );
}
export function IconClock() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g>
        <path d={P.clockFace} stroke="#242529" strokeWidth="1.33333" />
        <rect fill="#242529" height="1.33333" rx="0.666667" transform="rotate(135 3.64974 1.29297)" width="3.33333" x="3.64974" y="1.29297" />
        <rect fill="#242529" height="1.33333" rx="0.666667" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.3333 1.29297)" width="3.33333" />
        <path d={P.clockHands} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
      </g></svg>
    </div>
  );
}
export function IconMemory() {
  return (
    <div className="figma-nav-icon" style={{ overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "8.33% 31.25% 54.17% 31.25%" }}>
        <div style={{ position: "absolute", inset: "-11.11%" }}>
          <svg width="7.33333" height="7.33333" viewBox="0 0 7.33333 7.33333" fill="none"><path d={P.head} stroke="#242529" strokeWidth="1.33333" /></svg>
        </div>
      </div>
      <div style={{ position: "absolute", inset: "62.5% 10.42% 8.33% 10.42%" }}>
        <div style={{ position: "absolute", inset: "-14.29% -3.13%" }}>
          <svg width="13.4608" height="6" viewBox="0 0 13.4608 6" fill="none"><path d={P.body} stroke="#242529" strokeWidth="1.33333" /></svg>
        </div>
      </div>
    </div>
  );
}

const NAV = [
  { label: "开启新对话", Icon: IconNewChat },
  { label: "我的收藏", Icon: IconFavorite },
  { label: "能力库", Icon: IconLibrary },
  { label: "自动化任务", Icon: IconClock },
  { label: "我的记忆", Icon: IconMemory },
];

export default function NavSidebar() {
  return (
    <div className="kimi-sidebar">
      <style>{NAV_CSS}</style>
      <Header />
      {NAV.map(({ label, Icon }, i) => (
        <div key={label} className="nav-item" data-nav-index={i} role="button" tabIndex={0} aria-label={label}>
          <span className="nav-item-inner">
            <Icon />
            <span className="kimi-nav-label">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

const NAV_CSS = `
@font-face { font-family:"PingFang SC"; src:url("/fonts/PingFang_SC-Regular.woff2") format("woff2"); font-weight:400; font-display:swap; }
@font-face { font-family:"PingFang SC"; src:url("/fonts/PingFang_SC-Medium.woff2") format("woff2"); font-weight:500; font-display:swap; }

.kimi-sidebar { width:236px; background:#F7F8F9; box-sizing:border-box; padding-bottom:8px;
  font-family:"PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", Roboto, Helvetica, Arial, sans-serif; color:#242529; }

.kimi-header { display:flex; align-items:center; height:26px; padding:16px; box-sizing:content-box; }
.kimi-logo { position:relative; width:26px; height:26px; flex-shrink:0; }
.kimi-logo-mark { position:absolute; inset:25.66% 25.51% 13.47% 25.51%; display:block; }
.kimi-logo-mark svg { width:100%; height:100%; display:block; }
.kimi-wordmark { margin-left:6px; display:flex; align-items:center; }
.kimi-collapse { margin-left:auto; display:flex; }

.kimi-sidebar .nav-item { display:flex; height:40px; align-items:center; padding:12px 21px; box-sizing:border-box; cursor:pointer; outline:none; transition:background-color 160ms ease; }
.kimi-sidebar .nav-item:hover { background:#eceef1; }
.kimi-sidebar .nav-item:focus-visible { box-shadow:inset 0 0 0 2px rgba(56,85,213,.42); }
.nav-item-inner { display:flex; gap:8px; align-items:center; }
.kimi-nav-label { font-size:14px; line-height:14px; }

.figma-nav-icon { position:relative; width:16px; height:16px; flex-shrink:0; transform-origin:center; --kimi-smooth:cubic-bezier(.4,0,.2,1); }
.figma-nav-icon svg { display:block; }
.figma-nav-icon, .figma-nav-icon svg *, .figma-nav-icon > div { transition:transform 260ms var(--kimi-smooth), translate 260ms var(--kimi-smooth), opacity 260ms var(--kimi-smooth); }

.nav-item[data-nav-index="0"]:hover .figma-nav-icon { animation:kimi-popup 640ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon { animation:kimi-settle 560ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon svg path:nth-of-type(2) { transform-box:view-box; animation:kimi-write 520ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon svg path:nth-of-type(3) { transform-box:view-box; animation:kimi-write 520ms var(--kimi-smooth) 90ms 1 both; }
.nav-item[data-nav-index="2"]:hover .figma-nav-icon svg rect:nth-of-type(2) { animation:kimi-book-right 600ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="2"]:hover .figma-nav-icon svg rect:nth-of-type(1) { animation:kimi-book-left 600ms var(--kimi-smooth) 70ms 1 both; }
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg path:last-of-type { transform-box:view-box; transform-origin:8px 8px; animation:kimi-sweep 750ms cubic-bezier(.4,0,.2,1) 1; }
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg rect:nth-of-type(1),
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg rect:nth-of-type(2) { animation:kimi-ring 750ms ease-in-out 1; }
.nav-item[data-nav-index="4"]:hover .figma-nav-icon { animation:kimi-recall 780ms ease-in-out 1; }
.nav-item[data-nav-index="4"]:hover .figma-nav-icon > div:first-child { animation:kimi-nod 780ms ease-in-out 1; }

@keyframes kimi-popup { 0%{transform:translateY(0) scale(1) rotate(0)} 22%{transform:translateY(1px) scale(.96) rotate(0)} 55%{transform:translateY(-1.5px) scale(1.13) rotate(-4deg)} 78%{transform:translateY(-.5px) scale(1.04) rotate(3deg)} 100%{transform:translateY(0) scale(1) rotate(0)} }
@keyframes kimi-write { 0%{transform:translateX(-2.6px);opacity:.2} 100%{transform:translateX(0);opacity:1} }
@keyframes kimi-settle { 0%{transform:scale(1)} 55%{transform:scale(1.07)} 100%{transform:scale(1)} }
@keyframes kimi-book-right { 0%{translate:0 0} 45%{translate:1px -1.6px} 100%{translate:0 0} }
@keyframes kimi-book-left { 0%{translate:0 0} 45%{translate:-1px -1px} 100%{translate:0 0} }
@keyframes kimi-sweep { from{transform:rotate(0)} to{transform:rotate(360deg)} }
@keyframes kimi-ring { 0%,100%{translate:0 0} 15%{translate:-.5px 0} 30%{translate:.5px 0} 45%{translate:-.4px 0} 60%{translate:.4px 0} 75%{translate:-.25px 0} }
@keyframes kimi-recall { 0%{transform:scale(1)} 45%{transform:scale(1.09)} 100%{transform:scale(1)} }
@keyframes kimi-nod { 0%{transform:translateY(0)} 25%{transform:translateY(1.3px)} 50%{transform:translateY(0)} 75%{transform:translateY(1px)} 100%{transform:translateY(0)} }
@media (prefers-reduced-motion: reduce) { .figma-nav-icon, .figma-nav-icon svg * { animation:none !important; transform:none !important; } }
`;
