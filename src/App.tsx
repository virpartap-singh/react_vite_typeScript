import React, {Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  )
}

export default App