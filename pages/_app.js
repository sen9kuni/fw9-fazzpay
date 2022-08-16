// import '../styles/globals.css'
import '../styles/style.css'
import '../styles/login.css'
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store, presistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
