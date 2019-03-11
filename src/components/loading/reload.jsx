import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
class Reload extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.reload =this.reload.bind(this)
  }
  reload(){
    window.location.reload()
  }

  


  render() {
   
    return (
      <div className="reload" style={{display: 'flex',height: '400px',
    justifyContent: 'center',
    alignItems: 'center'}}>
        网络延迟....<span onClick = {this.reload} style={{color: '#0084ff',fontSize: '16px'}}>请重新刷新页面</span>

        
      </div>
            
    )

  }

}
export default withRouter(Reload)
