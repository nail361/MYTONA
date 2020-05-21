import React from 'react'
import PropTypes from 'prop-types'
import classes from './Article.module.scss';

const Article = (props) => {
  const { article } = props;

  return (
    <div className={classes.ArticleWrapper} onClick={() => props.chooseArticle(article.id)}>
      <div className={classes.Title}>
        <h3>{article.title}</h3>
      </div>
      <span className={classes.Date}>{article.date}</span>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default Article;
