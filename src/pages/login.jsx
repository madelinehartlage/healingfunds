import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Text, Flex, Stack, Button, Link, Image, Box, Icon, Grid, GridItem, IconButton, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react';
export default function Login() {
    const {data: session} = useSession();
    if (session) {
        return (
            <Flex>
                <Text>{`Signed in as ${session.user.name}`}</Text>
            </Flex>
        )
    } return (
  <Flex>
    <Input></Input>
    <Button onClick={() => signIn()}>Submit</Button>
  </Flex>)
}