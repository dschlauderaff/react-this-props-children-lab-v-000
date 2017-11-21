// Code ThemedDecoration Component Here
import React from "react"

export default class ThemedDecoration extends React.Component {
  render () {
    const childrenWithClassNameProp = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    })

    return (
      <div>
        {childrenWithClassNameProp}
      </div>
    )
  }
}