import React from 'react'; // Assuming you're using React

const LoginPage = ({ message }) => {
  return (
    <>
      <head>
        {/* Include head contents here */}
      </head>
      <body>
        <nav>
          {/* Include nav contents here */}
        </nav>
        <div className="container">
          <h1 className="page-title">CineMart</h1>
          {message !== "" && <p>{message}</p>}
          <form method="post" action="/login" className="login-form">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" name="username" id="username" className="form-input" required />
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" name="password" id="password" className="form-input" required />
            <br />
            <button type="submit" className="form-button">Login</button>
          </form>
        </div>
      </body>
    </>
  );
};


export default LoginPage;
