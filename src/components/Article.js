import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {

  state = {
    articles: [],
    // loading: true
  }
  // async componentDidMount() {
  //   const apiKey = '8faaf1904f304d0f9f0f0a05f8b23411'
  //   const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
    
  //   this.setState({ articles: data.articles, loading: false})
  // }
  componentDidMount() {
    const apiKey = '8faaf1904f304d0f9f0f0a05f8b23411'
    const url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`
    axios.get(url).then(res => {
      console.log(res.data.articles);      
      this.setState({articles: res.data.articles});
    });

  }

  

  render() {

  /*  if (this.state.loading) {
      console.log("Loading");
      return <div>Loading...</div>
    }

    if (!this.state.articles.length) {
      console.log("Nothing");
      return <div>Didn't get a article</div>
    }*/
    return (
      this.state.articles.map(article => (
          <div className="col-sm-6 col-lg-3 p-0 m-0 isotope-item text-left" key={article.url + article.urlToImage}>
              <a href={article.url}>
                <div>
                  <div className="thumb-info thumb-info-no-borders thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom border-radius-0">
                    <div className="thumb-info-wrapper thumb-info-wrapper-opacity-6">
                      <img src={article.urlToImage} className="img-fluid" alt="Amazingly Fresh Fruit And Herb Drinks For Summer"/>
                      <div className="date p-absolute z-index-2 top-10 right-10 mr-0 ml-2 pl-1 pt-1">
                        <div className="day bg-color-light font-weight-extra-bold py-2 text-color-dark">12</div>
                        <div className="month text-1 bg-color-light line-height-9 text-default w-100 top-2 d-block py-0"><div className="text-1">Jan</div></div>
                      </div>
                      <div className="thumb-info-title bg-transparent p-4">
                        <div className="thumb-info-type bg-color-primary px-2 mb-1">{article.source.name}</div>
                        <div className="thumb-info-inner mt-1">
                          <h2 className="text-color-light line-height-2 text-4 font-weight-bold mb-0">{article.title}</h2>
                        </div>
                        <div className="thumb-info-show-more-content">
                          <p className="mb-0 text-1 line-height-9 mb-1 mt-2 text-light opacity-5 d-none d-lg-block">{article.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            ))
    )
  }
}

  export default Article;