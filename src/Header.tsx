import React from 'react';

type HeaderProps = {
    copyright: string;
};

export const Header: React.FC<HeaderProps> = (props) => 
    <h1>
        {props.copyright}
    </h1>;
