import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import DataTable from "../data-table/data-table";
import Filter from "../filter/filter";
import DataGraphs from "../data-graphs/data-graphs";
import {getActiveTab, getAllFarmsLoadedStatus, getAllFarmsStatsLoadedStatus, getFilteredFarmsStats, getAllFarmsStatsLoadingStatus} from "../../store/selectors";
import {fetchAllFarmsStats, fetchMonthlyStats} from "../../store/api-actions";
import {FarmsStatsShape, TabType} from "../../const";

const MainScreen = (props) => {
  const {activeTab, isAllFarmsStatsLoaded, isAllFarmsLoaded, loadFarmsStats, filteredStats} = props;

  useEffect(() => {
    if (isAllFarmsLoaded && !isAllFarmsStatsLoaded) {
      loadFarmsStats();
    }
  }, [isAllFarmsStatsLoaded, isAllFarmsLoaded]);

  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1 className="visually-hidden">Solita Farms Statistics</h1>
        <Filter />
        <Tabs />
        {activeTab === TabType.TABLE &&
          <DataTable
            data={filteredStats}
          />
        }
        {activeTab === TabType.GRAPHS &&
          <DataGraphs />
        }
      </main>
      <Footer />
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  activeTab: PropTypes.string.isRequired,
  isAllFarmsStatsLoaded: PropTypes.bool.isRequired,
  isAllFarmsLoaded: PropTypes.bool.isRequired,
  loadFarmsStats: PropTypes.func.isRequired,
  filteredStats: FarmsStatsShape,
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
  filteredStats: getFilteredFarmsStats(state),
  isAllFarmsStatsLoaded: getAllFarmsStatsLoadedStatus(state),
  isAllFarmStatsLoading: getAllFarmsStatsLoadingStatus(state),
  isAllFarmsLoaded: getAllFarmsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFarmsStats() {
    dispatch(fetchAllFarmsStats());
    dispatch(fetchMonthlyStats());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
