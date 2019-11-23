'use strict'
const path = require('path')
const React = require('react')
const { Box, Text } = require('ink')
const SelectInput = require('ink-select-input').default
const open = require('open')
const terminalImage = require('terminal-image')

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label
  }

  return items
}

const items = createItems([
  {
    label: 'Twitter',
    url: 'https://twitter.com/macinjoke',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/macinjoke',
  },
  {
    label: 'Qiita',
    url: 'https://qiita.com/macinjoke',
  },
  {
    label: '---------',
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
])

module.exports = function App() {
  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text>macinjokeだああああああああああああああ</Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  )
}
