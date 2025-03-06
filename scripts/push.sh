#!/bin/bash
# プロジェクトのルートディレクトリに移動
echo "Moving to project root directory: $WORKDIR"
cd $WORKDIR

# clasp push コマンドを実行
echo "Running: npm run push"
npm run push
