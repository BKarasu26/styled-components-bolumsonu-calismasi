import { useContext, useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from './components/styled/GlobalStyle'
import {lightTheme,darkTheme} from './theme'
import { SiteContext } from './context/SiteContext'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)
  const {themeName} = useContext(SiteContext)
  return (
        <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header />
            <Main />
        </ThemeProvider>
  )
}

export default App
