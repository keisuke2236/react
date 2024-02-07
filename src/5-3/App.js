import { useState } from 'react';

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
          <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <h2>山田さんとは</h2>
      <Panel title="概要" isActive={0 === activeIndex} onShow={() => setActiveIndex(0)}>
        19940101生まれの大根
      </Panel>
      <Panel title="経歴" isActive={1 === activeIndex} onShow={() => setActiveIndex(1)}>
        2010年に大根になる、2020年に大根をやめる
        そうして2021年に大根になる
      </Panel>
    </>
  );
}
