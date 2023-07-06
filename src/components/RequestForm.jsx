import React from "react"
import { FormLabel, Input, Button, Textarea, Form, FormControl, Stack } from "@chakra-ui/react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function RequestForm() {
    const [value, setValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleRequest = async (e) => {
        e.preventDefault()
        setLoading(true)
        // Create a Checkout Session.
        
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: value,
            street: e.target.street.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            cancer: e.target.cancer.value,
            date: e.target.date.value,
            therapy: e.target.therapy.value,
        }
        const response = await fetch("/api/requestForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            console.log("Message sent successfully")
            setLoading(false)
            e.target.name.value="";
            e.target.email.value="";
            setValue("")
            e.target.street.value="";
            e.target.city.value="";
            e.target.state.value="";
            e.target.zip.value="";
            e.target.cancer.value="";
            e.target.date.value="";
            e.target.therapy.value="";
        }
        if (!response.ok) {
            console.log("Error sending message")
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleRequest}>
            <Stack spacing={5} bgColor="white" borderRadius="16px" padding={4} border="1px solid black">
                <Stack>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" required id="name" placeholder="Name"></Input>
                </Stack>   
                <Stack>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" required id="email" placeholder="email@example.com"></Input>
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
                    <Input required id="street" placeholder="Street Address"></Input>
                    <Input required id="city" placeholder="City"></Input>
                    <Input required id="state" placeholder="State"></Input>
                    <Input required id="zip" placeholder="Zipcode"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Cancer Type</FormLabel>
                    <Input required id="cancer" placeholder="Cancer type"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Diagnosis Date</FormLabel>
                    <Input required id="date" type="month"></Input>
                </Stack>
                <Stack>
                    <FormLabel>Future Therapies Planned</FormLabel>
                    <Textarea placeholder="List of planned therapies" required name="therapy"></Textarea>
                </Stack>
                
                <Button type="submit" disabled={loading}>Submit</Button>
            </Stack>
            
        
        </form>
    )
    
}