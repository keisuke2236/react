import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>山田さんとは</h2>
      <Panel title="概要">
        19940101生まれの大根
      </Panel>
      <Panel title="経歴">
        2010年に大根になる、2020年に大根をやめる
        そうして2021年に大根になる
      </Panel>
    </>
  );
}
