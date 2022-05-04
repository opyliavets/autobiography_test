import React, {FC, useEffect, useState} from 'react';

type DataProps = {
    date: string
}


export const Data: FC<DataProps> = (props) => {
    return (
        <div>
            <h1>
                {props.date}
            </h1>
        </div>
    )
}