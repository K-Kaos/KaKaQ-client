import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data, keys }) => {

    return (
        <div style={{ width: '800px', height: '350px', margin: '0 auto' }}>
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy="option"
                margin={{ top: 0, right: 150, bottom: 50, left: 150 }}
                padding={0.3}
                layout="horizontal"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ theme: 'background' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'counts',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    //tickValues: 'every 1'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'option',
                    legendPosition: 'middle',
                    legendOffset: -85
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
            />
        </div>
    )
};

export default BarChart;