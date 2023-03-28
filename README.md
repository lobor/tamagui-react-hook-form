<!-- # tamagui-react-hook-form
react-hook-form integration with tamagui form components -->
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tamagui/tamagui">
    <img src="https://github.com/tamagui/tamagui/raw/master/apps/site/public/social.png" alt="Tamagui" width="250">
  </a>
  <span style="font-size: 7rem;">+</span>
  <a href="https://github.com/react-hook-form/react-hook-form" style="margin-left: 100px;">
    <img src="https://avatars.githubusercontent.com/u/53986236?s=200&v=4" alt="React hook form" width="80" height="80">
  </a>

<h3 align="center">tamagui-react-hook-form</h3>
</div>

## About The Project

Extends all components form from [tamagui.dev](https://tamagui.dev/) with react-hook-form

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Install package

- npm
  ```sh
  npm install tamagui-react-hook-form@latest
  ```

## Anatomy
See exemple [here](./demo/FormHookFormDemo.tsx)

```TSX
import { createForm } from "tamagui-react-hook-form";

const Form = createForm();

export default () => (
  <Form>
    <Form.Input />
    <Form.Message />
    <Form.Value />

    <Form.Field>
      <Form.Input />
      <Form.Message />
      <Form.Value />
    </Form.Field>

    <Form.Slider>
      <Form.Slider.Track>
        <Form.Slider.TrackActive />
      </Form.Slider.Track>
      <Form.Slider.Thumb />
    </Form.Slider>

    <Form.Switch>
      <Form.Switch.Thumb />
    </Form.Switch>

    <Form.RadioGroup>
      <Form.RadioGroup.Item>
        <Form.RadioGroup.Indicator />
      </Form.RadioGroup.Item>
    </Form.RadioGroup>

    <Form.Checkbox>
      <Form.Checkbox.Indicator>
        <Check />
      </Form.Checkbox.Indicator>
    </Form.Checkbox>

    <Form.Trigger />
  </Form>
);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Common props

A prop exists for all components (except Form), it is `name`. It allows you to select the fields of the form

```typescript
import { createForm } from "tamagui-react-hook-form";

interface FormValues {
  pseudo: string;
}

const Form = createForm<FormValues>();

export default () => {
  return (
    <Form defaultValues={{ pseudo: "" }}>
      <Form.Input name="pseudo" />
      <Form.Value name="pseudo" />
    </Form>
  );
};
```

It can be repetitive to add to each component the prop `name`, so you can use Form.Field component

```typescript
import { createForm } from "tamagui-react-hook-form";

interface FormValues {
  pseudo: string;
}

const Form = createForm<FormValues>();

export default () => {
  return (
    <Form defaultValues={{ pseudo: "" }}>
      <Form.Field name="pseudo">
        <Form.Input />
        <Form.Value />
      </Form.Field>
    </Form>
  );
};
```

## API

### Form

Wrap tamagui [Form](https://tamagui.dev/docs/components/form) with [FormProvider](https://react-hook-form.com/api/formprovider/) of react-hook-form

```typescript
export default () => {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {/* ... */}
    </Form>
  );
};
```

#### Props

Extends all props of [FromProps](https://tamagui.dev/docs/components/form#api) and [UseFormProps](https://react-hook-form.com/ts/#UseFormProps)

| Props | Required | Description      |
| ----- | -------- | ---------------- |
| fRef  | false    | Get form context |

### Message

Show error message if you use with validation

```typescript
export default () => {
  return <Form.Message />;
};
```

#### Props

Extends all props of [SizableText](https://tamagui.dev/docs/components/text#sizabletext)

| Props | Required | Description                                  |
| ----- | -------- | -------------------------------------------- |
| name  | false    | Key corresponding to the type of values used |

### Value

Show value of element form

```typescript
export default () => {
  return <Form.Value />;
};
```

#### Props

Extends all props of [SizableText](https://tamagui.dev/docs/components/text#sizabletext)

| Props | Required | Description                                  |
| ----- | -------- | -------------------------------------------- |
| name  | false    | Key corresponding to the type of values used |

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Apache License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
