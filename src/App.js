import Profile from './components/userProfile/Profile';
import user from './data/user.json';

export default function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
