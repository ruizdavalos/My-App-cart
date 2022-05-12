

import Header from './componentes/Header'
import { Main } from './componentes/Main'
import Footer from './componentes/Footer'

import { BrowserRouter } from 'react-router-dom'
import './styles.scss'
import { MiCustomProvider } from './componentes/MiContexto'

const App = ()  => {

  return ( 
    <BrowserRouter>
      <MiCustomProvider>
        <Header/>
        <Main/>
      </MiCustomProvider>
      <Footer/>
    </BrowserRouter>
  )
}

export default App


