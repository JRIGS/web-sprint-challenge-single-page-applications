import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Pizza from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './FormSchema'
import Styled from 'styled-components'


const Nav = Styled.nav`
display: flex;
justify-content: space-between;
height: 6rem;
align-items:center;
background-color: black;
color: white;

h1{
  padding: 5rem;
}

div{
  padding: 2.5rem;
  button{
    padding: .50rem 1rem;
    background-color: black;
    color: white;
  }
}
`
const PizzaImg = Styled.img`
width: 100%;
`
const OrderBtnDiv = Styled.div`
display: flex;
justify-content: center;
text-decoration: none;
`
const OrderBtn = Styled.button`
margin-top: 2rem;
padding: 2rem 4rem;
background-color: black;
font-size: 2rem;
color:white;
text-decoration: none;
`

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    hamburger: false,
    ham: false,
    bacon: false,
    mushroom: false,
    pineapple: false,
    greenpeppers: false,

  },
  specialOrder: ''
}
const initialFormErrors = {
  name: '',
}
const initialDisabled = true

const App = () => {

const [pizza, setPizza] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled) 

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
      setFormValues(initialFormValues)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
}

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: isChecked, 
    }
  })
}

const submit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    toppings: Object.keys(formValues.toppings).filter(t => formValues.toppings[t]),
    specialOrder: formValues.specialOrder.trim(),
  }
  postNewPizza(newPizza)
}

useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])
  return (
    <div className='App'>

      <Nav>
      <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>
          <button id='homeBtn'>Home</button>
          </Link>
        </div>
      </Nav>

      <Switch>

      <Route path='/pizza'>
        <Pizza 
           values={formValues}
           inputChange={inputChange}
           checkboxChange={checkboxChange}
           submit={submit}
           disabled={disabled}
           errors={formErrors}
        />
      </Route>

      <Route path='/'>
        <PizzaImg src={require('./Assets/Pizza.jpg')} ></PizzaImg>
        <Link to='/pizza' style={{ textDecoration: 'none' }}>
          <OrderBtnDiv >
        <OrderBtn id='pizzaForm'>Order a pizza now!</OrderBtn>
          </OrderBtnDiv>
        </Link>
      </Route>

      </Switch>

    </div>
  );
};
export default App;
