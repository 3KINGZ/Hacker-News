import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Item from "./components/Item";
import Loader from "./Rolling-1s-200px.svg";
import "./index.css";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  let count = 1;

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?tags=front_page`)
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setNews(json.hits.map((c) => c))
      )
      .catch((error) => {
        setError("...oops an error occured while loading page");
      });
  }, [setNews]);

  const tweet = (text, url) => {
    return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  };

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="inner-content">
          {news.length < 1 ? (
            <div className="loader">
              {<img src={Loader} alt="loading gif" /> || <h1>{error}</h1>}
            </div>
          ) : (
            <>
              {error ? (
                <h1>{error}</h1>
              ) : (
                news.map((list) => (
                  <Item
                    key={list.objectID}
                    count={count++}
                    url={list.url}
                    title={list.title}
                    points={list.points}
                    author={list.author}
                    time={list.created_at}
                    comments={list.num_comments}
                    tweetlink={tweet(list.title, list.url)}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
