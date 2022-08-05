import { ThemeProvider } from '@mui/material'
import AppRouter from './app-router/AppRouter'
import { AuthProvider } from './context/AuthContext'
import { theme } from './globalyStyles/theme'
import { ToastContainer } from 'react-toastify'
import { BlogProvider } from './context/BlogContext'

function App() {
  console.log(theme)
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
