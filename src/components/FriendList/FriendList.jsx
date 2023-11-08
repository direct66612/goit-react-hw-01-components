import List from './FriendList.style';
import FriendItem from './FriendItem';
const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(el => {
        return <FriendItem key={el.id} {...el} />;
      })}
    </List>
  );
};
export default FriendList;
