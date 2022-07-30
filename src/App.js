import { ThemeProvider } from "@mui/material";
import AppRouter from "./app-router/AppRouter";
import {theme} from './globalyStyles/theme';



function App() {
  console.log(theme);
  return (
<ThemeProvider theme={theme}>


      <AppRouter>
        </ AppRouter>

</ThemeProvider>
  
  );
}

export default App;
