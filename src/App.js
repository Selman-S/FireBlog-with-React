import { ThemeProvider } from '@mui/material'
import AppRouter from './app-router/AppRouter'
import { AuthProvider } from './context/AuthContext'
import { theme } from './globalyStyles/theme'
import { ToastContainer } from 'react-toastify'

function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRouter></AppRouter>
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
