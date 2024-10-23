import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import DashboardPage from './pages/DashboardPage';
import { NAVIGATION } from './components/NAVIGATION';
import { useRouter } from './router/router';
import { CustomTheme } from './theme/Theme';
import OrdersPage from './pages/OrdersPage';
import { branding } from './theme/Branding';
import AuthPage from './pages/AuthPage';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user } = useAuth()
  const router = useRouter('');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={CustomTheme}
      branding={branding}
    >
      {user
        ? <DashboardLayout>
          <PageContainer>
            {router.pathname === '/dashboard' && <DashboardPage />}
            {router.pathname === '/orders' && <OrdersPage />}

          </PageContainer>
        </DashboardLayout>
        : < AuthPage />
      }
    </AppProvider>
  );
}
export default App
