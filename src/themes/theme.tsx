import {ThemeProvider} from 'styled-components';
 
const fontSize: any =[14,18,20,96];
fontSize.body=fontSize[0];
fontSize.bodyLarge=fontSize[1];
fontSize.bodyExtraLarge =fontSize[1];
fontSize.displayExtraLarge = fontSize[2];

const primary ="#2567B4"
const secondary ="#F9B531"
const theme ={
  fontSize,
  colors:{
    primary,
    secondary
  }
}

export type ThemeType = typeof theme
export const Theme: React.FC = ({children}) => {

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>

}