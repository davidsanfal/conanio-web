import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import ConanHeader from '../components/header';
import ConanTermsAndConditionComponent from '../components/termsconditions';
import ConanFooter from '../components/footer';

export default function ConanTermsAndCondition() {
    return (
    <React.StrictMode>
      <SSRProvider>
        <ConanHeader/>
        <ConanTermsAndConditionComponent/>
        <ConanFooter/>
      </SSRProvider>
    </React.StrictMode>
  );
}
