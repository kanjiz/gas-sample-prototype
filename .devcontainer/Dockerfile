# ベースイメージとして公式の Node.js イメージを使用
FROM node:22

# 作業ディレクトリを設定
WORKDIR /workspace

# プロジェクトの依存関係をインストール
RUN npm install

# 必要なパッケージをグローバルにインストール
RUN npm install -g @google/clasp

# コンテナ内で bash を実行
CMD [ "bash" ]
