import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AggregationType} from "../../const";
import {setActiveAggregation} from "../../store/action";
import {getActiveAggregation} from "../../store/selectors";

const AggregationTypesDetails = [
  {
    type: AggregationType.AVERAGE,
    title: `Average`
  },
  {
    type: AggregationType.MEDIAN,
    title: `Median`
  },
  {
    type: AggregationType.DEVIATION,
    title: `Standard deviation`
  },
];

const AggregationSelectorForm = (props) => {
  const {activeAggregation, onAggregationTypeClick} = props;

  const handleAggregationTypeChange = (evt) => {
    onAggregationTypeClick(evt.target.value);
  };

  return (
    <section>
      <h2 className="visually-hidden">Aggregation options</h2>
      <form action="#" method="get">
        <section>
          <h3>Select an aggregation option:</h3>
          <ul>
            {AggregationTypesDetails.map((item) =>
              <li key={item.type}>
                <input type="radio"
                  data-testid={item.type}
                  id={item.type}
                  name="aggregationType"
                  value={item.type}
                  checked={item.type === activeAggregation}
                  onChange={handleAggregationTypeChange}
                />
                <label htmlFor={item.type}>{item.title}</label>
              </li>
            )}
          </ul>
        </section>
      </form>
    </section>
  );
};

AggregationSelectorForm.propTypes = {
  activeAggregation: PropTypes.string.isRequired,
  onAggregationTypeClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeAggregation: getActiveAggregation(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAggregationTypeClick(aggregation) {
    dispatch(setActiveAggregation(aggregation));
  },
});

export {AggregationSelectorForm};
export default connect(mapStateToProps, mapDispatchToProps)(AggregationSelectorForm);

