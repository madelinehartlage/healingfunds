import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';

function About() {
  return (
    <Flex height="100vh">
      <Stack direction="column" width="100%">
        <Flex width="100%" paddingLeft={4}>
          <Flex width="60%">
            <Image src="/logoPNGAlt4.png"/>
          </Flex>
          <Stack paddingTop={12} direction="row" width="40%" spacing={10} alignItems="center">
            <Link>
              <Text fontSize="xl" fontWeight="bold">
                ABOUT
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" fontWeight="bold">
                SPONSORS
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" fontWeight="bold">
                ARTICLES
              </Text>
            </Link>
            <Link>
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
        <Image src="/woman yoga.jpg"/>
        <Grid templateColumns="repeat(3, 1fr)" paddingTop={20} paddingBottom={8}>
          <Stack direction="column" paddingLeft={20} paddingTop={16}>
            <Flex>
              <Flex bgColor="#439298" width="150px" height="150px" transform="rotate(45deg) translateX(-15px) translateY(-90px)"></Flex>
              <Flex bgColor="#F86F8B" width="150px" height="150px" transform="rotate(45deg)"></Flex>
            </Flex>
            <Flex>
              <Flex bgColor="#F86F8B" width="150px" height="150px" transform="rotate(45deg) translateX(-105px) translateY(-75px)"></Flex>
              <Flex bgColor="#439298" width="150px" height="150px" transform="rotate(45deg) translateX(-90px)"></Flex>
              <Flex bgColor="lightgray" width="150px" height="150px" transform="rotate(45deg) translateX(-270px) translateY(60px)"></Flex>
            </Flex>
          </Stack>
          <Stack direction="column" spacing={4}>
            <Text fontWeight="bold" fontSize="3xl">
              About Healing Funds Inc.
            </Text>
            <Text fontWeight="semibold" fontSize="lg">
              Healing Funds seeks to provide cancer patients with the financial resources necessary to approach healing naturally. 
            </Text>
            <Text fontWeight="semibold" fontSize="lg">
              Whether it be exercise, diet, therapy, or other methods, each patient deserves the ability to fight cancer in a way that protects 
              and enhances their health.
            </Text>
            <Text fontWeight="semibold" fontSize="lg">
              With your donation, Healing Funds can enable a patient in need to receive revitalizing care.
            </Text>
          </Stack>
        </Grid>
        
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent="center" spacing={70} paddingTop={10} paddingBottom={10}>
          <Text fontSize="lg" fontWeight="semibold" color="white">Healing Funds Inc.</Text>
          <Text fontSize="lg" fontWeight="semibold" color="white">Contact Us</Text>
          <Text fontSize="lg" fontWeight="semibold" color="white">Donate</Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default About;