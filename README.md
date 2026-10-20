# Lapis

自分用のミニゲーム置き場。GitHub Pages で公開（Settings → Pages → Branch `main` / `/ (root)`）。

URL: `https://<ユーザー名>.github.io/Lapis/`

| ゲーム | フォルダ | 説明 |
|---|---|---|
| KIRIKO | [kiriko/](kiriko/) | ブロックパズル（詳細・調整用定数は [kiriko/README.md](kiriko/README.md)） |
| numberun～ナンバ走り～ | [numberun/](numberun/) | 計算ゲート型ランニング（小学生中学年向け） |
| numplace～ナンプレ～ | [numplace/](numplace/) | ナンバープレース（数字パズル。問題は自動で作る） |
| gemdig～ジェムディグ～ | [gemdig/](gemdig/) | 地雷さがしパズル（石をほって、ばくだんをよける） |
| polis academy ～公共・政経～ | [polis/](polis/) | 政治・経済（公共）の用語ドリル（高校生向け・学習用） |

## 新しいゲームを足すとき

1. 新しいフォルダ（例: `newgame/`）を作り、`index.html` などを入れる
2. ルートの `index.html` の一覧にカードを1つ足す
3. ゲームごとに `manifest.webmanifest` / アイコン / `sw.js` をフォルダ内に置き、キャッシュ名（`sw.js` の `CACHE`）はゲームごとに別にする

## 注意

- `sw.js`（ルート）は、ゲームがルート直下にあった頃の古い Service Worker を片付けるためのものです。消さないでください。
