---
tags:
- defi
- flashbots
- crypto
- ethereum
- miner
title: Flashbots
excerpt: 最近 gas fee 係低咗少少，可能因為係多咗項目去咗其他 chains 玩，仲有其中一個原因係 Flashbots ，佢哋係由年頭開始活躍，一個針對
  Miner Extractable Value（MEV）嘅研究組織，即是關心下礦工們挖礦時嘅可得利潤。雖 Flashbots MEV-geth 只針對大額交易費嘅套利行為，但令大家意識到交易機器人對以太坊生態嘅影響，再加上佢哋提倡資訊透明，將所得數據放到
  MEV explorer 及每月發文報告進度及研究成果。
coverImage: "/assets/blog/flashbots/cover.jpg"
date: 2021-04-13T16:00:00Z
author:
  name: Pager
  picture: "/assets/blog/authors/pager.png"
ogImage:
  url: "/assets/blog/flashbots/cover.jpg"

---
最近 gas fee 係低咗少少，可能因為係多咗項目去咗其他 chains 玩，仲有其中一個原因係 [Flashbot](https://github.com/flashbots/pm#mev-roast-recordings) [](https://medium.com/flashbots/flashbots-transparency-report-march-2021-d3930b4b98a9)，佢哋係由年頭開始活躍，一個針對 Miner Extractable Value（MEV）嘅研究組織，即是關心下礦工們挖礦時嘅可得利潤。雖 Flashbots MEV-geth 只針對大額交易費嘅套利行為，但令大家意識到交易機器人對以太坊生態嘅影響，再加上佢哋提倡資訊透明，將所得數據放到 [MEV explorer](https://explore.flashbots.net/) 及每月發文報告進度及研究成果。

![Flashbots](/assets/blog/flashbots/flashbots_chart.png)

喺三月報告中見到有 12 個礦池，超過約 58% 算力係透過礦工使用 Flastbots 而貢獻，Flastbots MEV-geth 係一個由 Flastbots forked 出嚟嘅[改良版 go-ethereum](https://github.com/flashbots/mev-geth) ，優化咗最大化利潤模型，加入 Searcher Bot 概念搵出最優化區塊交易組合，而且要令整個挖礦過程都合遵守：冇需許可Permissionless、透明 Transparency、公平生態 Fair Ecosystem 等原則。佢哋成功除咗背後有實質理念，同時又照顧到礦工嘅利益，並唔一班左膠只為追求理想而打爛人地飯碗。

## 咩係 MEV ？

Miner Extractable Value（MEV），可以譯做：「礦工可得利潤」。

平時礦工要做嘅就係鬥快計數同將一個又一個交易砌入一個區塊度，之後推上鏈，而砌區塊係一門技術，為咗最大代每次嘅利潤，礦工會喺 mempool 搵出較高 gas fee 嘅交易，換言之礦工有權去控制交易串順序。有特權就有油水，有礦場仲會特意安裝三文治機械人軟件去夾人哋嘅交易套利，個軟件係由 一個叫 Ethermine 嘅礦場為針對 [EIP1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) 方案對礦工帶嚟嘅利潤減少而開發；除咗操控交易串順序，插隊，仲可能有礦場會收受利益去 censor 某啲交易，呢啲都係其中一啲油水位，中間可以存在好多道德問題。

## 咩係三文治攻擊（Sandwich Attacks）？

![Sandwich Attacke](/assets/blog/flashbots/sandwich_attacks.png)

[image source](https://medium.com/coinmonks/demystify-the-dark-forest-on-ethereum-sandwich-attacks-5a3aec9fa33e)

每當喺 DEX 做幣對交易時，交易者都需要指定一個滑價比率（slippage)，因為交易過程中可能會有其他交易同時進行令幣價比原定交易價出現偏差，指定好可接受滑價比率可令交易者控制偏差喺一個範圍內。三文治攻擊就係針對呢個機制，喺每次發現有人交易一啲流動性不足或接受滑價比率交大嘅交易時就同時發出兩個惡意交易：

1. 先用一個比受害交易嘅 gas 略為高嘅交易，預先買入目標交易幣，因為 gas 較高，所以會被優先執行，呢個交易叫做「三文治上層」。
2. 因為交易幣對喺交易所上出現單邊減少，會令幣價出現調整，只要價格喺滑價比率內，受害交易就會喺呢個時候執行。
3. 最後尾隨一個 gas 略為低嘅惡意交易，將第一個交易買得嘅幣賣回到交易池中，呢個時候因為受害交易已經執行，價格回調到第一個惡意交易時水平，惡意交易從「上層」到「下層」中賺得價差。

最有趣係，你夾人，人哋可以夾返你，有人會整啲 Trap 專夾啲三文治攻擊，變成多層三交治，當越多呢啲攻勢出現就越更會拉高 gas 費用。

## 挖礦民主化

Flashbots 提倡更民主化及以更公開透明方式嚟挖礦，因為當大家只為求利益，好易會令算力過度集中喺某些礦場，咁會令整個 Ethereum 生態出現問題，危害所有人嘅利益，佢哋除咗令大家意識到挖礦呢個權力階級之中嘅問題，同時可以反思整個 Ethereum 或去中心化世界又係咪咁公平同透明。
