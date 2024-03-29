import React from 'react';

import { Text, Flex, Stack, Button, Link, Image, Box, Icon, Grid, GridItem, IconButton, Menu, MenuButton, MenuList, MenuItem, Textarea, useToast, Input } from '@chakra-ui/react';
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import {ImNewspaper} from "react-icons/im";
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from "next-auth/react";
import TextBoxModal from "@/components/TextBoxModal";
import AddTextBoxModal from "@/components/AddTextBoxModal";
import DeleteModal from "@/components/DeleteModal";

function HealingFundsHome() {

  const [articles, setArticles] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);
  const [textBoxes, setTextBoxes] = React.useState([]);
  const [landingImages, setLandingImages] = React.useState([]);
  const [pageOp, setPageOp] = React.useState('homeOp')
  const [textAlignOp, setTextAlignOp] = React.useState('center')
  const [fontSizeOp, setFontSizeOp] = React.useState('medium')
  const [fontWeightOp, setFontWeightOp] = React.useState('semibold')
  const [textBoxField, setTextBoxField] = React.useState('')
  const [isModalLoading, setModalLoading] = React.useState(false);
  const [isTextBoxLoading, setTextBoxLoading] = React.useState(false);
  const [isImageLoading, setImageLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const toast = useToast();
  const [imageSrc, setImageSrc] = React.useState();
  const [uploadData, setUploadData] = React.useState();
  const [image, setImage] = React.useState(null);
  
  const {data: session} = useSession();
  
  const user = session?.user;

  const CLOUD_NAME = process.env.CLOUD_NAME;
  
  

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

  const testText = [
    {
      textBoxField: "Test",
      fontSizeOp: "medium",
      fontWeightOp: "bold",
      textAlignOp: "center",
      pageOp: "homeOp",


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

  async function loadTextBoxes() {

    
    let res = await fetch("/.netlify/functions/getHomeTextBoxes", {
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

  async function loadImages() {
    
    

    // reset error and message
    setError('');
    setMessage('');
    

    let res = await fetch("/.netlify/functions/getImage?page=home", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    if (data.status == "success") {
      
      setLandingImages(data.data);
      console.log(data.data);
      return setMessage(data.message);
    }
    else {
      
        return setError(data.message);
    }
  }

  React.useEffect(() => {
    loadImages().catch((e) => {
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

  const addTextBox = async () => {
    
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

  const updateTextBoxes = async (id) => {
    setModalLoading(true);

    let textBox = {
      id,
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

  const addImage = async (landingImage) => {
    setImageLoading(true);
    
    const postImage = {
      url: landingImage,
      page: "home",
    }

    // reset error and message
    setError('');
    setMessage('');
    

    let res = await fetch("/.netlify/functions/addImage", {
        method: 'POST',
        body: JSON.stringify(postImage),
    });

    let data = await res.json();
    if (data.status == "success") {
      setImageLoading(false);
      toast({
        title: 'Success.',
        description: "You've successfully added an image.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      loadImages();
      return setMessage(data.message);
    }
    else {
      setImageLoading(false);
      toast({
        title: 'Error.',
        description: "Failed to add image.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
        return setError(data.message);
    }
  }


  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'test_uploads');

    const data = await fetch("https://api.cloudinary.com/v1_1/dvmgdgrpv/image/upload", {
      method: "POST",
      body: formData
    }).then(r => r.json());

    console.log("data",data.secure_url);
    addImage(data.secure_url);
  }

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      
    }
  };


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
        <Flex width="100%">
          {landingImages && landingImages[0] && (
          <Image key={landingImages[0].url} src={landingImages[0].url} width="100%" maxHeight="650px" objectFit="cover" fallback={<Box width={500} height={500} bgColor="white"/>}/>
        )}</Flex>
        {user && user.name && user.name == "adminpasscode" && (
        <Flex>
        <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          
            <Input type="file" name="file" onChange={uploadToClient}/>
          
          
          
          
          {imageSrc && !uploadData && (
            
              <Button type="submit" isLoading={isImageLoading}>Upload File</Button>
            
          )}

          
        </form>
        </Flex>)}
        <Flex width="100%" justifyContent="center" paddingTop={8} paddingBottom={8}>
          <Stack direction="column" width={["100%","50%"]} paddingRight={["30px", "0px"]} paddingLeft={["30px", "0px"]} spacing={["20px", "10px"]}>
            {textBoxes && textBoxes.map((textBox) => (
              <>
            <Text key={textBox._id} fontWeight={textBox.fontWeightOp} fontSize={textBox.fontSizeOp} textAlign={textBox.textAlignOp} color="black">
              {textBox.textBoxField}
            </Text>
            {user && user.name && user.name == "adminpasscode" && (
            <Stack direction="row" justifyContent="center">
            <TextBoxModal header={"Edit Text Area"} fS={textBox.fontSizeOp} fW={textBox.fontWeightOp} pG={textBox.pageOp} tA={textBox.textAlignOp} place={textBox.textBoxField} setFunc1={setTextAlignOp} setFunc2={setFontWeightOp} setFunc3={setFontSizeOp} setFunc4={setPageOp} updateFunc={updateTextBoxes} loading={isModalLoading} setFunc5={setTextBoxField} id={textBox._id} oldText={textBox.textBoxField}/>
            <DeleteModal deleteFunc={deleteTextBoxes} value={textBox.textBoxField} title={"Delete Text Box"} loading={isModalLoading}/>
            </Stack>)}</>))}
            {user && user.name && user.name == "adminpasscode" && (
            <AddTextBoxModal header={"Add Text Area"} fS={fontSizeOp} fW={fontWeightOp} pG={pageOp} tA={textAlignOp} setFunc1={setTextAlignOp} setFunc2={setFontWeightOp} setFunc3={setFontSizeOp} setFunc4={setPageOp} addFunc={addTextBox} loading={isTextBoxLoading} setFunc5={setTextBoxField}/>
            )}
            
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
                    <Text fontWeight="semibold" color="black" maxWidth={[300, 400]}>{sponsor.name}</Text>
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
