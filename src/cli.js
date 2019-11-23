#!/usr/bin/env node
'use strict'
const path = require('path')
const meow = require('meow')
const termImg = require('term-img')
const importJsx = require('import-jsx')
const React = require('react')
const { render } = require('ink')

const ui = importJsx('./ui')

meow(`
	Usage
	  $ macinjoke
`)

termImg(path.join(__dirname, 'avatar.png'))

render(React.createElement(ui))
