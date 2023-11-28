// Donc tu vas dans "react", tu vas chercher un élément qui se nomme "component", c'est du JS (pur et dur)
import React, {Component} from 'react';
import './App.css';
import { sampleText } from './sampleText';
import { Marked } from 'marked';
import DOMPurify from 'dompurify';

class App extends Component {
  state = { 
    text : sampleText,
   }; 

   // On récupère l'event, "handlechange est le nom de la fonction"
   // event.target déclenche l'évènement...
   // La fonction "handleChange" est appelée chaque fois que l'évènement "onChange" se produit dans le "textarea", cet évènement est déclenché chaque fois que le contenue du champ de texte change.
   // A l'intérieur de la fonction "handleChange", la const "text" extrait la valeur de "textarea".
   // "this.setState({ text })", met à jour l'état du composant avec la nouvelle valeur du texte extraite. Cela déclenchera un rendu de votre composant avec la nouvelle valeur du texte.
   handleChange = (event) => {
    const text = event.target.value
    this.setState({text})
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

            <div></div>

          </div>
        </div>
      </div>
      </>
    )}
}
 
export default App;