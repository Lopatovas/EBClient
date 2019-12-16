import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const {
    tableHeader, tableItems,
  } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {tableHeader.map((item, i) => <th scope="col" key={i}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, i) => (
          <tr key={i}>
            <td>{item.from_id}</td>
            <td>{item.to_id}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableItems: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  tableHeader: [],
  tableItems: [{ name: '', amount: 0 }],
};

export default Table;
