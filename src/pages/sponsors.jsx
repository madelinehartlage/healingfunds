import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, GridItem } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

function Sponsors() {

  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [sponsors, setSponsors] = React.useState([]);

  const testSponsors = [
    {
      name: "Test Image 1",
      image: "https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      name: "Test Image 3",
      image: "https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.webp?b=1&s=170667a&w=0&k=20&c=oikPwsT7yx_9XIsNQYte82Fiqg7rBE1tHrlBXWye5jc=",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
    {
      name: "Test Image 2",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg",
    },
  ]

  React.useEffect(() => {
    async function loadSponsors() {

    
    let res = await fetch("/.netlify/functions/getSponsors", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    
    let data = await res.json();

    if (data.status == "success") {
        console.log(data.data);
        setSponsors(data.data);
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }

    }

    loadSponsors().catch((e) => {
      const error = e;
      console.log(error.message);
    });

  }, [])

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
        <Flex width="100%" direction="row">
          
          <Flex direction="column" width="100%">
            <Flex bgColor="#439298" justifyContent="center" fontWeight="semibold" fontSize="3xl" marginLeft={4} marginRight={4} marginBottom={4}>
                <Text color="white">
                    Our Sponsors
                </Text>
            </Flex>
            <Flex justifyContent="center" paddingTop={12} paddingBottom={12} width="100%">
              <Grid templateColumns="repeat(4, 1fr)" gap={6} width="100%">
                  {sponsors && sponsors.map((sponsor) => (
                    <GridItem key={sponsor.name}>
                    <Stack direction="column" alignItems="center" height="100%">
                      <Flex maxHeight={200} height="100%" alignItems="flex-end">
                        <Image
                          boxSize='200px'
                          objectFit='cover'
                          src={sponsor.image}
                        />
                      </Flex>
                        <Flex>
                          <Text fontWeight="semibold" maxWidth={400}>{sponsor.name}</Text>
                        </Flex>
                    </Stack>
                    </GridItem>))}
                    
                    
              </Grid>
            </Flex>
          </Flex>
        </Flex>
            
        
        
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

export default Sponsors;