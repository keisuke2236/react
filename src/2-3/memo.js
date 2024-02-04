// 配列のeach
{ contents.map() }

/* contents.each do |content, index| */ (
  (content, index) => ( // ()即時関数の即時実行 {}の場合定義で終わる
    // 即時関数は評価結果を自動的に return している
    <div key={index} style={marginTop10Px()}>
      <UploadButton text={content} /><br />
      <PlayButton text={content} /><br />
      <DeleteButton text={content} /><br />
    </div>
  )
) // end
