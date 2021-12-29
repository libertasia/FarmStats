import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {TabType} from "../../const";
import {setActiveTab} from "../../store/action";
import {getActiveTab} from "../../store/selectors";

const TabDetails = [
  {
    type: TabType.TABLE,
    title: `Table`
  },
  {
    type: TabType.GRAPHS,
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
    <div className="tabs">
      <ul className="tabs__list">
        {
          TabDetails.map((tab) =>
            (
              <li key={tab.type} data-id={tab.type} onClick={handleTabClick} className={`tabs__list-item ${tab.type === activeTab ? `tabs__list-item--active` : `tabs__list-item--inactive`}`}>
                <button type="button" className="tabs__link-btn">{tab.title}</button>
              </li>
            ))
        }
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onSetActiveTab: PropTypes.func.isRequired,
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
