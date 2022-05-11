import React, { PureComponent } from 'react';
import { Photo, Name } from './Photoname';
import { Data } from './Data';
import usersData from '../../data/data.json'
import styles from '../../styles/user.module.scss'

export class User extends PureComponent{
  render(){
    return (
      <div>
        <Photo className={styles.photo__img} imgsourse={usersData.user_002.photo}/>
        <Name username={usersData.user_002.name}/>
        <Data date={usersData.user_002.birthDate}/>        
      </div>
    )
  }
}