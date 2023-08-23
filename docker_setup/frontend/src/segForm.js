import React from 'react';
import { ChakraProvider, FormControl, FormLabel, Button, Input } from "@chakra-ui/react";

function SegForm() {
  return (
    <ChakraProvider>
      <div className="page-container">
        <div className="custom-form">
          <form>
            <p className='texto'>Página de SegForm</p>
            <FormControl isRequired>
              <FormLabel>Campos adicionales aquí:</FormLabel>
              <Input
                type="text"
                placeholder="Campo 1"
              />
            </FormControl>
            {/* Agrega más campos según tus necesidades */}
            <Button
              width='120px'
              height='50px'
              type="submit"
              mt={4}
              colorScheme="blue"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default SegForm;