import React from 'react'

import { Container, IconButton } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { ListItemText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Navigation } from '@material-ui/icons';


const Reveiw=({formData ,navigation})=> {
    const {go} = navigation
    console.log(navigation)
    const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
    } = formData
    return (
        
        <Container maxWidth='sm'>
            <h3>Container</h3>
            <RenderAccordion summary='Names' go={ go } details={ [
                {'First Name': firstName}, 
                {'Last Name': lastName},
                {'nickName': nickName},
                 ]}       
            />
             <RenderAccordion summary='Address' go={ go } details={ [
                {'Address':address,}, 
                {'City': city},
                {'State': state},
                {'Zip': zip},
                {'phone': phone},
                {'E-Mail': email}

                 ]}       
            />
             <RenderAccordion summary='Contact' go={ go } details={ [
              {'phone': phone},
              {'E-Mail': email}
                 ]}       
            />
        </Container>
    )
}

export const RenderAccordion=({summary , details , go})=>{
    return(
        <Accordion>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary} </AccordionSummary>
           <AccordionDetails>
               <div>
         { details.map ((item , index)=>{
    const objkey=Object.keys(item)[0]
    const objValue=item[Object.keys(item)[0]]

    return(
        <ListItemText>{`${objkey}: ${objValue}`}</ListItemText>
    )
})}

<IconButton color='info' onClick={()=>go(`${summary.toLowerCase()}`)}><BorderColorIcon></BorderColorIcon></IconButton>
               </div>
           </AccordionDetails>
       </Accordion>
    )
   

}


export default Reveiw
