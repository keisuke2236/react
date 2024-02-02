import Avatar from './Avatar';

export default function Profile() {
  const userInfo = {
    person: { name: 'Lin Lanying' },
    imageInfo: { imageId: 'MK3eW3A', size: 's' },
  };

  return (
    <Avatar props={userInfo} />
  );
}
