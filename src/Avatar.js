import { getImageUrl } from "./utils";

export default function Avatar({ props }) {
  const { person, imageInfo } = props;

  return (
    <>
      <img
        src={getImageUrl(imageInfo.imageId, imageInfo.size)}
        alt={person.name}
      />
      <p>{person.name}</p>
    </>
  );
}

