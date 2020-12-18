import { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
    state = {
        search: '',
    };

    handleChange = e => {
        this.setState({ search: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.search.trim() === '') {
            return toast.info('Ничего не ввели в поиск! :(', {
                backgroundColor: '#3f51b5',
            });
        }

        this.props.formSubmitHandler(this.state.search);
        this.reset();
    };

    reset = () => {
        this.setState({ search: '' });
    };

    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <input
                        className="SearchForm-input"
                        type="text"
                        value={this.state.search}
                        autoComplete="off"
                        autoFocus
                        placeholder="Поиск"
                        onChange={this.handleChange}
                    />

                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                </form>
            </header>
        );
    }
}
