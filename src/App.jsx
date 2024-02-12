import { Component } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'products',
      data: [],
      isModalShow: false,
    }
  }

  fetchDisplayData = (displayType) => {
    fetch(`https://fakestoreapi.com/${displayType}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          displayType,
          data: json,
          isModalShow: this.state.isModalShow,
        })
      })
      .catch(error => {
        console.error('Error fetching display data:', error);
      });
  }

  handleDisplayNoFetch = (displayType) => {
    this.setState({
      displayType,
    });
  }

  handleShowModal = (bool) => {

    this.setState({
      isModalShow: bool,
    })
  }

  componentDidMount() {
    this.fetchDisplayData('products');
  }

  render() {
    return (
      <div className='flex flex-col h-dvh justify-between'>
        <Header changeState={this.fetchDisplayData} changeDisplayNoFetch={this.handleDisplayNoFetch} />
        <Display displayType={this.state.displayType} data={this.state.data} />
        <Footer />
        {this.state.isModalShow && <Modal hideModal={this.handleShowModal} />}
        {this.state.isModalShow == false && this.state.displayType === 'products' && <button onClick={() => this.handleShowModal(true)} className='fixed bg-[#D27C2C] right-5 bottom-5 p-5 border rounded-full shadow-md text-4xl opacity-90 hover:opacity-100 hover:shadow transition'>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 28.5V7.5M28.5 18H7.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>}
      </div>
    );
  }
}

export default App;