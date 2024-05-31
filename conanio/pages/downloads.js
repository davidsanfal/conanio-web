import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import ConanHeader from '../components/header';
// import ConanDownloadsComponent from '../components/downloads';
import ConanFooter from '../components/footer';

export default function ConanDownloads() {
    return (
    <React.StrictMode>
      <SSRProvider>
        <ConanHeader/>
        <ConanFooter/>
      </SSRProvider>
    </React.StrictMode>
  );
}
