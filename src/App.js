import React, {Component} from 'react';
import './App.css';
import { sampleText } from './sampleText';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

class App extends Component {
  state = { 
    text : sampleText,
   }; 

   // J'aimerais bien que qd on recharge, mon sampleText se recharge.
   componentDidMount() {
    console.log('montage')
    const text = localStorage.getItem('myText')
    if(text)
    {
      // Ici normalement, on devrait réécrire this.setState({text:text})
      this.setState({text})
    }else {
      // On réécrit le raccourcit...
      this.setState({text:sampleText})
    }
   }

   // Ca se modifie ici, et le localStorage, il se modifie ici, ou qd le component se modifie...
  //console.log('modification')
   componentDidUpdate() {
    const text = this.state.text
    localStorage.setItem('myText', text)
   }

   handleChange = (event) => {
    const text = event.target.value
    this.setState({text})
   }

   renderText = text => {
    let text2 = DOMPurify.sanitize(text, {ALLOWED_TAGS: ['b']})
    return marked.parse(text2)
   }

  render() { 
    return (
      <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>

          <textarea
          rows="35" 
          className='form-control' 
          value={this.state.text}
          onChange={this.handleChange}>
          </textarea>
          
          </div>
          <div className='col-sm-6'>

            <div dangerouslySetInnerHTML={{__html:this.renderText(this.state.text)}}></div>

          </div>
        </div>
      </div>
      </>
    )}
}
 
export default App;