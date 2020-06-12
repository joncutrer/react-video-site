import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import videoData from "../data/videos.json";

// Filter the videos array for a given videoId
function getVideoById(videoId) {
  const results = videoData.items.filter(video => video.id.videoId === videoId);
  if (results && results.length) {
    return results[0];
  } else {
    return false;
  }
}

export default function Videos() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Videos</h2>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:videoId`}>
          <Video />
        </Route>
        <Route exact={true} path={match.path}>
          <h3>Click on a video to watch!</h3>
          <div class="cards">
            {videoData.items.map((video, idx) => {
              // Return the element. Also pass key
              return (
                <div class="card" title={video.snippet.title}>
                  <div class="content">
                    <Link to={`${match.url}/${video.id.videoId}`}>
                      <img
                        alt="video thumbnail"
                        src={video.snippet.thumbnails.medium.url}
                      />
                    </Link>
                  </div>
                  <footer>{video.snippet.title}</footer>
                </div>
              );
            })}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

function Video() {
  let { videoId } = useParams();

  return (
    <div>
      <Link to="/videos">&laquo; Back</Link>
      <h3>{getVideoById(videoId).snippet.title}</h3>
      <div>{getVideoById(videoId).channelTitle}</div>
      <iframe
        title="Foo"
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}
