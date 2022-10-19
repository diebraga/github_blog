import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router"
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header'

function App() {
  return (
    <ChakraProvider>
      <Box bg='#071422'>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  )
}

export default App
