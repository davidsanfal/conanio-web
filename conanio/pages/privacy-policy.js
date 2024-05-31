import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import ConanHeader from '../components/header';
import ConanPrivacyPolicyComponent from '../components/privacypolicy';
import ConanFooter from '../components/footer';

export default function ConanPrivacyPolicy() {
    return (
    <React.StrictMode>
      <SSRProvider>
        <ConanHeader/>
        <ConanPrivacyPolicyComponent/>
        <ConanFooter/>
      </SSRProvider>
    </React.StrictMode>
  );
}
