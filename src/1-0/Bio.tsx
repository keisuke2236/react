import React from 'react';

export default function Bio() {
  // { color: 'red', fontWeight: "bold" } これ自体は JavaScript のオブジェクト
  // {} の中にこれを入れることで、style属性に対してオブジェクトを渡している
  // font-weight ではないのは javascript object として定義しているため
  // このオブジェクトは React によって解釈され、CSSの対応するプロパティーにバインドされる。
  const information = {
    title: "Welcome to my website!",
    style: {
      intro: {
        color: 'red',
        fontWeight: "bold"
      },
      summary: {
        color: 'blue',
        fontStyle: "italic"
      }
    }
  };

  return (
    <>
      <br />
      <div className="intro" style={information.style.intro}>
        <h1>{information.title}</h1>
      </div>
      <p className="summary" style={information.style.summary}>
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </>
  );
}
