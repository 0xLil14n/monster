import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";
import styled from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // make sure it can handle this.setState
    // bind => method on any fn that returns a new fn
    //         where the context of "this" is whatever we pass to it
    // ----> binds "this" to our App component
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // handleChange(event) {
  //   this.setState({ searchField: event.target.value });
  // }

  handleChange = (e) => {
    // arrow function automatically binds "this" to where the arrow fn was defined in the first place
    // in this case, the context of this fn is the App component
    // LEXICAL SCOPING (don't need to call .bind() on these)
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <StyledApp>
        <h1>Monsters Rolodex</h1>
        <Search
          placeholderText="search monsters"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList monsters={filteredMonsters} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-family: "Bigelow Rules";
    font-size: 72px;
    color: #0ccac4;
  }
  background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
`;
export default App;
