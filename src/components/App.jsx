import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import Notiflix from 'notiflix';
import * as Scroll from 'react-scroll';
import { ImageGallery } from './Gallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ButtonMore } from './Button/Button';
import { FetchData } from './api/Api';
const perPage = 12;

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    largeImage: '',
    showModal: false,
    loading: false,
    showLoadMore: false,
  };


  // handleSerchImages = (searchPictures) => {

  //   if (searchPictures === this.state.searchPictures) {
  //     return toast.error("Enter new query for serch, this query you can seee now-))");
  //   }

  //   this.setState({
  //     searchPictures,
  //     page: 1,
  //   });
  // }


  componentDidUpdate(_, prevState) {
    const { page, value, images } = this.state;
    if (prevState.page !== page || prevState.value !== value) {
      this.setState({ loading: true });
      FetchData(value, page, perPage)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            loading: false,
          }));
          if (data.total > perPage) {
            this.setState({ showLoadMore: true });
          } else if (data.total <= images.length + perPage) {
            this.setState({ showLoadMore: false });
            Notiflix.Notify.info(
              "We're sorry, but you've reached the end of search results."
            );
          }
        })
        .catch(this.onApiError);
    }
  }

  onSearch = inputValue => {
    this.setState({
      value: inputValue,
      page: 1,
      images: [],
      showLoadMore: false,
    });
  };

  onApiError = () => {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    this.setState({ loading: false, showLoadMore: false });
  };

  showMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.scrollSlowly();
  };
  openModal = image => {
    this.setState({ showModal: true, largeImage: image });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  scrollSlowly = () => {
    Scroll.animateScroll.scrollToBottom({
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: 50,
    });
  };

  render() {
    const { images, showModal, largeImage, loading, showLoadMore } = this.state;

    return (
      <div
      style={{
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        paddingBottom: 24,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',

      }}>
        <Searchbar onSubmit={this.onSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onModal={this.openModal} />
        )}
        {showModal && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
        {showLoadMore && <ButtonMore onShowMore={this.showMore} />}
        {loading && <Loader />}
      </div>
    );
  }
}
  
  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }))
  // }
  

  // render() {
  //   const { findPictures, status, error, } = this.state;
    
  //   return (<div
  //     style={{
  //       justifyContent: 'center',
  //       flexDirection: "column",
  //       alignItems: 'center',
  //       fontSize: 20,
  //       color: '#010101',
  //       paddingBottom: 24,
  //       display: 'grid',
  //       gridTemplateColumns: '1fr',
  //       gridGap: '16px',

  //     }}>
  //     <Searchbar propSubmit={this.handleSerchImages} />
  //     <ToastContainer autoClose={1500} />
  //     {status === "pending" && <Loader></Loader>}
  //     {status === "rejected" && <Title > {error.message} </Title>}
  //     {status === "resolved" && <>
  //       <ImageGallery pictureSearch={findPictures}></ImageGallery >
  //       {findPictures.hits.length < findPictures.totalHits && <ButtonMore onClick={this.loadMore}></ButtonMore>}
  //     </>}
  //   </div>
  //   );

  