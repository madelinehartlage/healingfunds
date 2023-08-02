import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

function Articles() {
  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleRequest = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    let res = await fetch("/.netlify/functions/getArticles", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
    });

    let data = await res.json();
    if (data.status == "success") {
        console.log(data.data);
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }
  }

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
        <Flex width="100%" maxHeight="700px">
          <Image src="/researchimage.jpg" width="100%" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
        <Flex bgColor="#439298" justifyContent="center" fontWeight="semibold" fontSize="3xl" marginTop={8}>
            <Text color="white">
                Latest Articles
            </Text>
            <Button onClick={handleRequest}>Get Articles</Button>
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

export default Articles;