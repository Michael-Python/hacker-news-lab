import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList.js'
import NewsItem from '../components/NewsItem.js'

const NewsContainer = () => {

    const [articleListNumbers, setArticleListNumbers] = useState({});
    const [articleNumbersLoaded, setArticleNumbersLoaded] = useState(false);
    const [specificArticle, setSpecificArticle] = useState({});
    const [specificArticleLoaded, setSpecificArticleLoaded] = useState(false);

    const getArticleListNumbers = () => {
        console.log("getting article number");
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(data => setArticleListNumbers(data))
        .then(() => setArticleNumbersLoaded(true))
    }

    useEffect(() => {
        getArticleListNumbers();
    }, [])

    const getSpecificArticle = () => {
        console.log("getting specific article");
        let articleId = 1
        fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
        .then(res => res.json())
        .then(data => setSpecificArticle(data))
        .then(() => setSpecificArticleLoaded(true))
    }
    
    useEffect(() => {
        getSpecificArticle();
    }, [])

    return(
        <>
        <h2>Hiya I'm the news container</h2>
        <NewsList />
        </>
    )

}
export default NewsContainer;