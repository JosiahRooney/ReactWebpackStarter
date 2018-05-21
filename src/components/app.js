import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from '../styles/app.styl';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.chars = [
      '0', '6', '8', 'ㄥ', '9', 'ϛ', 'ㄣ', 'Ɛ', 'ᄅ', 'Ɩ', 'Z', '⅄', 'X', 'M', 'Λ', '∩', '┴', 'S', 'ɹ', 'Q', 'Ԁ', 'O', 'N', 'W', '˥', 'ʞ', 'ſ', 'I', 'H', 'פ', 'Ⅎ', 'Ǝ', 'p', 'Ɔ ', 'q', '∀', 'z', 'ʎ', 'x', 'ʍ', 'ʌ', 'n', 'ʇ', 's', 'ɹ', 'b', 'd', 'o', 'u', 'ɯ', 'l', 'ʞ', 'ɾ', 'ᴉ', 'ɥ', '6', 'ɟ', 'ǝ', 'p', 'ɔ', 'q', 'ɐ'
    ];
    this.normChars = [
      '0', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'
    ];
    this.state = {
      word: '',
      upsidedownWord: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let wordArr = e.target.value.split('');
    let out = '';
    for (let i = 0; i < wordArr.length; i++) {
      let isWithin = this.normChars.indexOf(wordArr[i]);
      if (isWithin !== -1) {
        out = this.chars[isWithin] + out;
      } else {
        out = wordArr[i] + out;
      }
    }
    this.setState({word: e.target.value, upsidedownWord: out});
  }

  render() {
    return (
      <div className="app">
        <input type="text" value={this.state.word} onChange={this.handleChange} />
        <p>{this.state.upsidedownWord}</p>
      </div>
    );
  }
}
