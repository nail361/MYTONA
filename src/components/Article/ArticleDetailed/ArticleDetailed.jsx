import React from 'react';
import { Redirect } from 'react-router-dom';
import { NEWS } from '../../../data/dummy-data';
import classes from './ArticleDetailed.module.scss'; 

function ArticleDetailed(props) {
  const articleId = props.match.params.id;
  const article = NEWS.find( (article) => article.id === articleId );
  
  if (!article) return <Redirect to="/" />

  return (
    <div className={classes.ArticleWrapper}>
      <h1>{article.title}</h1>
      <img className={classes.Img} alt='img' src={article.imageUrl} />
      <span>{article.text}</span>
    </div>
  )
}

export default ArticleDetailed;
