import Avatar from './Avatar';

const UserInfo = ({ user: { avatarUrl, name } }) => (
  <div className="user-info">
    <Avatar avatarUrl={avatarUrl} name={name} />
    <div className="user-info__name">{name}</div>
  </div>
);

export default UserInfo;
