import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({articleList}) => {


    return(
        <>

        {articleList.map((article, index) => {
            return(
                <NewsItem
                key={index}
                title={article.title}
                by={article.by}
                score={article.score}
                url={article.url}

                />
            )
        })}
        </>
    )
}

export default NewsList;