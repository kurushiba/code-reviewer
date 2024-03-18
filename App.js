import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const sample = `
### 問題点の指摘
1. \`name\` と \`member1\`, \`member2\`, \`member3\` の比較には、複数の \`||\` 演算子を使っているため、コードが冗長です。
2. コメントが実際に行われるべき処理や条件の説明を欠いています。

### 問題点を修正し、より簡潔にしたコード
\`\`\`javascript
const name = 'yamada';
const num = 100;

const members = ['sato', 'yamada', 'suzuki'];

if(members.includes(name)){
    if(num === 0){
        console.log('0の場合');
    } else if (num > 0) {
        console.log('+(プラス)の場合');
    } else {
        console.log('- (マイナス)の場合');
    }
}
\`\`\`

### 修正点の説明
1. \`member1\`, \`member2\`, \`member3\` を配列 \`members\` にまとめました。これにより、複数の要素を効率的かつ読みやすく管理することができます。
2. \`includes()\` メソッドを使って、指定した要素が配列 \`members\` に含まれるかどうかを確認しました。これにより、1つずつ \`name\` との比較を簡潔に記述できます。
3. 各条件に対して適切なコメントを追加しました。コメントは、その条件がどのような状況で実行されるかを明確に説明することで、コードの理解を助けます。
`;

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <header className="flex w-full max-w-5xl justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-900">AI Code Reviewer</h1>
      </header>
      <main className="flex w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden h-[70vh]">
        <div className="flex flex-col w-1/2 h-full bg-gray-900 overflow-y-auto">
          <div className="flex-1 p-4 text-white">
            <textarea className="h-full w-full bg-transparent text-white resize-none outline-none" />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
            レビューする
          </button>
        </div>
        <div className="flex flex-col w-1/2 h-full items-center justify-center">
          <div className="p-4 overflow-y-auto w-full">
            <Markdown
              className="markdown"
              remarkPlugins={[remarkGfm]}
            >{ sample }</Markdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
