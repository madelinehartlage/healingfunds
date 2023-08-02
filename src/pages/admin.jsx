import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel } from '@chakra-ui/react';


function Admin() {
  const [adding, setAdding] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleRequest = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    let article = {
        title,
        link,
    };

    let res = await fetch("/.netlify/functions/articles", {
        method: 'POST',
        body: JSON.stringify(article),
    });

    let data = await res.json();
    if (data.status == "success") {
        setAdding(false);
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
        <Flex justifyContent="center" paddingTop={50} paddingBottom={50}>
            <Stack direction="column" spacing={8} alignItems="center">
                <Text fontWeight="bold" fontSize="3xl">
                    Admin
                </Text>
                <Stack direction="row" spacing={20}>
                    {adding  ? 
                        <form onSubmit={handleRequest}>
                            <Stack spacing={5} border="1px solid gray" padding={4} borderRadius="16px">
                                <Stack>
                                    <FormLabel>Article Title</FormLabel>
                                    <Input required placeholder="Article Title" onChange={(e) => setTitle(e.target.value)}></Input>
                                </Stack>
                                <Stack>
                                    <FormLabel>Article Link</FormLabel>
                                    <Input required placeholder="Article Link" onChange={(e) => setLink(e.target.value)}></Input>
                                </Stack>
                                <Button type="submit" bgColor="#439298" color="white">Add</Button>
                            </Stack>
                        </form> : 
                        <Button bgColor="#439298" color="white" onClick={() => setAdding(true)}>
                            Add New Article
                        </Button>
                    }
                    <Button bgColor="#439298" color="white">Manage Sponsors</Button>
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

export default Admin;