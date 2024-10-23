import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './styles/theme';
import App from './App.tsx'
import './index.css'
import './i18n'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
)
