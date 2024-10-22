import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import DashboardPage from './pages/DashboardPage';
import { NAVIGATION } from './router/NAVIGATION';
import { useRouter } from './router/router';
import { CustomTheme } from './theme/Theme';
import OrdersPage from './pages/OrdersPage';


const App = () => {
  const router = useRouter('');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={CustomTheme}
    >
      <DashboardLayout>
        <PageContainer>
          {router.pathname === '/dashboard' && <DashboardPage />}
          {router.pathname === '/orders' && <OrdersPage />}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
export default App
