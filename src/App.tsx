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

// 0 · 开启新对话
function IconNewChat() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.bubble} stroke={STROKE} strokeWidth={SW} />
        <rect fill={STROKE} height="1.33333" rx="0.666667" width="6" x="5" y="6.66667" />
        <rect
          fill={STROKE}
          height="1.33333"
          rx="0.666667"
          width="6"
          x="8.66667"
          y="4.33333"
          transform="rotate(90 8.66667 4.33333)"
        />
      </svg>
    </div>
  );
}

// 1 · 我的收藏
function IconFavorite() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.favBack} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
        <rect
          height="11.7188"
          rx="2"
          stroke={STROKE}
          strokeWidth={SW}
          width="9.08473"
          x="6.76823"
          y="0.287326"
          transform="rotate(15 6.76823 0.287326)"
        />
        <path d={S.favLine1} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
        <path d={S.favLine2} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
      </svg>
    </div>
  );
}

// 2 · 能力库
function IconLibrary() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect height="13.3333" rx="2" stroke={STROKE} strokeWidth={SW} width="5.33333" x="1.33333" y="1.33333" />
        <rect
          height="12.4555"
          rx="2"
          stroke={STROKE}
          strokeWidth={SW}
          width="5.33333"
          x="7.08681"
          y="3.12153"
          transform="rotate(-15 7.08681 3.12153)"
        />
        <rect fill={STROKE} height="1.33333" width="4.66667" x="1.66667" y="4" />
        <path d={S.bookDetail} fill={STROKE} />
      </svg>
    </div>
  );
}

// 3 · 自动化任务
function IconClock() {
  return (
    <div className="figma-nav-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={S.clockFace} stroke={STROKE} strokeWidth={SW} />
        <rect
          fill={STROKE}
          height="1.33333"
          rx="0.666667"
          width="3.33333"
          x="3.64974"
          y="1.29297"
          transform="rotate(135 3.64974 1.29297)"
        />
        <rect
          fill={STROKE}
          height="1.33333"
          rx="0.666667"
          width="3.33333"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.3333 1.29297)"
        />
        <path d={S.clockHands} stroke={STROKE} strokeLinecap="round" strokeWidth={SW} />
      </svg>
    </div>
  );
}

// 4 · 我的记忆 (head + body separate so the head can nod on its own)
function IconMemory() {
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

export default function App() {
  return (
    <nav className="sidebar" aria-label="主导航">
      <div className="brand">
        <span className="brand-logo">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={S.bubble} stroke="#fff" strokeWidth="1.33333" />
          </svg>
        </span>
        <span className="brand-name">AI 助手</span>
        <span className="brand-collapse" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2.5" y="3" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <line x1="7" y1="3.5" x2="7" y2="14.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </div>

      {NAV_ITEMS.map(({ label, Icon }, i) => (
        <div
          key={label}
          className="nav-item"
          data-nav-index={i}
          role="button"
          tabIndex={0}
          aria-label={label}
        >
          <Icon />
          <span className="nav-label">{label}</span>
        </div>
      ))}
    </nav>
  );
}
