import { withAuthenticator } from '@aws-amplify/ui-react';
import AdminDashboard from './AdminDashboard';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';


function AdminLogin({ signOut, user }) {
  return (
    <>
      <AdminDashboard />
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AdminLogin);
