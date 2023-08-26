import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, IconButton, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, ModalFooter, useDisclosure, Textarea, Select } from '@chakra-ui/react';
import {EditIcon} from "@chakra-ui/icons";
export default function TextBoxModal({ header, pG, fS, fW, tA, oldText, place, id, setFunc1, setFunc2, setFunc3, setFunc4, setFunc5, updateFunc, loading}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    

    return (
        <>
            <IconButton isRound={true} variant="outline" icon={<EditIcon />} pointerEvents="initial" onClick={() => {setFunc1(tA); setFunc2(fW); setFunc3(fS); setFunc4(pG); setFunc5(place); onOpen();}}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={5}>
                    <Stack>
                        <Textarea defaultValue={oldText} onChange={(e) => setFunc5(e.target.value)}/>
                    </Stack>
                    <Stack>
                    <Stack direction="column" width="100%">
                        <Stack direction="row">
                          <Select placeholder="Select Text-Align" defaultValue={tA} onChange={(e) => setFunc1(e.target.value)}>
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                          </Select>
                          <Select placeholder="Select Font-Weight" defaultValue={fW} onChange={(e) => setFunc2(e.target.value)}>
                            <option value="normal">Normal</option>
                            <option value="semibold">Semibold</option>
                            <option value="bold">Bold</option>
                          </Select>
                        </Stack>
                        <Stack direction="row">
                          
                          <Select placeholder="Select Font-Size" defaultValue={fS} onChange={(e) => setFunc3(e.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">XL</option>
                            <option value="2xl">2XL</option>
                            <option value="3xl">3XL</option>
                          </Select>
                          <Select placeholder="Select Page" defaultValue={pG} onChange={(e) => setFunc4(e.target.value)}>
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
                    <Button colorScheme='blue' mr={3} isLoading={loading} onClick={() => {updateFunc(id); onClose();}}>
                    Submit
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}