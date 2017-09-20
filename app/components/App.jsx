import React from 'react';
import { UserInfo } from './UserInfo';
import { ComputeIO } from './ComputeIO';
import styles from '../styles/app.css';

const CommonMaxWidth = ({ children }) => (
  <div className={styles['max-width']}>
    {children}
  </div>
);

export default function App() {
  return (
    <section>
      <header className={styles.header}>
        <CommonMaxWidth>
          <strong>Source</strong>
          <span style={{ fontWeight: 300 }}>Sage</span>
          {' '}
          <small
            style={{
              fontWeight: 300,
              letterSpacing: 3,
              fontSize: 11,
              marginLeft: 7,
            }}
          >
            Frontend Challenge
          </small>
          <div
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 7,
              textAlign: 'right',
              float: 'right',
            }}
          >
            <UserInfo name="Frontend Challenge" />
          </div>
        </CommonMaxWidth>
      </header>
      <CommonMaxWidth>
        <h1>
          Dear <strong>Potential Candidate</strong>,<br />
        </h1>
        <p>
          Congrats on making it this far!
        </p>
        <p>
          We've made this challenge to simulate a typical workflow working on the frontend.
        </p>
        <h1>Instructions:</h1>
        <p>
          <ol>
            <li>
              Instructions are located in the file
              {' '}
              <code>/app/components/ComputeIO/index.jsx</code>
              .
            </li>
            <li>
              Once you're done, create a repo on github, then add users <code>9y5</code> and <code>her0e1c1</code> as collaborators.
            </li>
          </ol>
        </p>
        <p>
          We want to see how much of our frontend stack you can pick up within the time given, and your ability to make fixes to an existing codebase, amongst other things.
        </p>
        <p>
          All the best!<br /><br />
          <em>Andrew</em><br />
          - The <strong>Source</strong>Sage Engineering Team
        </p>
        <p>
          p.s. feel free to drop me an email at
          {' '}
          <code>andrew@sourcesage.co</code>
          {' '}
          when you need to clarify anything.
        </p>
      </CommonMaxWidth>
      <div className={styles['challenge-accepted']}>
        <div className={styles['button-container']}>
          <ComputeIO />
        </div>
      </div>
    </section>
  );
}
