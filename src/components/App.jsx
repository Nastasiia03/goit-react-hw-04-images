import { useState, useEffect } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout';
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from 'components/Button/Button';
import { getImages } from 'services/getImages';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Modal } from './Modal/Modal';
import { GlobalStyle } from './Globalstyle';


export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [textSearch, setTextSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  
  useEffect(() => {
    if (textSearch !== "") {
    setLoading(true);
getImages(textSearch.trim(), page)
.then((response) => response.json())
.then((images) => {
 if (images.hits.length < 1) {
  toast.error("The gallery is empty 😒")
  return Promise.reject(new Error('Not found'))
  }
  setImages(prevImages => [...prevImages, ...images.hits]);
   if (page !== 1) {
        scrollLoadMore();
      } 
})
.catch((error) => {
  setError(error)
})
.finally(() => {
setLoading(false) 
 })
    };
  }, [page, textSearch]);

  const handleSubmit = (textSearch) => {
    setImages([]);
    setPage(1);
    setTextSearch(textSearch);
    setError("");
  }
  
  const openModal = (fullImage) => {
    setLargeImage(fullImage);
    setShowModal(true);
}

  const closeModal = () => {
    setShowModal(!showModal)
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

 const scrollLoadMore = () => {
   window.scrollTo({
     top: document.documentElement.scrollHeight,
     behavior: 'smooth',
   });
  }

  const showLoadMore = images.length > 0 && images.length >= 12;
  
    return (
      <>
        <GlobalStyle/>
        <Searchbar onSearch={handleSubmit} />
        <Toaster position="top-right"/>
        <Layout>
          <ImageGallery images={images} onImageClick={openModal} />
          {error && console.log('error :>> ', error)} 
          {showLoadMore &&
            <Button onLoad={loadMore} />} 
        </Layout>
        {showModal && <Modal onClose={closeModal}>
        <img src={largeImage} alt=""/> 
        </Modal>}
        {loading && <Loader />}

      </>
    );
  };

