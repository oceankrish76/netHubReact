import React, { Component } from 'react';
import { TextFieldGroup, TextAreaFieldGroup } from '../commons';
import { useState } from 'react';

export default class MarketPLaceForm extends Component {

  constructor(props) {
    super(props)
    this.state = { show: false };
    this.handleShow = this.handleShow.bind(this)
  }
  handleShow() {
    const { show } = this.state;
    this.setState({ show: !show })
  }

  render() {
    return (

      <div>
        <button className="MarketPLacebutton" onClick={this.handleShow}>Show/Hide A Form to Upload Your Item</button> <br />
        {this.state.show && <ComponentMarketPLace />}
      </div>
    )
  }
}


class Box extends Component {
  render() {
    return (
      <div className="MarketPLaceForm">
        <div class="ameboInfo">
          <h4>Post your Item to Sell</h4></div>
        <br />
        <TextFieldGroup
          placeholder="Item name"
          name="nameoftheitem"

        />
        <TextFieldGroup
          placeholder="price"
          name="price"

        />
        <TextAreaFieldGroup
          placeholder="Short description"
          name="itemdescription"
        />
        <TextFieldGroup
          placeholder="City"
          name="city"

        />
        <TextFieldGroup
          placeholder="Phone Number"
          name="phonenumber"

        />
        <TextFieldGroup
          placeholder="email eg. email@gmail.com"
          name="email"

        />

        {/* <button type="submit" class="btn btn-dark">Submit </button> */}

      </div>
    )
  }
}

function ComponentMarketPLace() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'MarketPLace')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dalztgngv/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    console.log('Hi the file is' + file.secure_url);
    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <img src={image} style={{ width: '300px' }} />
        )}
    </div>
  )
}