import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    articles: []
  }
  async componentDidMount() {
    const apiKey = '97dc9f07c306401aa3ede0c41fd1e18d'
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, loading: false })
  }

  render() {

    if (this.state.loading) {
      return <div>Loading...</div>
    }

    if (!this.state.articles.length) {
      return <div>Didn't get a article</div>
    }

    return (
      <div>
        {this.state.articles.map(article => (
          <div>
            <div>{article.title}</div>
            <div>{article.source.name}</div>
            <img src={article.urlToImage}></img>
            <p datetime=''></p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;