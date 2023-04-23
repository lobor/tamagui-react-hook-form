---
sidebar_position: 1
---

# Introduction

## Installation

`tamagui` and `react-hook-form` are peer-dependencies, so you should install it if are not installed yet

```bash
npm install tamagui-react-hook-form tamagui react-hook-form
```

## Getting Started

```tsx
import { createForm } from "tamagui-react-hook-form";

interface FormValues {
  text: string
}

const Form = createForm<FormValues>();

export default const App = () => {
  return (
    <Form onSubmit={(value) => console.log(value)}>
      <Form.Input name="text" />
    </Form>
  )
}
```
