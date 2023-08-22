import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from "next-auth/react";

function About() {

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
            {(user && user.name && user.name == process.env.ADMIN_PASS) ? (
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
            {(user && user.name && user.name == process.env.ADMIN_PASS) ? (
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
        <Stack direction={["column","row"]} spacing={8} height="100%">
        <Flex width="100%" maxWidth={["100%","50%"]}>
          <Image src="/supportsystem.jpg" width="100%" objectFit="cover" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
          
          
        <Flex paddingTop={[4,20]} paddingBottom={8} width="100%" maxWidth={["100%","50%"]} justifyContent="center" direction={["column","row"]}>
          <Stack direction="column" paddingLeft={20} paddingTop={[0,20]}>
            <Flex>
              <Flex bgColor="#439298" width={["50px","100px"]} height={["50px","100px"]} transform={["rotate(45deg) translateY(-80px) translateX(65px)","rotate(45deg) translateX(-15px) translateY(-85px)"]}></Flex>
              <Flex bgColor="#F86F8B" width={["50px","100px"]} height={["50px","100px"]} transform={["rotate(45deg) translateY(-10px) translateX(65px)","rotate(45deg)"]}></Flex>
            </Flex>
            <Flex>
              <Flex bgColor="#F86F8B" width={["50px","100px"]} height={["50px","100px"]} transform={["rotate(45deg) translateX(-10px) translateY(-90px)","rotate(45deg) translateX(-105px) translateY(-75px)"]}></Flex>
              <Flex bgColor="#439298" width={["50px","100px"]} height={["50px","100px"]} transform={["rotate(45deg) translateX(-15px) translateY(-20px)","rotate(45deg) translateX(-90px) translateY(5px)"]}></Flex>
              <Flex bgColor="lightgray" width={["50px","100px"]} height={["50px","100px"]} transform={["rotate(45deg) translateX(-50px) translateY(-20px)","rotate(45deg) translateX(-200px) translateY(30px)"]}></Flex>
            </Flex>
          </Stack>
          <Stack direction="column" spacing={4} width="100%" marginRight={[0,20]} paddingLeft={["30px", "0px"]}>
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
        
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent={["space-around","center"]} spacing={[0, 70]} paddingTop={10} paddingBottom={10}>
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