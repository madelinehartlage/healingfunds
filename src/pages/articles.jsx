import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Icon, GridItem, Menu, MenuList, MenuItem, MenuButton, IconButton } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import {ImNewspaper} from "react-icons/im";
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from "next-auth/react";

function Articles() {
  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [articles, setArticles] = React.useState([]);
  const [articleLength, setArticleLength] = React.useState(0);
  const [images, setImages] = React.useState([]);

  const {data: session} = useSession();
  
  const user = session?.user;

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
      title: "Dietary patterns and ovarian cancer risk",
      link: "https://pubmed.ncbi.nlm.nih.gov/19056595/",
      imageData: "https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png",


    },
    {
      title: "Intakes of selected nutrients and food groups and risk of ovarian cancer",
      link: "https://pubmed.ncbi.nlm.nih.gov/11588898/",
      imageData: "https://cdn.ncbi.nlm.nih.gov/pubmed/persistent/pubmed-meta-image.png",
    },
    


  ]

  //let tempColumns = "repeat(" + testArticles.length % 4 + ", 1fr)"
  

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
        
        setArticles(data.data);
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

  React.useEffect(() => {
    setArticleLength(articles.length);
    console.log(articleLength);
  }, [articles])

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


 /* React.useEffect(() => {
    async function loadMetaData() {
      let tempArray = [];
      for (let i = 0; i < articles.length; i++) {
       // fetch(`/api/opengraph?url=${testArticles[i].link}`).then( (response) => response.json() )
        //.then( (image) => setImage(image) )
        let res = await fetch(`/api/opengraph?url=${articles[i].link}`)
        let image = await res.json();
        tempArray.push(image.image.url);
        console.log(tempArray);
        setImages(tempArray);
        //setImage(image.data.image.url);
        //images.push(image.message);
      }
      //console.log(images);
    }

    loadMetaData().catch((e) => {
      const error = e;
      console.log(error.message);
    });
  }, [articles]);*/

  return (
    <Flex height="100vh" bgColor="white">
      <Stack direction="column" width="100%">
        <Flex width="100%" paddingLeft={4} paddingRight={[5,10]} justifyContent="space-between" alignItems="center">
          
            <Link href="/">
              <Image src="/logoHealing3.JPG" maxWidth={[200, 400]}/>
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
        
        <Flex bgColor="#439298" justifyContent="center" fontWeight="semibold" fontSize="3xl" marginTop={[4,8]}>
            <Text color="white">
                Latest Articles
            </Text>
        </Flex>
        <Flex justifyContent="center" paddingTop={12} paddingBottom={12}>
          <Grid templateColumns={["repeat(1, 1fr)","repeat(4, 1fr)"]} gap={6}>
                {articles && articles.map((article) => (
                <GridItem key={article.title}>
                <Stack  direction="column" alignItems="center" height="100%">
                  <Flex maxHeight={150} height="100%" alignItems="flex-end">
                    <Link href={article.link}>
                      
                      {article.imageData && (<Image src={article.imageData} maxHeight={150}  />)}
                      
                      
                    </Link>
                  </Flex>
                  <Flex>
                    <Text fontWeight="semibold" color="black" maxWidth={[300, 400]}>{article.title}</Text>
                  </Flex>
                </Stack></GridItem>
                ))}
                
                
            </Grid>
        </Flex>
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent={["space-around","center"]} spacing={[0, 70]} paddingTop={10} paddingBottom={10} position={[articleLength < 3 ? "absolute": "relative", articleLength < 5 ? "absolute": "relative"]} bottom={0}>
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