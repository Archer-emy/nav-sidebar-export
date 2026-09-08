# nav-sidebar-export

导航栏(不含"历史对话")独立导出 — **React 19 + Vite 8 + Tailwind CSS 4**,页面主体单个 `App`,含 Figma 导出组件源码、字体和图片资源,以及 5 个逐图标的语义化 hover 动画。

## 资源清单

- **组件源码**:`src/App.tsx`(Figma 导出重建的导航栏 + 5 个图标组件)
- **单文件版**:`NavSidebar.tsx`(复制即用,自带 `<style>`,无需引 CSS)
- **字体**:`public/fonts/PingFang_SC-{Regular,Medium}.woff2`(已通过 `@font-face` 打包,跨电脑字体统一)
- **图片资源**:`public/icons/*.{svg,png}` 与 `assets/icons/*`(5 个图标的矢量 + 512px 透明位图)

## 运行

```bash
npm install
npm run dev      # 开发预览
npm run build    # 打包到 dist/
npm run preview  # 预览打包产物
```

## 结构

- `index.html` — Vite 入口
- `src/main.tsx` — React 挂载点
- `src/App.tsx` — 导航栏组件(顶部品牌 + 5 个导航项)
- `src/index.css` — 全局样式 + 5 个 hover 动画关键帧

## 5 个动画

| 导航项 | 动画 |
| --- | --- |
| 开启新对话 | 气泡弹起并微倾(kimi-popup) |
| 我的收藏 | 卡片轻缩 + 两行文字依次写入(kimi-settle / kimi-write) |
| 能力库 | 两本书上扬外翻(kimi-book-left/right) |
| 自动化任务 | 指针转一圈 + 双铃抖动(kimi-sweep / kimi-ring) |
| 我的记忆 | 整体脉冲 + 头部点头(kimi-recall / kimi-nod) |

动画为纯 CSS `:hover` 触发,无需运行时 JS;每个手势都从 identity 变换开始并回归,静止时图标像素清晰。
