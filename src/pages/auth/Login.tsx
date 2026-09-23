export default function Login() {
  return (
    <div>
      <div>
        <img src="taskflow_logo.png" alt="The logo of the task flow" />
        <p>workspace setup</p>
      </div>
      <div>
        <h1>Create your account</h1>
        <p>start organizing projects and tracking task today</p>
      </div>
      <form action="#">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="name@example.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <div>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
          <p></p>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <p>
            I agree to the <span>Terms of Services</span>and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
}
