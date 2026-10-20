# KIRIKO（ブロックパズル）

iPhone の Safari で遊ぶ、自分用の 8×8 ブロック配置パズル。`index.html` 1ファイル完結（外部ライブラリなし）。

## 公開手順（GitHub Pages）

1. リポジトリの **Settings → Pages**
2. **Build and deployment → Source** を `Deploy from a branch`
3. **Branch** を `main`、フォルダを **`/ (root)`** にして Save
4. 1〜2分待つと `https://<ユーザー名>.github.io/Lapis/` で開ける

## iPhone のホーム画面に追加

1. **Safari** で上の URL を開く（Chrome ではなく Safari）
2. 下の共有ボタン（□↑）をタップ
3. **「ホーム画面に追加」** → 名前はそのまま「KIRIKO」→ 追加
4. ホーム画面のアイコンから起動すると全画面で遊べる

※ 音は最初にタップしたあとから鳴ります。iPhone のマナーモード（消音スイッチ）がオンだと鳴りません。
※ 更新を入れたあと古い表示のままなら、ホーム画面のアプリを一度閉じて開き直す。

## 調整用定数

すべて `index.html` の `<script>` 冒頭、`const CONFIG = { ... }` にまとまっています。

| 項目 | 場所 |
|---|---|
| コンボの猶予 | `CONFIG.COMBO_GRACE` |
| 得点 | `CONFIG.SCORE`（`PER_CELL` / `LINES` / `EXTRA_PER_LINE_OVER_4` / `COMBO_STEP` / `CLEAR_ALL_BONUS`） |
| ブロックの出し方 | `CONFIG.SPAWN`（`NEUTRAL_FILL` / `SIZE_BIAS` / `HELP_FILL` / `HELP_CLEAR_CHANCE` / `WEIGHTS`） |
| ドラッグ | `CONFIG.DRAG`（指より浮かせる量など） |
| 演出 | `CONFIG.FX`（振動のON/OFFなど） |
| ブロックの形 | `SHAPE_DEFS`（`#` が1マス） |
| 色 | `COLORS` |

## ファイル

- `index.html` … ゲーム本体
- `icon.svg` / `apple-touch-icon.png` / `icon-192.png` / `icon-512.png` … アイコン
- `manifest.webmanifest` … ホーム画面追加用
