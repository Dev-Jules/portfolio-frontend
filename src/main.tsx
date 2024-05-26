import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {Box, ChakraProvider} from "@chakra-ui/react";
import backgroundImage from '../src/assets/cover.png';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider>
          <Box minH="100vh" bgImage={`url(${backgroundImage})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
            <App />
          </Box>
      </ChakraProvider>
  </React.StrictMode>,
)
