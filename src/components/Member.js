import React from 'react';

function Member({ member, onRemove }) {
  return (
    <div className="member">
      <span className="member-name">{member.name}</span>
      <button className="remove-button" onClick={onRemove}>Odstranit</button>
    </div>
  );
}

export default Member;
