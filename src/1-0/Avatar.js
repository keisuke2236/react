import { getImageUrl } from "./utils";

export default function Avatar({ props }) {
  const { person, imageInfo } = props;

  return (
    person.age === 0 ? <p>年齢未入力</p> :
      <>
        <img
          src={getImageUrl(imageInfo.imageId, imageInfo.size)}
          alt={person.name}
        />
        <p>{person.age}</p>
      </>
  );
}
