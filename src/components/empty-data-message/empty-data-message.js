import React from "react";

const EmptyDataMessage = () => {
return (
    <div className="message-wrapper">
      <p>No data found for selected filters. <br /> Try changing your selection.</p>
    </div>
  );
};

export default EmptyDataMessage;
