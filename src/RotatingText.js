import ReactRotatingText from 'react-rotating-text'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
 import './App.css'
const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Spartan',
         'sans-serif',
      ].join(','),
      fontSize: 20,
    },});
const RotatingText = () => {
    return (
        <ThemeProvider theme={theme}>
        <Typography style={{fontSize:  23, fontWeight: 900}}>Proficient In: </Typography>
        <div>
         <ReactRotatingText items={['JavaScript', 'React', 'HTML/CSS', 'React-Native', 'XML', 'MERN' ]} color='white'/>
        </div>
        </ThemeProvider>
    )
    }
export default RotatingText;

