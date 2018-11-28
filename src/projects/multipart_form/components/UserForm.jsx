import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
state = {
         step: 1,
         firstName: '',
         lastName: '',
         email: '',
         occupation: '',
         city: '',
         bio: ''
      }

//proceed to next step
nextStep = () => {
    const {step} = this.state;
    this.setState({
        step: step +1
    })
}

//go to previous step
prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step -1
    })
}

// Handle fields change
handleChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({ [fieldName]: value })
  }

  render() {
    const { step} = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio }

    switch(step) {
        case 1:
            return(
            <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        );
        case 2:
                return <h3>FormPersonalData</h3>;
        case 3:
        return <h3>Confirm</h3>;
        case 4:
        return <h3>Success</h3>
    }
  }
}

export default UserForm
