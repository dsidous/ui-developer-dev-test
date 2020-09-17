import React from 'react';
import './styles.css';

const Table = ({ data }) => {
  return (
    <table className="myTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last name</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={`${row.nameLast}-${row.room}`}>
            <td>{row.nameFirst}</td>
            <td>{row.nameLast}</td>
            <td>{row.room}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
