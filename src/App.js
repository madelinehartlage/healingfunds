import React from 'react';
import { Text, Flex, Stack, Image, Button } from '@chakra-ui/react';
import './App.css';
import logoPNG from "./logoPNGAlt4.png";
import seniorlove2 from "./image-1000x500.jpg";

function App() {
  return (
    <Flex height="100vh">
      <Stack direction="column" width="100%">
        <Flex width="100%" paddingLeft={4}>
          <Flex width="60%">
            <Image src={logoPNG}/>
          </Flex>
          <Stack paddingTop={12} direction="row" width="40%" spacing={10} alignItems="center">
            <Text fontSize="xl" fontWeight="bold">
              ABOUT
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              SPONSORS
            </Text>
            <Text  fontSize="xl" fontWeight="bold">
              ARTICLES
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              CONTACT
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              DONATE
            </Text>
          </Stack>
        </Flex>
        <Image src={seniorlove2}/>
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
        <Stack width="100%" direction="column" bgColor="#439298" alignItems="center" spacing={8} paddingTop={4} paddingBottom={12}>
          <Text color="white" fontWeight="semibold" fontSize="2xl">
            LATEST ARTICLES
          </Text>
          <Stack width="100%" direction="row" justifyContent="center" spacing={20}>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text color="white">ARTICLE 1</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text color="white">ARTICLE 2</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text color="white">ARTICLE 3</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text color="white">ARTICLE 4</Text>
            </Stack>
          </Stack>
          <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4}>
            LEARN MORE
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default App;
