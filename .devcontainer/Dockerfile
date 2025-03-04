# ベースイメージとして公式の Node.js イメージを使用
FROM node:22

# 必要なパッケージをインストール
RUN npm install -g @google/clasp typescript

# 作業ディレクトリを設定
WORKDIR /workspace

# コンテナ内で bash を実行
CMD [ "bash" ]
