import React from 'react';
import { Text, Flex, Stack, Button, Image, Link } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

function HealingFundsHome() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
  }

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
            <Link onClick={handleSubmit}>
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
              
                <Button bgColor="#439298" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#439298", opacity: "60%"}} onClick={handleSubmit}>
                  DONATE NOW
                </Button>
              <Link href="/request">
                <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4}>
                  REQUEST FUNDS
                </Button>
              </Link>
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
              <Text fontWeight="semibold" color="white">ARTICLE 1</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text fontWeight="semibold" color="white">ARTICLE 2</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text fontWeight="semibold" color="white">ARTICLE 3</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px"></Flex>
              <Text fontWeight="semibold" color="white">ARTICLE 4</Text>
            </Stack>
          </Stack>
          <Link href="/articles">
            <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#F86F8B", opacity: "80%"}}>
              LEARN MORE
            </Button>
          </Link>
        </Stack>
        <Stack width="100%" direction="column" alignItems="center" spacing={8} paddingTop={4} paddingBottom={12}>
          <Text fontWeight="semibold" fontSize="2xl">
            SPONSORS
          </Text>
          <Stack width="100%" direction="row" justifyContent="center" spacing={20}>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px" borderRadius="100%"></Flex>
              <Text fontWeight="semibold">Person Name</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px" borderRadius="100%"></Flex>
              <Text fontWeight="semibold">Person Name</Text>
            </Stack>
            <Stack direction="column" alignItems="center">
              <Flex bgColor="#D9D9D9" height="150px" width="150px" borderRadius="100%"></Flex>
              <Text fontWeight="semibold">Person Name</Text>
            </Stack>
          </Stack>
          <Link href="/sponsors">
            <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#F86F8B", opacity: "70%"}}>
              SEE MORE
            </Button>
          </Link>
        </Stack>
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
          <Link onClick={handleSubmit}>
            <Text fontSize="lg" fontWeight="semibold" color="white">
                Donate
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default HealingFundsHome;
