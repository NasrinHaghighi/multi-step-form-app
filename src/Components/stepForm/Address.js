import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Address=({formData, setForm, navigation})=> {
    console.log(navigation)
    return (
        <Container maxWidth='sm'  autoComplete="off">
         <h3>Address</h3>
          <TextField 
          id="outlined-basic"
           label="Address"
            variant="outlined" 
            name='address'
            onChange={setForm} 
            value={formData.address}
            margin='normal'
            autoComplete='off'
            fullWidth
            />


<TextField 
          id="outlined-basic"
           label="City"
            variant="outlined" 
            name='city'
            onChange={setForm} 
            value={formData.city}
            margin='normal'
            autoComplete='off'
            fullWidth
            />

<TextField 
          id="outlined-basic"
           label="State"
            variant="outlined" 
            name='state'
            onChange={setForm} 
            value={formData.state}
            margin='normal'
            autoComplete='off'
            fullWidth
            />

<TextField 
          id="outlined-basic"
           label="Zip"
            variant="outlined" 
            name='zip'
            onChange={setForm} 
            value={formData.zip}
            margin='normal'
            autoComplete='off'
            fullWidth
            />

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

export default Address
