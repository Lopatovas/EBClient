import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const {
    tableHeader, tableItems, withActions, banUser, giveRole,
  } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {tableHeader.map((item, i) => <th scope="col" key={i}>{item}</th>)}
          {withActions
            ? <th scope="col" colSpan="2">Actions</th> : null}
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, i) => (
          item.role !== 'admin' ? (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              {withActions && item.role !== 'banned' ? <td><button onClick={() => { banUser(item); }} className="btn btn-light btn-sm"><i className="fa fa-ban" /></button></td> : null}
              {withActions && item.role !== 'librarian' && item.role !== 'banned' ? <td><button onClick={() => { giveRole(item); }} className="btn btn-light btn-sm"><i className="fa fa-book" /></button></td> : null}
            </tr>
          ) : null
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableItems: PropTypes.arrayOf(PropTypes.object),
  withActions: PropTypes.bool,
  banUser: PropTypes.func,
  giveRole: PropTypes.func,
};

Table.defaultProps = {
  tableHeader: [],
  tableItems: [{ name: '', amount: 0 }],
  withActions: false,
  banUser: () => {},
  giveRole: () => {},
};

export default Table;
