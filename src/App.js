import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageInfo from './components/ImageInfo';

class App extends Component {
    state = {
        searchImage: '',
    };

    handleFormSubmit = searchImage => {
        this.setState({ searchImage });
    };
    render() {
        return (
            <div className="App">
                <Searchbar formSubmitHandler={this.handleFormSubmit} />
                <ImageInfo searchImage={this.state.searchImage} />
                <ToastContainer autoClose={2000} position="top-center" />
            </div>
        );
    }
}

export default App;
