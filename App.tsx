import React, { Suspense } from 'react';
import Router from './src/navigation';
//Context Auth
import { Provider } from './src/contexts/App'
//Context Auth END

//COMMON COMPONENTS
import Loader from './src/components/Common/Loader'
//COMMON COMPONENTS END

// TYPES
type IStates = {
}

function App() {
  return (
    <Provider>
      <Suspense fallback={<Loader/>}>
        <Router/>
      </Suspense>
    </Provider>
  )
};


export default App;
