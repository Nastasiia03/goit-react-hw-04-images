import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout';
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from 'components/Button/Button';
import { getImages } from 'services/getImages';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from './Modal/Modal';
import { GlobalStyle } from './Globalstyle';


export class App extends Component {
  state = {
    images: [],
    page: 1,
    textSearch: '',
    loading: false,
    error: '',
    showModal: false,
    largeImage: ''
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch) {
      this.getData();
    }
  }

getData=()=>{
  const {page, textSearch} = this.state;
  this.setState({loading: true});
getImages(textSearch.trim(), page)
.then((response) => response.json())
.then((images) => {
 if (images.hits.length < 1) {
  toast.error("The gallery is empty 😒")
  return Promise.reject(new Error('Not found'))
}
  this.setState(prevState => ({ images: [...prevState.images, ...images.hits], page: prevState.page + 1 }))
   if (page !== 1) {
        this.scrollLoadMore();
      } 
})
.catch((error) => {
  console.log('error :>> ', error)
  this.setState({error})
})
.finally(() => {
this.setState({ loading: false}) 
 })
}

handleSubmit = (textSearch) => {
		this.setState({ 
      images: [],
      page: 1,
      textSearch: textSearch,
      error: ''
     })
  }
  
  openModal = (fullImage) => {
    this.setState({
      largeImage: fullImage,
      showModal: true
})
  }

  closeModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      
}))
  }

  scrollLoadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const {images, loading, showModal, largeImage} = this.state;
    const showLoadMore = images.length > 0 && images.length >= 12;
    return (
      <>
        <GlobalStyle/>
        <Searchbar onSearch={this.handleSubmit} />
        <Toaster position="top-right"/>
        <Layout>
          <ImageGallery images={images} onImageClick={this.openModal} />
        {showLoadMore &&
            <Button onLoad={this.getData} />} 
        </Layout>
        {showModal && <Modal onClose={this.closeModal}>
        <img src={largeImage} alt=""/> 
        </Modal>}
        {loading && <Loader/>}
      </>
    );
  };
};
