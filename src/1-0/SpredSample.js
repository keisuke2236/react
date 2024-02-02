function NameAndPerson({ person, size, isSepia, thickBorder }) {
  return (
    <>
      <h1>{person.name}</h1>
      <div className="card">
        <Avatar
          person={person}
          size={size}
          isSepia={isSepia}
          thickBorder={thickBorder}
        />
      </div>
    </>
  );
}

function NameAndPersonSpred(props) {
  return (
    <>
      <h1>{person.name}</h1>
      <div className="card">
        <Avatar {...props} />
      </div>
    </>
  );
}
