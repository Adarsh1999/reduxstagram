import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const { post, i, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="drid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>

          {/*<CSSTransitionGroup 
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>
              {post.likes}
            </span>
          </CSSTransitionGroup>*/}
          <TransitionGroup>
            <CSSTransition
              key={post.likes}
              classNames="likes-heart"
              timeout={{ enter: 500, exit: 500 }}
            >
              <span className="likes-heart">{post.likes}</span>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={() => this.props.increment(i)} className="likes">
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />{' '}
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
