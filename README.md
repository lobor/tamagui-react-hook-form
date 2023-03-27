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
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/tamagui/tamagui/raw/master/apps/site/public/social.png" alt="Tamagui" width="250">
  </a>
  <span style="font-size: 7rem;">+</span>
  <a href="https://github.com/github_username/repo_name" style="margin-left: 100px;">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAGUCAMAAAAh7vSvAAABAlBMVEUAAAD//v/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////sWZD////2ssz86PD73Oj3u9L74er2t8/62eb3v9T5zt75ytzsXJL98vb1q8fubJz61ePsX5TzlLj++vzwfajveaXtZJj+9/rznL3ykLXxhq74xdj3utH0pcP85O3vdaP97fP1qMXwfqn86fH2ts7xi7Lwg6z0ocD2r8n50ODucJ/xiLC8MMznAAAAKnRSTlMA/vmS50AWAlBVuXwKu6rt0szFi2hFNy0GsL0OSuDf2Z9/eyYfAcN9V8TqfFlAAAAPSElEQVR42uza227TQBAG4Fk7Mc75fA6UHgH/4s5Nm0rNCdQEWkJveP9XAQmBGjWpZ9drt2rme4XVzj8zu2RVsZMruO/L+Xr1XcXBq+dU3lXr+fJ7t5DrFOkl8lpNN/9WYW+pt3m32fLo5Rj4bnWPD+QhVXWHA3p+xVajJkeyQdUarSI9o67f24MEMeGU/S49j7Zbgdip4rYpdSeFA4gIB0cnlKZ2T/KERfXalJZsH4KtlKU0DOsQWupDSthprgahreafUoI6ZxBGzjqUlEFDphRjTqNIichlIGLI5Mi+4xJETKVjsuvNkdQvC5yjN2SRJ1fFkpJH1mQlVazJZG0VsEPZtFikDq0UMk9WLZb1PSlgL1H8QuZLB5YAx6dYmhIriVBNiuEDREKOzFswFyIxrmFD1i1DJKjcNTqVPESi8l2DCiZ3JXFl/TomuZICV3qwF6lAWpoQqWiSBl+myJQon9iysnFJjZMlJk+2kynKeMzWuA9z6nO4Xny9+zaejYJXbzQbf7v7uliHnxXM9Xlt8iEMzcPldA8OY5vRdBnOYeiQFSwKJla3kz09kn9Gk8sVTKhsQsFysZ4G4o/p+gL6Ml4SwXL1a8/vyUOjn1fQVoqKlwJ0hZNAbJiEYOG/vhw70HMu1WuL6Tn0OMf0lBK0rO4DsdX9ClpK9ISP0DFfSqbsNLqdQ0eOdhpkoCEcB+IJ4xAaMkXapQG+62Ug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" alt="Tamagui" width="80" height="80">
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
