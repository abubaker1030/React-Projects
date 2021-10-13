import React from "react";
import './Heading.css';


function Heading()
{
  let date = new Date(2021,9,12);
  date = date.getHours();
  let greeting = "";
  let CssStyle= {
    color: 'green'
  }
  if(date>=5 && date<10){
    greeting = "Good Morning";
    CssStyle.color = 'green';
  }
  else if(date>=10 && date<16){
    greeting = "Good Afternoon";
    CssStyle.color = 'orange';
  }
  else if(date>=16 && date<20){
    greeting = "Good Evening";
    CssStyle.color = '#a76a54';
  }
  else{
    greeting = "Good Night";
    CssStyle.color = 'black';
  }
  return(
    <>
    <div className="mydiv">
      <h1>Hi sir, <span style={CssStyle}>{greeting}</span></h1>
    </div>
  </>
  );
}


export default Heading;