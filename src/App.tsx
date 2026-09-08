// 忠实复刻 Figma 设计:从「AI助手」头部往下、到「历史对话」之前,与原设计一模一样。
// className 均与 Figma 导出源码逐字一致,仅在 5 个图标上叠加 hover 动画(见 index.css)。

// ── SVG 路径(取自 Figma 导出) ─────────────────────────────────────────────
const P = {
  // 头部 logo 白色符号
  union:
    "M11.1156 10.6079C12.1219 9.48187 12.7337 7.99579 12.7337 6.36684C12.7337 2.85053 9.88314 0 6.36684 0C2.85053 0 0 2.85053 0 6.36684C0 9.68075 2.53183 12.4033 5.7667 12.7058L6.31392 15.3845C6.40836 15.8468 7.00289 15.9834 7.28961 15.6086L11.1156 10.6079Z",
  // 「AI助手」四个字(矢量)
  ai1: "M8.88901 18.7937H5.95792L5.63225 14.2139H3.29505L2.93106 18.7937H0L2.3716 0.557037H6.45342L8.88901 18.7937ZM4.36786 4.01514L3.56325 11.759H5.38321L4.67439 4.01514H4.36786Z",
  ai2: "M10.5611 18.7937V0.557037H13.5305V18.7937H10.5611Z",
  ai3: "M29.8397 2.00112H33.403V18.973H29.1501V16.1737H30.7401V4.64172H29.5907L28.1922 19L25.5019 18.973L26.9661 4.64172H25.7592V2.00112H27.2343L27.4259 0.0206662H30.0313L29.8397 2.00112ZM24.6719 14.9359L25.1892 14.8947V17.6178L17.7178 18.0923V15.3692L18.2734 15.3279V0.364901H24.6719V14.9359ZM22.2773 15.0804V12.3366H20.6489V15.1835L22.2773 15.0804ZM22.2773 9.67537V7.4061H20.6489V9.67537H22.2773ZM22.2773 4.80676V2.84694H20.6489V4.80676H22.2773Z",
  ai4: "M46.0995 13.4506V18.8968H40.7546V16.3387H42.9577V13.4506H36.3867V10.8925H42.9577V8.12811H37.4021V5.73506H42.9577V3.07383H37.1914V0.515742H48.4176L51.4636 0V2.61997L48.5708 3.07383H46.0995V5.73506H51.1762V8.12811H46.0995V10.8925H52V13.4506H46.0995Z",
  // 折叠图标
  collapseOuter:
    "M1.66667 3.66667C1.66667 2.5621 2.5621 1.66667 3.66667 1.66667H12.3333C13.4379 1.66667 14.3333 2.5621 14.3333 3.66667V12.3333C14.3333 13.4379 13.4379 14.3333 12.3333 14.3333H3.66667C2.5621 14.3333 1.66667 13.4379 1.66667 12.3333V3.66667Z",
  collapseBar:
    "M4.66667 5C4.66667 4.63181 4.96514 4.33333 5.33333 4.33333C5.70152 4.33333 6 4.63181 6 5V11C6 11.3682 5.70152 11.6667 5.33333 11.6667C4.96514 11.6667 4.66667 11.3682 4.66667 11L4.66667 5Z",
  // 图标 · 开启新对话
  bubble:
    "M1.66667 3.66667C1.66667 2.5621 2.5621 1.66667 3.66667 1.66667H12.3333C13.4379 1.66667 14.3333 2.5621 14.3333 3.66667V10.6667C14.3333 11.7712 13.4379 12.6667 12.3333 12.6667H9.12179C8.82673 12.6667 8.54001 12.7645 8.30653 12.945L5.53715 15.0849C5.31804 15.2542 5 15.0981 5 14.8212V13C5 12.8159 4.85076 12.6667 4.66667 12.6667H3.66667C2.5621 12.6667 1.66667 11.7712 1.66667 10.6667V3.66667Z",
  // 图标 · 我的收藏
  favBack:
    "M2.16667 5.1181C1.23572 5.1181 0.552906 5.99337 0.779422 6.89633L2.46088 13.5992C2.73269 14.6827 3.83938 15.3335 4.91841 15.0444L6.33333 14.6652",
  favLine1: "M8.66667 4.66667L11.6667 5.47051",
  favLine2: "M8 7L9.5 7.40192",
  // 图标 · 能力库
  bookDetail:
    "M8.14323 5.32899L12.4333 3.994L12.8295 5.26712L8.5394 6.60211L8.14323 5.32899Z",
  // 图标 · 自动化任务
  clockFace:
    "M14.3333 8C14.3333 11.4978 11.4978 14.3333 8 14.3333C4.5022 14.3333 1.66667 11.4978 1.66667 8C1.66667 4.5022 4.5022 1.66667 8 1.66667C11.4978 1.66667 14.3333 4.5022 14.3333 8Z",
  clockHands:
    "M7.66667 5.66667L7.66667 8.02108C7.66667 8.21894 7.75455 8.40657 7.90654 8.53323L9.66667 10",
  // 图标 · 我的记忆
  head:
    "M6.66667 3.66667C6.66667 5.32352 5.32352 6.66667 3.66667 6.66667C2.00981 6.66667 0.666667 5.32352 0.666667 3.66667C0.666667 2.00981 2.00981 0.666667 3.66667 0.666667C5.32352 0.666667 6.66667 2.00981 6.66667 3.66667Z",
  body:
    "M0.684863 3.31867C0.90225 1.79696 2.20549 0.666667 3.74265 0.666667H9.71813C11.2553 0.666667 12.5585 1.79696 12.7759 3.31867C12.9278 4.38199 12.1027 5.33333 11.0286 5.33333H2.43217C1.35805 5.33333 0.53296 4.38199 0.684863 3.31867Z",
};

// ── 头部(复刻 Figma Group219) ────────────────────────────────────────────
function Header() {
  return (
    <div className="relative w-[236px]">
      <div className="content-stretch flex isolate items-baseline p-[16px] relative size-full">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-[1]">
          <div className="col-1 content-stretch flex h-[26px] items-center justify-between ml-0 mt-0 relative row-1 w-[204px]">
            {/* 左:logo + AI助手 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[26px]">
                    <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
                      <circle cx="13" cy="13" fill="url(#lg0)" r="13" />
                      <circle cx="13" cy="13" fill="url(#lg1)" r="13" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="lg0" x1="1.93669" x2="23.676" y1="5.76164" y2="20.0205">
                          <stop stopColor="#24D1FC" />
                          <stop offset="0.57" stopColor="#185EF1" />
                          <stop offset="1" stopColor="#5108E7" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="lg1" x1="30.7895" x2="-6.85739" y1="44.85" y2="40.7854">
                          <stop stopColor="#8B58FD" />
                          <stop offset="0.131261" stopColor="#957BFF" />
                          <stop offset="0.423047" stopColor="#516CF3" />
                          <stop offset="0.622929" stopColor="#516CF3" />
                          <stop offset="0.853645" stopColor="#3A7BFF" />
                          <stop offset="1" stopColor="#2AA8FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-[25.66%_25.51%_13.47%_25.51%]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="15.8248" preserveAspectRatio="none" viewBox="0 0 12.7337 15.8248" width="12.7337">
                        <path clipRule="evenodd" d={P.union} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-1 h-[19px] ml-[32px] mt-[4px] relative row-1 w-[52px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 52 19" width="52">
                    <path d={P.ai1} fill="#222222" />
                    <path d={P.ai2} fill="#222222" />
                    <path d={P.ai3} fill="#222222" />
                    <path d={P.ai4} fill="#222222" />
                  </svg>
                </div>
              </div>
            </div>
            {/* 右:折叠图标 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={P.collapseOuter} stroke="#5A5C66" strokeWidth="1.33333" />
                  <path d={P.collapseBar} fill="#5A5C66" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 5 个图标(复刻 Figma,SVG 结构与原设计一致,以配合动画选择器) ────────────
function IconNewChat() {
  return (
    <div className="figma-nav-icon col-1 ml-0 mt-0 relative row-1 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g>
          <path d={P.bubble} stroke="#242529" strokeWidth="1.33333" />
          <rect fill="#242529" height="1.33333" rx="0.666667" width="6" x="5" y="6.66667" />
          <rect fill="#242529" height="1.33333" rx="0.666667" transform="rotate(90 8.66667 4.33333)" width="6" x="8.66667" y="4.33333" />
        </g>
      </svg>
    </div>
  );
}
function IconFavorite() {
  return (
    <div className="figma-nav-icon relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g>
          <path d={P.favBack} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
          <rect height="11.7188" rx="2" stroke="#242529" strokeWidth="1.33333" transform="rotate(15 6.76823 0.287326)" width="9.08473" x="6.76823" y="0.287326" />
          <path d={P.favLine1} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
          <path d={P.favLine2} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}
function IconLibrary() {
  return (
    <div className="figma-nav-icon relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g>
          <rect height="13.3333" rx="2" stroke="#242529" strokeWidth="1.33333" width="5.33333" x="1.33333" y="1.33333" />
          <rect height="12.4555" rx="2" stroke="#242529" strokeWidth="1.33333" transform="rotate(-15 7.08681 3.12153)" width="5.33333" x="7.08681" y="3.12153" />
          <rect fill="#242529" height="1.33333" width="4.66667" x="1.66667" y="4" />
          <path d={P.bookDetail} fill="#242529" />
        </g>
      </svg>
    </div>
  );
}
function IconClock() {
  return (
    <div className="figma-nav-icon relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g>
          <path d={P.clockFace} stroke="#242529" strokeWidth="1.33333" />
          <rect fill="#242529" height="1.33333" rx="0.666667" transform="rotate(135 3.64974 1.29297)" width="3.33333" x="3.64974" y="1.29297" />
          <rect fill="#242529" height="1.33333" rx="0.666667" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.3333 1.29297)" width="3.33333" />
          <path d={P.clockHands} stroke="#242529" strokeLinecap="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}
function IconMemory() {
  return (
    <div className="figma-nav-icon overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[8.33%_31.25%_54.17%_31.25%]">
        <div className="absolute inset-[-11.11%]">
          <svg className="block size-full" fill="none" height="7.33333" preserveAspectRatio="none" viewBox="0 0 7.33333 7.33333" width="7.33333">
            <path d={P.head} stroke="#242529" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_10.42%_8.33%_10.42%]">
        <div className="absolute inset-[-14.29%_-3.13%]">
          <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 13.4608 6" width="13.4608">
            <path d={P.body} stroke="#242529" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const NAV = [
  { label: "开启新对话", Icon: IconNewChat, pr: "pr-[122px]" },
  { label: "我的收藏", Icon: IconFavorite, pr: "pr-[95px]" },
  { label: "能力库", Icon: IconLibrary, pr: "pr-[150px]" },
  { label: "自动化任务", Icon: IconClock, pr: "pr-[122px]" },
  { label: "我的记忆", Icon: IconMemory, pr: "pr-[136px]" },
];

// ── 导航区(复刻 Figma Frame32) ───────────────────────────────────────────
function NavList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {NAV.map(({ label, Icon, pr }, i) => (
        <div
          key={label}
          className={`nav-item content-stretch flex flex-col h-[40px] items-start pl-[21px] ${pr} py-[12px] relative shrink-0 w-full`}
          data-nav-index={i}
          role="button"
          tabIndex={0}
          aria-label={label}
        >
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Icon />
            <p className="[word-break:break-word] font-['PingFang_SC:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#242529] text-[14px] whitespace-nowrap">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="assistant-sidebar bg-[#F7F8F9] min-h-screen w-[236px]">
      <Header />
      <NavList />
    </div>
  );
}
