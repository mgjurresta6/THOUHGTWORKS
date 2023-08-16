import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  VStack,
  Grid,
  ChakraProvider,
} from '@chakra-ui/react';

function App() {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [address4, setAddress4] = useState('');
  const [address5, setAddress5] = useState('');
  const [address6, setAddress6] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar o procesar el formulario
    console.log('Dirección con número de casa:', address1);
    console.log('Dirección con calle transversal:', address2);
    console.log('Dirección de referencia:', address3);
    console.log('Dirección de parroquia:', address4);
    console.log('Dirección de sector:', address5);
    console.log('Dirección de su barrio:', address6);
  };

  return (
    <ChakraProvider>
      <div className="page-container">
      <div className="custom-form" >
      <form className="custom-form" onSubmit={handleSubmit}>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='25px' marginRight='25px'>
          <FormControl isRequired>
            <FormLabel>Dirección con número de casa</FormLabel>
            <Input
              type="text"
              maxLength={20}
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Dirección con calle transversal</FormLabel>
            <Input
              type="text"
              maxLength={100}
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          </Grid>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='25px' marginRight='25px'>
          <FormControl isRequired>
            <FormLabel>Dirección de referencia</FormLabel>
            <Input
              type="text"
              maxLength={100}
              value={address3}
              onChange={(e) => setAddress3(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Dirección de parroquia</FormLabel>
            <Input
              type="text"
              maxLength={100}
              value={address4}
              onChange={(e) => setAddress4(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          </Grid>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='25px' marginRight='25px'>
          <FormControl isRequired>
            <FormLabel>Dirección de sector</FormLabel>
            <Input
              type="text"
              maxLength={100}
              value={address5}
              onChange={(e) => setAddress5(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Dirección de su barrio</FormLabel>
            <Input
              type="text"
              maxLength={100}
              value={address6}
              onChange={(e) => setAddress6(e.target.value)}
              placeholder="Ingresa la dirección"
            />
          </FormControl>
          </Grid>
          <Grid templateColumns='repeat(1, 2fr)' gap={6} marginLeft='25px' marginRight='25px'>
          <Button type="submit" mt={4} colorScheme="blue">
            Enviar
          </Button>
          </Grid>
        </form>
      </div>
      </div>
    </ChakraProvider>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
