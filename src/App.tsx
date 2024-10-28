import { AppProvider, AuthenticationContext, SessionContext } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Loading from './components/Loading';
import { NAVIGATION } from './components/NavigationBar';
import { useAuth } from './hooks/useAuth';
import AuthPage from './pages/AuthPage';
import BrowsePost from './pages/BrowsePost';
import DashboardPage from './pages/DashboardPage';
import { useRouter } from './router/router';
import { branding } from './theme/Branding';
import { CustomTheme } from './theme/Theme';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';

const App = () => {
  const { user, loading, signInWithGoogle, logOut } = useAuth();
  const router = useRouter('/');

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
                {router.pathname === '/search' && <SearchPage />}
                {router.pathname === '/browsepost' && <BrowsePost />}

              </PageContainer>
            </DashboardLayout>
            : < AuthPage />
          }
        </SessionContext.Provider>
      </AuthenticationContext.Provider>
    </AppProvider>
  );
}
export default App
