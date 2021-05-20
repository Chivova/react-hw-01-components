import Profile from './components/UserProfile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionsHisory from './components/TransactionsHistory/TransactionsHistory';
import user from './data/user.json';
import statisticalData from './data/statisticalData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics statistics={statisticalData} /> */}
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionsHisory items={transactions} />
    </>
  );
}
