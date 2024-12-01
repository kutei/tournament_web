# Tournament_web



## 設計

### 用件定義

- アカウントユーザは２種類で以下
  - 管理者
    - 高度な認証はせず、パスワードとトーナメントIDでログインする
    - 人ごとのユーザ切り分けはしない
  - 一般ユーザ
    - 管理者から発行されたURLで閲覧する
    - 検索機能などは提供しない
- 概念は以下のネストとする
  - convention: 大会そのものであり、複数のステージを持つ
    - stage: 複数のトーナメントまたは複数のグループリーグのいずれかを持つ
      - tournament: トーナメントであり、複数のマッチにより構成される
        - match
      - group-league: グループリーグであり、複数のマッチにより構成される
        - match

### ULR設計

#### 変数の意味
- xxxxxxxx: 大会ID
- N: ステージID

#### URL一覧
- /xxxxxxxx
  - 大会の現状を一般ユーザに公開する
  - 進行中ステージがどれかなどを表示
- /xxxxxxxx/current?type=default
  - 大会の現在進行中のステージを表示する
  - typeの後ろは表示方法を指定するが、とりあえずdefaultのみ
- /xxxxxxxx/stageN
  - 特定のステージの結果を表示する
- /login?conv=xxxxxxxx
  - 大会の管理画面にログインする
- /admin?conv=xxxxxxxx
  - 大会の管理画面
  - 現在のステージの進行を変更する（勝敗の設定）
- /admin/edit?conv=xxxxxxxx
  - 大会の管理画面
  - 大会の情報を編集する。
  - stage構成やチーム名称などを取得する
