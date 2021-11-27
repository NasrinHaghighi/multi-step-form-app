import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Names =({formData, setForm, navigation})=> {
    console.log(navigation)
   
    return (
        <Container maxWidth="sm">
            
          <h3>Names</h3>
          <TextField 
          id="outlined-basic"
           label="First Name"
            variant="outlined" 
            name='firstName'
            onChange={setForm} 
            value={formData.firstName}
            margin='normal'
            autoComplete='off'
            fullWidth
            />

       <TextField 
          id="outlined-basic"
           label="Last Name"
            variant="outlined" 
            name='LastName'
            onChange={setForm}  
            value={formData.LastName}
            margin='normal'
            autoComplete='off'
            fullWidth
            />


<Button variant="contained" fullWidth color="primary" style={{marginTop: '10px'}} onClick={()=>navigation.next()}>
 next
</Button>
      </Container>
    )
}

export default Names
