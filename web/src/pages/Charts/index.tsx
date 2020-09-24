import React from 'react';
import Filters from '../../components/Filters';
import './styles.css'
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';

const chartData = [
    {
        x: 'Mortal Kombat 11',
        y: 10
    },
    {
        x: 'The Last Of Us 2',
        y: 20
    }
];

const Charts = () => {
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
                            height="150"
                            series={[{data: chartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                        <Chart
                            options={{...pieOptions, labels: ['Mortal Kombat 11', 'The last Of Us 2']}}
                            type="donut"
                            series={[33,66]}
                        />    
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>
                        <Chart
                            options={{...pieOptions, labels: ['Luta', 'Ação']}}
                            type="donut"
                            series={[50,50]}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;