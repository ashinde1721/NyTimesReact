import React, { Component } from 'react';
import Article from '../../components/Article/Article';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: 7,
            err: false
        };
    }

    componentDidMount() {
        this._isMounted = true;
        this.props.fetchArticles();
      }
    
      componentWillUnmount() {
        this._isMounted = false;
      }

    goToDetails = (url) => () => {
        this.props.history.push(`/details?url=${url}`);
    }

    render() {
        let articles = [...this.props.articlesList];
        if (this.props.search) {
            articles = this.props.articlesList.filter(article => {
                if (article.title.toLowerCase().includes(this.props.search.toLowerCase())) {
                    return article;
                }
                return null;
            })
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    {
                        articles.map((article, index) => {
                            return (
                                <Article key={article.id} article={article} goToDetails={this.goToDetails} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        articlesList: state.articlesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(actionCreators.fetchArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
