import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {RecordsResponse} from './types';
import {formatDate} from './helpers';

import './styles.css';

const Records = () => {
    const [ recordsResponse, setRecordsResponse ] = useState<RecordsResponse>();
    
    useEffect(() => {
        api.get('records')
        .then( response => setRecordsResponse(response.data));
    },[]);

    return  (
        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ); 
}

export default Records;




