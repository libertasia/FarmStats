import React from "react";
import AggregationSelectorForm from "../aggregation-selector-form/aggregation-selector-form";
// import {connect} from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataGraphs = (props) => {
  // const {activeTab, isAllFarmsStatsLoaded, isAllFarmStatsLoading, isAllFarmsLoaded, loadFarmsStats, filteredStats} = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [3, 4, 5, 6, 7],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <React.Fragment>
      <AggregationSelectorForm />
      <Bar
        options={options}
        data={data}
      />
    </React.Fragment>
  );
};

// MainScreen.propTypes = {
//   allFarmsStats: PropTypes.array,
// };

// const mapStateToProps = (state) => ({
//   activeTab: getActiveTab(state),
//   filteredStats: getFilteredFarmsStats(state),
//   isAllFarmsStatsLoaded: getAllFarmsStatsLoadedStatus(state),
//   isAllFarmStatsLoading: getAllFarmsStatsLoadingStatus(state),
//   isAllFarmsLoaded: getAllFarmsLoadedStatus(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   loadFarmsStats() {
//     dispatch(fetchAllFarmsStats());
//     dispatch(fetchMonthlyStats());
//   },
// });

// export {DataGraphs};
// export default connect(mapStateToProps, mapDispatchToProps)(DataGraphs);
export default DataGraphs;
