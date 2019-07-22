# bancha-convertor
いろいろ変換する。

https://bancha-project.github.io/bancha-convertor2/


[![Build Status](https://travis-ci.com/bancha-project/bancha-convertor2.svg?branch=sources)](https://travis-ci.com/bancha-project/bancha-convertor2)

## 使用技術
- nuxt
- vuetify
  - spaモード

## pageの追加
1. pagesディレクトリ以下に.vueファイルを作成する
1. components.navにアイテムを追加する

## build
ローカルサーバー起動
```
yarn dev
```

ビルド
```
yarn build
```

ビルドしたやつをローカルサーバーで起動
```
yarn start
```

静的サイトを作る（使わない？）
```
yarn generate
```


## github pages
sourcesブランチが更新されると、travisが検知してビルド結果をmasterブランチにデプロイする。
（開発はsourcesブランチから新規ブランチを切って行い、プルリクを出す）

github pagesはmasterブランチを見るようになっているため、これでデプロイが完了する。

https://evansalter.com/blog/github-pages-and-single-page-apps/

travisはここ。

https://travis-ci.com/bancha-project/bancha-convertor2

## 参考
### nuxt
https://ja.nuxtjs.org/guide

### vuetify
https://vuetifyjs.com/en/

### icons
https://material.io/tools/icons/?style=baseline

かとこじ
