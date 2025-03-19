
{/* componet name starts with capital letter e.g. Likes.jsx */}

//import React, { useState } from "react";


function Likes() {
  const [count, setCount] = useState(0);

  const addLike = () => {setCount(count + 1);};

  return (
    <>
      <h1>Likes: {count}</h1>
      <button onClick={addLike}>Add Like</button>
    </>
  );
}


// function Likes() {
//   let count = 0;

//   const addLike = () => {
//            count = count + 1;
//            console.log(count);   };
//   return (
//     <>
//       <h1>Likes: {count}</h1>
//       <button onClick={addLike}>Add Like</button>
//     </>
//   );
// }

export default Likes;
