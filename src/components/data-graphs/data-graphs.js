import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AggregationSelectorForm from "../aggregation-selector-form/aggregation-selector-form";
import EmptyDataMessage from "../empty-data-message/empty-data-message";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {getActiveAggregation, getMonthlyStats, getSelectedLocations, getSelectedMetrics} from "../../store/selectors";
import {MonthlyStatsShape, SelectedLocationsShape, SelectedMetricsShape} from "../../const";
import {getRandomInt} from "../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataGraphs = (props) => {
  const {activeAggregation, selectedLocations, selectedMetrics, monthlyStats} = props;

  const graphColors = [];
    selectedLocations.forEach(() => {
      graphColors.push(`rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, 0.5)`);
    });

  const generateGraphOptions = (metric) => {
    const options = {
      maintainAspectRatio : false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Monthly ${metric.type}`,
        },
      },
    };
    return options;
  };

  const generateGraphData = (sensorType) => {
    // sensorData has measurements for a sensor for each farm
    const sensorData = monthlyStats.filter((element) => element.sensor_type === sensorType.type);
    let groupedDataMap = new Map();
    sensorData.forEach((element) => {
      element.stats.forEach((statsElement) => {
        const mapKey = `${statsElement.year}-${statsElement.month.toString().padStart(2, '0')}`;
        if (!groupedDataMap.has(mapKey)) {
          groupedDataMap.set(mapKey, [{farm_id: element.farm_id, value: statsElement[activeAggregation]}]);
        } else {
          let mapData = groupedDataMap.get(mapKey);
          mapData.push({farm_id: element.farm_id, value: statsElement[activeAggregation]})
          groupedDataMap.set(mapKey, mapData)
        }
      });
    });

    groupedDataMap = new Map([...groupedDataMap.entries()].sort())
    const labels = [...groupedDataMap.keys()];
    const datasets = [];
    selectedLocations.forEach((location, index) => {
      const data = [];
      groupedDataMap.forEach((mapEntry) => {
        let farmValueObj = mapEntry.find((e) => e.farm_id === location.farm_id)
        if (farmValueObj) {
          data.push(farmValueObj.value)
        } else {
          data.push(null)
        }
      })
      datasets.push({
        label: location.name,
        data,
        backgroundColor: graphColors[index],
      });
    });

    const data = {
      labels,
      datasets,
    };
    return data;
  };

  return (
    <React.Fragment>
      <AggregationSelectorForm />
      {selectedLocations.length > 0 && selectedMetrics.length > 0
        ? selectedMetrics.map((metric) => (
            <div className="graph-wrapper" key={`${metric.type}-section`}>
              <Bar key={metric.type}
                options={generateGraphOptions(metric)}
                data={generateGraphData(metric)}
              />
            </div>
          ))
        : <EmptyDataMessage />
      }
    </React.Fragment>
  );
};

DataGraphs.propTypes = {
  activeAggregation: PropTypes.string.isRequired,
  selectedLocations: SelectedLocationsShape,
  selectedMetrics: SelectedMetricsShape,
  monthlyStats: MonthlyStatsShape,
};

const mapStateToProps = (state) => ({
  activeAggregation: getActiveAggregation(state),
  selectedLocations: getSelectedLocations(state),
  selectedMetrics: getSelectedMetrics(state),
  monthlyStats: getMonthlyStats(state),
});

export {DataGraphs};
export default connect(mapStateToProps, null)(DataGraphs);
