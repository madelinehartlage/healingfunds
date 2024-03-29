import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, IconButton, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, ModalFooter, useDisclosure } from '@chakra-ui/react';
import {EditIcon} from "@chakra-ui/icons";
export default function AdminEditModel({ header, title1, title2, place1, place2, setFunc1, setFunc2, updateFunc, loading}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    return (
        <>
            <IconButton isRound={true} variant="outline" icon={<EditIcon />} pointerEvents="initial" onClick={onOpen}></IconButton>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={5}>
                    <Stack>
                        <Text fontWeight="semibold">{title1}</Text>
                        <Input placeholder={place1} onChange={(e) => setFunc1(e.target.value)}></Input>
                    </Stack>
                    <Stack>
                        <Text fontWeight="semibold">{title2}</Text>
                        <Input placeholder={place2} onChange={(e) => setFunc2(e.target.value)}></Input>
                    </Stack>
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} isLoading={loading} onClick={() => {updateFunc(place1, place2); onClose();}}>
                    Submit
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}