import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
    state = {
        image: '',
    };

    handleChange = e => {
        this.setState({ image: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.image.trim() === '') {
            return toast('Enter text!');
        }

        this.props.formSubmitHandler(this.state.image);
        this.reset();
    };

    reset = () => {
        this.setState({ image: '' });
    };

    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <ImSearch style={{ marginRight: 8 }} />
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        value={this.state.image}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
