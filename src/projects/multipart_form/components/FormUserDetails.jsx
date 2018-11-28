import React, { Component, Fragment } from 'react'
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar'
import MuiThemeProvider from '@material-ui/core/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();

  }
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter User Details" />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
