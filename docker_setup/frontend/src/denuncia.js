import React, { useState } from 'react';
import { ChakraProvider, FormControl, FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { Input, InputLeftAddon, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index.css';
import { PhoneIcon } from '@chakra-ui/icons'


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

    const [selectedDocument, setSelectedDocument] = useState('2');
    const [documentNumber, setDocumentNumber] = useState('');

    const handleNamesChange = (event, setterFunction) => {
        const inputValue = event.target.value;

        // Elimina caracteres no alfabéticos y limita la longitud a 100 caracteres
        const cleanValue = inputValue.replace(/[^A-Za-z ]/g, '').slice(0, 100);

        setterFunction(cleanValue);
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
        /*if (inputValue.length > maxDigitsAllowed) {
            inputValue = inputValue.slice(0, maxDigitsAllowed);
          };*/
        setDocumentNumber(inputValue);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nombres', address1);
        console.log('Apellidos', address2);
        console.log('Numero de Identificador', address3);
        console.log('Calle Principal:', address4);
        console.log('Dirección con número de casa:', address5);
        console.log('Dirección con calle transversal', address6);
        console.log('Dirección de referencia:', address7);
        console.log('Dirección de parroquia', address8);
        console.log('Dirección de su barrio', addreess9);
        console.log('Dirección de sector', address10);
        console.log('Numero de celular de contacto', address11);
        console.log('Numero de telefono de domicilio', address12);

    };
    return (
        <ChakraProvider>
            <div className="page-container">
                <div className="custom-from">
                    <form className='custom-from' onSubmit={handleSubmit}>
                        <p className='texto'>2.IDENTIFICACIÓN DE LA PERSONA A DENUNCIAR:</p>
                        <h2 className='texto'>(Persona que expone a maltrato, abuso, negligencia o vulneración de derechos de los niños y adolescentes)</h2>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>

                            <FormControl isRequired>
                                <FormLabel>Nombres:</FormLabel>
                                <Input
                                    placeholder='Nombres'
                                    value={address1}
                                    type='text'
                                    maxLength={100}
                                    onChange={(e) => handleNamesChange(e, setAddress1)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Apellidos:</FormLabel>
                                <Input
                                    placeholder='Apellidos'
                                    value={address2}
                                    type='text'
                                    maxLength={100}
                                    onChange={(e) => handleNamesChange(e, setAddress2)}
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
                                    value={address4}
                                    onChange={(e) => setAddress4(e.target.value)}
                                    placeholder="Ingresa la calle principal"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Número de Casa</FormLabel>
                                <Input
                                    type="text"
                                    maxLength={100}
                                    value={address5}
                                    onChange={(e) => setAddress5(e.target.value)}
                                    placeholder="Ingresa la dirección"
                                />
                            </FormControl>
                        </Grid>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
                            <FormControl isRequired>
                                <FormLabel>Calle Transversal</FormLabel>
                                <Input
                                    type="text"
                                    maxLength={100}
                                    value={address6}
                                    onChange={(e) => setAddress6(e.target.value)}
                                    placeholder="Ingresa la dirección"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Dirección de Referencia</FormLabel>
                                <Input
                                    type="text"
                                    maxLength={100}
                                    value={address7}
                                    onChange={(e) => setAddress7(e.target.value)}
                                    placeholder="Ingresa la dirección"
                                />
                            </FormControl>
                        </Grid>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
                            <FormControl isRequired>
                                <FormLabel>Parroquia</FormLabel>
                                <Input
                                    type="text"
                                    maxLength={100}
                                    value={address8}
                                    onChange={(e) => setAddress8(e.target.value)}
                                    placeholder="Ingresa la dirección"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Barrio</FormLabel>
                                <Input
                                    type="text"
                                    maxLength={100}
                                    value={address9}
                                    onChange={(e) => setAddress9(e.target.value)}
                                    placeholder="Ingresa la dirección"
                                />
                            </FormControl>
                        </Grid>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft='75px' marginRight='75px'>
                            <FormControl isRequired>
                                <FormLabel>Sector</FormLabel>
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
                        </Grid>
                    </form>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
