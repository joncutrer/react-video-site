import React, { Component } from "react";
let RSSParser = require("rss-parser");

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "JC"
    };
  }

  async componentDidMount() {
    console.log("Hello i am componentDidMount()");

    let parser = new RSSParser();

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    const feed = await parser.parseURL(
      CORS_PROXY + "https://www.reddit.com/r/reactjs/.rss"
    );

    console.log(feed);
    this.props.feed = feed;
    // console.log(this.fetchData(this.props.feed));

    //parser.parseURL(CORS_PROXY + "https://www.reddit.com/.rss", function(
    //  err,
    //  feed
    //) {
    //  if (err) throw err;
    //  console.log(feed.title);
    //  feed.items.forEach(function(entry) {
    //    console.log(entry.title + ":" + entry.link);
    //  });
    //});
    // this.setState({ feed });
  }

  render() {
    return (
      <div>
        <h2>Latest News</h2>

        <div style={{ textAlign: "center" }}>
          <ul>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
            <li>
              <NewsItem />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function NewsItem(item) {
  return (
    <div>
      <h3>Title</h3>
      <div>Snippet of story</div>
    </div>
  );
}
