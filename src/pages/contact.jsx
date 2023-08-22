import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Menu, MenuItem, MenuList, MenuButton, IconButton } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from "next-auth/react";

function Contact() {

  const {data: session} = useSession();
  
  const user = session?.user;

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
      <Flex width="100%" paddingLeft={4} paddingRight={[5,10]} justifyContent="space-between" alignItems="center">
          
          <Link href="/">
            <Image src="/logoHealing2.jpg" maxWidth={[200, 800]}/>
          </Link>
        
          <Stack paddingTop={12} direction="row" spacing={10} alignItems="center" display={["none", "flex"]}>
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
            {(user && user.name && user.name == "adminpasscode") ? (
              <Link href="/admin">
                <Text fontSize="xl" fontWeight="bold" color="black">
                  ADMIN
                </Text>
              </Link>
            ) : (
              <Link onClick={() => signIn()}>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  LOGIN
                </Text>
              </Link>
            )}
        </Stack>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon boxSize={"30px"}/>}
            bgColor="white"
            _hover={{bgColor: "white"}}
            _active={{bgColor: "white"}}
            display={["flex","none"]}
            boxSize={"30px"}
          />
          <MenuList>
            <MenuItem as='a' href="/about">
              About
            </MenuItem>
            <MenuItem as='a' href="/sponsors">
              Sponsors
            </MenuItem>
            <MenuItem as='a' href="/articles">
              Articles
            </MenuItem>
            <MenuItem as='a' href="/contact">
              Contact
            </MenuItem>
            <Link onClick={handleSubmit}>
              <MenuItem>
                Donate
              </MenuItem>
            </Link>
            <MenuItem as='a' href="/request">
              Request
            </MenuItem>
            {(user && user.name && user.name == "adminpasscode") ? (
              <MenuItem as='a' href="/admin">
                
                  Admin
                
              </MenuItem>
            ) : (
              <Link onClick={() => signIn()}>
                <MenuItem>
                  Login
                </MenuItem>
              </Link>
            )}
          </MenuList>
        </Menu>
        </Flex>
        <Stack direction={["column","row"]} spacing={8}>
        <Flex width="100%" maxWidth={["100%","50%"]} maxHeight="650px">
          <Image src="/rocks2.jpg" width="100%" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
        <Flex justifyContent="center" paddingTop={[5,50]} paddingBottom={50} alignItems="center" width="100%">
            <Stack direction="column" spacing={8} alignItems="center">
                <Text fontWeight="bold" fontSize="3xl">
                    Contact Us Today
                </Text>
                <Stack direction={["column","row"]} spacing={[5,20]}>
                    <Stack direction="column" paddingBottom={[5,0]} borderBottom={["1px solid gray","none"]}>
                        <Link href="mailto:healingfunds@gmail.com">
                            <Text fontWeight="semibold" fontSize="lg">
                                Email: healingfunds@gmail.com
                            </Text>
                        </Link>
                        <Text fontWeight="semibold" fontSize="lg">
                            Phone: (937)-750-3305
                        </Text>
                    </Stack>
                    <Stack direction="column">
                        <Text fontWeight="semibold" fontSize="lg">
                            Mailing Address
                        </Text>
                        <Text fontWeight="semibold" fontSize="lg">
                            1867 S. Highgate Ct.
                        </Text>
                        <Text fontWeight="semibold" fontSize="lg">
                            Beavercreek, OH 45432
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
        </Stack>
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent={["space-around","center"]} spacing={[0, 70]} paddingTop={10} paddingBottom={10} position={"fixed"} bottom={0}>
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

export default Contact;