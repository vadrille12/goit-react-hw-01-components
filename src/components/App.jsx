import { Profile } from "components/Profile/Profile";
import user from '../data/user';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
