import { Profile } from 'components/Profile/Profile';
import user from '../data/user';

import Statistics from 'components/Statistics/Statistics';
import data from '../data/data';

import FriendList from 'components/Friends/Friends';
import friends from '../data/friends';

import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsTable items={transactions} />
    </div>
  );
};
