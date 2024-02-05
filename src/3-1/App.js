import Image from './Image.js';
import { createRoot } from 'react-dom/client';

// 手動で root を作成し、 render することもできる
// createRoot の戻り値が React のオブジェクトというイメージ
const root = createRoot(document.getElementById('root'))
root.render(<Image />);

// レンダリングとは：Reactがコンポーネントを呼び出して画面に表示する内容を変更すること。

