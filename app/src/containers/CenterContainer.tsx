import React from 'react';

function CenterContainer({ outerStyle, innerStyle, children }: any) {
  return (
    <div className="center-container">
      <div className="center-container__outer" style={outerStyle}>
        <div className="center-container__inner" style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CenterContainer;
