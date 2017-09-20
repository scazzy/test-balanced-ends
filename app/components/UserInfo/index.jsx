import React from 'react';

export function UserInfo(props) {
  return (
    <span {...props}>
      {props.name}
    </span>
  );
}
