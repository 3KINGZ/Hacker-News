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
        <span className="main-title">
          <a href={url}>{title}</a>
        </span>
      </div>
      <div className="info">
        <span className="points">
          {points} points by {author} {moment(time).fromNow()} | {comments}{" "}
          comments |{" "}
          <span>
            <a className="info-link" href={tweetlink}>
              tweet
            </a>
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default Item;
