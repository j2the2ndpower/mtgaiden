import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007acc', // Your primary color
      light: '#4eb0e5'
    },
    secondary: {
      main: '#0babaf',
      light: '#6af0f3'
    }
    // Customize other theme properties as needed
  },
});

export default theme;