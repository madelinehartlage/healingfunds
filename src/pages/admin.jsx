import React from 'react';
import { Text, Flex, Stack, Button, Image, Link, Grid, Box, Input, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalHeader, ModalContent, ModalFooter, useDisclosure, useToast, IconButton, Textarea, Select } from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons";
import {DeleteIcon} from "@chakra-ui/icons";
import {EditIcon} from "@chakra-ui/icons";
import TextBoxModal from "@/components/TextBoxModal";
import AdminEditModal from "@/components/AdminEditModal";
import DeleteModal from "@/components/DeleteModal";
import { HamburgerIcon } from '@chakra-ui/icons';
import {useSession} from "next-auth/react";

function Admin() {
  const {data: session} = useSession();
  
  const user = session?.user;
  
  
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
  const [textBoxes, setTextBoxes] = React.useState([]);
  const [imageData, setImageData] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [isArticleLoading, setArticleLoading] = React.useState(false);
  const [isTextBoxLoading, setTextBoxLoading] = React.useState(false);
  const [isModalLoading, setModalLoading] = React.useState(false);
  const [pageOp, setPageOp] = React.useState('homeOp')
  const [textAlignOp, setTextAlignOp] = React.useState('center')
  const [fontSizeOp, setFontSizeOp] = React.useState('medium')
  const [fontWeightOp, setFontWeightOp] = React.useState('semibold')
  const [textBoxField, setTextBoxField] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  

  
  

  

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
  ]

  const testText = [
    {
      textBoxField: "Test",
      fontSizeOp: "medium",
      fontWeightOp: "bold",
      textAlignOp: "center",
      pageOp: "homeOp",


    },
    
    


  ]

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

  React.useEffect(() => {

    loadArticles().catch((e) => {
      const error = e;
      console.log(error.message);
    });

  }, [])

  async function loadTextBoxes() {

    
    let res = await fetch("/.netlify/functions/getTextBoxes", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    
    let data = await res.json();

    if (data.status == "success") {
        console.log(data.data);
        setTextBoxes(data.data);
        return setMessage(data.message);
    }
    else {
        return setError(data.message);
    }

    }

  React.useEffect(() => {

    loadTextBoxes().catch((e) => {
      const error = e;
      console.log(error.message);
    });

  }, [])

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

  React.useEffect(() => {
    

    loadSponsors().catch((e) => {
      const error = e;
      console.log(error.message);
    });

  }, [])

  const deleteArticles = async (articleTitle) => {
    setModalLoading(true);


    // reset error and message
    setError('');
    setMessage('');
    

    let res = await fetch("/.netlify/functions/deleteArticles", {
        method: 'DELETE',
        body: JSON.stringify({title: articleTitle}),
    });

    let data = await res.json();
    if (data.status == "success") {
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully deleted the article.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadArticles();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to delete article.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const deleteTextBoxes = async (textBoxField) => {
    setModalLoading(true);


    // reset error and message
    setError('');
    setMessage('');
    

    let res = await fetch("/.netlify/functions/deleteTextBoxes", {
        method: 'DELETE',
        body: JSON.stringify({textBoxField: textBoxField}),
    });

    let data = await res.json();
    if (data.status == "success") {
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully deleted the text box.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadTextBoxes();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to delete text box.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const updateArticles = async (articleTitle, articleLink) => {
    setModalLoading(true);
    let res;
    if (title == "" && link == "") {
      res = await fetch("/.netlify/functions/updateArticles", {
        method: 'PUT',
        body: JSON.stringify({ title1: articleTitle, title2: articleTitle, link: articleLink }),
      });
    } else if (title == "") {

      let res = await fetch(`/api/opengraph?url=${link}`);

      if (res.ok) {
        let data = await res.json();

        res = await fetch("/.netlify/functions/updateArticleMeta", {
          method: 'PUT',
          body: JSON.stringify({ title1: articleTitle, title2: articleTitle, link: link, imageData: data.image.url }),
        });

        let articleData = await res.json();
        if (articleData.status == "success") {
          setModalLoading(false);
          toast({
            title: 'Success.',
            description: "You've successfully edited the article.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          loadArticles();
          return setMessage(articleData.message);
        }
        else {
          setModalLoading(false);
          toast({
            title: 'Error.',
            description: "Failed to edit article.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
            return setError(articleData.message);
        }
      
      } else {
        setModalLoading(false);
        toast({
          title: 'Error.',
          description: "Failed to retrieve meta data.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return setError(data.message);
    
      }
    } else if (link == "") {

        res = await fetch("/.netlify/functions/updateArticles", {
          method: 'PUT',
          body: JSON.stringify({ title1: articleTitle, title2: title, link: articleLink }),
        });

    } else {

      let res = await fetch(`/api/opengraph?url=${link}`);

      if (res.ok) {
        let data = await res.json();

        res = await fetch("/.netlify/functions/updateArticleMeta", {
          method: 'PUT',
          body: JSON.stringify({ title1: articleTitle, title2: title, link: link, imageData: data.image.url }),
        });

        let articleData = await res.json();
        if (articleData.status == "success") {
          setModalLoading(false);
          toast({
            title: 'Success.',
            description: "You've successfully edited the article.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          loadArticles();
          return setMessage(articleData.message);
        }
        else {
          setModalLoading(false);
          toast({
            title: 'Error.',
            description: "Failed to edit article.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
            return setError(articleData.message);
        }
      
      } else {
        setModalLoading(false);
        toast({
          title: 'Error.',
          description: "Failed to retrieve meta data.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return setError(data.message);
    
      }
    }
    
    // reset error and message
    setError('');
    setMessage('');

    

    let data = await res.json();
    if (data.status == "success") {
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully edited the article.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadArticles();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to edit article.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const updateSponsors = async (sponsorName, sponsorImage) => {
    setModalLoading(true);
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
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully edited the sponsor.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadSponsors();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to edit sponsor.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const updateTextBoxes = async (oldTextBox) => {
    setModalLoading(true);

    let textBox = {
      oldTextBox,
      textBoxField,
      fontSizeOp,
      fontWeightOp,
      textAlignOp,
      pageOp,
  };

    let res = await fetch("/.netlify/functions/updateTextBoxes", {
        method: 'PUT',
        body: JSON.stringify(textBox),
      });
    
    
    // reset error and message
    setError('');
    setMessage('');

    

    let data = await res.json();
    if (data.status == "success") {
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully edited the text box.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadTextBoxes();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to edit text boxes.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const deleteSponsors = async (sponsorName) => {
    setModalLoading(true);


    // reset error and message
    setError('');
    setMessage('');

    let res = await fetch("/.netlify/functions/deleteSponsors", {
        method: 'DELETE',
        body: JSON.stringify({name: sponsorName}),
    });

    let data = await res.json();
    if (data.status == "success") {
      setModalLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully deleted the sponsor.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadSponsors();
      return setMessage(data.message);
    }
    else {
      setModalLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to delete sponsor.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const addSponsors = async (e) => {
    e.preventDefault();
    setLoading(true);

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
       // setAddingSponsors(false);
       setLoading(false);
        toast({
          title: 'Success.',
          description: "You've successfully added a sponsor.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        loadSponsors();
        return setMessage(data.message);
    }
    else {
      setLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to add sponsor.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  const addTextBox = async (e) => {
    e.preventDefault();
    setTextBoxLoading(true);

    // reset error and message
    setError('');
    setMessage('');

    let textBox = {
        textBoxField,
        fontSizeOp,
        fontWeightOp,
        textAlignOp,
        pageOp,
    };

    let res = await fetch("/.netlify/functions/addTextBox", {
        method: 'POST',
        body: JSON.stringify(textBox),
    });

    let data = await res.json();
    if (data.status == "success") {
       // setAddingSponsors(false);
       setTextBoxLoading(false);
        toast({
          title: 'Success.',
          description: "You've successfully added a text field.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        loadTextBoxes();
        return setMessage(data.message);
    }
    else {
      setTextBoxLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to add text field.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
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
    setArticleLoading(true);

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
       console.log(data.image.url)
       setImageData(data.image.url);
       console.log(imageData)

       let article = {
        title,
        link,
        imageData: data.image.url,
      };

       let response = await fetch("/.netlify/functions/articles", {
        method: 'POST',
        body: JSON.stringify(article),
      });

      let articleData = await response.json();

      if (articleData.status == "success") {
        
        //setAdding(false);
        setArticleLoading(false);
        console.log("success") 
        toast({
          title: 'Success.',
          description: "You've successfully added an article.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        loadArticles();
        return setMessage(articleData.message);
      }
      else {
        setArticleLoading(false);
        toast({
          title: 'Error.',
          description: "Failed to add article.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        
        return setError(articleData.message);
      }
        
    }
    else {
      toast({
        title: 'Error.',
        description: "Failed to retrieve meta data.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }

  return (
    <Flex height="100vh" bgColor="white">
      {user && user.name && user.name == "adminpasscode" && (
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
        <Flex justifyContent="center" paddingTop={50} paddingBottom={50}>
            <Stack direction="column" spacing={8} alignItems="center" width="100%">
                <Text fontWeight="bold" fontSize="3xl">
                    Admin
                </Text>
                <Stack direction="column" width="100%">
                <Stack direction={["column","row"]} spacing={10} justifyContent="center" width='100%' >
                    
                      <Stack direction={["column","row"]}>
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
                                  <Button type="submit" bgColor="#439298" isLoading={isArticleLoading} color="white">Add</Button>
                              </Stack>
                          </form>
                          
                          <Flex borderRadius="16px" overflow="hidden" border="1px solid gray">
                            <Stack maxHeight="280px" overflowY="scroll" borderRadius="16px">
                              {articles && articles.map((article) => (
                                <Stack direction="row" maxWidth={400} key={article.title} justifyContent="space-between" borderBottom="1px solid lightgray" padding={4} alignItems="center">
                                  <Text>{article.title}</Text>
                                  <Stack direction="row">
                                    <AdminEditModal header="Edit Article" title1="Article Title" title2="Article Link" place1={article.title} place2={article.link} setFunc1={setTitle} setFunc2={setLink} updateFunc={updateArticles} loading={isModalLoading}/>
                                    <DeleteModal deleteFunc={deleteArticles} value={article.title} title={"Delete Article"} loading={isModalLoading}/>
                                  </Stack>
                                </Stack>
                              ))}
                            </Stack>
                          </Flex>
                        </Stack> 
                        
                    
                      <Stack direction={["column","row"]}>
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
                                <Button type="submit" bgColor="#439298" isLoading={isLoading} color="white">Add</Button>
                            </Stack>
                        </form>
                        <Flex borderRadius="16px" overflow="hidden" border="1px solid gray">
                          <Stack maxHeight="280px" overflowY="scroll" width="100%">
                            {sponsors && sponsors.map((sponsor) => (
                              <Stack direction="row" maxWidth={400} width="100%" key={sponsor.name} justifyContent="space-between" borderBottom="1px solid lightgray" padding={4} alignItems="center">
                                <Text>{sponsor.name}</Text>
                                <Stack direction="row">
                                  <AdminEditModal header="Edit Sponsor" title1="Sponsor Name" title2="Sponsor Image" place1={sponsor.name} place2={sponsor.image} setFunc1={setName} setFunc2={setImage} updateFunc={updateSponsors} loading={isModalLoading}/>
                                  <DeleteModal deleteFunc={deleteSponsors} value={sponsor.name} title={"Delete Sponsor"} loading={isModalLoading}/>
                                </Stack>
                              </Stack>
                            ))}
                          </Stack>
                        </Flex>
                      </Stack>
                       </Stack>
                       
                </Stack>
            </Stack>
        </Flex>
        <Stack bgColor="#439298" width="100%" direction="row" justifyContent={["space-around","center"]} spacing={[0, 70]} paddingTop={10} paddingBottom={10} position={["relative", "absolute"]} bottom={0}>
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
      </Stack>)}
    </Flex>
  );
};

export default Admin;