import React, { useState } from 'react';

const containerStyle = {
  height: 40,
  width: '100%',
  backgroundColor: "black",
  borderRadius: 50,
  margin: 8,
  // boxShadow: 5 2
}

// let fillerStyle = {
//   height: '100%',
//   width: 0,
//   backgroundColor: "#ee5f1b",
//   borderRadius: 'inherit',
//   textAlign: 'right',
//   transition: 'width 1s ease-in-out',
// }

const labelStyle = {
  padding: 5,
  // textShadow: 1px 1px;
  marginTop: 5,
  float: 'right',
  color: 'white',
  fontWeight: 'bold'
}
const ProgressBar = (props) => {
  // const [w, setW] = useState(0);

  // useEffect(() => {
  //   setInterval(() => setW(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);
  const completed = props.completed + '%';
  let fillerStyle = {
    height: '100%',
    width: completed,
    backgroundColor: "#ee5f1b",
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }
  console.log('width ',fillerStyle.width);;

  return (
      // <div className="bar-container">
      //   <div className="bar-filler">
      //   </div>
      //     <span className="bar-label">{`${completed/4}`} / 25</span>
      // </div>

    <div style={containerStyle}>
      <div style={fillerStyle}>
          <span style={labelStyle}>{`${props.completed/4}`} / 25</span>
      </div>
    </div>
  );
};
export default ProgressBar;