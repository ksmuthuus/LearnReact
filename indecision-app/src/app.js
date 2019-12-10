import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './Indecision'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['Write code','Learn new stuff every day','Hurry up!']}/>, document.getElementById('app'));
