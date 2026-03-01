import React from "react";
import "../style/feed.scss";
 


const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          <div className="post">
            <div className="user">
              <div className="img-wrapper">
                <img
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <p>Username</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1597613261732-344e083d25e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="icons">
                <div className="left"><button></button><button></button><button></button></div>
                <div className="right"><button></button></div>
            </div>
            <div className="bottom">
              <p className="caption">caption caption</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
