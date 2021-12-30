import React, { component } from "react";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data_guests: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/myguests")
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          data_guests: res,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const ToAddGuest = withRouter(({ history }) => (
      <button onClick={() => history.push("/add")}>Add Guest</button>
    ));
    return (
      <div>
        <ToaddGuest />
        <table border="1" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data_guests.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
