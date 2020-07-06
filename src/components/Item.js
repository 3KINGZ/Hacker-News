import React from "react";
import moment from "moment";
import { Icon } from "@blueprintjs/core";

function Item({
  count,
  url,
  title,
  points,
  author,
  time,
  comments,
  tweetlink,
}) {
  return (
    <div className="item">
      <div className="title">
        <span className="sn">{count}.</span>
        <span>
          <Icon icon="caret-up" iconsize={22} className="icon" />
        </span>
        <div className="main-content">
          <span className="main-title">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </span>
          <br />
          {/* <div className="info"> */}
          <span className="poiints">
            {points} points by {author} {moment(time).fromNow()} | {comments}{" "}
            comments |{" "}
            <span>
              <a className="info-link" href={tweetlink}>
                tweet
              </a>
            </span>{" "}
          </span>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
