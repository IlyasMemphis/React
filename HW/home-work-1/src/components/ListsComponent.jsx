import React from 'react'

export default function ListComponent() {
  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        <li>First item</li>
        <li>
          Second item
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
        </li>
        <li>Third item</li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>First item</li>
        <li>
          Second item
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
        </li>
        <li>Third item</li>
      </ul>
    </div>
  )
}
