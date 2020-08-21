import React from 'react'
import Styled from 'styled-components'

const FormDiv = Styled.div`
width: 80%;
margin: 0 auto;
text-align: center;
padding: 2rem;
border: 5px solid black;
margin-top: 3rem;
#Error{
    color:red;
    padding: 0;
}

`
// label{
//     padding: 1rem;
// }

const Pizza = (props) => {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
        <FormDiv>     
            
            <h2>Build Your Own Pizza!</h2>
            <div className='errors'>
                <div id='Error'>{errors.name}</div>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                <label>Name:
                    <input
                    type='text'
                    value={values.name}
                    placeholder='Type here...'
                    name='name'
                    onChange={onInputChange}
                    >
                    </input>
                </label>
                </div>
                <br></br>
                <div>
                <label htmlFor="size">Choice of Size:
                    <select
                    onChange={onInputChange}
                    value={values.size}
                    name='size'>
                        <option value=''>...Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='party'>Party</option>
                    </select>
                </label>
                </div>

                <div>
                <h3>Select Sauce</h3>
                <label>Marinara
                   <input
                   type="radio"
                   name='sauce'
                   value='marinara'
                   checked={values.sauce === 'marinara'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label>Pesto
                   <input
                   type="radio"
                   name='sauce'
                   value='pesto'
                   checked={values.sauce === 'pesto'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label>Garlic Ranch
                   <input
                   type="radio"
                   name='sauce'
                   value='garlicranch'
                   checked={values.sauce === 'garlicranch'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label>BBQ
                   <input
                   type="radio"
                   name='sauce'
                   value='bbq'
                   checked={values.sauce === 'bbq'}
                   onChange={onInputChange}>
                   </input>
                </label>
                <label>Buffalo
                   <input
                   type="radio"
                   name='sauce'
                   value='buffalo'
                   checked={values.sauce === 'buffalo'}
                   onChange={onInputChange}>
                   </input>
                </label>
                </div>
    
                <div>
                    <h3>Add toppings</h3>
                <label>
                    <input
                    type="checkbox"
                    name='pepperoni'
                    checked={values.toppings.pepperoni === true}
                    onChange={onCheckboxChange}
                    />Pepperoni
                </label>
                <br></br>
                <label>
                    <input
                    type="checkbox"
                    name='sausage'
                    checked={values.toppings.sausage === true}
                    onChange={onCheckboxChange}
                    />Sausage
                </label>
                <br></br>
                <label>
                    <input
                    type="checkbox"
                    name='hamburger'
                    checked={values.toppings.hamburger === true}
                    onChange={onCheckboxChange}
                    />Hamburger
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='ham'
                    checked={values.toppings.ham === true}
                    onChange={onCheckboxChange}
                />Ham
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='bacon'
                    checked={values.toppings.bacon === true}
                    onChange={onCheckboxChange}
                />Bacon
                </label>
                <br></br>
                <label>
                    <input
                    type="checkbox"
                    name='mushroom'
                    checked={values.toppings.mushroom === true}
                    onChange={onCheckboxChange}
                    />Mushroom
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='pineapple'
                    checked={values.toppings.pineapple === true}
                    onChange={onCheckboxChange}
                />Pineapple
                </label>
                <br></br>
                <label>
                <input
                    type="checkbox"
                    name='greenpeppers'
                    checked={values.toppings.greenpeppers === true}
                    onChange={onCheckboxChange}
                />Green Peppers
                </label>
                <br></br>
                </div>
                <div>
                    <br></br>
                <label>Any special instructions?<br></br>
                    <input
                    type='text'
                    placeholder="Type here..."
                    name='specialOrder'
                    onChange={onInputChange}
                    value={values.special}>
                    </input>
                </label>
                </div>
                <br></br>
                <button disabled={disabled} id='submitBtn'>Add to Order</button>
            </form>
        </FormDiv>
    )
}

export default Pizza