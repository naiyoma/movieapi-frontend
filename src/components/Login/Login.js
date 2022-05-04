import React from 'react';
import './Login.css';
import Dashboard from '../Dashboard/Dashboard';

// export default function Login() {
//     return(
//       <div className="login-wrapper">
//         <h1>Please Log In</h1>
//         <form>
//           <label>
//             <p>Username</p>
//             <input type="text" />
//           </label>
//           <label>
//             <p>Password</p>
//             <input type="password" />
//           </label>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
            return(
                <div className="login-wrapper">
                    <h1>Please Log In</h1>
                    <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                    <button onClick={this._onButtonClick}>Button</button>
                    {this.state.showComponent ?
                        <Dashboard /> :
                              null
                    }
                      </div>
                    </form>
                </div>
    )
         
     
    }
  }

export default Login


