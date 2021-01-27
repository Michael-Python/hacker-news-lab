import React from 'react';

const NewsSorter = ({sortedArticles}) => {

   

    return(
        <select onChange={sortedArticles}>
            <option>New</option>
            <option value={sortedArticles}>Sort by Score</option>

        </select>
    )
}

export default NewsSorter;