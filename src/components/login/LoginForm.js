import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({user, onSave, onChange, saving}) => {
  return (
    <div className="test">
    <div className="login">
    <form>
      <h1>Login</h1>
        <TextInput
          name="email"
          placeholder="Username"
          required="required"
          onChange={onChange}
          value={user.email}
        />
        <TextInput
          name="password"
          type="password"
          label="Password"
          onChange={onChange}
          value={user.password}
          />
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Logining in...' : 'Login'}
          className="btn btn-primary btn-block btn-large"
          onClick={onSave}/>
    </form>
  </div>
  </div>
  );
};

LoginForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default LoginForm;
