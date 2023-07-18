import { Button, Card, Form, Input } from "antd"

import Header from "./components/layouts/Header"
import Item from "./components/sections/Item"
import { useState } from "react"

export default function App() {
  const [items, setItems] = useState([
    <Item id={1} key={1} />
  ])

  const addItemHandler = () => {
    setItems([<Item id={items.length + 1} key={items.length + 1} />, ...items])
  }

  return (
    <>
      <Header />

      {items}

      <Button onClick={addItemHandler}>
        add item
      </Button>
    </>
  )
}
