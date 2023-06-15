import React from 'react';
import { Text, Flex, Stack, Button, Image, Link } from '@chakra-ui/react';

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
        <Image src="/image-1000x500.jpg"/>
        <Flex width="100%" justifyContent="center" paddingTop={8} paddingBottom={8}>
          <Stack direction="column" width="50%">
            <Text fontWeight="bold" fontSize="2xl" textAlign="center">
              Healing Cancer Holistically
            </Text>
            <Text textAlign="center" fontWeight="semibold">
              The mission of Healing Funds is to distribute funds to cancer patients for the purpose of utilizing holistic alternative methods for treatment.
            </Text>
            <Text textAlign="center" fontWeight="semibold">
              Healing Funds seeks to provide cancer patients with the financial resources necessary to approach healing naturally. 
              Whether it be exercise, diet, therapy, or other methods, each patient deserves the ability to fight cancer in a way that protects 
              and enhances their health.
            </Text>
            <Text textAlign="center" fontWeight="semibold">
              With your donation, Healing Funds can enable a patient in need to receive revitalizing care.
            </Text>
            <Flex width="100%" justifyContent="space-around" paddingTop={8}>
              <Button bgColor="#439298" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4}>
                DONATE NOW
              </Button>
              <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4}>
                REQUEST FUNDS
              </Button>
            </Flex>
          </Stack>
        </Flex>
        
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