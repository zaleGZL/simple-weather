import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { fetchLocationByInput } from '../actions'

class InputExampleIconPosition extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(_, data) {
    this.setState({ value: data.value })
  }

  onClick() {
    if (this.state.value === '') {
      return
    }
    const dispatch = this.props.dispatch
    dispatch(fetchLocationByInput(this.state.value))
  }

  render() {
    const status = this.props.status

    const settings = {
      error: status === 'failure' ? true : false
    }

    return (
      <Input
        placeholder="手动输入城市(支持中文和拼音)"
        action
        fluid
        size="tiny"
        style={{ height: '43px' }}
        onChange={this.onChange}
        value={this.state.value}
        {...settings}
      >
        <input />
        <Button type="submit" basic onClick={this.onClick}>
          查询
        </Button>
      </Input>
    )
  }
}

const mapStateToProps = state => ({
  status: state.locationByInput.status
})

export default connect(mapStateToProps)(InputExampleIconPosition)
