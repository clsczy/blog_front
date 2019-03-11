import React from 'react';
import Reload from './reload';
import './loading.less';

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <Reload></Reload>;
    } else if (props.pastDelay) {
      return <div id="Loading">
      <div className="loader-inner ball-beat">
        <div></div>
        <div></div>
        <div></div>
        <p>loading......</p>
      </div>
    </div>
    } else {
      return null;
    }
  } else if (props.error) {
    return <Reload></Reload>
  } else {
    return null;
  }
}
