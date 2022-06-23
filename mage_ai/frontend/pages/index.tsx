import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const queryParams = router.query;
  let pathname = '/datasets';

  const windowDefined = typeof window !== 'undefined';
  if (windowDefined) {
    const host = window.location.hostname;
    const hostParts = host.split('.');
    const domain = hostParts[hostParts.length - 1];
    if (domain === 'aws') {
      pathname = 'proxy/5789/datasets';
    }
  }

  useEffect(() => {
    Router.push({
      pathname,
      query: queryParams,
    });
  }, []);
};

export default Home;
