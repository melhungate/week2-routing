import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Greeting = (props) => {
  console.log(props.match.params.name);
  const name = props.match.params.name;
  return (
    <h2>Hello {name}!</h2>
  );
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

const Product = (props) => (
  <h3>{props.match.params.product}</h3>
)

const Store = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h2>Store</h2>
            <Route 
              path={`${match.path}/:product`}
              component={Product}
            />
        </div>
    )
}


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h1>Routing</h1>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/greeting/:name' component={Greeting} />
      </div>
      </Router>
    )
  }
}

export default App;