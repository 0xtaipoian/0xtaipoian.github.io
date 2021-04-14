---
tags:
- defi
- fei
- ethereum
title: FEI = Fail ?
excerpt: 因當初見佢個誘因機制幾有趣，用PCV（Protocol Controlled Valie)控制，就當時價格調整誘因，當價格低於一鎂時就提高買入獎勵，加大賣出懲罰，純用誘因嚟控制價格。
coverImage: "/assets/blog/fei/cover.png"
date: 2021-04-15T16:00:00Z
author:
  name: Pager
  picture: "/assets/blog/authors/pager.png"
ogImage:
  url: "/assets/blog/fei/cover.png"

---
# FEI = Fail ?

因當初見佢個誘因機制幾有趣，用PCV（Protocol Controlled Valie)控制，就當時價格調整誘因，當價格低於一鎂時就提高買入獎勵，加大賣出懲罰，純用誘因嚟控制價格。

![/assets/blog/fei/direct-incentives.png](/assets/blog/fei/direct-incentives.png)

而且有一推大名機構作早其投資者，令項目創始活動所籌得金價超出團隊預期目標一大截，超過 $1B 嘅 $FEI 應運而生，所以小 ape 我都 aped，加入咗 Genesis Group，得到空投 $FEI 隱定幣同 $TRIBE 治理幣 🤩。

## 咩玩法？

點解佢哋可以單用買賣交易嚟控制價格？首先成個誘因機制都係發生係佢哋自己嘅 interface，即是你去 Uniswap 買賣係唔會收到獎勵或mint/burn到，你只係喺二手市場買賣現貨，唔會幫到件事。換句話講，你要幫佢手 peg 就要去佢哋個 interface 到 trade。咁冇人喺佢哋度買賣點算呀？唔怕！佢哋一早諗好咗，就係 [Reweight](https://docs.fei.money/protocol/protocol-controlled-value/ethuniswappcvcontroller#reweight)，每當脫價到一個位，Fei 嘅 Governor 同 Guardian contract 都可以出手做 reweight，從 PCV contract 放喺 Uniswap 上嘅 LP 抽走 99% 嘅存款，再重新調整幣對比例，將多咗嘅 $FEI 燒走，減少流通性後令價位可以迫近一鎂。

## Peg 唔極都 Peg 唔到！

成件事係好多支節，但小 ape 覺得團隊本身都負好大責任，先講下發生咗嘅幾件大事：

- 4月1日：開始為期三日嘅 Genesis Group，可以比參加者入 ETH 等正式 launch 可以得到 $FEI 同 $TRIBE，仲可以 pre-swap 將預期所得嘅 $FEI 換做 $TRIBE，令賣壓係未 launch 就出現，因為 $FEI 係穩定幣，唔會有咩增長，但 $TRIBE 可以有冇限漲幅。
- 4月6日：公報由佢哋一個從蟲 program 發現咗一個誘因機制計算漏洞，所以停咗個 minting rewards。
- 4月7日：由於計算賣出懲罰折扣係由 $FEI 脫離一鎂差價再開方所得，當時己經脫離超過10%，換算懲罰折扣相等於 -$0.25 即是賣出 $1 要倒貼多 $0.25 😨，而且 Uniswap 上嘅交易對停止交易，令好多人想走都走唔到。
- 4月8日：徇眾要求下團隊關閉所有誘因獎勵，賣壓上升。
- 4月10日：提議動用儲備救價

![/assets/blog/fei/turned-off-incentive.png](/assets/blog/fei/turned-off-incentive.png)

到目前為止(2021-4-9)已經 reweight 咗十次，而單喺 8 號就 reweight 咗 8 次，但都冇法拉近價位。

不少大神唱淡 FEI，@bantg 出多個 Tweets 分析同批評， @RektHQ 都出文講解佢哋衰咩。

接二連三號事件令市場出現好多負面情緒，團隊未能安撫大眾，加上因為投資者期望太大，抱著投機心態者居多，當為一一個 KPI 就係 peg $1 都做唔到，大家立即走人。

Defi project 投資者多數都好 loyal，但 FEI 個 Discord 真係好熱鬧，小 ape 未試過入過一個 Discord group 係咁多人齊心屌個團隊，一齊叫「收皮啦」同「回水」。

## 結論

小 ape 買得少，所以冇咩情緒捆绑，抱著真心想件事成功，因為市面上有好多穩定幣，但唔係好多都係「真」去中心化，比如 MakerDao 自接受 ETH 以外抵押品如：$USDT $PAX 等中心化穩定幣變相令 $DAI 有中心化成份，雖唔係有非常大去中化潔癖，都明白 MakerDao 今時今日個規模如果只接受 ETH 一早 GG 鳥。aped 過唔少算法穩定幣，都知唔係咁易，好多都失敗收場，所以 FEI 嘅 PCV 都令我有過期望，事態發展有兩個可能性：

1. 堅持，瘋狂 reweight，呢個方法會消耗大量 PCV 內資金去減少流通性，以目前睇嚟團隊似賞試緊呢條路。
2. 放棄，收回 PCV 內 ETH 按比例退回到投資者手上。

無論結果係點 FEI 作為一個 Defi 實驗，小 ape 成為其中一隻白老鼠都總算係參與過。