import React, {FC} from 'react';

type Photo = {imgsourse: string}
type Name = {username: string}
  

export const Photo: FC<Photo> = (props) => (
  <div className="photoname_photo">
    <img src={props.imgsourse} alt="photo" />
  </div>
);

export const Name: FC<Name> = (props) => (
  <div className="photoname_name">
    <h1>{props.username}</h1>
  </div>
);

