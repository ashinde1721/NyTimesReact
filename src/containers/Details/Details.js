import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import queryString from 'query-string';
import leftArrowIcon from '../../assets/icons/left-arrow.png'
import "./Details.scss";

class Details extends Component {

  goToArticles = () => {
    this.props.history.push(`/`);
  }

  render() {
    let queryParams = {};

    try {
      queryParams = queryString.parse(get(this.props, 'location.search'));
    } catch (err) { }

    const url = get(queryParams, 'url');
    if (!url) {
      return <div>Page Not Found</div>;
    }

    return (
      <div>
        <div className="back-btn"><img onClick={this.goToArticles.bind(this)} className="img-responsive" height="20" width="20" src={leftArrowIcon} alt="Go back" /></div>
        <iframe title='nyFrame' src={url} />
      </div>
    )
  }

}

export default withRouter(Details);