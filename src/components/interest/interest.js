import "./Interest.css";


function Interest({prop}) {
  const interest1 = prop[0].interest1
  console.log(interest1)
  return (

    <div className="interest">
      <h2> Sở Thích </h2>
      {interest1.map((post) => 
        <h3 key={post.id}><i className={`${post.icon}`} aria-hidden="true"></i> {post.name} </h3>)}

    </div>

  );
}

export default Interest;