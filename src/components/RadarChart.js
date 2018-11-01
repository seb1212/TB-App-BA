import React, { Component } from "react";
import Svg from "react-native-svg";
import { VictoryChart,VictoryGroup,VictoryArea,VictoryTheme,VictoryPolarAxis,VictoryLabel } from "victory-native";

//constantes qui représentent la valeur maximum des axes (dimensions)
const AXE_MAX_VALUE = 5;

export default class RadarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.processData(this.props.dimValues),
      maxima: this.getMaxima(this.props.dimValues),
    };
  };

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = AXE_MAX_VALUE;
      return memo;
    }, {});
  };

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  };

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
          {
            this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 20 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
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
