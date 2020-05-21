import React from 'react';
import classes from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={classes.LdsRing}><div></div><div></div><div></div><div></div></div>
  )
}
