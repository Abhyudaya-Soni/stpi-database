import React from 'react';
import DeleteButton from './DeleteButton';

function Content({ data, theme, onDelete}) {
  const columnOrder = ['S.No.', 'Customer Name', 'Services', 'Service Type', 'Service Start Date', 'Service End Date', 'Renewal Due Date'];



  const handleDelete = (index, documentId) => {
    if (window.confirm('Are you sure you want to delete this entry?')) 
    {onDelete(index, documentId);}}

  return (
    <div className={`content ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className={`row ${theme === 'dark' ? 'dark-theme' : ''}`}>
          <div className="col-md-12">
            <table className={`table ${theme === 'dark' ? 'table-dark' : ''}`}>
              <thead>
                <tr>
                  <th>#</th>
                  {columnOrder.map((columnName) => (
                    <th key={columnName}>{columnName}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    {columnOrder.map((columnName) => (
                      <td key={columnName}>{item[columnName]}</td>
                    ))}
                     <td>
                        <DeleteButton onClick={() => handleDelete(index, item.id)} />
                     </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
