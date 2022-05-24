import React from "react";

const Test = () => {
    const ifram =() =>{
        return{
            __html: '<iframe src="https://emedicshops.com/" height="100%" width="100%"></iframe>'
        }
    }
  return (
  <div >
      <div style={{height:"100vh"}} dangerouslySetInnerHTML={ifram()} />
  </div>
  );
};

export default Test;
