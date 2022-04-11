
import { useEffect, useMemo, useState } from "react";
import "./About.css";

function About({prop}) {
  return (
    
    <div className="main">
      <h2> Giới Thiệu </h2>
    
        <p>{prop[0].introduce}</p>
     
      

    </div>

  );
}

export default About;
