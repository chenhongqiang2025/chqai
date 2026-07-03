# 陳宏强AI · 太阳系圆盘

单文件 HTML 复刻 [aifc.lk666.ai](https://aifc.lk666.ai) 的首页 —— 一个倾斜 3D 圆盘，
上面绕着 50+ 全球主流 AI 大模型图标缓慢旋转。

## 版本历史

| 版本 | 日期 | 亮点 |
| ---- | ---- | ---- |
| **1.2** (最新) | 2026-07-03 | 加了真正的 3D 倾斜盘 (`perspective + rotateX(58deg)`) + 双环反向异速旋转 + 图标三层兜底 CDN + 中央辉光 |
| 1.1 | 2026-07-01 | 单圈 2D 环 + 基础图标本地化 |
| 1.0 | 2026-07-01 | 首版 |

每个版本是独立子目录：`1.x/chq-ai-site/index.html` 一个文件即可直接双击打开。

## 打开方式

直接双击 `1.2/chq-ai-site/index.html`，或本地起个静态服务器：

```bash
cd 1.2/chq-ai-site
python -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765/
```

## 目录

```
1.0/  chq-ai-site/           # v1.0 首版归档
1.1/  chq-ai-site/           # v1.1 归档
1.2/  chq-ai-site/           # 当前最新
scripts/screenshot.cjs       # puppeteer 无头截图工具
.evolve/                     # evolve-lite 会话经验积累
```

## 技术栈

纯 HTML + CSS + 少量原生 JS，无构建，无依赖。

- CSS 变量做主题（深色/浅色一键切）
- CSS keyframes 做全部动画（圆盘旋转 + 图标反向自转 + 打字机 + 计数器）
- `perspective + rotateX + preserve-3d` 实现 3D 倾斜盘
- 图标三层兜底：本地 SVG → `cos.lingkeai.vip` → `jsdelivr @lobehub/lobe-icons`
- Font Awesome 图标（自动 CDN 失败切换 jsdelivr）
