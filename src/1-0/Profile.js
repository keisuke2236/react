import Avatar from './Avatar';

export default function Profile({ children }) {
  const userInfo = {
    person: { name: 'Lin Lanying', age: 25 },
    imageInfo: { imageId: 'MK3eW3A', size: 's' },
  };

  const userInfoB = {
    person: { age: 0 },
  };

  return (
    <>
      <Avatar props={userInfo} />
      <Avatar props={userInfoB} />
      {children}
    </>
  );
}
