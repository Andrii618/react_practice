import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

const pageElem = (
  <main className="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" value="anonymous" />
      </div>
      <div className="form-control">
        <label className="form-label" id="age" htmlFor="age">
          Age
        </label>
        <input className="form-input" type="number" value={17} name="age" />
        <span style={{ color: 'red', fontWeight: 700 }}>To young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

root.render(pageElem);