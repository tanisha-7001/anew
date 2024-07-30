import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import UserDashboard from './UserDashboard';

function UserLogin({ signOut, user }) {
  return (
    <>
      <UserDashboard/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(UserLogin);