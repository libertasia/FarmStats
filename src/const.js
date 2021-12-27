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
