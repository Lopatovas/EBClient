import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const {
    tableHeader, tableItems, withActions, editHandler, tableAction,
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
        {tableItems.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.genre}</td>
            <td>{item.publisher}</td>
            <td>{item.status === 'not_taken' ? 'Not taken' : item.status}</td>
            {withActions ? <td><button onClick={() => { tableAction(item); }} className="btn btn-light btn-sm"><i className="fa fa-edit" /></button></td> : null}
            {withActions ? <td><button onClick={() => { editHandler(item); }} className="btn btn-light btn-sm"><i className="fa fa-trash" /></button></td> : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableHeader: PropTypes.arrayOf(PropTypes.string),
  tableItems: PropTypes.arrayOf(PropTypes.object),
  withActions: PropTypes.bool,
  editHandler: PropTypes.func,
  tableAction: PropTypes.func,
};

Table.defaultProps = {
  tableHeader: [],
  tableItems: [{ name: '', amount: 0 }],
  withActions: false,
  editHandler: () => {},
  tableAction: () => {},
};

export default Table;
