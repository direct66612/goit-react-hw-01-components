import user from '../components/user.json'
import data from '../components/data.json'
import friends from '../components/friends.json'
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
    </div>
  );
};
