import { Component } from 'react'
import { Form, Header, Input, SearchButton } from "./Searchbar.styled";
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';
import PropTypes from "prop-types";

export class Searchbar extends Component {
  state = {
      value: "",
}

    handleChange = ({ target: { value } }) => {
      this.setState({ value })
      
    }
    
    handleSubmit = (e) => {
		e.preventDefault()
		if (!this.state.value) {
			return toast.error('Sorry, the search field is empty 😒')
		}
		this.props.onSearch(this.state.value)
      this.setState({ value: ''})
    }   
    
    render() {
      return  <Header >
        <Form onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
                <AiOutlineSearch size='20' />
            </SearchButton>
            
            <Input
                type="text"
                autocomplete="off"
                  placeholder="Search images and photos"
                  value={this.state.value}
				onChange={this.handleChange}
            />
        </Form>
    </Header >
    }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};