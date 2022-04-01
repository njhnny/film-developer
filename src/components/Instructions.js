import React from 'react';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      instructions: []
    };
  }

  makeApiCall = () => {
    fetch(`http://localhost:5000/api/Film`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            instructions: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    const { error, isLoaded, instructions } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Instructions</h1>
          <ul>
            {instructions.map((instruction, index) =>
              <li key={index}>
                <h3>{instruction.name}</h3>
                <p>{instruction.time}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Instructions;