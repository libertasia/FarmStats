import React from "react";
import {connect} from "react-redux";
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
                  id={item.name}
                  name={item.farm_id}
                  checked={item.isSelected}
                  onChange={handleLocationFilterChange}
                />
                <label htmlFor={item.name}>{item.name}</label>
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
                  id={metric.type}
                  name={metric.type}
                  checked={metric.isSelected}
                  onChange={handleMetricFilterChange}
                />
                <label htmlFor={metric.type}>{metric.type}</label>
              </li>
            )}
          </ul>
        </section>
      </form>
    </section>
  );
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
