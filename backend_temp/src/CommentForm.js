import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: '', lat: '', lon: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleLatChange(e) {
    this.setState({ lat: e.target.value });
  }
  handleLonChange(e) {
    this.setState({ lon: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    let lat = this.state.lat.trim();
    let lon = this.state.lon.trim();
    if (!text || !author || !lat || !lon) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text, lat: lat, lon: lon });
    this.setState({ author: '', text: '', lat: '', lon: ''});
  }
  render() {
    return (
      <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Event Name'
          style={ style.commentFormAuthor}
          value={ this.state.author }
          onChange={ this.handleAuthorChange } />

        <input
          type='text'
          placeholder='Event Description'
          style={ style.commentFormText}
          value={ this.state.text }
          onChange={ this.handleTextChange } />

          <input
          type='text'
          placeholder='Latitude'
          value={ this.state.lat }
          onChange={ this.handleLatChange } />

          <input
          type='text'
          placeholder='Longitude'
          value={ this.state.lon }
          onChange={ this.handleLonChange } />

        <input
          type='submit'
          style={ style.commentFormPost }
          value='Post'/>
      </form>
    )
  }
}

export default CommentForm;
