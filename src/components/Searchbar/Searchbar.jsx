import { Component } from "react";
import { toast } from 'react-toastify';
import { SearchFormBox, Header, SearchFormButton,SearchFormInput } from './Serchbar.styled';
import { MdSearch } from "react-icons/md";
import PropTypes from 'prop-types';


export class Searchbar extends Component {
    state={
        searchPictures: '',
    }

    handleNameChange = (e) => {
        e.preventDefault();
        
        if (this.state.searchPictures.trim() === '') {
            return toast.error("Please input some name pictures to find ");
        }
        
        this.props.propSubmit(this.state.searchPictures);

    }


    handleInputChange = (e) => {

        this.setState({ searchPictures: e.currentTarget.value.toLowerCase()})
    }


    render() {
        return (
            <Header>
                <SearchFormBox
                    onSubmit={this.handleNameChange}>
                        <SearchFormButton type="submit">
                            <MdSearch size={40} />
                        </SearchFormButton>

                        <SearchFormInput onChange={this.handleInputChange}
                            type="text"
                            value={this.state.searchPictures}
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                    />
                </SearchFormBox>
            </Header>
            
        )
    }
}

Searchbar.propTypes = {
    propSubmit: PropTypes.func.isRequired,
}