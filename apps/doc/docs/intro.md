---
sidebar_position: 1
---

# Introduction

## Installation

### Install package

`tamagui` and `react-hook-form` are peer-dependencies, so you should install it if are not installed yet

```bash
npm install tamagui-react-hook-form tamagui react-hook-form
```

### Configuration

In your tamagui loader add `tamagui-react-hook-form`

```typescript
withTamagui({
  [...]
  components: ["tamagui-react-hook-form", ...],
  [...]
}),
```

For `nextjs` add `tamagui-react-hook-form` in `transpilePackages`

```typescript
transpilePackages: [
    'tamagui-react-hook-form',
    [...]
  ],
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
    <Form
      onSubmit={(value) => console.log(value)}
      defaultValue={{ test: "Default text" }}
    >
      <Form.Input name="text" />
      <Form.Trigger asChild>
        <Button>Submit</Button>
      </Form.Trigger>
    </Form>
  )
}
```
