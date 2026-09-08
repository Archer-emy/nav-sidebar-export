"use client";
// NavSidebar.tsx — 复制即用的导航栏组件(含 5 个逐图标 hover 动画)。
// 用法:
//   import NavSidebar from "./NavSidebar";
//   <NavSidebar />
// 也可单独引入图标:import { IconNewChat, IconFavorite, ... } from "./NavSidebar";
// 纯 React / Next.js(App Router,已加 "use client")均可直接使用,无需额外 CSS 文件。

const STROKE = "#242529";
const SW = "1.33333";

const S = {
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

export function IconNewChat() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.bubble} stroke={STROKE} strokeWidth={SW} />
        <rect fill={STROKE} height="1.33333" rx="0.666667" width="6" x="5" y="6.66667" />
        <rect fill={STROKE} height="1.33333" rx="0.666667" width="6" x="8.66667" y="4.33333" transform="rotate(90 8.66667 4.33333)" />
      </svg>
    </div>
  );
}

export function IconFavorite() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.favBack} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
        <rect height="11.7188" rx="2" stroke={STROKE} strokeWidth={SW} width="9.08473" x="6.76823" y="0.287326" transform="rotate(15 6.76823 0.287326)" />
        <path d={S.favLine1} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
        <path d={S.favLine2} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
      </svg>
    </div>
  );
}

export function IconLibrary() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect height="13.3333" rx="2" stroke={STROKE} strokeWidth={SW} width="5.33333" x="1.33333" y="1.33333" />
        <rect height="12.4555" rx="2" stroke={STROKE} strokeWidth={SW} width="5.33333" x="7.08681" y="3.12153" transform="rotate(-15 7.08681 3.12153)" />
        <rect fill={STROKE} height="1.33333" width="4.66667" x="1.66667" y="4" />
        <path d={S.bookDetail} fill={STROKE} />
      </svg>
    </div>
  );
}

export function IconClock() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.clockFace} stroke={STROKE} strokeWidth={SW} />
        <rect fill={STROKE} height="1.33333" rx="0.666667" width="3.33333" x="3.64974" y="1.29297" transform="rotate(135 3.64974 1.29297)" />
        <rect fill={STROKE} height="1.33333" rx="0.666667" width="3.33333" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.3333 1.29297)" />
        <path d={S.clockHands} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
      </svg>
    </div>
  );
}

export function IconMemory() {
  return (
    <div className="figma-nav-icon" style={{ overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "8.33% 31.25% 54.17% 31.25%" }}>
        <div style={{ position: "absolute", inset: "-11.11%" }}>
          <svg width="7.33333" height="7.33333" viewBox="0 0 7.33333 7.33333" fill="none">
            <path d={S.head} stroke={STROKE} strokeWidth={SW} />
          </svg>
        </div>
      </div>
      <div style={{ position: "absolute", inset: "62.5% 10.42% 8.33% 10.42%" }}>
        <div style={{ position: "absolute", inset: "-14.29% -3.13%" }}>
          <svg width="13.4608" height="6" viewBox="0 0 13.4608 6" fill="none">
            <path d={S.body} stroke={STROKE} strokeWidth={SW} />
          </svg>
        </div>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "开启新对话", Icon: IconNewChat },
  { label: "我的收藏", Icon: IconFavorite },
  { label: "能力库", Icon: IconLibrary },
  { label: "自动化任务", Icon: IconClock },
  { label: "我的记忆", Icon: IconMemory },
];

export default function NavSidebar() {
  return (
    <nav className="kimi-sidebar" aria-label="主导航">
      <style>{NAV_CSS}</style>

      <div className="kimi-brand">
        <span className="kimi-brand-logo">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={S.bubble} stroke="#fff" strokeWidth="1.33333" />
          </svg>
        </span>
        <span className="kimi-brand-name">AI 助手</span>
        <span className="kimi-brand-collapse" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2.5" y="3" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <line x1="7" y1="3.5" x2="7" y2="14.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </div>

      {NAV_ITEMS.map(({ label, Icon }, i) => (
        <div key={label} className="nav-item" data-nav-index={i} role="button" tabIndex={0} aria-label={label}>
          <Icon />
          <span className="kimi-nav-label">{label}</span>
        </div>
      ))}
    </nav>
  );
}

const NAV_CSS = `
.kimi-sidebar {
  width: 260px; background: #fff; border-right: 1px solid rgba(0,0,0,.06);
  padding: 14px 12px; display: flex; flex-direction: column; gap: 4px;
  box-sizing: border-box; color: #242529;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", Roboto, Helvetica, Arial, sans-serif;
}
.kimi-brand { display:flex; align-items:center; gap:10px; padding:6px 9px 14px; }
.kimi-brand-logo { width:28px; height:28px; border-radius:8px; background:linear-gradient(135deg,#3855d5,#6b8bff); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.kimi-brand-name { font-size:17px; font-weight:600; letter-spacing:.5px; }
.kimi-brand-collapse { margin-left:auto; color:#8a8f99; display:flex; }
.kimi-sidebar .nav-item { display:flex; align-items:center; gap:8px; height:40px; padding:0 9px; border-radius:8px; cursor:pointer; user-select:none; transition:background-color 160ms ease; }
.kimi-sidebar .nav-item:hover { background:#f3f4f6; }
.kimi-sidebar .nav-item:focus-visible { outline:none; box-shadow:0 0 0 2px rgba(56,85,213,.42); }
.kimi-nav-label { font-size:14px; line-height:14px; }

.figma-nav-icon { position:relative; width:16px; height:16px; flex-shrink:0; transform-origin:center; --kimi-smooth:cubic-bezier(.4,0,.2,1); }
.figma-nav-icon svg { display:block; }
.figma-nav-icon, .figma-nav-icon svg *, .figma-nav-icon > div {
  transition: transform 260ms var(--kimi-smooth), translate 260ms var(--kimi-smooth), opacity 260ms var(--kimi-smooth);
}

.nav-item[data-nav-index="0"]:hover .figma-nav-icon { animation: kimi-popup 640ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon { animation: kimi-settle 560ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon svg path:nth-of-type(2) { transform-box:view-box; animation: kimi-write 520ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="1"]:hover .figma-nav-icon svg path:nth-of-type(3) { transform-box:view-box; animation: kimi-write 520ms var(--kimi-smooth) 90ms 1 both; }
.nav-item[data-nav-index="2"]:hover .figma-nav-icon svg rect:nth-of-type(2) { animation: kimi-book-right 600ms var(--kimi-smooth) 1; }
.nav-item[data-nav-index="2"]:hover .figma-nav-icon svg rect:nth-of-type(1) { animation: kimi-book-left 600ms var(--kimi-smooth) 70ms 1 both; }
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg path:last-of-type { transform-box:view-box; transform-origin:8px 8px; animation: kimi-sweep 750ms cubic-bezier(.4,0,.2,1) 1; }
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg rect:nth-of-type(1),
.nav-item[data-nav-index="3"]:hover .figma-nav-icon svg rect:nth-of-type(2) { animation: kimi-ring 750ms ease-in-out 1; }
.nav-item[data-nav-index="4"]:hover .figma-nav-icon { animation: kimi-recall 780ms ease-in-out 1; }
.nav-item[data-nav-index="4"]:hover .figma-nav-icon > div:first-child { animation: kimi-nod 780ms ease-in-out 1; }

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
