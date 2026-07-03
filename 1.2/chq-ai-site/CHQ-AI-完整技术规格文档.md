# 陳宏强AI (CHQ AI) - 完整技术规格与资源清单

> **来源站点**: `https://aifc.lk666.ai/zh-CN`
> **分析日期**: 2026-07-03
> **品牌归属**: chenhongqiang (Richard Chen) - ©2026 All Rights Reserved
> **项目需求**: 单HTML文件实现 + CHQAI品牌替换 + 100%复刻原站细节

---

## 目录

1. [技术栈总览](#1-技术栈总览)
2. [构建与工程化](#2-构建与工程化)
3. [前端框架与依赖](#3-前端框架与依赖)
4. [UI设计系统](#4-ui设计系统)
5. [完整功能清单](#5-完整功能清单)
6. [页面结构与内容](#6-页面结构与内容)
7. [API端点清单](#7-api端点清单)
8. [图标与资源清单](#8-图标与资源清单)
9. [CDN资源下载清单](#9-cdn资源下载清单)
10. [交互行为规范](#10-交互行为规范)
11. [多语言内容对照](#11-多语言内容对照)
12. [安全与存储](#12-安全与存储)
13. [部署指南](#13-部署指南)

---

## 1. 技术栈总览

| 层级 | 技术/工具 | 版本 | 用途 |
|------|----------|------|------|
| **构建工具** | Vite (Rolldown) | 6.x | 打包构建 |
| **前端框架** | Vue | 3.x | 响应式UI框架 |
| **路由** | Vue Router | 4.x | SPA路由管理 |
| **UI组件库** | Element Plus | 2.x | 基础组件 |
| **状态管理** | Pinia | - | 全局状态 |
| **国际化** | Vue I18n | - | 多语言支持 |
| **图标字体** | Font Awesome | 6.4.0 | 图标系统 |
| **图标字体** | DevUI Icomoon | - | 自定义图标 |
| **图标库** | Lucide Vue Next | - | Vue图标组件 |
| **日期处理** | Dayjs | - | 日期格式化 |
| **响应式** | RxJS | - | 异步流处理 |
| **响应式** | Enquire.js | - | 断点监听 |
| **事件总线** | Mitt | - | 组件通信 |
| **校验** | Yup / Joi | - | 表单校验 |
| **Markdown** | Marked | - | MD解析 |
| **代码高亮** | Highlight.js | - | 代码块高亮 |
| **图表** | ECharts / Chart.js | - | 数据可视化 |
| **二维码** | QRCode | - | 二维码生成 |
| **Canvas** | Fabric.js | - | 图像处理 |
| **剪贴板** | Clipboard | - | 复制粘贴 |
| **支付** | 支付宝 / 微信 | - | 支付集成 |
| **OAuth** | GitHub / Google / 微信 / QQ | - | 第三方登录 |
| **分析** | 百度统计 / Microsoft Clarity | - | 数据监控 |

---

## 2. 构建与工程化

### 2.1 构建特征

| 项目 | 详情 |
|------|------|
| Bundler Runtime | `rolldown-runtime-QTnfLwEv.js` |
| 代码分割 | 极度细化，共 **171个chunk** |
| 命名策略 | content-hash，如 `index-Djg-JIoA.js` |
| Source Map | 未部署（404） |
| HMR残留 | 无，`import.meta.hot`已被tree-shake |
| CSS策略 | 独立CSS文件，无Tailwind/UnoCSS |
| 输出格式 | ES Module |

### 2.2 首屏加载资源

```
https://cdn.lingkeai.vip/assets/index-Djg-JIoA.js          (主入口, 106KB)
https://cdn.lingkeai.vip/assets/rolldown-runtime-QTnfLwEv.js  (运行时, 694B)
https://cdn.lingkeai.vip/assets/vendor-vue-CalkO0Y-.js      (Vue运行时, 123KB)
https://cdn.lingkeai.vip/assets/vendor-element-plus-BnQLyPmw.js (Element Plus, 1.1MB)
https://cdn.lingkeai.vip/assets/TiShiKuang-DPIRK1pg.js      (提示框组件, 4.7KB)
https://cdn.lingkeai.vip/assets/JiaMi-DZTr-XuH.js           (加密模块, 5.1KB)
https://cdn.lingkeai.vip/assets/router-KJrAsL26.js          (路由主chunk, 1.4MB)
https://cdn.lingkeai.vip/assets/index-B3iffeQM.css          (主样式, 48KB)
https://cdn.lingkeai.vip/assets/vendor-element-plus-C_EL3rG-.css (Element Plus样式, 354KB)
https://cdn.lingkeai.vip/assets/router-j0tbp4rR.css         (路由样式, 58KB)
https://cdn.lingkeai.vip/assets/TiShiKuang-B3SOKIPe.css     (提示框样式, 6.3KB)
https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css (FA图标, 102KB)
```

### 2.3 Chunk完整列表（171个）

#### 业务页面/路由级懒加载 JS
```
About, Agreement, BoFangQi(播放器), Cards, CashFlow, ChartLine,
Chat_Duo(对话), Conversion, CustomerDrawer, CustomerList,
DaiLiShang(代理商), DaiLiShangApp, Dashboard, DataPanel,
DengLuApi(登录API), DuiHuaQiPao_Wo(对话气泡_我), EmptyTip,
FengMianChuLi(封面处理), GitHubCallback, GoogleCallback, Group,
HistoryPanel, Home, IconZiChanSvg, Inbox, Incentive, Income,
Info, Invoice, JiaMi(加密), Kefu(客服), KpiCard, LingGanStore(灵感Store),
ManJu(漫剧), MetricGrid, MoBanShangXianList(模板上限列表),
MobileUpload, Notification, NotificationDrawer, PageHeader, Payout,
Privacy, Profile, QuDaoXuanZe(渠道选择), Recharge, SectionTabs,
Segment, ShiPin(视频), ShuRuKuang(输入框), SignIn,
TanChuang_API(弹窗_API), TanChuang_BaoCunDaoZiChan(弹窗_保存到资产),
TanChuang_DaiLiShang(弹窗_代理商), TanChuang_GongGao(弹窗_公告),
TanChuang_JiaGe(弹窗_价格), TanChuang_LingGan(弹窗_灵感),
TanChuang_WeiXinBangDing(弹窗_微信绑定), TanChuang_XiaZai(弹窗_下载),
TangChuang_XieYi(弹窗_协议), TaskDialogPanel, Team, Terms,
TiShiKuang(提示框), TiShiKuang_Xiao(提示框_小), ToolbarFilter,
TuanDuiZiChan(团队资产), WeiKaiTong(未开通), WeiXinCallback,
Welcome, WenDang(文档), Withdraw, WoDe(我的), XieYi_YeMianJiChu(协议_页面基础),
XuanZeQi_JiChu(选择器_基础), YiDongKuaiJieCaoZuo(移动快捷操作),
ZhuYe(主页)
```

#### Vendor/共享Chunk
```
rolldown-runtime, vendor-vue, vendor-element-plus, vendor-echarts,
JiaMi(加密), router, routerBack, useChartColors, useElementTheme,
useFormatters, usePeriodOptions, useRevealQuery
```

#### CSS Chunks
```
About, BoFangQi, CashFlow, ChartLine, Chat_Duo, Conversion,
CustomerDrawer, CustomerList, DaiLiShangApp, Dashboard, DataPanel,
DengLuApi, EmptyTip, FengMianChuLi, Group, Home, IconZiChanSvg,
Inbox, Income, Invoice, KpiCard, MetricGrid, MobileUpload,
NotificationDrawer, PageHeader, Payout, Profile, Recharge,
SectionTabs, ShiPin, ShuRuKuang, TanChuang_系列, TaskDialogPanel,
Team, TiShiKuang, ToolbarFilter, Withdraw, WoDe, ZhuYe,
router, vendor-element-plus 等
```

---

## 3. 前端框架与依赖

### 3.1 Vue 3 插件初始化顺序

```javascript
const app = createApp(...)
app.directive('lazy-image', lazyImageDirective)
app.directive('img-fallback', imgFallbackDirective)
app.use(/* Pinia / Vue I18n */)
app.use(/* Vue Router */)
app.use(/* Head管理或其他全局插件 */)
app.mount('#app')
```

### 3.2 主题系统

| 系统 | 详情 |
|------|------|
| 当前主题 | `app-theme` 存储于 localStorage，值 `dark`/`light` |
| DevUI遗留 | `devuiThemeId`, `devuiCurrentTheme` 遗留键 |
| 属性挂载 | `data-theme` 属性挂载于 `<html>` |
| 响应式rem | `--app-rem-base` 基于2560x1440基准动态计算 |
| 媒体查询 | 监听 `prefers-color-scheme` |

### 3.3 懒加载系统

- 自定义 `IntersectionObserver` 图片懒加载指令
- 重试机制：2次重试，退避延迟1500ms/3000ms
- 图片加载失败触发 `img-fallback` 指令

---

## 4. UI设计系统

### 4.1 颜色系统

```css
:root {
  --color-primary: #00cae0;
  --color-base: #0f0f12;
  --color-text-primary: #f5fbff;
  --color-text-secondary: #8c99a0;
  --color-text-tertiary: #60696e;
  
  /* 主色透明度变体 */
  --c-primary-3: #00cae008;
  --c-primary-5: #00cae00d;
  --c-primary-8: #00cae014;
  --c-primary-10: #00cae01a;
  --c-primary-12: #00cae01f;
  --c-primary-15: #00cae026;
  --c-primary-20: #00cae033;
  --c-primary-25: #00cae040;
  --c-primary-30: #00cae04d;
  --c-primary-40: #00cae066;
  --c-primary-50: #00cae080;
  --c-primary-59: #00cae059;
  --c-primary-66: #00cae0a6;
  --c-primary-80: #00cae0cc;
  
  /* 辅助色 */
  --c-emerald: #00e5a0;
  --c-purple: #7850ff;
  
  /* 白色透明度 */
  --w-3: #ffffff08;
  --w-5: #ffffff0d;
  --w-8: #ffffff14;
  --w-10: #ffffff1a;
  --w-12: #ffffff1f;
  --w-15: #ffffff26;
  --w-20: #ffffff33;
  --w-25: #ffffff40;
  --w-30: #ffffff4d;
  --w-40: #ffffff66;
  --w-50: #ffffff80;
  
  /* 黑色透明度 */
  --b-15: #00000026;
  --b-20: #0003;
  --b-25: #00000040;
  --b-30: #0000004d;
  --b-40: #0006;
  --b-50: #00000080;
  
  /* 阴影 */
  --shadow-sm: 0 .125rem .5rem #0000004d;
  --shadow-md: 0 .25rem .75rem #0006;
  --shadow-lg: 0 .5rem 1.5rem #00000080;
  
  /* 滚动条 */
  --scrollbar-thumb: #ffffff14;
  --scrollbar-thumb-hover: #ffffff26;
}
```

### 4.2 Dark Theme

```css
[data-theme="dark"] {
  --bg-deep: #06080c;
  --bg-page: #0f0f12;
  --bg-page-2: #0c0c0f;
  --bg-page-3: #101014;
  --bg-page-4: #121216;
  --bg-page-5: #121218;
  --bg-panel: #141419;
  --bg-panel-2: #141519;
  --bg-panel-3: #16161c;
  --bg-card: #1c1e22;
  --bg-card-2: #1e1f25;
  --bg-card-3: #1f2227;
  --bg-elevated: #292b33;
  --bg-elevated-2: #2a2d33;
  --bg-hover-solid: #23252a;
  --bg-input: #1b1c21;
  --nav-bg: rgba(6,8,12,0.85);
  --card-bg: rgba(255,255,255,0.04);
  --card-bg-2: rgba(255,255,255,0.05);
  --card-bd: rgba(255,255,255,0.08);
  --card-bd-2: rgba(255,255,255,0.1);
  --card-bd-h: #00cae033;
  --card-shadow: 0 1.19rem 2.38rem #0000004d, 0 0 1.79rem #00cae00f;
  --footer-bg: #06080c;
  --glass: rgba(255,255,255,0.04);
}
```

### 4.3 Light Theme

```css
[data-theme="light"] {
  --bg-page: #f8f9fa;
  --bg-card: #fcfdfe;
  --bg-panel: #ffffff;
  --bg-elevated: #f0f1f3;
  --bg-hover-solid: #e8eaed;
  --bg-input: #ffffff;
  --color-primary: #00a1c2;
  --color-text-primary: #0f1419;
  --color-text-secondary: #646e78;
  --color-text-tertiary: #8b95a0;
  --card-bg: rgba(0,0,0,0.03);
  --card-bg-2: rgba(0,0,0,0.04);
  --card-bd: rgba(0,0,0,0.06);
  --card-bd-2: rgba(0,0,0,0.08);
  --card-bd-h: rgba(0,161,194,0.3);
  --card-shadow: 0 1.19rem 2.38rem rgba(0,0,0,0.08);
  --nav-bg: rgba(248,249,250,0.85);
  --footer-bg: #f0f1f3;
  --glass: rgba(255,255,255,0.6);
  --shadow-lg: 0 .5rem 1.5rem rgba(0,0,0,0.06);
}
```

### 4.4 字体栈

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'PingFang SC', 'HarmonyOS Sans', 'Microsoft YaHei', sans-serif;
```

Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`

### 4.5 轨道图标尺寸（原版精确值）

```css
.orbit-container { --orbit-r: 26rem; }
.orbit-icon {
  width: 1.79rem;        /* 28.64px */
  height: 1.79rem;       /* 28.64px */
  padding: .24rem;       /* 3.84px */
  border-radius: .48rem; /* 7.68px */
  background: #1a1a22;
  border: 1px solid #ffffff1a;
  filter: drop-shadow(0 0 .48rem #00cae01f);
  object-fit: contain;
}
.orbit-name {
  font-size: .55rem;     /* 8.8px */
  color: #ffffff59;      /* rgba(255,255,255,0.35) */
  max-width: 3.81rem;    /* 60.96px */
  letter-spacing: .02em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
.orbit-icon-wrap {
  opacity: .5;
  gap: .18rem;           /* 2.88px */
}
.orbit-icon-wrap:hover {
  opacity: 1;
  transition: opacity .3s;
}
```

### 4.6 轨道动画

```css
/* 入场动画 */
@keyframes orbitEntrance {
  0% { opacity: 0; transform: scale(0) rotate(-360deg); }
  15% { opacity: 1; }
  100% { opacity: 1; transform: scale(1.25) rotate(0); }
}
/* 轨道旋转 */
@keyframes orbitRotate {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
/* 反向旋转保持正向 */
@keyframes orbitCounterRotate {
  0% { transform: rotate(calc(var(--angle) * -1)) translateX(-50%); }
  100% { transform: rotate(calc(var(--angle) * -1 - 360deg)) translateX(-50%); }
}
```

入场: `2.5s cubic-bezier(.16,1,.3,1)`
旋转: `80s linear infinite`

---

## 5. 完整功能清单

### 5.1 首页 (Welcome Page)

| 区块 | 功能 | 状态 |
|------|------|------|
| 导航栏 | Logo、语言切换、主题切换、客服入口、开发者入口、开始使用按钮 | 已实现 |
| Hero主视觉 | Badge标签、打字机标题、副标题、CTA按钮、商务合作 | 已实现 |
| 数据统计 | 500+ AI模型、10K+创作者、∞创造力 | 已实现 |
| 3D轨道模型 | 50个模型图标环绕旋转、hover spotlight提示 | 已实现 |
| 热门模型滚动 | 16张模型卡片横向滚动 | 已实现 |
| AI Agents | 4张核心能力卡片 | 已实现 |
| 平台核心能力 | 4张功能卡片（对话/图像/视频/语音） | 已实现 |
| 灵感广场 | 9张灵感卡片+加载更多 | 已实现 |
| CTA号召 | 注册引导+联系客服 | 已实现 |
| 页脚 | 版权、链接、支付方式图标 | 已实现 |
| 浮动客服按钮 | FAB按钮，点击打开客服弹窗 | 已实现 |

### 5.2 登录弹窗 (Login Modal)

| 登录方式 | 实现状态 | 备注 |
|----------|---------|------|
| 微信登录 | 弹窗占位 | 需后端OAuth支持 |
| GitHub登录 | 弹窗占位 | 需后端OAuth支持 |
| Google登录 | 弹窗占位 | 需后端OAuth支持 |
| QQ登录 | 弹窗占位 | 需后端OAuth支持 |
| 手机号+验证码 | 弹窗占位 | 需短信API |
| 邮箱+验证码 | 弹窗占位 | 需邮件API |
| 密码登录 | 弹窗占位 | 需后端认证 |
| 图形验证码 | 弹窗占位 | 需后端生成 |
| 用户协议勾选 | UI实现 | 静态展示 |
| 账号找回 | UI实现 | 静态展示 |

### 5.3 其他页面

| 页面 | 路由 | 状态 | 内容来源 |
|------|------|------|---------|
| API文档 | `/apidoc` | 占位 | API动态加载 |
| 关于我们 | `/about` | 占位 | API动态加载 |
| 隐私政策 | `/privacy` | 占位 | API动态加载 |
| 用户协议 | `/terms` | 占位 | API动态加载 |
| 应用主页 | `/home` | 未实现 | 工作台（需登录） |
| 多模型对话 | `/chat-duo` | 未实现 | 聊天界面 |
| 漫剧 | `/manju` | 未实现 | 视频生成 |
| 个人中心 | `/wode` | 未实现 | 用户信息 |
| 代理商后台 | `/dailishang` | 未实现 | 13+模块 |

### 5.4 代理商后台模块（13个）

1. Dashboard（数据看板）
2. 客户管理（直接/间接客户）
3. 下级代理商（分销网络）
4. 收益记录（收入明细）
5. 财务管理（提现/充值）
6. API密钥（密钥管理）
7. 站内消息（消息中心）
8. 协议签署（电子签）
9. 域名绑定（品牌定制）
10. 客服管理（接待设置）
11. 模型配置（模型列表）
12. 签到奖励（用户运营）
13. 发票管理（电子发票）

### 5.5 多模板Landing Page系统（12套）

| 模板ID | 风格定位 | 核心文案 |
|--------|---------|---------|
| moban05 | 游戏/战斗风 | `AI 战场`、`战力启动` |
| moban06 | 教育/学习风 | `让 AI 陪你成长每一天` |
| moban07 | 文艺/手账风 | `灵感号`、`把每一个想法都写成花` |
| moban08 | 企业/B2B基础设施 | `一站式 AI 基础设施`、`SLA 99.99%` |
| moban09 | 电商卖货风 | `AI 直播卖货神器` |
| moban10 | Web3/赛博朋克 | `唤醒_中枢`、`500+ 模型` |
| moban11 | 胶片/摄影风 | `ROLL · 35mm` |
| moban12 | 奢华/限量典藏 | `为臻选者而铸的 AI 殿堂` |
| moban13 | 极简/冥想风 | `Polar · Quiet AI` |
| moban14 | 街头/涂鸦潮牌 | `AI 走上街头` |
| moban15 | 学术/论文风 | `面向严肃创作者的 AI 研究计算平台` |
| moban16 | 团队/工作台 | `为团队设计的 AI 工作台` |

---

## 6. 页面结构与内容

### 6.1 SEO Meta信息

```
标题: AI大模型聚合平台 - Sora2·GPT Image·可灵·GPT-5.5·AI智能体

描述: 一站式AI大模型聚合平台，在线调用500+顶尖模型：Sora 2/Veo 3.1/
可灵/即梦/Grok AI视频生成，GPT-5.5/Claude Opus/Gemini 3/DeepSeek智能对话，
GPT Image 2/Nano Banana/Midjourney AI绘画，Suno音乐、AI配音、AI漫剧、
电商一键生图，并提供OpenAI兼容API，免费试用。

关键词: AI大模型,AI聚合平台,一站式AI平台,AI视频生成,文生视频,图生视频,
Sora2,Veo3,可灵AI,即梦AI,Grok视频,Vidu,Seedance,海螺AI,AI绘画,AI生图,
GPT Image,Nano Banana,Midjourney,即梦生图,AI对话,GPT-5.5,Claude Opus,
Gemini 3,DeepSeek,Grok,千问,豆包,AI音乐生成,Suno,AI配音,AI智能体,AI漫剧,
电商生图,一键生图,AI写作,免费AI,AI API,OpenAI兼容API
```

### 6.2 首页各区块完整内容

#### Hero区域

| 元素 | 中文 | 英文 |
|------|------|------|
| Badge | `新一代 AI 平台` | `Next-Gen AI Platform` |
| 主标题行1 | `让 AI 为你` | `Let AI do it for you` |
| 打字循环1 | `创作视频` | `Create videos` |
| 打字循环2 | `生成图片` | `Generate images` |
| 打字循环3 | `制作长视频` | `Make long videos` |
| 打字循环4 | `一键漫剧` | `One-click comics` |
| 打字循环5 | `释放灵感` | `Release ideas` |
| 打字循环6 | `智能对话` | `Smart chat` |
| 副标题 | `聚合 500+ 全球顶尖大模型，智能对话 / 图像创作 / 视频生成 / AI 智能体，一个平台，释放无限可能` | `Bring together 500+ leading global AI models for chat, image creation, video generation, and AI agents. One platform, infinite possibilities.` |
| CTA主按钮 | `开始使用` | `Get Started` |
| CTA次按钮 | `商务合作` | `Business Inquiries` |

#### Stats区域

| 数据 | 中文标签 | 英文标签 |
|------|---------|---------|
| 500+ | `AI 模型` | `AI Models` |
| 10K+ | `创作者` | `Creators` |
| ∞ | `创造力` | `Creativity` |

#### 热门模型卡片（16个）

| 名称 | 副标题 | 图标 |
|------|--------|------|
| GPT-5.5 高推理 | OpenAI · 行业领先推理能力 | openai_bai.svg |
| GPT Image 2 | OpenAI · 官方原生图像生成 | openai_bai.svg |
| Omni Flash 10秒 | Google Gemini · 极速响应 | gemini.svg |
| Step 3.7 Flash | StepFun · 高效推理 | step.svg |
| Kimi K2.7 Code | 月之暗面 · 高速版 | kimi.svg |
| GLM-5.2 | 智谱AI · 多模态 | glm.svg |
| DeepSeek-v4-pro | DeepSeek · 深度推理 | deepseek.svg |
| Grok-4.3 | xAI · 旗舰推理 | grok_bai.svg |
| 千问 3.7 Max | 阿里云 · 旗舰模型 | qwen.svg |
| 豆包 Seed 2.1 | 字节跳动 · 多模态 | doubao.svg |
| Claude 4 | Anthropic · 安全AI | claude.svg |
| MiniMax-M3 | MiniMax · 高效推理 | minimax.svg |
| Vidu Q3 Drama | 生数科技 · 视频生成 | vidu-icon.svg |
| 快乐马1.1 | 阿里百炼 · 视频创作 | happyhorse.svg |
| Banana pro | Banana · 图像生成 | banana.svg |
| Mimo v2.5 | Mimo · 多模态 | mimo_bai.svg |

#### AI Agents（4个）

| 序号 | 标题 | 描述 | CTA |
|------|------|------|-----|
| 01 | 一键生成漫剧 | 输入文案或参考图，AI 自动拆分镜头、生成角色、配音、合成视频，全流程一键完成。 | 立即体验 |
| 02 | 智能长视频创作 | 多张参考图 + 文字描述，精准控制画面内容与时长，生成连贯的专业级长视频。 | 立即体验 |
| 03 | 风格一键切换 | 赛博朋克、水墨国风、3D 动画、写实电影……海量风格随心切换，创作不设限。 | 立即体验 |
| 04 | 画面配音自动匹配 | 智能语音合成 + 画面节奏匹配，解说版、剧情版自由选择，让内容更有灵魂。 | 立即体验 |

#### 平台核心能力（4个）

| 标题 | 描述 | FA图标 |
|------|------|--------|
| 智能对话 | GPT-4o / Claude / Gemini / DeepSeek，多模型自由切换，精准回答每一个问题。 | fas fa-message |
| 图像创作 | Midjourney / FLUX / 即梦 / DALL·E，输入文字即刻出图，写实、插画、3D 任选。 | fas fa-image |
| 视频生成 | Sora 2 / 可灵 / Luma / Veo / Runway，文字或图片一键生成电影级视频。 | fas fa-film |
| 语音合成 | 多语言、多音色智能配音，从旁白到对白，让你的内容拥有专业级声音。 | fas fa-volume-high |

---

## 7. API端点清单

### 7.1 API网关
- **基础地址**: `https://api.lingkeai.ai`
- **协议**: HTTPS (TLS 1.2/1.3)
- **认证**: HTTP Header `token`
- **格式**: JSON `{code, data}`

### 7.2 用户相关API

```
/user/bangdinghuohuanbanggithub
/user/bangdinghuohuanbanggoogle
/user/bangdinghuohuanbangweixin
/user/baocunshiyongyuyan
/user/biaojihuifuyidu
/user/chaxunmimazhuangtai
/user/chaxunmoxingxiaofeijilu
/user/chaxunshifouweidailishang
/user/chaxunwangzhanpeizhibyyuming
/user/chaxunxitonggonggao
/user/chaxunyijianfankui
/user/chaxunyonghuxinxi
/user/chaxunyumingqianyi
/user/chaxunzhuxiaozhuangtai
/user/chaxunzhuyeannuipeizhi
/user/chexiaozhuxiao
/user/huanbangshoujihao
/user/huanbangyouxiang
/user/huoquapiyuming
/user/huoquchongzhidangci
/user/huoqudangqianzaixiandikefu
/user/huoqujiaoliuqun
/user/huoquwangzhanyuming
/user/huoquwodezuopin
/user/huoquyaoqinglianjiehebeijing
/user/huoquyonghuyaoqingjiangli
/user/huoquzhifubaozhanghu
/user/huoquzhifujilu
/user/huoquzhuxiaoxinxi
/user/jianchafankuiweiduhuifu
/user/jianchayuming
/user/saomashangchuan/chaxun
/user/saomashangchuan/chuangjian
/user/shangchuanwenjian
/user/shangchuanyijianfankui
/user/shenqingzhuxiao
```

### 7.3 登录相关API

```
/denglu/tuxingyzm/get          (获取图形验证码, GET)
/denglu/shoujihao/huoquyanzhengma  (手机号获取验证码, POST)
/denglu/shoujihao/denglu       (手机号登录, POST)
/denglu/mail/huoquyanzhengma   (邮箱获取验证码, POST)
/denglu/mail/denglu            (邮箱登录, POST)
/denglu/weixin/huoququanurl    (微信获取授权URL, POST)
/denglu/weixin/denglu          (微信登录, POST)
/denglu/mima/denglu            (密码登录, POST)
/denglu/zhaohuizhanghao        (找回账号, POST)
/denglu/github/huoququanurl    (GitHub获取授权URL, POST)
/denglu/github/denglu          (GitHub登录, POST)
/denglu/google/huoququanurl    (Google获取授权URL, POST)
/denglu/google/denglu          (Google登录, POST)
/denglu/timestamp              (获取时间戳, POST)
/denglu/xiazai/huoquzuixinban  (获取最新下载版, POST)
```

### 7.4 支付相关API

```
/alipay/order/create
/alipay/order/query
```

### 7.5 模型相关API

```
/moxing/moxingliebiao      (模型列表)
/moxing/moxingxiangqing    (模型详情)
/moxing/tongyirukouchat    (统一聊天入口, SSE流式)
/moxing/jiageliebiao       (价格列表)
/moxing/leixingliebiao     (类型列表)
/moxing/renwufenzu/*       (任务分组管理)
/moxing/chat_juese/*       (聊天角色管理)
/moxing/tts_*              (TTS语音相关)
/moxing/suno/geci          (Suno歌词生成)
```

---

## 8. 图标与资源清单

### 8.1 轨道模型图标（50个模型共用16个图标文件）

| 文件名 | CDN地址 | 品牌 | 填充色 | 本地路径 | 使用次数 |
|--------|---------|------|--------|---------|---------|
| openai_bai.svg | `https://cos.lingkeai.vip/openai_bai.svg` | OpenAI | #10A37F | icons/openai_bai.svg | 10 |
| vidu-icon.svg | `https://cos.lingkeai.vip/vidu-icon.svg` | Vidu | #00D4AA | icons/vidu-icon.svg | 7 |
| happyhorse.svg | `https://cos.lingkeai.vip/happyhorse.svg` | 快乐马 | #FF6B6B | icons/happyhorse.svg | 7 |
| gemini.svg | `https://cos.lingkeai.vip/gemini.svg` | Google Gemini | 渐变色 | icons/gemini.svg | 4 |
| grok_bai.svg | `https://cos.lingkeai.vip/Grok_bai.svg` | xAI Grok | #FF5722 | icons/grok_bai.svg | 5 |
| doubao.svg | `https://cos.lingkeai.vip/doubao.svg` | 字节豆包 | 多色 | icons/doubao.svg | 4 |
| kimi.svg | `https://cos.lingkeai.vip/kimi.svg` | 月之暗面 | 多色 | icons/kimi.svg | 3 |
| qwen.svg | `https://cos.lingkeai.vip/qwen.svg` | 阿里云千问 | 多色 | icons/qwen.svg | 2 |
| deepseek.svg | `https://cos.lingkeai.vip/deepseek.svg` | DeepSeek | #4D6BFE | icons/deepseek.svg | 2 |
| claude.svg | `https://cos.lingkeai.vip/claude.svg` | Anthropic Claude | #D97757 | icons/claude.svg | 2 |
| banana.svg | `https://cos.lingkeai.vip/banana.svg` | Banana | 多色 | icons/banana.svg | 2 |
| minimax.svg | `https://cos.lingkeai.vip/minimax.svg` | MiniMax | 渐变 | icons/minimax.svg | 1 |
| glm.svg | `https://cos.lingkeai.vip/glm.svg` | 智谱AI | 多色 | icons/glm.svg | 1 |
| step.svg | `https://cos.lingkeai.vip/step.svg` | 阶跃星辰 | #4361EE | icons/step.svg | 1 |
| mimo_bai.svg | `https://cos.lingkeai.vip/mimo_bai.svg` | Mimo | #6C5CE7 | icons/mimo_bai.svg | 1 |
| suno.png | `https://cos.lingkeai.vip/uploads/2026.05/20/20260520230633_18b14e75304dacc0f4de.png` | Suno | - | icons/suno.png | 1 |

### 8.2 AI Agent图标（9个）

| 文件名 | CDN地址 | 用途 | 本地路径 |
|--------|---------|------|---------|
| agent_manju.svg | `https://aifc.lk666.ai/icons/ManJu.svg` | AI漫剧 | icons/agent_manju.svg |
| agent_manju_s2.svg | `https://aifc.lk666.ai/icons/manju_s2.0.svg` | AI漫剧S2.0 | icons/agent_manju_s2.svg |
| agent_jieshuo.svg | `https://aifc.lk666.ai/icons/jieshuo.svg` | AI漫剧解说 | icons/agent_jieshuo.svg |
| agent_dianshang.svg | `https://aifc.lk666.ai/icons/dianshang.svg` | 电商一键生图/视频 | icons/agent_dianshang.svg |
| agent_tongyong.svg | `https://aifc.lk666.ai/icons/tongyongyijianshengtu.svg?v=2` | 通用一键生图 | icons/agent_tongyong.svg |
| agent_wuxianhuabu.svg | `https://aifc.lk666.ai/icons/wuxianhuabu.svg` | 无限画布 | icons/agent_wuxianhuabu.svg |
| agent_zhinengduozhen.svg | `https://aifc.lk666.ai/icons/zhinengduozhen.svg` | 智能多帧 | icons/agent_zhinengduozhen.svg |
| agent_ppt.svg | `https://aifc.lk666.ai/icons/ppt.svg` | 一键PPT | icons/agent_ppt.svg |
| agent_longxia.svg | `https://aifc.lk666.ai/icons/longxia.svg` | OpenClaw龙虾 | icons/agent_longxia.svg |

### 8.3 系统图标（2个）

| 文件名 | CDN地址 | 用途 | 本地路径 |
|--------|---------|------|---------|
| expired.svg | `https://aifc.lk666.ai/icons/expired.svg` | 模型过期占位 | icons/expired.svg |
| weigui.svg | `https://aifc.lk666.ai/icons/weigui.svg` | 模型违规占位 | icons/weigui.svg |

### 8.4 Font Awesome图标类名（首页使用）

```
fas fa-headset     (客服)
fas fa-code        (开发者)
fas fa-arrow-right (按钮箭头)
fas fa-globe       (语言切换)
fas fa-moon        (暗色主题)
fas fa-sun         (亮色主题)
fas fa-clapperboard       (AI Agent 01)
fas fa-wand-magic-sparkles (AI Agent 02)
fas fa-palette     (AI Agent 03)
fas fa-microphone-lines   (AI Agent 04)
fas fa-message     (平台-智能对话)
fas fa-image       (平台-图像创作)
fas fa-film        (平台-视频生成)
fas fa-volume-high (平台-语音合成)
fas fa-envelope    (商务合作)
fas fa-chevron-down(加载更多)
fas fa-user-plus   (登录弹窗)
fas fa-times       (关闭按钮)
fab fa-weixin      (微信登录)
fab fa-github      (GitHub登录)
fab fa-google      (Google登录)
fab fa-qq          (QQ登录)
fas fa-heart       (灵感卡片点赞)
fas fa-eye         (灵感卡片浏览)
fas fa-image       (灵感卡片占位)
```

### 8.5 DevUI Icomoon图标

- SVG源文件: `https://cdn.lingkeai.vip/assets/images/devui-icomoon-NjuehwAK.svg?1715860387#devui-icomoon`
- WOFF字体: `https://cdn.lingkeai.vip/assets/devui-icomoon-BHLqMzSu.woff?1715860387`
- TTF字体: `https://cdn.lingkeai.vip/assets/devui-icomoon-C-SlqI79.ttf?1715860387`
- EOT字体: `https://cdn.lingkeai.vip/assets/devui-icomoon-BeYkSg23.eot?1715860387`

---

## 9. CDN资源下载清单

### 9.1 已下载到本地assets目录

| 文件 | 来源URL | 大小 | 本地路径 |
|------|---------|------|---------|
| index.js | `cdn.lingkeai.vip/assets/index-Djg-JIoA.js` | 106KB | assets-downloaded/index.js |
| rolldown-runtime.js | `cdn.lingkeai.vip/assets/rolldown-runtime-QTnfLwEv.js` | 694B | assets-downloaded/rolldown-runtime.js |
| vendor-vue.js | `cdn.lingkeai.vip/assets/vendor-vue-CalkO0Y-.js` | 123KB | assets-downloaded/vendor-vue.js |
| vendor-element-plus.js | `cdn.lingkeai.vip/assets/vendor-element-plus-BnQLyPmw.js` | 1.1MB | assets-downloaded/vendor-element-plus.js |
| router.js | `cdn.lingkeai.vip/assets/router-KJrAsL26.js` | 1.4MB | assets-downloaded/router.js |
| tishikuang.js | `cdn.lingkeai.vip/assets/TiShiKuang-DPIRK1pg.js` | 4.7KB | assets-downloaded/tishikuang.js |
| jiami.js | `cdn.lingkeai.vip/assets/JiaMi-DZTr-XuH.js` | 5.1KB | assets-downloaded/jiami.js |
| index.css | `cdn.lingkeai.vip/assets/index-B3iffeQM.css` | 48KB | assets-downloaded/index.css |
| router.css | `cdn.lingkeai.vip/assets/router-j0tbp4rR.css` | 58KB | assets-downloaded/router.css |
| vendor-element-plus.css | `cdn.lingkeai.vip/assets/vendor-element-plus-C_EL3rG-.css` | 354KB | assets-downloaded/vendor-element-plus.css |
| tishikuang.css | `cdn.lingkeai.vip/assets/TiShiKuang-B3SOKIPe.css` | 6.3KB | assets-downloaded/tishikuang.css |
| font-awesome.css | `cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css` | 102KB | assets-downloaded/font-awesome.css |
| devui-icomoon.svg | `cdn.lingkeai.vip/assets/images/devui-icomoon-NjuehwAK.svg` | 1.8MB | assets-downloaded/devui-icomoon.svg |
| devui-icomoon.woff | `cdn.lingkeai.vip/assets/devui-icomoon-BHLqMzSu.woff` | 100KB | assets-downloaded/devui-icomoon.woff |
| devui-icomoon.ttf | `cdn.lingkeai.vip/assets/devui-icomoon-C-SlqI79.ttf` | 187KB | assets-downloaded/devui-icomoon.ttf |

### 9.2 图标文件（已下载到icons目录）

共 **32个文件**（27 SVG + 1 PNG + 4系统占位）：
```
agent_dianshang.svg, agent_jieshuo.svg, agent_longxia.svg, agent_manju.svg,
agent_manju_s2.svg, agent_ppt.svg, agent_tongyong.svg, agent_wuxianhuabu.svg,
agent_zhinengduozhen.svg, banana.svg, claude.svg, deepseek.svg, doubao.svg,
expired.svg, gemini.svg, glm.svg, grok.svg, grok_bai.svg, happyhorse.svg,
kimi.svg, mimo.svg, mimo_bai.svg, minimax.svg, openai.svg, openai_bai.svg,
qwen.svg, step.svg, suno.png, vidu-icon.svg, vidu.svg, weigui.svg
```

---

## 10. 交互行为规范

### 10.1 全局交互

| 交互 | 触发 | 行为 |
|------|------|------|
| 语言切换 | 点击EN/中 | 路由在 `/zh-CN` 和 `/en-US` 间切换，localStorage持久化 |
| 主题切换 | 点击月亮/太阳图标 | `data-theme` 属性切换 dark/light，localStorage持久化 |
| 导航栏滚动 | 页面滚动 > 50px | 导航栏添加 `scrolled` 类，背景模糊+底部边框 |
| ESC键 | 键盘按下 | 关闭所有弹窗 |

### 10.2 首页交互

| 元素 | 点击行为 |
|------|---------|
| 轨道图标 | hover显示spotlight提示卡片（模型名称+描述） |
| 开始使用按钮 | 打开登录弹窗 |
| 商务合作按钮 | 打开渠道商弹窗 |
| 客服按钮 | 打开客服弹窗 |
| Agent卡片 | 打开登录弹窗 |
| Platform卡片 | 打开登录弹窗 |
| 灵感卡片 | 打开登录弹窗 |
| 加载更多按钮 | 打开登录弹窗 |
| CTA注册按钮 | 打开登录弹窗 |
| CTA联系客服 | 打开客服弹窗 |
| FAB浮动按钮 | 打开客服弹窗 |
| Footer联系客服 | 打开客服弹窗 |
| Footer举报反馈 | 打开客服弹窗 |
| Footer隐私政策 | Toast提示"即将上线" |
| Footer用户协议 | Toast提示"即将上线" |

### 10.3 弹窗系统

| 弹窗 | 内容 |
|------|------|
| 登录弹窗 | 标题"登录/注册"，6种登录方式（微信/GitHub/Google/QQ/手机/邮箱/密码），用户协议勾选 |
| 客服弹窗 | 标题"联系客服"，微信客服按钮+邮箱复制 |
| 渠道商弹窗 | 标题"商务合作"，合作邮箱+微信 |
| Toast通知 | 顶部居中，2.5秒自动消失 |

### 10.4 动画系统

| 动画 | 详情 |
|------|------|
| 轨道入场 | scale(0) rotate(-360deg) → scale(1.25) rotate(0)，2.5s cubic-bezier(.16,1,.3,1) |
| 轨道旋转 | 80s linear infinite，整个圆环旋转 |
| 反向旋转 | 80s linear infinite，子元素反向保持图标正向 |
| 打字机 | 6组文字循环，80ms/字符，删除速度2000ms间隔 |
| 计数器 | IntersectionObserver触发，1.5s缓动动画 |
| 粒子漂移 | 20s ease-in-out infinite，随机位移+缩放 |
| 网格脉冲 | 10s ease-in-out infinite，opacity 0.5→1 |
| 光球浮动 | 25s ease-in-out infinite，3个光球不同相位 |
| 线条流动 | 12s linear infinite，虚线offset动画 |
| FAB脉冲 | 2.5s ease-in-out infinite，box-shadow扩展 |
| 卡片hover | translateY(-4px) + 边框高亮 + 阴影增强，0.3s |

---

## 11. 多语言内容对照

### 11.1 完整i18n对照表

| Key | 中文 (zh) | 英文 (en) |
|-----|----------|----------|
| logo | 陳宏强AI | Richard Chen AI |
| ns | 客服 | Support |
| nd | 开发者 | Developers |
| nstart | 开始使用 | Get Started |
| hb | 新一代 AI 平台 | Next-Gen AI Platform |
| ht1 | 让 AI 为你 | Let AI Do It for You |
| hsub | 聚合 500+ 全球顶尖大模型... | Aggregating 500+ global top large models... |
| bs | 开始使用 | Get Started |
| bb | 商务合作 | Business Cooperation |
| sm | AI 模型 | AI Models |
| sc | 创作者 | Creators |
| sx | 创造力 | Creativity |
| mt | 热门模型 | Popular Models |
| at | 不只是工具，是你的创作搭档 | Not Just a Tool — Your Creative Partner |
| ad | 从文案到视频、从灵感到成品... | From copywriting to video... |
| a1t | 一键生成漫剧 | One-Click Comic Generation |
| a1d | 输入文案或参考图... | Input text or reference images... |
| a2t | 智能长视频创作 | Smart Long Video Creation |
| a2d | 多张参考图 + 文字描述... | Multiple reference images + text... |
| a3t | 风格一键切换 | One-Click Style Switching |
| a3d | 赛博朋克、水墨国风... | Cyberpunk, ink painting... |
| a4t | 画面配音自动匹配 | Auto Voiceover Matching |
| a4d | 智能语音合成 + 画面节奏匹配... | Smart speech synthesis + rhythm... |
| atry | 立即体验 | Try Now |
| pt | 四大核心能力，一个平台 | Four Core Capabilities, One Platform |
| p1t | 智能对话 | Smart Dialogue |
| p1d | GPT-4o / Claude / Gemini... | GPT-4o / Claude / Gemini... |
| p2t | 图像创作 | Image Creation |
| p2d | Midjourney / FLUX / 即梦... | Midjourney / FLUX / Jimeng... |
| p3t | 视频生成 | Video Generation |
| p3d | Sora 2 / 可灵 / Luma... | Sora 2 / Kling / Luma... |
| p4t | 语音合成 | Voice Synthesis |
| p4d | 多语言、多音色智能配音... | Multi-language, multi-voice... |
| igt | 灵感广场 | Inspiration Hub |
| igd | 看看大家都在用 AI 创作什么 | See what everyone is creating |
| igm | 加载更多灵感 | Load More |
| ct1 | 现在就开始 | Start Now |
| ct2 | 你的 AI 创作之旅 | Your AI Creative Journey |
| cd | 30+ 顶尖模型 / AI 智能体... | 30+ top models / AI agents... |
| cr | 立即注册 | Register Now |
| cc | 联系客服 | Contact Support |
| fd | 陳宏强AI - 企业级 AI 接口服务平台 | Richard Chen AI — Enterprise-grade... |
| fl1 | 联系客服 | Contact Support |
| fl2 | 举报与反馈 | Report & Feedback |
| fl3 | 隐私政策 | Privacy Policy |
| fl4 | 用户协议 | Terms of Service |
| ml_title | 登录 / 注册 | Login / Register |
| ml_desc | 登录后即可使用 500+ AI 大模型... | Sign in to access 500+ AI models... |
| ml_wx | 微信登录 | WeChat Login |
| ml_gh | GitHub | GitHub |
| ml_gg | Google | Google |
| ml_email | 邮箱登录 | Email Login |
| mk_title | 联系客服 | Contact Support |
| mk_desc | 如有任何问题... | Have questions? Reach our support... |
| mk_wx | 添加微信客服 | Add WeChat Support |
| mc_title | 商务合作 | Business Cooperation |
| mc_desc | 成为渠道合作伙伴... | Become a channel partner... |

---

## 12. 安全与存储

### 12.1 localStorage键值

```
app-theme                  -> dark / light
app-sidebar-collapsed      -> 1 / 0
chunk-reload-once          -> 路由chunk重载标记
siteBrandByHost            -> 按域名品牌配置(JSON)
siteName                   -> 网站名称覆盖
siteIcon                   -> 网站图标覆盖
token                      -> 用户登录token(加密存储)
devuiThemeId               -> DevUI主题ID(遗留)
devuiCurrentTheme          -> DevUI当前主题(遗留)
hasVisited                 -> 是否已访问标记
justLoggedIn               -> 刚登录标记
lang                       -> zh / en (自定义添加)
```

### 12.2 自定义加密SDK

- 全局对象: `window.cryptoSDK`
- 声明版本: `3.1.0`
- 声明算法: AES-256-CBC / PBKDF2-HMAC-SHA256 / 迭代100000次
- 实际实现: 自定义XOR + 字节反转 + 字符位移流加密
- Token格式: `base64(iv).cipher.hmac`

### 12.3 合规校验

- 图片/视频加载后异步检查: `POST /user/chaxunshenhezhuangtai`
- 违规替换: `/icons/weigui.svg`
- 过期替换: `/icons/expired.svg`

### 12.4 已知风险

1. 自定义cryptoSDK实际实现与声明不符
2. Token存储于localStorage（XSS风险）
3. 无CSP策略
4. 无Service Worker / 无离线能力
5. CDN Fallback机制存在潜在劫持风险

---

## 13. 部署指南

### 13.1 GitHub Pages部署

```bash
# 1. 进入项目目录
cd chq-ai-site

# 2. 初始化Git
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "©2026 Richard Chen - CHQ AI site initial release"

# 5. 关联远程仓库
git remote add origin https://github.com/chenhongqiang2025/chqai.git

# 6. 推送
git branch -M main
git push -u origin main

# 7. GitHub Pages设置:
#    Settings -> Pages -> Source: Deploy from a branch
#    Branch: main -> /(root) -> Save
```

访问地址: `https://chenhongqiang2025.github.io/chqai`

### 13.2 更新代码

```bash
git add .
git commit -m "更新说明"
git push
```

### 13.3 本地开发

直接双击 `index.html` 或用任意本地服务器：

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# VS Code Live Server插件
```

---

*文档结束 - 陳宏强AI ©2026 Richard Chen - All Rights Reserved*
