import React, { Component } from 'react';
import Identicon from 'identicon.js';

class PostsList extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 py-4 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <form onSubmit={(event) => {
                event.preventDefault()
                const content = this.postContent.value
                this.props.createPost(content)
              }}>
              <div className="form-group mr-sm-2">
                <input
                  id="postContent"
                  type="text"
                  ref={(input) => { this.postContent = input }}
                  className="form-control"
                  placeholder="Share your thoughts in a decentralized way"
                  required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Share</button>
            </form>
            <div className="content mr-auto ml-auto mt-4">
              { this.props.posts.map((post, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(post.author, 30).toString()}`}
                      />
                      <small className="text-muted">{post.author}</small>
                    </div>
                    <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>{post.content}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted my-auto">
                          TIPS: {window.web3.utils.fromWei(post.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-secondary btn-sm float-right "
                          name={post.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.01', 'Ether')
                            this.props.tipPost(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.01 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default PostsList;