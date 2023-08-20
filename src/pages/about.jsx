import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

function About() {

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
    <Flex height="100vh" bgColor="white">
      <Stack direction="column" width="100%" spacing={0}>
      <Flex width="100%" paddingLeft={4} paddingRight={10} justifyContent="space-between" alignItems="center">
          
          <Link href="/">
            <Image src="/logoHealing2.jpg"/>
          </Link>
        
        <Stack paddingTop={12} direction="row" spacing={10} alignItems="center">
          <Link href="/about">
            <Text fontSize="xl" fontWeight="bold" color="black">
              ABOUT
            </Text>
          </Link>
            <Link href="/sponsors">
              <Text fontSize="xl" fontWeight="bold" color="black">
                SPONSORS
              </Text>
            </Link>
            <Link href="/articles">
              <Text fontSize="xl" fontWeight="bold" color="black">
                ARTICLES
              </Text>
            </Link>
            <Link href="/contact">
              <Text fontSize="xl" fontWeight="bold" color="black">
                CONTACT
              </Text>
            </Link>
            <Link onClick={handleSubmit}>
              <Text fontSize="xl" fontWeight="bold" color="black">
                DONATE
              </Text>
            </Link>
            <Link href="/request">
              <Text fontSize="xl" fontWeight="bold" color="black">
                REQUEST
              </Text>
            </Link>
          </Stack>
        </Flex>
        <Stack direction="row" spacing={8} height="100%">
        <Flex width="100%" maxWidth="50%">
          <Image src="/supportsystem.jpg" width="100%" objectFit="cover" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
          
          
        <Flex paddingTop={20} paddingBottom={8} width="100%" maxWIdth="50%" justifyContent="center">
          <Stack direction="column" paddingLeft={20} paddingTop={20}>
            <Flex>
              <Flex bgColor="#439298" width="100px" height="100px" transform="rotate(45deg) translateX(-15px) translateY(-85px)"></Flex>
              <Flex bgColor="#F86F8B" width="100px" height="100px" transform="rotate(45deg)"></Flex>
            </Flex>
            <Flex>
              <Flex bgColor="#F86F8B" width="100px" height="100px" transform="rotate(45deg) translateX(-105px) translateY(-75px)"></Flex>
              <Flex bgColor="#439298" width="100px" height="100px" transform="rotate(45deg) translateX(-90px) translateY(5px)"></Flex>
              <Flex bgColor="lightgray" width="100px" height="100px" transform="rotate(45deg) translateX(-200px) translateY(30px)"></Flex>
            </Flex>
          </Stack>
          <Stack direction="column" spacing={4} width="100%" marginRight={20}>
            <Text fontWeight="bold" fontSize="2xl">
              About Healing Funds Inc.
            </Text>
            <Text fontWeight="semibold" fontSize="md">
              Healing Funds seeks to provide cancer patients with the financial resources necessary to approach healing naturally. 
            </Text>
            <Text fontWeight="semibold" fontSize="md">
              Whether it be exercise, diet, therapy, or other methods, each patient deserves the ability to fight cancer in a way that protects 
              and enhances their health.
            </Text>
            <Text fontWeight="semibold" fontSize="md">
              With your donation, Healing Funds can enable a patient in need to receive revitalizing care.
            </Text>
          </Stack>
        </Flex>
        </Stack>
        
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent="center" spacing={70} paddingTop={10} paddingBottom={10} position="absolute" bottom={0}>
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

export default About;