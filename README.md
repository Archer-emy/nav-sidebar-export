# nav-sidebar-export

导航栏(不含"历史对话")独立导出 — React 19 + Vite + Tailwind CSS v4,含 5 个逐图标的语义化 hover 动画。

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
