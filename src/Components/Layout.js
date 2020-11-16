import React from 'react';

const Layout = ({ details }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
        <tr>
          <td>PRs</td>
          <td>Title</td>
          <td>Body</td>
          <td>Created At</td>
          <td>Closed At</td>
        </tr>
        </thead>       
        <tbody className="table-body">
          {details.map(detail => {
            return (
              <tr>
                <td><a href={detail.url}>{detail.url}</a></td>
                <td>{detail.title}</td>
                <td>{detail.body}</td>
                <td>{detail.created_at}</td>
                <td>{detail.closed_at}</td>
              </tr>              
            )})}        
        </tbody>
      </table>
    </div>
  )
}

export default Layout