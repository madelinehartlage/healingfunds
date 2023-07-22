import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';
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
      <Stack direction="column" width="100%">
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
          </Stack>
        </Flex>
        <Flex width="100%" maxHeight="650px">
          <Image src="/supportsystem.jpg" width="100%" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
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