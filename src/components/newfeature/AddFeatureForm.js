import React from 'react';

const AddFeatureForm = ({feature, onSave, saving, onChange}) => {
  return (
    <div className="container">
      <h2>Add new Feature</h2>
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2" for="sprint-num">Select sprint:</label>
          <div className="col-sm-10">
            <select class="form-control" id="sprint-num" name="sprint-num" onChange={onChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2" for="feature-text">Feature title:</label>
          <div className="col-sm-10">
            <input type="text" name="feature-title" className="form-control" id="feature-text" placeholder="Enter feature title" onChange={onChange}/>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2" for="email">Environment:</label>
          <div className="col-sm-10">
            <label className="env-type"><input type="checkbox" name="env-type" value="1" onChange={onChange} />INT</label>
            <label className="env-type"><input type="checkbox" name="env-type" value="2" onChange={onChange} />QA</label>
            <label className="env-type"><input type="checkbox" name="env-type" value="3" onChange={onChange} />PROD</label>
          </div>

        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-success" onClick={onSave}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default AddFeatureForm;
