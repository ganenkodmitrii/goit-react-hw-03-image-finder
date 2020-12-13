import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Searchbar from './components/Searchbar';
import ImageInfo from './components/ImageInfo';

class App extends Component {
    state = {
        imageName: '',
    };

    handleFormSubmit = imageName => {
        this.setState({ imageName });
    };
    render() {
        return (
            <div>
                <Searchbar formSubmitHandler={this.handleFormSubmit} />
                <ImageInfo imageName={this.state.imageName} />
                <ToastContainer autoClose={2000} />
            </div>
        );
    }
}

export default App;
