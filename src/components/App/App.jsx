import user from 'path/to/user.json'; 
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';
import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from '../task-one/Profile/Profile';
import { Statistics } from '../task-two/Statistics';
import { FriendList } from 'components/task-three/FriendList/FriendList'; 
import { TransactionHistory } from '../task-four/TransactionHistory/TransactionHistory';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      {/* <Profile user={user}/> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>

      <GlobalStyle />
    </AppContainer>
  );
};
