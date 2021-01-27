import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList.js'
import NewsItem from '../components/NewsItem.js'

const NewsContainer = () => {

    return(
        <>
        <h2>Hiya I'm the news container</h2>
        <NewsList />
        </>
    )

}
export default NewsContainer;