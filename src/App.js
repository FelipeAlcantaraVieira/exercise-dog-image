import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDog = this.fetchDog.bind(this);
    this.state = {
      data: "",
      loading: false,
    };
  }

  async fetchDog() {
    this.setState({ loading: true }, async () => {
      const request = await fetch("https://dog.ceo/api/breeds/image/random");
      const requestJson = await request.json();
      this.setState({
        loading: false,
        data: requestJson
      })
    })
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    if (this.state.loading) return "loading...";
    return (
      <div>
        <p>Cachorrinho</p>
        <button onClick={this.fetchDog}>Trocar de Imagem</button>
        <div>
          <img src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;
