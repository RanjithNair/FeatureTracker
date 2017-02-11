import React from 'react';
import classNames from 'classnames';

function generateRows(data, onChange) {
    let rows = [];
    for(let item in data) {
      var rowClass = classNames({
        'complete': data[item].environments !== undefined && data[item].environments.length === 3,
        'partial': data[item].environments !== undefined && data[item].environments.length >= 1 && data[item].environments.length < 3 ,
        'notstarted': (data[item].environments !== undefined && data[item].environments.length === 0) || data[item].environments === undefined
      });
      rows.push(
        <tr className = {rowClass}>
          <td>{Object.keys(data).indexOf(item) + 1}</td>
          <td>{data[item].sprintNum}</td>
          <td>{data[item].releaseTitle}</td>
          <td>{data[item].featureTitle}</td>
          <td><input className="big-checkbox" type="checkbox" value="1" id={item} onChange = {onChange} checked = {data[item].environments !== undefined && data[item].environments.indexOf("1") !== -1} /></td>
          <td><input className="big-checkbox" type="checkbox" value="2" id={item} onChange = {onChange} checked = {data[item].environments !== undefined && data[item].environments.indexOf("2") !== -1} /></td>
          <td><input className="big-checkbox" type="checkbox" value="3" id={item} onChange = {onChange} checked = {data[item].environments !== undefined && data[item].environments.indexOf("3") !== -1} /></td>
          <td>{data[item].createdUser}</td>
          <td>{data[item].lastModifiedUser}</td>
        </tr>
      );
    }
    return rows;
}

const FeatureDashboardForm = ({features, onChange}) => {
  return (
    <div className="container">
      <h2>Feature Dashboard</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Sprint</th>
              <th>Release</th>
              <th>Feature</th>
              <th>INT</th>
              <th>QA</th>
              <th>PROD</th>
              <th>Created by</th>
              <th>Last Updated by</th>
            </tr>
          </thead>
          <tbody>
            {features !== null ? generateRows(features, onChange): null}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default FeatureDashboardForm;
