import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import DashboardPage from './pages/DashboardPage';
import { NAVIGATION } from './router/NAVIGATION';
import { useRouter } from './router/router';
import { CustomTheme } from './theme/Theme';
import OrdersPage from './pages/OrdersPage';
import ztext_logo from './assets/ztext_logo.png'
import { Box } from '@mui/material';


const App = () => {
  const router = useRouter('');

  const branding = {
    title: 'Ztext', // Your brand title here
    logo: (
      <Box display="flex" alignItems="center">
        <img src={ztext_logo} alt="Ztext Logo" style={{ width: '40px' }} />
      </Box>
    ),
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={CustomTheme}
      branding={branding}
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
