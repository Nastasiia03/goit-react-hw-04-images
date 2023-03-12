import { useState } from 'react'
import { Form, Header, Input, SearchButton } from "./Searchbar.styled";
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';
import PropTypes from "prop-types";

export const Searchbar = ({...props}) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => {
      setValue(value) 
    }
    
   const handleSubmit = (e) => {
		e.preventDefault()
		if (!value) {
			return toast.error('Sorry, the search field is empty 😒')
		}
		props.onSearch(value)
    setValue('')
    }   
    
      return  <Header >
        <Form onSubmit={handleSubmit}>
            <SearchButton type="submit">
                <AiOutlineSearch size='20' />
            </SearchButton>
            
            <Input
                type="text"
                autocomplete="off"
                  placeholder="Search images and photos"
                  value={value}
				onChange={handleChange}
            />
        </Form>
    </Header >
    
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};