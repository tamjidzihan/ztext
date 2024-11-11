import { AppProvider, AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Loading from './components/Loading';
import { useAuth } from './hooks/useAuth';
import AuthInfo from './pages/BrowseAuthInfo';
import CreateAuthInfoPage from './pages/CreateAuthInfoPage';
import CreateCategoryPage from './pages/CreateCategoryPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { useRouter } from './router/router';
import { branding } from './theme/Branding';
import { CustomTheme } from './theme/Theme';
import Landingpage from './components/LandingPage/Landingpage';
import { useDynamicNavigation } from './hooks/useDynamicNavigation';

const App = () => {
  const { user, loading, signInWithGoogle, logOut } = useAuth();
  const router = useRouter('/');
  const NAVIGATION = useDynamicNavigation();

  const authentication = {
    signIn: signInWithGoogle,
    signOut: logOut,
  };

  const session = {
    user: user
      ? {
        id: user.uid,
        name: user.displayName || null,
        email: user.email || null,
        image: user.photoURL || null,
      }
      : undefined,
  };

  if (loading) return <Loading />;
  console.log(user?.displayName);


  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={CustomTheme}
      branding={branding}
    >
      <AuthenticationContext.Provider value={authentication}>
        <SessionContext.Provider value={session}>
          {user
            ? <DashboardLayout>
              <PageContainer>
                {router.pathname === '/' && <HomePage />}
                {router.pathname === '/dashboard' && <DashboardPage />}
                {router.pathname === '/createauthinfo' && <CreateAuthInfoPage />}
                {router.pathname === '/createcategory' && <CreateCategoryPage />}
                {router.pathname === '/search' && <SearchPage />}
                {router.pathname === '/authinfo' && <AuthInfo />}

              </PageContainer>
            </DashboardLayout>
            : <Landingpage />
          }
        </SessionContext.Provider>
      </AuthenticationContext.Provider>
    </AppProvider>
  );
}
export default App
