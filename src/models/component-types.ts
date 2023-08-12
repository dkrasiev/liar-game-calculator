import React from 'react'

export { Component } from 'react'

export type FlowProps<
  P extends object = Record<string, never>,
  C = React.JSX.Element
> = P & { children: C }
export type FlowComponent<
  P extends object = Record<string, never>,
  C = React.JSX.Element
> = React.Component<P, C>

export type VoidProps = Record<string, never>
export type VoidComponent = React.Component<VoidProps>
