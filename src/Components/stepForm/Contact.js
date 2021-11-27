import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const  Contact=({formData, setForm, navigation})=> {
    return (
       <Container maxWidth='sm'>
           <h3>Contact</h3>
    
<TextField 
          id="outlined-basic"
           label="Phone"
            variant="outlined" 
            name='phone'
            onChange={setForm} 
            value={formData.phone}
            margin='normal'
            autoComplete='off'
            fullWidth
            />

<TextField 
          id="outlined-basic"
           label="email"
            variant="outlined" 
            name='email'
            onChange={setForm} 
            value={formData.email}
            margin='normal'
            autoComplete="off"
            fullWidth
            />


<Button variant="contained"  color="default" style={{margin: '10px'}} onClick={()=>navigation.previous()} >Back</Button>
   <Button variant="contained"  color="primary" style={{margin: '10px'}} onClick={()=>navigation.next()}>Next</Button>
       </Container>
    )
}

export default Contact
