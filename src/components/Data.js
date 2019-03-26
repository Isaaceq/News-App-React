import React, { Component } from 'react';
import Footer from './Footer';
import Article from './Article';

class Data extends Component {


    
  
    render() {
        
      return(
      <div className="body">
				<div role="main" className="main">

					<div className="sort-destination-loader sort-destination-loader-showing recent-posts bg-dark m-0 p-0">
						<div className="row portfolio-list sort-destination m-0 p-0" data-sort-id="portfolio">

            <Article/>

						</div>
					</div>

					<ul className="nav nav-pills sort-source sort-source-style-3 d-none" data-sort-id="portfolio" data-option-key="filter" data-plugin-options="{'layoutMode': 'packery', 'filter': '*'}">
						{/* <li className="nav-item active" data-option-value="*"><a className="nav-link text-1 text-uppercase active" href="#">Show All</a></li> */}
					</ul>

          <Footer/> 
				</div>
        </div>
        )
    }
  }

  export default Data;

  /* {this.state.articles.map(article => (
            <div>
              <div>{article.title}</div>
              <div>{article.source.name}</div>
              <img src={article.urlToImage}></img>
            </div>
          ))} */