import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
import './styles.css'
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import { BarChartData, PieChartData } from './types';
import api from '../../services/api';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';

const initialPieData = {
    labels: [],
    series: [],
}

const Charts = () => {
    const [barData, setBarData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData() {
            const recordsResponse = await api.get('/records');
            const gamesResponse = await api.get('/games');

            const barChartData = buildBarSeries(gamesResponse.data, recordsResponse.data.content );
            setBarData(barChartData);

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genderChartData);
        }

        getData();

        
    }, []);

    return (
        <div className="page-container">
            <Filters
                link="/records"
                linkText="VER TABELA"
            />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">Jogos mais votados</h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="650"
                            series={[{data: barData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                        <Chart
                            options={{...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={platformData?.series}
                        />    
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>
                        <Chart
                            options={{...pieOptions, labels: genderData?.labels }}
                            type="donut"
                            series={genderData?.series}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;