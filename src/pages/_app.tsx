import '../styles/main.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
