import React, { useState } from "react";

function ParentChild() {
  const [x, setX] = useState(0);

  const handleXClick = () => {
    setX(x + 1);
  };

  return (
    <div className="component">
      <h1>Component A</h1>
      <p>this.state.x = {x}</p>      
      {/*this.handleXClick => {"this.setState({x: this.state.x + 1})"} <br />*/}  {/* Not working becoz JSX treats => as part of the HTML, not JavaScript.  */}
      <p>this.handleXClick =&gt; {"setX(x + 1)"}</p>  {/* ✅ FIXED: &gt; for ">" */} {}
      <p>{`this.handleXClick => setX(x + 1)`}</p>     {/* ✅ FIXED: backticks */} {/*Solution 2: Wrap Entire Content in {} and inside backticks*/}
      <B x={x} onXClick={handleXClick} />
      <D x={x} onXClick={handleXClick} />
    </div>
  );
}

function B({ x, onXClick }) {
  return (
    <div className="component">
      <h1>Component B</h1>
      <p>this.props.x = {x}</p>
      <p>this.props.onXClick =&gt; (function in A)</p>  {/* ✅ FIXED */}
      <C x={x} onXClick={onXClick} />
    </div>
  );
}

function C({ x, onXClick }) {
  return (
    <div className="component">
      <h1>Component C</h1>
      <p>this.props.x = {x}</p>
      <p>this.props.onXClick =&gt; (function in B)</p>  {/* ✅ FIXED */}
      <button onClick={onXClick}>{x}</button>
      <p>onClick =&gt; this.props.onXClick</p>  {/* ✅ FIXED */}
    </div>
  );
}

function D({ x, onXClick }) {
  return (
    <div className="component">
      <h1>Component D</h1>
      <p>this.props.x = {x}</p>
      <p>this.props.onXClick =&gt; (function in A)</p>  {/* ✅ FIXED */}
      <button onClick={onXClick}>{x}</button>
      <p>onClick =&gt; this.props.onXClick</p>  {/* ✅ FIXED */}
    </div>
  );
}

export default ParentChild;
