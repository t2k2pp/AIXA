# 生成AIで作成したゲーム

### 以下は2025年5月に作成したものです。

#### ゲームをつくってもらおう！
[📑ゲームをつくってもらおう！プロンプトの流れ](https://github.com/t2k2pp/AIXA/blob/main/games/%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%A6%E3%82%82%E3%82%89%E3%81%8A%E3%81%86%EF%BC%81.md)

- [📝シンプルアクションゲーム](https://github.com/t2k2pp/AIXA/blob/main/games/copilot_sample.html) , [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/copilot_sample.html)...2025/05/10 Copilot




#### その他の作成ゲーム
|コード参照|ゲームプレイ|設計書参照|作成情報|
|---|---|---|---|
| [📝アニマルファイターズ](https://github.com/t2k2pp/AIXA/blob/main/games/animal-fighters-healthbar-fixed.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/animal-fighters-healthbar-fixed.html) | [📖設計書](https://github.com/t2k2pp/AIXA/blob/main/games/animal-fighters-design-document.md)|2025/05/10 Claude3.7|
| [📝反射神経テスト](https://github.com/t2k2pp/AIXA/blob/main/games/chatgpt_ReactionTimerGame.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/chatgpt_ReactionTimerGame.html) | [📖設計書](https://github.com/t2k2pp/AIXA/blob/main/games/chatgpt_ReactionTimerGame_Doc.md)|2025/05/10 ChatGPT|
| [📝動物絵文字ぷよぷよゲーム Claude](https://github.com/t2k2pp/AIXA/blob/main/games/animal-puyo-game.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/animal-puyo-game.html)|-|2025/05/10 Claude3.7|
| [📝動物絵文字ぷよぷよゲーム Gemini](https://github.com/t2k2pp/AIXA/blob/main/games/chrome_puyo.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/chrome_puyo.html)|-|2025/05/10 Gemini 2.5 Pro|
| [📝Ninja Runner - アクションゲーム](https://github.com/t2k2pp/AIXA/blob/main/games/ninja-runner-game.html)| [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/ninja-runner-game.html)|-|2025/05/10 Claude3.7|
| [📝ポップなテトリスクローン](https://github.com/t2k2pp/AIXA/blob/main/games/pop-tetris.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/pop-tetris.html)|-|2025/05/10 Claude|
| [📝電車ゲーム](https://github.com/t2k2pp/AIXA/blob/main/games/train-game.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/train-game.html)|-|2025/05/10 Claude3.7|
| [📝スネークゲーム](https://github.com/t2k2pp/AIXA/blob/main/games/perplexity_snake.html) | [🎮ゲームプレイ](https://t2k2pp.github.io/AIXA/games/perplexity_snake.html)|-|2025/05/10 Perplexity|


---
### 以下は2025年1月に作成したものです。

ブラウザであれば、下記動作します。AndroidのGitHubアプリ上では動作しませんでした。

**[成功パターン]**
 1. [StarShooter](https://t2k2pp.github.io/AIXA/games/star-catcher-game.html)
 2. [AngleShooter](https://t2k2pp.github.io/AIXA/games/angle-shooter-game.html)
 3. [周期表学習ゲーム](https://t2k2pp.github.io/AIXA/games/periodic-table-game-minimal.html)
 4. [英文並び替えゲーム](https://t2k2pp.github.io/AIXA/games/sentence-game.html)
 5. [四字熟語学習ゲーム](https://t2k2pp.github.io/AIXA/games/yojijukugo-game.html)
 6. [わり算の余りゲーム](https://t2k2pp.github.io/AIXA/games/division-remainder-game-with-easy.html)
 7. [算数ゲーム](https://t2k2pp.github.io/AIXA/games/math-game.html)
 8. [ドット絵エディタ](https://t2k2pp.github.io/AIXA/games/dot-paint.html)
 9. [神経衰弱](https://t2k2pp.github.io/AIXA/games/memory-game.html)

**[失敗パターン]**
 1. [アングリーバードもどき](https://t2k2pp.github.io/AIXA/games/angry-birds-clone.html)
 2. [ハットリスもどき](https://t2k2pp.github.io/AIXA/games/hat-puzzle-complete.html)



## 解説
### プロンプト
半分ぐらいはプロンプトは下記を使いまわして作成しています。あとはなんとなく話しかけて作れてしまいました。
```Prompt
HTML+CSS+JavaScriptを1ファイルで作成する[ゲームの種類]ゲームを作りましょう。
条件
・ｘｘｘｘ
・ｙｙｙｙ
・ｚｚｚｚ
```

## 使用環境
[Claude.ai](https://claude.ai)
* Claude 3.5 Sonnet (2025年1月)

今回のゲームぐらいであれば、無償の範囲で作れることが多いです。

## プロンプト詳細
### 1. [StarShooter](https://t2k2pp.github.io/AIXA/games/star-catcher-game.html)
以下のプロンプトをベースに生成AIが返してきた内容と動作を見ながらやり取りして完成させました。
```Prompt
HTML+CSS+JavaScriptを1ファイルで作成するアクションゲームを作りましょう。
条件
・画面のタッチだけ（触る位置は影響しない）でできるゲームをお願いします。
・一分間のスコアを競うゲームです。
・ゲーム開始とゲームオーバーはユーザーが視認しやすくしてください。
・ハイスコアは表示しますが、ローカル保存は不要です。（リロードで消えて良いです。）
```
### 2. [AngleShooter](https://t2k2pp.github.io/AIXA/games/angle-shooter-game.html)
以下のプロンプトをベースに生成AIが返してきた内容と動作を見ながらやり取りして完成させました。
```Prompt
以下のゲームを参考に新しいゲームを作成します
条件
・画面左下に砲台を作ります。ミサイルはそこからタッチした箇所を通る形（砲台とタッチ箇所を繋ぐ線）で、発射されます。
・空からの星も多少角度を持たせて降ってきます（角度はランダムなため、真っ直ぐなものもありえます）
・星は斜めなので、画面下部に到達する前に画面の右もしくは左からでていってしまった場合は、衝突しなかったものとして、ゲームオーバーにはなりません。

コード
[StarShooterのソースコード]
```



### 3. [周期表学習ゲーム](https://t2k2pp.github.io/AIXA/games/periodic-table-game-minimal.html)
**工事中**

### 4. [英文並び替えゲーム](https://t2k2pp.github.io/AIXA/games/sentence-game.html)
以下のプロンプトをベースに生成AIが返してきた内容と動作を見ながらやり取りして完成させました。
```
HTML+CSS+JavaScriptを1ファイルで作成する学習ゲームを作りましょう。
条件
・小学生、中学生が習う英文並び替えゲームです。
・日本語の文章、及び英語の単語が表示され、正しい順で並び替えると正解です。
・問題は重複しない形で出題され、一巡するとまた出題さる形になります。
・一分間の回答数を競うゲームです。
・間違えたら即ゲームアウトで、正解が何だったか問題と合わせて表示されます。
・ハイスコアは表示しますが、ローカル保存は不要です。（リロードで消えて良いです。）
```

### 5. [四字熟語学習ゲーム](https://t2k2pp.github.io/AIXA/games/yojijukugo-game.html)
以下のプロンプトをベースに生成AIが返してきた内容と動作を見ながらやり取りして完成させました。
```
HTML+CSS+JavaScriptを1ファイルで作成する4字熟語学習ゲームを作りましょう。
条件
・小中学生ぐらいで学習する「4字熟語」を穴埋めで回答するゲームです。
・出題する4字熟語、および、端的な説明文章は、「https://the-formula.jp/tyuju-yojijukugo/」のサイトを参考に300から400問作成してください。あなたの知識で補完していただいて構いません。
・ゲーム中は端的な説明文章と穴抜けした熟語が表示され、プレイヤーは穴抜けした部分の漢字を当てます。
・簡単モード：1文字ぬけ、複雑モード：2文字抜けのゲームモードがあります。
・時間は問わず、不正解になるまでのスコアを競うゲームです。
・問題はランダムで出題されます。
・穴埋めする部分もランダムです。
```


### 6. [わり算の余りゲーム](https://t2k2pp.github.io/AIXA/games/division-remainder-game-with-easy.html)
以下のプロンプトをベースに生成AIが返してきた内容と動作を見ながらやり取りして完成させました。
この日は文章を整えず、会話的な文章で作成してみました。
```
算数ゲームをHTMLと、JavaScript、CSSで作成してください。1ファイルとしてくださいね。
ゲームの内容としてはランダムで割り算の問題を出し、余りを答えるゲームです。
小学生を対象とした問題をランダムに出し、スコアを競えるゲームにしてください。
```

#### 対話1回目
気が付いたことを思った順に書いただけです。
とりあえず、それっぽく動くのが1回目でできて驚き。
```
残り時間がすぎても回答ができてしまいます。
こたえあわせだと、すぐ採点されるように感じるので、つぎのもんだい、としましょう。
中断機能もつけてください。
ゲーム中、ゲームしてない時で利用できないuiは出さないようにしてください
```

#### 2回目
あー、注文つけたら動かなくなったとおもい。
```
はじめるを押してもゲームが始まりません
```

#### 3回目
もう戻れないかな？とか思いつつ、自分が試している環境も言ってみる。
```
はじめるでやっぱり始まりません。AndroidアプリのClaudeから利用してることが影響してますか？
```

#### 4回目
1回目の指摘に対する処理を確認。でも動作的にいまいちだったので、クレーム（？）をつけてみる。
```
残り時間がゼロになった時、回答はできなく改善されてますが、ゲーム終了も認識できないし、中断で最初の画面に戻ることもできず、ゲームが継続できません。
```

#### 5回目
ClaudeのAndroidアプリを使っていたので、ローカルストレージにアクセスできないっていうエラーがでてました。
それについて、質問をしたプロンプトです。
```
下記が出るけど、これは改善できないよね？
Uncaught Error: Uncaught SecurityError: Failed to read the 'localStorage' property from 'Window': The document is sandboxed and lacks the 'allow-same-origin' flag.
```

#### 6回目
できたけど、ちょっとリアル小学生（3年生）には難しいということで簡単モードを作成してもらう
```
掛け算九九のを範囲を超えない、イージーモードも追加してください（除数と商が9以下）。
```
### 7. [算数ゲーム]
わり算余りゲームのソースを貼り付け用と思って、つけ忘れたのにゲームができてしまいました（驚き）。
```
以下は割り算の余りを求めるゲームです。この内容を参考に、1.足し算、2.引き算、3.掛け算、4.割り算、5.割り算の余りを求めるゲームにしてください。かんたんモードふつうモードについては、新たに追加するものについては、計算に使う数字（答えではない）が、10以上の数字が出現するかしないかで、難易度を分けてください。ハイスコアはゲームモードごとに出してください。
```

上記のあと、次のプロンプトで完成してしまいました。
'''
間違わない限り、ゲームが終わりません。時間（60秒）が来る、もしくは最大20問出したら終わる（間違えても即終了にしない）形にしてください。不正解の場合は不正解と表示し、入力欄をクリアして、正解するまでつぎの問題に行けないようにしてください。
'''

### 7. [算数ゲーム](https://t2k2pp.github.io/AIXA/games/math-game.html)
**工事中**
### 8. [ドット絵エディタ](https://t2k2pp.github.io/AIXA/games/dot-paint.html)
**工事中**


### 1. [アングリーバードもどき](https://t2k2pp.github.io/AIXA/games/angry-birds-clone.html)
**工事中**
### 2. [ハットリスもどき](https://t2k2pp.github.io/AIXA/games/hat-puzzle-complete.html)
**工事中**



## 番外編
**[番外編]**

Claudeに下記プロンプトをあたえ、すごい！すばらしい！とか言いながらほかのも見せてと言い続けて作成できてしまったアプリたちです。
```Prompt
HTMLとJavaScriptを使い1ファイルで作成するアプリ、あなたは今までどういうものをつくでてきましたか？
```

1. [算数忍者](https://t2k2pp.github.io/AIXA/games/math-game_2.html)
2. [ビートメーカー](https://t2k2pp.github.io/AIXA/games/beat-maker.html)
3. [通貨換算アプリ](https://t2k2pp.github.io/AIXA/games/currency-converter.html)
4. [画像フィルターアプリ](https://t2k2pp.github.io/AIXA/games/image-filter-app.html)
5. [シンプルTodoアプリ](https://t2k2pp.github.io/AIXA/games/todo-app.html)
6. [SVG図形エディター](https://t2k2pp.github.io/AIXA/games/shape-editor.html)
7. [冒険タイピングゲーム](https://t2k2pp.github.io/AIXA/games/typing-game.html)
8. [英単語宇宙探検](https://t2k2pp.github.io/AIXA/games/space-english.html)
9. [プログラミング入門パズル](https://t2k2pp.github.io/AIXA/games/programming-puzzle.html)
10. [地理探検クエスト](https://t2k2pp.github.io/AIXA/games/geography-quest.html)
11. [地理探検クエスト 改良版](https://t2k2pp.github.io/AIXA/games/geography-quest-v2.html)
12. [科学実験シミュレーター](https://t2k2pp.github.io/AIXA/games/science-lab.html)
