import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList.js'
import NewsItem from '../components/NewsItem.js'
import NewsSorter from '../components/NewsSorter'

const NewsContainer = () => {

    const [articleNumbersLoaded, setArticleNumbersLoaded] = useState(false);
    const [articleList, setArticleList] = useState([]);

    const getArticleListNumbers = () => {
        console.log("getting article number");
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => {
            const articleNumbers = data.slice(0, 20)
            const articleRequests = articleNumbers.map((number) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${number}.json`)
                .then(res => res.json())
            }) 
            Promise.all(articleRequests)
            .then(data => setArticleList(data))
            .then(() => setArticleNumbersLoaded(true))
        })   
    }

    useEffect(() => {
        getArticleListNumbers();
    }, [])

    const sortedArticles = articleList.sort((a, b) => (a.score < b.score) ? 1 : -1)


    return(
        <>
        <h1>Hacker News</h1>
        <NewsSorter sortedArticles={sortedArticles}></NewsSorter>
        <NewsList articleList={articleList}/>
        </>
    )

}
export default NewsContainer;