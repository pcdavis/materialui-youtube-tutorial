import React, {Component, Fragment} from 'react';
import 'typeface-roboto';
import { Header, Footer } from '../Layouts'
import Exercises from '../Exercises'



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                        stateKey: "Here is something from the App's state"
                    }
      }

    render(){

        return (
          <Fragment>
              <Header prop1 = {this.state.stateKey} />


                <Exercises />

                
              <Footer />
          </Fragment>
        );
    }
}


export default App;