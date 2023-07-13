import React from "react"
import { FormLabel, Input, Button, Textarea, Form, FormControl, Stack } from "@chakra-ui/react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function RequestForm() {
    const [value, setValue] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [street, setStreet] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [cancer, setCancer] = React.useState('')
    const [date, setDate] = React.useState('')
    const [therapy, setTherapy] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleRequest = async (e) => {
        e.preventDefault()
        setLoading(true)
        // Create a Checkout Session.
        
        
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, value, street, city, state, zip, cancer, date, therapy}),
        })
        if (response.ok) {
            console.log("Message sent successfully")
            setLoading(false)
            
        }
        if (!response.ok) {
            console.log("Error sending message")
            setLoading(false)
        }
    }

    const postProps = async () => {
        let res = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            therapy: data.therapy,
          }),
        });
        res = await res.json();
      }

    return (
        <form onSubmit={handleRequest}>
            <Stack spacing={5} bgColor="white" borderRadius="16px" padding={4} border="1px solid black">
                <Stack>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" required onChange={(e) => setName(e.target.value)} value={name} placeholder="Name"></Input>
                </Stack>   
                <Stack>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@example.com"></Input>
                </Stack> 
                <Stack>
                    <FormLabel>Phone</FormLabel>
                    <PhoneInput
                        inputProps={{
                            name: 'phone',
                            required: true,
                            
                        }}
                        country={'us'}
                        value={value}
                        onChange={setValue}
                    />
                </Stack> 
                <Stack>
                    <FormLabel>Address</FormLabel>
                    <Input required onChange={(e) => setStreet(e.target.value)} value={street} placeholder="Street Address"></Input>
                    <Input required onChange={(e) => setCity(e.target.value)} value={city} placeholder="City"></Input>
                    <Input required onChange={(e) => setState(e.target.value)} value={state} placeholder="State"></Input>
                    <Input required onChange={(e) => setZip(e.target.value)} value={zip} placeholder="Zipcode"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Cancer Type</FormLabel>
                    <Input required onChange={(e) => setCancer(e.target.value)} value={cancer} placeholder="Cancer type"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Diagnosis Date</FormLabel>
                    <Input required onChange={(e) => setDate(e.target.value)} value={date} type="month"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Future Therapies Planned</FormLabel>
                    <Textarea placeholder="List of planned therapies" required onChange={(e) => setTherapy(e.target.value)} value={therapy}></Textarea>
                </Stack>
                
                <Button type="submit" disabled={loading}>Submit</Button>
            </Stack>
            
        
        </form>
    )
    
}