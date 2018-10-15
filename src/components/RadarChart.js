
import React, { Component } from "react";
import Svg from "react-native-svg";
import { VictoryChart,VictoryGroup,VictoryArea,VictoryTheme,VictoryPolarAxis,VictoryLabel } from "victory-native";

const conceptsData = [
  { Besoins: 1, Changement: 5, Value: 2, Parties_prenantes: 4, Context: 3, Solutions: 4 },
  { Besoins: 3, Changement: 4, Value: 1, Parties_prenantes: 5, Context: 5, Solutions: 2 }
];

export default class RadarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(conceptsData),
      maxima: this.getMaxima(conceptsData)
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = 5;
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    return (
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup
          colorScale={["blue", "green"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {this.state.data.map((data, i) => {
            return <VictoryArea key={20} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />
      </VictoryChart>
    );
  }
}
