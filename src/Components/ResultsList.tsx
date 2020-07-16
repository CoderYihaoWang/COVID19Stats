import React, { useState } from 'react';
import ResultItem from './ResultItem'

interface IProps {
    page: number | null,
    search: string | null,
    location: string | null,
    fullTime: boolean
}

function ResultsList(props: IProps) {


    return <p>Placeholder for results list</p>
}

export default ResultsList
