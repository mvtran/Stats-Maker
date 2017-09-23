var React = require('react');

var PokemonStats = require('./PokemonStats');

class PokemonProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Pikachu",
      stats: {
        "HP": 50,
        "Attack": 50,
        "Defense": 50,
        "Special Attack": 50,
        "Special Defense": 50,
        "Speed": 50,
      },
      statMax: 255,
      type: "Electric",
      image: null,
      ability: "Static",
      // moves?
    };
  }

  addStat(e) {
    var updatedStats = {...this.state.stats};
    updatedStats["New stat"] = 50;
    this.setState({...this.state, stats: updatedStats});
  }

  removeStat(statKey, e) {
    if (Object.keys(this.state.stats).length > 1) {
      var updatedStats = {...this.state.stats};
      delete updatedStats[statKey];
      this.setState({...this.state, stats: updatedStats});
    }
  }

  renameStat(statKey, e) {

  }

  reset() {
    this.setState({...this.state,
      stats: {
        "HP": 50,
        "Attack": 50,
        "Defense": 50,
        "Special Attack": 50,
        "Special Defense": 50,
        "Speed": 50,
      },
    });
  }

  handleChange(statKey, e) {
    var newValue = e.target.value;
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > this.state.statMax) {
      newValue = this.state.statMax;
    }

    var updatedStats = {...this.state.stats};
    updatedStats[statKey] = parseInt(newValue, 10);
    this.setState({...this.state, stats: updatedStats});
  }

  render() {
    return (
      <PokemonStats
        pokeInfo = {this.state}
        onChange = {(statKey, e) => this.handleChange(statKey, e)}
        addStat = {(pos, e) => this.addStat(pos, e)}
        removeStat = {(statKey, e) => this.removeStat(statKey, e)}
        onReset = {() => this.reset()}
      />
    );
  }
}

module.exports = PokemonProfile;
