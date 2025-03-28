import React, {  } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageRoutes from './routes/PageRoutes';
import {UserProvider} from "./core/providers";

function App() {

  return (
      <UserProvider>
        <PageRoutes/>
      </UserProvider>
  );
}

export default App;