import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, IconButton, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, ModalFooter, useDisclosure } from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons";
import {DeleteIcon} from "@chakra-ui/icons";
import {EditIcon} from "@chakra-ui/icons";
import AdminEditModal from "@/components/AdminEditModal";

function Admin() {
  const [adding, setAdding] = React.useState(false);
  const [addingSponsors, setAddingSponsors] = React.useState(false);
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [articles, setArticles] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);
  const [imageData, setImageData] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();

  const testArticles = [{
    title: "Meep",
    link: "mmmmm"
  }]

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
        console.log(data.data);
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

  const deleteArticles = async (articleTitle) => {


    // reset error and message
    setError('');
    setMessage('');
    

    let res = await fetch("/.netlify/functions/deleteArticles", {
        method: 'DELETE',
        body: JSON.stringify({title: articleTitle}),
    });

    let data = await res.json();
    if (data.status == "success") {
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }
  }

  const updateArticles = async (articleTitle, articleLink) => {
    let res;
    if (title == "" && link == "") {
      res = await fetch("/.netlify/functions/updateArticles", {
        method: 'PUT',
        body: JSON.stringify({ title1: articleTitle, title2: articleTitle, link: articleLink }),
      });
    } else if (title == "") {
      res = await fetch("/.netlify/functions/updateArticles", {
        method: 'PUT',
        body: JSON.stringify({ title1: articleTitle, title2: articleTitle, link: link }),
      });
    } else if (link == "") {
      res = await fetch("/.netlify/functions/updateArticles", {
        method: 'PUT',
        body: JSON.stringify({ title1: articleTitle, title2: title, link: articleLink }),
      });
    } else {
      res = await fetch("/.netlify/functions/updateArticles", {
        method: 'PUT',
        body: JSON.stringify({ title1: articleTitle, title2: title, link: link }),
      });
    }
    
    // reset error and message
    setError('');
    setMessage('');

    

    let data = await res.json();
    if (data.status == "success") {
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }
  }

  const updateSponsors = async (sponsorName, sponsorImage) => {
    let res;
    if (name == "" && image == "") {
      res = await fetch("/.netlify/functions/updateSponsors", {
        method: 'PUT',
        body: JSON.stringify({ name1: sponsorName, name2: sponsorName, image: sponsorImage }),
      });
    } else if (name == "") {
      res = await fetch("/.netlify/functions/updateSponsors", {
        method: 'PUT',
        body: JSON.stringify({ name1: sponsorName, name2: sponsorName, image: image }),
      });
    } else if (image == "") {
      res = await fetch("/.netlify/functions/updateSponsors", {
        method: 'PUT',
        body: JSON.stringify({ name1: sponsorName, name2: name, image: sponsorImage }),
      });
    } else {
      res = await fetch("/.netlify/functions/updateSponsors", {
        method: 'PUT',
        body: JSON.stringify({ name1: sponsorName, name2: name, image: image }),
      });
    }
    
    // reset error and message
    setError('');
    setMessage('');

    

    let data = await res.json();
    if (data.status == "success") {
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }
  }

  const deleteSponsors = async (sponsorName) => {


    // reset error and message
    setError('');
    setMessage('');

    let res = await fetch("/.netlify/functions/deleteSponsors", {
        method: 'DELETE',
        body: JSON.stringify({name: sponsorName}),
    });

    let data = await res.json();
    if (data.status == "success") {
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }
  }

  const addSponsors = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    let sponsor = {
        name,
        image,
    };

    let res = await fetch("/.netlify/functions/postSponsors", {
        method: 'POST',
        body: JSON.stringify(sponsor),
    });

    let data = await res.json();
    if (data.status == "success") {
        setAddingSponsors(false);
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

  const getMetaData = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    let article = {
        title,
        link,
    };

    
    let res = await fetch(`/api/opengraph?url=${article.link}`);
    
    

    if (res.ok) {
       let data = await res.json();
       setImageData(data.image.url);
       console.log(imageData)

       let article = {
        title,
        link,
        imageData,
      };

       let response = await fetch("/.netlify/functions/articles", {
        method: 'POST',
        body: JSON.stringify(article),
      });

      let articleData = await response.json();

      if (articleData.status == "success") {
        
        setAdding(false);
        console.log("success") 
        return setMessage(articleData.message);
      }
      else {
          return setError(articleData.message);
      }
        
    }
    else {
        return setError(data.message);
    }
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
                      <Stack direction="row">
                          <form onSubmit={getMetaData}>
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
                          </form>
                          <Menu autoSelect={false} closeOnSelect={false} closeOnBlur={false}>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                              Manage Articles
                            </MenuButton>
                            <MenuList overflowY="scroll" maxHeight="200px">
                              {articles && articles.map((article) => (
                              
                              <MenuItem key={article.title} justifyContent="space-between" pointerEvents="none" _hover={{bgColor: "white"}} _focus={{bgColor: "white"}} isDisabled style={{opacity : 1}}>
                                  {article.title}
                                  <Stack direction="row">
                                    <AdminEditModal header="Edit Article" title1="Article Title" title2="Article Link" place1={article.title} place2={article.link} setFunc1={setTitle} setFunc2={setLink} updateFunc={updateArticles}/>
                                    <IconButton isRound={true} variant="outline" icon={<DeleteIcon />} pointerEvents="initial" onClick={() => deleteArticles(article.title)} color='red'></IconButton>
                                  </Stack>
                                </MenuItem>))}
                            </MenuList>
                          </Menu>
                        </Stack> : 
                        <Button bgColor="#439298" color="white" onClick={() => setAdding(true)}>
                            Manage Articles
                        </Button>
                    }
                    {addingSponsors  ? 
                      <Stack direction="row">
                        <form onSubmit={addSponsors}>
                            <Stack spacing={5} border="1px solid gray" padding={4} borderRadius="16px">
                                <Stack>
                                    <FormLabel>Sponsor Name</FormLabel>
                                    <Input required placeholder="Sponsor Name" onChange={(e) => setName(e.target.value)}></Input>
                                </Stack>
                                <Stack>
                                    <FormLabel>Image Link</FormLabel>
                                    <Input required placeholder="Image Link" onChange={(e) => setImage(e.target.value)}></Input>
                                </Stack>
                                <Button type="submit" bgColor="#439298" color="white">Add</Button>
                            </Stack>
                        </form>
                        <Menu autoSelect={false} closeOnSelect={false} closeOnBlur={false}>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                              Manage Sponsors
                            </MenuButton>
                            <MenuList overflowY="scroll" maxHeight="200px">
                              {sponsors && sponsors.map((sponsor) => (
                              
                              <MenuItem key={sponsor.name} justifyContent="space-between" pointerEvents="none" _hover={{bgColor: "white"}} _focus={{bgColor: "white"}} isDisabled style={{opacity : 1}}>
                                  {sponsor.name}
                                  <Stack direction="row">
                                    <AdminEditModal header="Edit Sponsor" title1="Sponsor Name" title2="Sponsor Image" place1={sponsor.name} place2={sponsor.image} setFunc1={setName} setFunc2={setImage} updateFunc={updateSponsors}/>
                                    
                                    <IconButton isRound={true} variant="outline" icon={<DeleteIcon />} pointerEvents="initial" onClick={() => deleteSponsors(sponsor.name)} color='red'></IconButton>
                                  </Stack>
                                </MenuItem>))}
                            </MenuList>
                          </Menu>
                      </Stack>
                        : 
                      <Button bgColor="#439298" color="white" onClick={() => setAddingSponsors(true)}>
                          Manage Sponsors
                      </Button>
                    }
                </Stack>
            </Stack>
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

export default Admin;