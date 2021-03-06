import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SelectedLocationsShape, SelectedMetricsShape} from "../../const";
import {setLocationFilter, setMetricFilter} from "../../store/action";
import {getLocations, getMetricTypes} from "../../store/selectors";

const Filter = (props) => {
  const {metricTypes, locations, onMetricFilterClick, onLocationFilterClick} = props;

  const handleLocationFilterChange = (evt) => {
    onLocationFilterClick(evt.target.name, evt.target.checked);
  };

  const handleMetricFilterChange = (evt) => {
    onMetricFilterClick(evt.target.name, evt.target.checked);
  };

  return (
    <section className="filter">
      <h2>Filter options</h2>
      <form className="filter__form" action="#" method="get">
        <section className="filter__form-section">
          <h3>Location</h3>
          <ul className="filter__list">
            {locations.map((item) =>
              <li className="filter__list-item" key={item.farm_id}>
                <input type="checkbox"
                  className="filter__checkbox visually-hidden"
                  id={item.name}
                  name={item.farm_id}
                  checked={item.isSelected}
                  onChange={handleLocationFilterChange}
                />
                <label className="filter__label" htmlFor={item.name}>{item.name}</label>
              </li>
            )}
          </ul>
        </section>

        <section className="filter__form-section">
          <h3>Metric</h3>
          <ul className="filter__list">
            {metricTypes.map((metric) =>
              <li className="filter__list-item" key={metric.type}>
                <input type="checkbox"
                  className="filter__checkbox visually-hidden"
                  id={metric.type}
                  name={metric.type}
                  checked={metric.isSelected}
                  onChange={handleMetricFilterChange}
                />
                <label className="filter__label" htmlFor={metric.type}>{metric.type}</label>
              </li>
            )}
          </ul>
        </section>
      </form>
    </section>
  );
};

Filter.propTypes = {
  metricTypes: SelectedMetricsShape,
  locations: SelectedLocationsShape,
  onMetricFilterClick: PropTypes.func.isRequired,
  onLocationFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  metricTypes: getMetricTypes(state),
  locations: getLocations(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMetricFilterClick(metric, isSelected) {
    dispatch(setMetricFilter(metric, isSelected));
  },
  onLocationFilterClick(locationId, isSelected) {
    dispatch(setLocationFilter(locationId, isSelected));
  },
});

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
