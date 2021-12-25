import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import DataTable from "../data-table/data-table";
import {getActiveTab, getAllFarmsLoadedStatus, getAllFarmsStats, getAllFarmsStatsLoadedStatus} from "../../store/selectors";
import {fetchAllFarmsStats} from "../../store/api-actions";
import {TabTypes} from "../../const";

// const data = [
//   {
//     "location": "farm1",
//     "datetime": "2021",
//     "sensor_type": "temperature",
//     "value": 1,
//   },
// ];

// for (let i = 2; i < 240; i++) {
//   data.push({
//     "location": "farm1",
//     "datetime": "2021",
//     "sensor_type": "temperature",
//     "value": i,
//   })
// }

const MainScreen = (props) => {
  const {activeTab, allFarmsStats, isAllFarmsStatsLoaded, isAllFarmsLoaded, loadFarmsStats} = props;

  useEffect(() => {
    if (!isAllFarmsStatsLoaded && isAllFarmsLoaded) {
      console.log(`loading farm stats`)
      loadFarmsStats();
    }
  }, [isAllFarmsStatsLoaded, isAllFarmsLoaded]);

  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1 className="visually-hidden">Solita Farms Statistics</h1>
        <Tabs />
        {activeTab === TabTypes.TABLE &&
          <DataTable
            data={allFarmsStats}
          />
        }
      </main>
      <Footer />
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  allFarmsStats: PropTypes.array,
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
  allFarmsStats: getAllFarmsStats(state),
  isAllFarmsStatsLoaded: getAllFarmsStatsLoadedStatus(state),
  isAllFarmsLoaded: getAllFarmsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFarmsStats() {
    dispatch(fetchAllFarmsStats());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
