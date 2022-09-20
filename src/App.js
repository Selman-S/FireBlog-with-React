import { ThemeProvider } from '@mui/material'
import AppRouter from './app-router/AppRouter'
import { AuthProvider } from './context/AuthContext'
import { theme } from './globalyStyles/theme'
import { ToastContainer } from 'react-toastify'
import { BlogProvider } from './context/BlogContext'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BlogProvider>
          <AppRouter></AppRouter>
          <ToastContainer />
        </BlogProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
