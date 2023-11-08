export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? 'green' : 'red'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
