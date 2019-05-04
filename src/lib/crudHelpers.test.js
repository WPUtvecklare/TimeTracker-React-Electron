/* eslint-env jest */

import { addItemToArray } from './crudHelpers'

test('addItemToArray should add the passed item to the list', () => {
  const existingArray = [
    { name: 'two', rate: '200', id: '2' },
    { name: 'one', rate: '100', id: '1' }
  ]
  const newItem = { name: 'three', rate: '300', id: '3' }

  const expected = [
    { name: 'three', rate: '300', id: '3' },
    { name: 'two', rate: '200', id: '2' },
    { name: 'one', rate: '100', id: '1' }
  ]
  const result = addItemToArray(newItem, existingArray)
  expect(result).toEqual(expected)
})

test('addItemToArray should not mutate the existing array', () => {
  const existingArray = [
    { name: 'two', rate: '200', id: '2' },
    { name: 'one', rate: '100', id: '1' }
  ]
  const newItem = { name: 'three', rate: '300', id: '3' }

  const result = addItemToArray(newItem, existingArray)

  expect(result).not.toBe(existingArray)
})
