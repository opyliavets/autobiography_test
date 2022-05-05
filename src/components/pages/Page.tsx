import React, { FC } from 'react';


type PageProps = {
    title: string, 
    description: string,
    firstItemTitle: string,
    secondItemTitle: string
}

export const Page: FC<PageProps> = (props) => (
    <div className={props.title}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ul>
            <li>{props.firstItemTitle}</li>
            <li>{props.secondItemTitle}</li>
        </ul>
    </div>
)