import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { NEWS } from '../../../data/dummy-data';
import classes from './ArticleDetailed.module.scss'; 

function ArticleDetailed(props) {
  const query = new URLSearchParams(useLocation().search);
  const articleId = query.get("id");
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
