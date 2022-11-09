import { Component } from "react";
// import { toast } from 'react-toastify';
import { SearchFormBox, Header, SearchFormButton,SearchFormInput } from './Serchbar.styled';
import { MdSearch } from "react-icons/md";
import PropTypes from 'prop-types';


export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
     this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

    handleSubmit = e => {
      e.preventDefault();
      const searchValue =this.state.value.trim()
        if (searchValue === '') {
        alert('Введіть імя картинки.')
            return;
        }
        this.props.onSubmit(searchValue);
        this.setState({ value: '' });
    };

    render() {
      return (
       <Header>
        <SearchFormBox onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <MdSearch style={{ marginRight: 10 }} />
            
            </SearchFormButton>
            <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchFormBox>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};