import React, { useState } from 'react';
import { ChakraProvider, FormControl, FormLabel, Button, Image, Grid, GridItem, Select } from "@chakra-ui/react";
import { Input, InputLeftAddon, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index';
import { PhoneIcon } from '@chakra-ui/icons'
import './index.css';
import SegForm from './segForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [address4, setAddress4] = useState('');
  const [address5, setAddress5] = useState('');
  const [address6, setAddress6] = useState('');
  const [address7, setAddress7] = useState('');
  const [address8, setAddress8] = useState('');
  const [address9, setAddress9] = useState('');
  const [address10, setAddress10] = useState('');
  const [address11, setAddress11] = useState('');
  const [address12, setAddress12] = useState('');
  const [address13, setAddress13] = useState('');
  const [address14, setAddress14] = useState('');
  const [address15, setAddress15] = useState('');
  const [selectedDocument, setSelectedDocument] = useState('2');
  const [documentNumber, setDocumentNumber] = useState('');
  
  const handleNamesChange = (event, setterFunction) => {
    const inputValue = event.target.value;

    // Elimina caracteres no alfabéticos y limita la longitud a 100 caracteres
    const cleanValue = inputValue.replace(/[^A-Za-z\u00C0-\u00FF ]/g, '').slice(0, 100);

    setterFunction(cleanValue);
  };
  const [navigateToSegForm, setNavigateToSegForm] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Verificar que los campos estén llenos antes de redirigir
    if (address1 && address2 && address3 && address4
      && address5 && address6 && address7 && address8
      && address10 && address11 && address12
      && address13 && address14 && address15 && documentNumber
      && selectedDocument
    ) {
      // Redirigir a la nueva pantalla
      setNavigateToSegForm(true); // Cambiar a la ruta correcta
    } else {
      // Mostrar un mensaje de error o hacer algo si los campos no están llenos
      console.log('Por favor, complete todos los campos.');
    }
  };


  const handleDocumentChange = (newValue) => {
    setSelectedDocument(newValue);
    setDocumentNumber('');
  };


  const handleDocumentNumberChange = (event) => {
    let inputValue = event.target.value.replace(/[^0-9]/g, '');

    // Obtener el máximo de dígitos permitidos según el tipo de documento
    const maxDigits = selectedDocument === '1' ? 10 : 50;

    // Limitar la longitud del valor según el máximo de dígitos
    if (inputValue.length > maxDigits) {
      inputValue = inputValue.slice(0, maxDigits);
    }
    setDocumentNumber(inputValue);
  }
    ;



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Calle Principal:', address1);
    console.log('Dirección con número de casa:', address2);
    console.log('Dirección con calle transversal', address3);
    console.log('Dirección de referencia:', address4);
    console.log('Dirección de parroquia', address5);
    console.log('Dirección de sector', address6);
    console.log('Nombres', address7);
    console.log('Apellidos', address8);
    console.log('Numero de Identificador', address9);
    console.log('Dirección de su barrio', address10);
    console.log('Numero de celular de contacto', address11);
    console.log('Numero de telefono de domicilio', address12);
    console.log('Email', address13);
    console.log('Numero Casilla Judicial', address14);
    console.log('Relacion o parentesco NNA en situacion de riesgo y/o vulnerabilidad', address15);

  };
  return (

    <ChakraProvider>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          marginLeft='50px'
          objectFit='cover'
          maxW={{ base: '200%', sm: '300px' }}
          src='https://yavirac.edu.ec/img/Logo%20Yavirac.png'
          alt='FORMATO UNICO DE DENUNCIA'
        />

        <Stack>

          <CardBody color='#1465bb'>
            <Heading size='md'>FORMATO UNICO DE DENUNCIA</Heading>

            <Text py='2'>
              JUNTA METROPOLITANA DE PROTECCION DE DERECHOS DE LA NIÑEZ Y ADOLECENCIA
            </Text>
          </CardBody>
          <CardFooter>
            <RadioGroup defaultValue='1'>
              <Stack spacing={4} direction='row'>
                <Radio value='1'>CENTRO</Radio>
                <Radio value='2'>DELICIA</Radio>
                <Radio value='3'>CALDERON</Radio>
                <Radio value='4'>QUITUMBE</Radio>
              </Stack>
            </RadioGroup>
          </CardFooter>
        </Stack>
      </Card>
      <div className="page-container">
        <div className="custom-from">
          <form className='custom-from' onSubmit={handleFormSubmit}>
            <p className='texto'>1.IDENTIFICACIÓN DE LA PERSONA DENUNCIANTE</p>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>

              <FormControl isRequired>
                <FormLabel>Nombres:</FormLabel>
                <Input
                  placeholder='Nombres'
                  value={address7}
                  type='text'
                  maxLength={100}
                  onChange={(e) => handleNamesChange(e, setAddress7)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Apellidos:</FormLabel>
                <Input
                  placeholder='Apellidos'
                  value={address8}
                  type='text'
                  maxLength={100}
                  onChange={(e) => handleNamesChange(e, setAddress8)}
                />
              </FormControl>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Documentos de Identidad:</FormLabel>
                  <RadioGroup value={selectedDocument} onChange={handleDocumentChange}>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='blue' value='1'>
                        Cédula
                      </Radio>
                      <Radio colorScheme='blue' value='2'>
                        Pasaporte
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Número de Documento</FormLabel>
                  <Input
                    placeholder='Número de Documento'
                    value={documentNumber}
                    onChange={handleDocumentNumberChange}
                  />
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <FormControl isRequired>
                <FormLabel>Calle Principal</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Ingresa la calle principal"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Dirección con número de casa</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <FormControl isRequired>
                <FormLabel>Dirección con calle transversal</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address3}
                  onChange={(e) => setAddress3(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Dirección de referencia</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address4}
                  onChange={(e) => setAddress4(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <FormControl isRequired>
                <FormLabel>Dirección de parroquia</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address5}
                  onChange={(e) => setAddress5(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Dirección de sector</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address6}
                  onChange={(e) => setAddress6(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <FormControl isRequired>
                <FormLabel>Dirección de su barrio</FormLabel>
                <Input
                  type="text"
                  maxLength={100}
                  value={address10}
                  onChange={(e) => setAddress10(e.target.value)}
                  placeholder="Ingresa la dirección"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Número de celular de contacto:</FormLabel>
                <InputGroup>

                  <InputLeftAddon children='+593' />
                  <Input
                    type='tel'
                    value={address11}
                    maxLength={10} // Limita la longitud a 10 caracteres
                    onChange={(e) => {
                      const inputValue = e.target.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
                      setAddress11(inputValue);
                    }}
                    placeholder='Número de Celular'
                  />
                </InputGroup>
              </FormControl>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <GridItem >
                <FormControl isRequired>
                  <FormLabel>Número de telefono de domicilio:</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <PhoneIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='tel'
                      value={address12}
                      maxLength={9}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
                        setAddress12(inputValue);
                      }} placeholder='Número Telefonico' />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem  >
                <FormControl isRequired>
                  <FormLabel>Email:</FormLabel>
                  <Input type='email' value={address13} maxLength={50} onChange={(e) => setAddress13(e.target.value)} placeholder='Escriba su correo electronico @.com' />
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
              <GridItem >
                <FormControl isRequired>
                  <FormLabel>Número Casilla Judicial:</FormLabel>
                  <InputGroup>
                    <Input type='numeric' value={address14} maxLength={10} onChange={(e) => setAddress14(e.target.value)} placeholder='Numero de Casilla Judicial' />
                  </InputGroup>
                </FormControl>
              </GridItem>
              <GridItem  >
                <FormControl isRequired>
                  <FormLabel>Relación o parentesco NNA en situación de riesgo y/o vulnerabilidad</FormLabel>
                  <Select value={address15} onChange={(e) => setAddress15(e.target.value)} placeholder='Seleccionar opcion'>
                    <option value='option1'>Padre</option>
                    <option value='option2'>Tío/a</option>
                    <option value='option3'>Abuelo/a</option>
                    <option value='option3'>Primo/a</option>
                    <option value='option3'>Otros</option>
                  </Select>
                </FormControl>
              </GridItem>
            </Grid>
            <Grid >
              <GridItem alignContent='center'>
              <Link to="/segForm">
      <Button
        left='47%'
        width='120px'
        height='50px'
        type="submit"
        mt={4}
        colorScheme="blue"
      >
        Enviar
      </Button>
    </Link>
              </GridItem>
            </Grid>
          </form>
        </div>
      </div>

    </ChakraProvider>

  );
}
function AppWithRouter() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/segForm" element={<SegForm />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default AppWithRouter;
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));