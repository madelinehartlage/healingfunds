import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';

function Contact() {
  return (
    <Flex height="100vh">
      <Stack direction="column" width="100%">
        <Flex width="100%" paddingLeft={4}>
          <Flex width="60%">
            <Image src="/logoPNGAlt4.png"/>
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
            <Link>
              <Text fontSize="xl" fontWeight="bold">
                ARTICLES
              </Text>
            </Link>
            <Link href="/contact">
              <Text fontSize="xl" fontWeight="bold">
                CONTACT
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" fontWeight="bold">
                DONATE
              </Text>
            </Link>
          </Stack>
        </Flex>
        <Image src="/supportsystem.jpg"/>
        <Flex justifyContent="center" paddingTop={50} paddingBottom={50}>
            <Stack direction="column" spacing={8}>
                <Text fontWeight="bold" fontSize="3xl">
                    Call Us Today
                </Text>
                <Text fontWeight="semibold" fontSize="lg">
                    Email: email@example.com
                </Text>
                <Text fontWeight="semibold" fontSize="lg">
                    Phone: (123)-456-7890
                </Text>
            </Stack>
        </Flex>
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent="center" spacing={70} paddingTop={10} paddingBottom={10}>
            <Link href="/"> 
                <Text fontSize="lg" fontWeight="semibold" color="white">
                    Healing Funds Inc.
                </Text>
            </Link> 
            <Link href="/contact">
                <Text fontSize="lg" fontWeight="semibold" color="white">
                    Contact Us
                </Text>
            </Link>
            <Link>
                <Text fontSize="lg" fontWeight="semibold" color="white">
                    Donate
                </Text>
            </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Contact;