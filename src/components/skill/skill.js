
import "./Skill.css";


function Skill({prop}) {
  const skill= prop[0].skill
  // const skill1=prop.map((post)=>post.skill.reduce((post2)=>))
  // console.log(skill1)
 
 
  return (
    
      <div className="App-skill">

        <h2><i className="fa fa-suitcase" aria-hidden="true"></i> Kỹ Năng </h2>
        {skill.map((post)=>(
          <div key={post.id}>
          <p>{post.name}</p>
          <div className="progress">
        
    
            <div className={`progress-bar ${post.type} progress-bar-striped active`} role="progressbar" aria-valuenow={post.value} aria-valuemin="0" aria-valuemax="100" style={{width: post.value}}>
              {post.value}
            </div>
          </div>
          </div>
        ))}
       
        
      </div>
  );
}

export default Skill;