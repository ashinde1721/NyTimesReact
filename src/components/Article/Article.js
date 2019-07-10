import React from 'react';
import './Article.scss';
import calenderIcon from '../../assets/icons/calender.png';
import rightArrowIcon from '../../assets/icons/right-arrow.png'

const article = ({ article, goToDetails }) => {
    const { id, title, byline, published_date, media, url } = article;

    return (
        <div className="article" data-testid="nytimes-card" onClick={goToDetails(url)} key={id}>
            <div className="row">
                <div className="col-3 col-sm-2">
                    <div className="article-image">
                        <img className="img-responsive circle" src={media[0]['media-metadata'][1].url} alt={media[0].caption} />
                    </div>
                </div>
                <div className="col-8">
                    <div className="article-title">{title}</div>
                    <div className="article-byline-block">
                        <span>{byline}</span>
                        <div className="date">
                            <img className="img-responsive icon" height="12" width="12" src={calenderIcon} alt="" />
                            <span className="pad-10">{published_date}</span>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-sm-2 vertical-align-center">
                    <img className="img-responsive cursorPointer" height="20" width="20" src={rightArrowIcon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default article;