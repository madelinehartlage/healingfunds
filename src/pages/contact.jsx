import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid } from '@chakra-ui/react';

function Contact() {
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
            <Link href="/donate">
              <Text fontSize="xl" fontWeight="bold">
                DONATE
              </Text>
            </Link>
          </Stack>
        </Flex>
        <Image src="/supportsystem.jpg"/>
        <Flex justifyContent="center" paddingTop={50} paddingBottom={50}>
            <Stack direction="column" spacing={8} alignItems="center">
                <Text fontWeight="bold" fontSize="3xl">
                    Contact Us Today
                </Text>
                <Stack direction="row" spacing={20}>
                    <Stack direction="column">
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
            <Link href="/donate">
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