var React = require('react');
var Utils = require('./Utils');

var StatBar = require('./StatBar');

class PokemonStats extends React.Component {
  renderBar(number) {
    return (
      <StatBar
        width= {(number/2) + "%"}
        color= {"#" + Utils.getHexColor(number)}
      />
    );
  }

  renderStatbars(stats) {
    return Object.keys(stats).map((stat, idx) => {
      return (
        <tr key={idx}>
          <td className="stat-options">
            {this.renderOptions(stat)}
          </td>
          <td className="stat-input">
            {this.renderInputField(stat, stats[stat], this.props.pokeInfo.statMax)}
          </td>
          <td className="stat-name">
            {stat}:
          </td>
          <td className="stat-number">
            {stats[stat]}
          </td>
          <td className="stat-bar">
            {this.renderBar(stats[stat])}
          </td>
        </tr>
      );
    });
  }

  renderInputField(statName, statValue, statMax) {
    return (
      <input
        type="number"
        value={statValue}
        min="1" max={statMax}
        onChange = {(e) => this.props.onChange(statName,e)}
        onClick = {(e) => e.target.select()}
      />
    );
  }

  renderOptions(statName) {
    return (
      <div>
        <span className="blue-link" onClick={(e) => this.props.removeStat(statName, e)}>
          [X]
        </span>
      </div>
    );
  }

  render() {
    const stats = this.props.pokeInfo.stats;

    return (
      <table className="stats-table">
        <tbody>
          {this.renderStatbars(stats)}
          <tr>
            <td>
              <span className="blue-link" onClick={() => this.props.addStat()}>
                [Add]
              </span>
            </td>
            <td><button onClick={() => this.props.onReset()}>Reset</button></td>
            <td>BST: </td>
            <td>{Utils.getBST(stats)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

module.exports = PokemonStats;
