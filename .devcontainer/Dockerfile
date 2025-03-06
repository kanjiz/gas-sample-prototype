# ベースイメージとして公式の Node.js イメージを使用
FROM node:22

# 環境変数を設定
ENV WORKDIR=/workspace

# 作業ディレクトリを設定
WORKDIR $WORKDIR

# 必要なパッケージをグローバルにインストール
RUN npm install -g @google/clasp

# コンテナ内で bash を実行
CMD [ "bash" ]
