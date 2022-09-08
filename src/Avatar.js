import React from 'react';

function Avatar(props) {
  const { width, height, data, size } = props;
  return (
    <div style={{ display: 'flex', flexDireaction: 'row' }}>
      {data.slice(0, size).map((each, i) => (
        <img
          src={each.img}
          width={width}
          height={height}
          style={{ borderRadius: '50%', marginLeft: -5 }}
        />
      ))}
      <div
        style={{
          backgroundColor: 'lightgrey',
          width: width,
          height: height,
          borderRadius: '50%',
          textAlign: 'center',
        }}
      >
        +{data.length - size}
      </div>
    </div>
  );
}

export default Avatar;
