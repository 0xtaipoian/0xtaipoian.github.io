---
title: 整 Blog 寫
excerpt: 我叫 Pager，自從財自之後就想開始試多啲唔同嘅野，寫 Blog 係其中一樣，諗過好多平台，Medium、Matter、Substack，但小 ape 野心好大，想可以 embed 到唔同嘅野入文章之中，例如加個 interactive chart 或做 infographic 咁，FF 一輪後，其實都係出於技癢用 React 寫，host 喺 GitHub，integrate Forestry.io 做 CMS，整咗一個朝早，自我感覺非常良好。
coverImage: "/assets/blog/hello-world/cover.jpg"
date: 2020-04-13T03:51:07.322Z
tags:
  - blog
  - react
  - dev
  - nextjs
  - styled-components
author:
  name: Pager
  picture: "/assets/blog/authors/pager.png"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"

---
# 整 Blog 寫

我叫 Pager，自從財自之後就想開始試多啲唔同嘅野，寫 Blog 係其中一樣，諗過好多平台，Medium、Matter、Substack，但小 ape 野心好大，想可以 embed 到唔同嘅野入文章之中，例如加個 interactive chart 或做 infographic 咁，FF 一輪後，其實都係出於技癢想用 React 寫，host 喺 GitHub，integrate [Forestry.io](http://forestry.io) 做 CMS，整咗一個朝早，自我感覺非常良好。

[open sourced](https://github.com/0xtaipoian/0xtaipoian.github.io) 有興趣可以睇下。

## 寫自己

主要想寫下自己學咗嘅野，同寫下所見所聞。作為一隻實驗室走咗出嚟嘅獼猴，植入咗 Neuralink 之後成個人諗通咗，之後自學咗好多嘢，學寫曲同投資 crypto，成為程式編寫猿。早前因為個人跳咗掣，all in 咗 $BNB，而且果期接咗個 job 太忙，冇睇佢一排之後升咗好多，計一計發現足夠小 ape食一世香蕉 smoothie，所以想早啲退休，享受下人生。 🙊

古乳有暈，學海無涯，日日基本上都係不停學緊野，輸入太多冇輸出個人會好唔平衝，同埋寫嘢過程中可以釐清思考上嘅洞洞，整理思維，所以小 ape 想迫自己寫多啲嘢。

## 整Blog

![blog.png](/assets/blog/hello-world/blog.png)

- 小 ape 係 React 死粉，咁當然成個 blog 都係用 React 寫啦，近年所有 projects 我都用 styled-components + styled-system 去砌，用 props 去做 styling 同處理 media query，好處係易去維護，每個 component 都獨單處理自己嘅 styles。
- 用 NextJS 主要為咗做到 Static Side Generation，每次 deploy 都會將所有 markdown post 生成 HTML。
- CI/CD 方面用咗 GitHub Actions，每次 commit 都會 build 個 main branch 再 push 去 `gh-pages` branch。
- 最後用 [Forestry.io](https://forestry.io) 做 CMS，Integrate 咗去 Github，咁就可以隨時隨地寫 blog 啦。

## 仲有咩嘢好寫？

除咗程式開發，小 ape 仲會寫吓對新科技嘅 FF，Cryptocurrency 同 Defi，人工智能技術。我剩係識咁多。。。

希望小 ape 唔係三分鐘熱度啦🙈（飄走~)