/* eslint-disable react/jsx-max-depth */

import { createRoot } from 'react-dom/client';

import './styles.css';

const pageComponent = (
  <main className="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" id="name" name="name" type="text" value="anonymous" />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="age" id="age">
          Age
        </label>
        <input className="form-input" name="age" type="number" value="17" />
        <span style={{ color: 'red', fontWeight: 700 }}>To young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(pageComponent);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css';

// const rootElem = document.getElementById('root');

// const pageElem = (
//   <main className="page">
//     <form className="login-form">
//       <h1 className="form-title">Profile</h1>
//       <div className="form-control">
//         <label className="form-label" htmlFor="name">
//           Name
//         </label>
//         <input className="form-input" type="text" id="name" name="name" value="anonymous" />
//       </div>
//       <div className="form-control">
//         <label className="form-label" id="age" htmlFor="age">
//           Age
//         </label>
//         <input className="form-input" type="number" value={17} name="age" />
//         <span style={{ color: 'red', fontWeight: 700 }}>To young</span>
//       </div>
//       <button className="submit-button" type="submit">
//         Submit
//       </button>
//     </form>
//   </main>
// );

// ReactDOM.render(pageElem, rootElem);
