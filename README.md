# :speech_balloon: chatbot
特定の文言に対して返答するチャットボットアプリ  
<img width="788" alt="screen" src="https://user-images.githubusercontent.com/65392082/147079213-d90b35cc-4b17-4fb4-96c8-11efb4f0e3ed.png">

## :recycle: 環境

### :pushpin: フロントエンド

- Next.js v12
- React v17
- TypeScript

#### UI ライブラリ

- Chakra UI

#### 他

- axios
- dayjs
- react-hook-form

### :pushpin: バックエンド

#### TypeScript ORM

- Prisma

### :pushpin: インフラ

- Vercel
- Heroku

#### データベース

- PostgreSQL

## :pencil: システム構成図

<img width="658" alt="diagram" src="https://user-images.githubusercontent.com/65392082/147620902-c5d50082-373c-423b-9b50-d1ce0dc61597.png">

## :pencil: ER 図

<img width="616" alt="er" src="https://user-images.githubusercontent.com/65392082/146724923-cc4a619d-9e3f-47f1-a1d5-5e3a8c631af0.png">

## :globe_with_meridians: API インターフェース仕様

### :white_check_mark: POST

##### URL

```
/api/chat
```

##### Request

```
{
  "userInput": "ユーザーが入力した文字列"
}
```

##### Response

```
{
  "id": Int
  "userInput": "ユーザーが入力した文字列"
  "botResponse": "Bot応答パターン"
  "responseTimestamp": "2021-12-20T00:17:16.501Z" (タイムスタンプ【日本標準時】)
}
```

#### Bot 応答パターン

1. 固定応答
   - ユーザー入力: こんにちは
   - Bot 応答: こんにちは。
2. 現在時刻
   - ユーザー入力: 今何時？
   - Bot 応答: ○ 時 ○ 分です。 (JST)
3. 東京の天気
   - ユーザー入力: 今日の東京の天気は？
   - Bot 応答: ○○ です。 ([天気予報 API](https://weather.tsukumijima.net)から取得)
4. 上記以外の場合
   - ユーザー入力: 上記以外のテキスト
   - Bot 応答: 正しいテキストを入力してください。

### :white_check_mark: GET

##### URL

```
/api/history/list
```

##### Response

```
[
  {
    id: 4,
    userInput: "テスト",
    botResponse: "正しいテキストを入力してください。",
    responseTimestamp: "2021-12-22T19:26:49.076Z"
  },
  {
    id: 3,
    userInput: "今日の東京の天気は？",
    botResponse: "晴のち曇です。",
    responseTimestamp: "2021-12-22T19:26:20.044Z"
  },
  {
    id: 2,
    userInput: "今何時？",
    botResponse: "19時26分です。",
    responseTimestamp: "2021-12-22T19:26:02.337Z"
  },
  {
    id: 1,
    userInput: "こんにちは",
    botResponse: "こんにちは。",
    responseTimestamp: "2021-12-22T19:25:47.539Z"
  }
  ...
]
```

`responseTimestamp`の降順で 10 件表示
