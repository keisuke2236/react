import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './ImageSizeContext.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  )
}

function List({ imageSize }) {
  const listItems = places.map(place =>
    <ImageSizeContext.Provider value={imageSize}>
      <li key={place.id}>
        <Place place={place} />
      </li>
    </ImageSizeContext.Provider>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const size = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={size}
      height={size}
    />
  );
}

/*
  <ImageSizeContext.Provider value={imageSize}>
    これよりも下のコンテンツは全て共通される
  </ImageSizeContext.Provider>

  // 使いたい時は useContext で指定するだけで利用できるので便利
  const size = useContext(ImageSizeContext);


*/
