import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Sprint 7 Challenge Learner Tests', () => {
  describe('sum', () => {
    test("sum() throws an error 'pass valid numbers'", () => {
      expect(() => sum()).toThrow('pass valid numbers')
    })
    test("sum(2, 'seven') throws an error 'pass valid numbers'", () => {
      expect(() => sum(2, 'seven')).toThrow('pass valid numbers')
    })
    test('sum(1, 3) returns 4', () => expect(sum(1,3)).toBe(4))
    test("sum('1', 2) returns 3", () => expect(sum('1', 2)).toBe(3))
    test("sum('10', '3') returns 13", () => expect(sum('10', '3')).toBe(13))
  })

  /*
  👉 TASK 2 - Integration Testing of HelloWorld component at the bottom of this module
  */
  describe('Hello World integration tests', () => {
    ["Home", "About", "Blog"].map(linkText => {
      test(`renders a link that reads "${linkText}"`, () => {
        render(HelloWorld())
        expect(screen.queryByText(linkText, {selector: 'a'})).toBeInTheDocument()
      })
    })
    test('renders a h2 that reads "The Truth"', () => {
      render(HelloWorld())
      const text = 'The Truth'
      expect(screen.queryByText(text, {selector: 'h2'})).toBeInTheDocument()
    })
    test('renders a p that reads "JavaScript is pretty awesome"', () => {
      render(HelloWorld())
      const text = "JavaScript is pretty awesome"
      expect(screen.queryByText(text, {selector: 'p'})).toBeInTheDocument()
    })
    test('renders a text that includes "javaScript is pretty"', () => {
      render(HelloWorld())
      const text = "javaScript is pretty"
      expect(screen.queryByText(text, {exact: false})).toBeInTheDocument()
    })
  })
})

function sum(a, b) {
  a = Number(a)
  b = Number(b)
  if (isNaN(a) || isNaN(b)) {
    throw new Error('pass valid numbers')
  }
  return a + b
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  )
}
