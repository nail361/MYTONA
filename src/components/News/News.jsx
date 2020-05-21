import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import * as actions from '../../actions/AppActions';
import { NEWS as NEWS_DATA } from '../../data/dummy-data';
import Article from '../Article/Article';
import classes from './News.module.scss';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    curPage: state.curPage,
  };
}

const ArticlePerPage = 3;

class News extends PureComponent {
  handlePageClick(data) {
    const page = data.selected;
    const { changePage } = this.props;
    changePage(page);
  }

  onChooseArticle(articleId) {
    const { history } = this.props;
    history.push(`/article?id=${articleId}`);
  }

  onLoginPageClick() {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    const { isLogin, curPage } = this.props;
    const pageCount = NEWS_DATA.length > 0 ? Math.ceil(NEWS_DATA.length / ArticlePerPage) : 0;
    const showedNews = NEWS_DATA.filter( (item, index) => index >= curPage * ArticlePerPage && index < curPage * ArticlePerPage + ArticlePerPage );
    
    if (!isLogin){
      return (
        <Redirect to='/login' />
      );
    }

    return (
      <div>
        <div className={classes.NewsList}>
          {showedNews.map((article) => (
            <Article key={article.id} article={article} chooseArticle={this.onChooseArticle.bind(this)} />
          ))}
        </div>
        <ReactPaginate
          initialPage={curPage}
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={(data) => this.handlePageClick(data)}
          containerClassName={classes.Pagination}
          activeClassName={classes.Active}
        />
        <button className={classes.LoginPageBtn} type='button' onClick={this.onLoginPageClick.bind(this)}>To login page</button>
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(News));

News.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
