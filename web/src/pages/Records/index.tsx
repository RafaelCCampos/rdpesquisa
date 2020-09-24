import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Pagination from './Pagination';
import Filters from '../../components/Filters';
import {RecordsResponse} from './types';
import {formatDate} from './helpers';

import './styles.css';

const Records = () => {
    const [ recordsResponse, setRecordsResponse ] = useState<RecordsResponse>();
    const [ activePage, setActivePage ] = useState(0);
    
    useEffect(() => {
        api.get(`records?linesPerPage=12&page=${activePage}`)
        .then( response => setRecordsResponse(response.data));
    },[activePage]);

    const handlePageChange = (index: number) => (        
        setActivePage(index)
    )

    return  (
        <div className="page-container">
            <Filters
                link="/charts"
                linkText="VER GRÁFICOS"
            />
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
            <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            />
        </div>
    ); 
}

export default Records;
