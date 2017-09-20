/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of reserved characters:
 *     1. Opening Character, "^"
 *     2. Closing Character, "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - Likewise, whenever a Closing Character appears, means a corresponding
 *     Opening Character must have appeared previously.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React, { Component } from 'react';
import styles from '../../styles/app.css';

export function Input({ text, onKeyPress, onChange }) {
  return (
    <div>
      <input
        className={styles['form-input']}
        onKeyPress={onKeyPress}
        onChange={onChange}
        type="text"
        placeholder="Enter input string"
        value={text} />
    </div>
  )
}

export function Button({ onClick }) {
  return (
    <div>
      <button className={styles['btn']} onClick={onClick}>Submit</button>
    </div>
  );
}

export function Output({ isClosed }) {
  if(isClosed === null) {
    return null;
  }

  return (
    <div className={styles['balanced-output']}>
      { isClosed ? 'Looks good ;)' : 'Looks troubled :-(' }
    </div>
  );
}

export function isClosed(str) {
  const ends = '^$';  // Opening and ending indicators
  let stack = [],     // Store next expected end
      char = '';
  
  for(let i = 0; i < str.length; i++) {
    const endsPos = ends.indexOf(str[i]);
    
    if(endsPos === -1)
      continue;
    
    if(endsPos === 0) {               // if ^
      stack.push(ends[1])
    } else {
      if(stack.pop() === undefined)   // If an opening exists
        return false
    }
  }
  
  if(stack.length > 0)
    return false;
  
  return true;
}

export class ComputeIO extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isClosed: null,
      text: ''
    }
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleIsClosed();
    }
  }

  onTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleIsClosed = () => {
    if(isClosed(this.state.text)) {
      this.setState({
        isClosed: true
      })
    } else {
      this.setState({
        isClosed: false
      })
    }
  }

  render() {
    return (
      <section className={styles['balanced-frame']}>
        <Input onKeyPress={this.onKeyPress} onChange={this.onTextChange} />
        <Button onClick={this.handleIsClosed} />
        <Output isClosed={this.state.isClosed} />
      </section>
    );
  }
}
