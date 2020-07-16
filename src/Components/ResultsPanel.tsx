import React, { useState } from 'react'
import ResultsList from './ResultsList'
import { IUserInput } from '../Common/Interfaces'

type IProps = IUserInput;

function ResultsPanel(props: IProps) {
    const [page, setPage] = useState<number>(0);
    
    return <div>
        <ResultsList page={page} search={props.search} location={props.location} fullTime={props.fullTime}></ResultsList>
    </div>
}

export default ResultsPanel;