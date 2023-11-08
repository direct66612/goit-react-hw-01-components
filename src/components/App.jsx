import user from '../components/user.json'
import data from '../components/data.json'
import friends from '../components/friends.json'
import transactions from '../components/transactions.json'
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>
  );
};
