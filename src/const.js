import PropTypes from "prop-types";

export const SelectedLocationsShape = PropTypes.arrayOf(
  PropTypes.shape({
    farm_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
  })
).isRequired;

export const SelectedMetricsShape = PropTypes.arrayOf(
  PropTypes.shape({
    type: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
  })
).isRequired;

export const MonthlyStatsShape = PropTypes.arrayOf(
  PropTypes.shape({
    farm_id: PropTypes.string.isRequired,
    sensor_type: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        average: PropTypes.number.isRequired,
        median: PropTypes.number.isRequired,
        standard_deviation: PropTypes.number.isRequired,
      })
    )
  })
).isRequired;

export const FarmsStatsShape = PropTypes.arrayOf(
  PropTypes.shape({
    farm_id: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    sensor_type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })
).isRequired;

export const AppRoute = {
  ROOT: `/`,
};

export const APIRoute = {
  FARMS: `/v1/farms`,
};

export const TabType = {
  GRAPHS: `graphs`,
  TABLE: `table`,
};

export const TableHeaders = [
  {
    title: `Location`,
  },
  {
    title: `Datetime (UTC)`,
  },
  {
    title: `Metric`,
  },
  {
    title: `Value`,
  }
];

export const MetricType = {
  PH: `ph`,
  RAINFALL: `rainfall`,
  TEMPERATURE: `temperature`,
};

export const AggregationType = {
  AVERAGE: `average`,
  MEDIAN: `median`,
  DEVIATION: `standard_deviation`,
};
