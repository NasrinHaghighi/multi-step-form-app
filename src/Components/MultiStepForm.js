import React from 'react'
import {useForm , useStep } from 'react-hooks-helper'
import Names from './stepForm/Names'
import Address from './stepForm/Address'
import Contact from './stepForm/Contact'
import Reveiw from './stepForm/Reveiw'
import Submit from './stepForm/Submit'

const defaultData={
    firstName:'',
    lastName:'',
    nickName:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    phone:'',
    email:'',
}

const steps=[
    {id:'names'},  {id:'address'},  {id:'contact'}, {id:'reveiw'}, {id:'submit'}, 
]

function MultiStepForm() {
    const [formData, setForm]=useForm(defaultData )
    const {step, navigation } = useStep({
        steps,
        initialStep:0
    });



     const props={formData , setForm , navigation}



    switch(step.id){
        case 'names': 
           return <Names { ...props }/>
        case 'address': 
           return <Address  { ...props }/>
      case 'contact': 
           return <Contact  { ...props }/>
      case 'reveiw': 
           return <Reveiw  { ...props }/>
      case 'submit': 
           return <Submit  { ...props }/>
    }
    
    
    return (
        <div >
          
        </div>
    )
}

export default MultiStepForm
