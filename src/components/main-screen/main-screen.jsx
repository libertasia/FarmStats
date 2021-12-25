import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import DataTable from "../data-table/data-table";
import {getActiveTab, getAllFarmsLoadedStatus, getAllFarmsStatsLoadedStatus, getFilteredFarmsStats, getAllFarmsStatsLoadingStatus} from "../../store/selectors";
import {fetchAllFarmsStats} from "../../store/api-actions";
import {TabType} from "../../const";
import Filter from "../filter/filter";

const MainScreen = (props) => {
  const {activeTab, isAllFarmsStatsLoaded, isAllFarmStatsLoading, isAllFarmsLoaded, loadFarmsStats, filteredStats} = props;

  useEffect(() => {
    if (isAllFarmsLoaded && !isAllFarmStatsLoading && !isAllFarmsStatsLoaded) {
      loadFarmsStats();
    }
  }, [isAllFarmsStatsLoaded, isAllFarmsLoaded, isAllFarmStatsLoading]);

  return (
    <React.Fragment>
      <Header />
      <main className="wrapper__main container">
        <h1 className="visually-hidden">Solita Farms Statistics</h1>
        <Tabs />
        {activeTab === TabType.TABLE &&
          <section>
            <Filter />
            <DataTable
              data={filteredStats}
            />
          </section>
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
  filteredStats: getFilteredFarmsStats(state),
  isAllFarmsStatsLoaded: getAllFarmsStatsLoadedStatus(state),
  isAllFarmStatsLoading: getAllFarmsStatsLoadingStatus(state),
  isAllFarmsLoaded: getAllFarmsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFarmsStats() {
    dispatch(fetchAllFarmsStats());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
