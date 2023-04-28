import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Typescript',
    description: (
      <>
        Entirely created in Typescript and with typing of values and fields
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        You can create and use your custom component and configure transfer props
      </>
    ),
  },
  {
    title: 'Performance',
    description: (
      <>
        the tamagui and react-hook-form combo allows to have very powerful forms 
      </>
    ),
  },
]

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
