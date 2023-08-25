import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, IconButton, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, ModalFooter, useDisclosure, Textarea, Select } from '@chakra-ui/react';
import {EditIcon} from "@chakra-ui/icons";
export default function AddTextBoxModal({ header, pG, fS, fW, tA, setFunc1, setFunc2, setFunc3, setFunc4, setFunc5, addFunc, loading}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    

    return (
        <>
            <Button bgColor="#439298" color="white" pointerEvents="initial" onClick={() => {onOpen();}}>Add</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={5}>
                    <Stack>
                        <Textarea onChange={(e) => setFunc5(e.target.value)}/>
                    </Stack>
                    <Stack>
                    <Stack direction="column" width="100%">
                        <Stack direction="row">
                          <Select placeholder="Select Text-Align" value={tA} onChange={(e) => setFunc1(e.target.value)}>
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                          </Select>
                          <Select placeholder="Select Font-Weight" value={fW} onChange={(e) => setFunc2(e.target.value)}>
                            <option value="normal">Normal</option>
                            <option value="semibold">Semibold</option>
                            <option value="bold">Bold</option>
                          </Select>
                        </Stack>
                        <Stack direction="row">
                          
                          <Select placeholder="Select Font-Size" value={fS} onChange={(e) => setFunc3(e.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">XL</option>
                            <option value="2xl">2XL</option>
                            <option value="3xl">3XL</option>
                          </Select>
                          <Select placeholder="Select Page" value={pG} onChange={(e) => setFunc4(e.target.value)}>
                            <option value="homeOp">Home</option>
                            <option value="aboutOp">About</option>
                            <option value="contactOp">Contact</option>
                          </Select>
                        </Stack>
                        
                        </Stack>
                    </Stack>
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} isLoading={loading} onClick={() => {addFunc(); onClose();}}>
                    Submit
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}