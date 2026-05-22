import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Hospitality from './pages/Hospitality';
import Ecommerce from './pages/Ecommerce';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Industries from './pages/Industries';
import Trades from './pages/Trades';
import Automotive from './pages/Automotive';
import Work from './pages/Work';
import Admin from './pages/Admin';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="font-heading font-bold text-2xl tracking-tight text-black animate-pulse">
          FILLMORE
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/e-commerce" element={<Ecommerce />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/work" element={<Work />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App