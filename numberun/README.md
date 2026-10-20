# numberun～ナンバ走り～

左右2つの計算ゲートから「人数がたくさんになる方」を暗算で選び、最後に敵と人数で勝負するゲーム。小学生中学年向け（2年生 / 3年生 / 4年生 / チャレンジ）。

URL: `https://<ユーザー名>.github.io/Lapis/numberun/`

## 遊び方
- **じっくり**: ゲートが止まるので、左右どちらかをタップして「これにする！」を押す（時間制限なし）
- **ラン**: 走りながら、指を左右に動かして通るゲートを選ぶ
- ヒント（電球）: 両方のゲートの計算結果を見られる（回数制限あり）
- 間違えたゲートは、ステージの終わりに「こっちが大きかったよ」と答えを見せる
- ミス（人数が少ない方を選ぶこと）のルール（ステージごとに数える。♥ が2つ）
  - ミスなし → 勝ち。次のステージへ
  - ミス1回 → 同点で「ひきわけ」。同じステージを、新しい問題でもう一度
  - ミス2回 → その時点で、のこりのゲートを飛ばして「しょうぶ」に入り、負け（ゲームオーバー）

## 音の確認
`https://<ユーザー名>.github.io/Lapis/numberun/?soundtest` を開くと、効果音とBGMを1つずつ鳴らして確認できる。

## 調整用定数
`index.html` の `<script>` 冒頭、`const CONFIG = {...}` にまとまっています。

| 項目 | 場所 |
|---|---|
| 学年ごとの数の範囲・演算・ゲートの差 | `CONFIG.LEVELS`（`add` / `sub` / `mul` / `div` / `comfort` / `minDiff` / `maxDiff`） |
| ステージの長さ・開始人数の増え方 | `CONFIG.STAGE` / `STAGE_START_GROWTH` |
| 敵の強さ | `CONFIG.ENEMY_RATIO`（小さいほど勝ちやすい） |
| ヒントの回数 | `CONFIG.HINTS` |
| 速さ・結果を見せる時間 | `CONFIG.SPEED` / `REVEAL_MS` |
| BGM | `CONFIG.SOUND` |

## ファイル
- `index.html` … ゲーム本体
- `icon.svg` / `apple-touch-icon.png` / `icon-192.png` / `icon-512.png` / `manifest.webmanifest` / `sw.js` … ホーム画面追加・オフライン用
