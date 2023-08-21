import React from 'react';

import { Text, Flex, Stack, Button, Link, Image, Box, Icon, Grid, GridItem, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import {ImNewspaper} from "react-icons/im";
import { HamburgerIcon } from '@chakra-ui/icons';

function HealingFundsHome() {

  const [articles, setArticles] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);
  

  

  const testArticles = [
    {
      title: "Dietary patterns and ovarian cancer risk",
      link: "https://pubmed.ncbi.nlm.nih.gov/19056595/",
      imageData: "https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png",


    },
    {
      title: "Intakes of selected nutrients and food groups and risk of ovarian cancer",
      link: "https://pubmed.ncbi.nlm.nih.gov/11588898/",
      imageData: "https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png",
    },

    {
      title: "Github",
      link: "https://github.com",
      imageData: "https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png",
    },
    {
      title: "Netlify",
      link: "https://netlify.com",
      imageData: "https://www.netlify.com/v3/static/og-image.png",
    },


  ]

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

  //let tempColumns = "repeat(" + testArticles.length + ", 1fr)"
  

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

  React.useEffect(() => {
    async function loadArticles() {

    
    let res = await fetch("/.netlify/functions/getArticles", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    
    let data = await res.json();

    if (data.status == "success") {
        console.log(data.data)
        
        setArticles(data.data);
        
        //tempColumns = "repeat(" + data.data.length + ", 1fr)"
        
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }

    }

    loadArticles().catch((e) => {
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
          </MenuList>
        </Menu>
      </Flex>
        <Flex width="100%">
          <Image src="/image-1000x500.jpg" width="100%" maxHeight="650px" objectFit="cover" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        </Flex>
        <Flex width="100%" justifyContent="center" paddingTop={8} paddingBottom={8}>
          <Stack direction="column" width={["100%","50%"]} paddingRight={["30px", "0px"]} paddingLeft={["30px", "0px"]} spacing={["20px", "10px"]}>
            <Text fontWeight="bold" fontSize="2xl" textAlign="center" color="black">
              Healing Cancer Holistically
            </Text>
            <Text textAlign="center" fontWeight="semibold" color="black">
              The mission of Healing Funds is to distribute funds to cancer patients for the purpose of utilizing holistic alternative methods for treatment.
            </Text>
            <Text textAlign="center" fontWeight="semibold" color="black">
              Healing Funds seeks to provide cancer patients with the financial resources necessary to approach healing naturally. 
              Whether it be exercise, diet, therapy, or other methods, each patient deserves the ability to fight cancer in a way that protects 
              and enhances their health.
            </Text>
            <Text textAlign="center" fontWeight="semibold" color="black">
              With your donation, Healing Funds can enable a patient in need to receive revitalizing care.
            </Text>
            <Stack width="100%" justifyContent={["center","space-around"]} alignItems="center" paddingTop={8} direction={["column", "row"]} spacing={["20px", "0px"]}>
              
                <Button bgColor="#439298" color="white" width={["50%","20%"]} borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#439298", opacity: "60%"}} onClick={handleSubmit}>
                  DONATE NOW
                </Button>
              <Link href="/request">
                <Button bgColor="#F86F8B" color="white"  borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#F86F8B", opacity: "60%"}}>
                  REQUEST FUNDS
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        
        <Stack width="100%" direction="column" bgColor="#439298" alignItems="center" spacing={8} paddingTop={4} paddingBottom={12}>
          <Text color="white" fontWeight="semibold" fontSize="2xl">
            LATEST ARTICLES
          </Text>
          
          <Grid templateColumns={["repeat(1, 1fr)","repeat(4, 1fr)"]} gap={6}>
            {articles && articles.slice(0, 4).map((article) => (
              <GridItem key={article.title}>
                <Stack  direction="column" alignItems="center" height="100%">
                  <Flex maxHeight={150} height="100%" alignItems="flex-end">
                    <Link href={article.link}>
                      
                      {article.imageData && (<Image src={article.imageData} maxHeight={150}  />)}
                      
                      
                    </Link>
                  </Flex>
                  <Flex>
                    <Text fontWeight="semibold" color="white" maxWidth={[300, 400]}>{article.title}</Text>
                  </Flex>
                </Stack>
                </GridItem>))}
          </Grid>
          <Link href="/articles">
            <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#F86F8B", opacity: "80%"}}>
              LEARN MORE
            </Button>
          </Link>
        </Stack>
        <Stack width="100%" direction="column" alignItems="center" spacing={8} paddingTop={4} paddingBottom={12}>
          <Text fontWeight="semibold" fontSize="2xl" color="black">
            SPONSORS
          </Text>
          <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={6}>
            {sponsors && sponsors.slice(0, 3).map((sponsor) => (
              <GridItem key={sponsor.name}>
                <Stack key={sponsor.name} direction="column" alignItems="center" height="100%">
                  <Flex maxHeight={200} height="100%" alignItems="flex-end">
                    <Image
                      boxSize='200px'
                      objectFit='cover'
                      borderRadius="100%"
                      src={sponsor.image}
                    />
                  </Flex> 
                  <Flex>
                    <Text fontWeight="semibold" color="black">{sponsor.name}</Text>
                  </Flex>
                </Stack></GridItem>))}
            
          </Grid>
          <Link href="/sponsors">
            <Button bgColor="#F86F8B" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} _hover={{bgColor: "#F86F8B", opacity: "70%"}}>
              SEE MORE
            </Button>
          </Link>
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

export default HealingFundsHome;
