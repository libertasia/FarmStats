import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {TabTypes} from "../../const";
import {setActiveTab} from "../../store/action";
import {getActiveTab} from "../../store/selectors";

const TabDetails = [
  {
    type: TabTypes.TABLE,
    title: `Table`
  },
  {
    type: TabTypes.GRAPHS,
    title: `Graphs`
  },
];

const Tabs = (props) => {
  const {activeTab, onSetActiveTab} = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    onSetActiveTab(evt.currentTarget.dataset.id);
  };

  return (
    <ul className="tabs-list container">
      {
        TabDetails.map((tab) =>
          (
            <li key={tab.type} data-id={tab.type} onClick={handleTabClick} className={`tabs-list__item ${tab.type === activeTab ? `tabs-list__item--active` : `tabs-list__item--inactive`}`}>
              <button type="button" className="tabs-list__link-btn">{tab.title}</button>
            </li>
          ))
      }
    </ul>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveTab(tabId) {
    dispatch(setActiveTab(tabId));
  },
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
