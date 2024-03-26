import Loader from 'components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import css from './Layout.module.css';
import Header from 'components/Header/Header';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isPageRefreshed =
      performance.getEntriesByType('navigation')[0].type === 'reload';

    // if (isPageRefreshed) window.location.replace('/campersrent');
    if (isPageRefreshed) navigate('/campersrent');
    console.log('F5 ', isPageRefreshed);
    console.log('Page ', window.location);
  }, []);

  return (
    <>
      <Header />
      <main className={css.main}>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
