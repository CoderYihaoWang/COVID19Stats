import React from 'react';

interface IProps {
    setDisplayConfirmed: (b: boolean) => void,
    setDisplayDeaths: (b: boolean) => void,
    setDisplayRecovered: (b: boolean) => void,
    setDisplayActive: (b: boolean) => void
};

export default function OptionsBar(props: IProps) {

    return (
        <p>placeholder for options bar</p>
    )
}