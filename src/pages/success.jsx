import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';

function Contact() {
  return (
    <Flex height="100vh">
      <Stack direction="column" width="100%">
        <Flex width="100%" paddingLeft={4}>
          <Flex width="60%">
            <Link href="/">
              <Image src="/logoPNGAlt4.png"/>
            </Link>
          </Flex>
          <Stack paddingTop={12} direction="row" width="40%" spacing={10} alignItems="center">
            <Link href="/about">
              <Text fontSize="xl" fontWeight="bold">
                ABOUT
              </Text>
            </Link>
            <Link href="/sponsors">
              <Text fontSize="xl" fontWeight="bold">
                SPONSORS
              </Text>
            </Link>
            <Link href="/articles">
              <Text fontSize="xl" fontWeight="bold">
                ARTICLES
              </Text>
            </Link>
            <Link href="/contact">
              <Text fontSize="xl" fontWeight="bold">
                CONTACT
              </Text>
            </Link>
            <Link href="/donate">
              <Text fontSize="xl" fontWeight="bold">
                DONATE
              </Text>
            </Link>
          </Stack>
        </Flex>
        <Flex justifyContent="center" paddingTop={50} paddingBottom={50}>
            <Text fontWeight="bold" fontSize="3xl">Thank you for your donation!</Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Contact;