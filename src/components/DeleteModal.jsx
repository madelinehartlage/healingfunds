import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, IconButton, AlertDialog, AlertDialogBody, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, AlertDialogFooter, useDisclosure } from '@chakra-ui/react';
import {DeleteIcon} from "@chakra-ui/icons";

export default function AlertDialogExample({deleteFunc, value, title, loading}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <IconButton isRound={true} variant="outline" color="red" icon={<DeleteIcon />} pointerEvents="initial" onClick={onOpen}></IconButton>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                {title}
              </AlertDialogHeader>
  
              <AlertDialogBody>
                {`Are you sure? You can't undo this action afterwards.`}
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' isLoading={loading} onClick={() => {deleteFunc(value)}} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }