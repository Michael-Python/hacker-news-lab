import React from 'react';

const NewsItem = (props) => {
    return(
        <div className="article">
       <a href={props.url}><h3>{props.title}</h3></a> 
       <p>{props.by}</p>
        <p>{props.score}</p>

        </div>
    )
}
export default NewsItem;