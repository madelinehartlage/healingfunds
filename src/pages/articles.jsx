import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';

function Articles() {
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
        <Image src="/researchimage.jpg"/>
        <Flex bgColor="#439298" justifyContent="center" fontWeight="semibold" fontSize="3xl" marginTop={8}>
            <Text color="white">
                Latest Articles
            </Text>
        </Flex>
        <Flex justifyContent="center" paddingTop={12} paddingBottom={12}>
            <Stack direction="row" spacing={4} maxW="40%" wrap="wrap">
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Flex bgColor="lightGray" height="150px" width="150px"></Flex>
                    <Text fontWeight="semibold">Article</Text>
                </Stack>
                
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
            <Link href="/donate">
                <Text fontSize="lg" fontWeight="semibold" color="white">
                    Donate
                </Text>
            </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Articles;