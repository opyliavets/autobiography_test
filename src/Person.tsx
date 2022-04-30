import React from 'react';

type PersonProps = {
  name: string;
  lastname: string;
  bio: string;
  age: number;
  birth: string;
  contacts: { email: string; phone: string; };
  isHuman: boolean;
};

export const Person: React.FC<PersonProps> = (props) => (
  <div className='Person'>
    <h2>Person: {props.name + " " + props.lastname} ({props.isHuman?'human':'who the fuck are you???'})</h2>
    <h3>Age: {props.age}, Birthday: {props.birth}</h3>
    <p>Bio: {props.bio}</p>
    <h4>You can contact me, by email {props.contacts.email} or cellphone {props.contacts.phone}</h4>    
  </div>
);
