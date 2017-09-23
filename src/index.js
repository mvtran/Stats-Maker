import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';

var StatBar = require('./StatBar');
var PokemonStats = require('./PokemonStats');
var PokemonProfile = require('./PokemonProfile');

//TODO: class that stores multiple profiles?

//====================================================

ReactDOM.render(
  <PokemonProfile />,
  document.getElementById('root')
);
