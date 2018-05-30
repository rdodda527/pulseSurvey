import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,Image } from 'react-native'
import styles from './Styles/NxjProfilePicStyle'

export default class NxjProfilePic extends Component {
  constructor(props) {
    super(props);
    this.bgArr = ["#B3E5FC", "#B2EBF2", "#B2DFDB"
                  ,"#C8E6C9","#DCEDC8","#FFF9C4"
                  ,"#FFECB3","#FFE0B2","#FFCCBC"
                  ,"#BCAAA4","#EEEEEE","#CFD8DC"];
  }
  bgColorRand() {
    if (this.props.employee) {
      let str = this.props.employee.Firstname + this.props.employee.Lastname;
      let hash = 0, i, chr;
      if (str.length === 0) return this.bgArr[hash];
      for (i = 0; i < str.length; i++) {
          chr   = str.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0;
      }
      return this.bgArr[Math.abs(hash % this.bgArr.length)];
    }
    return '#FFCCBC';
  }
  getInitials() {
    let initials = '';
    if (this.props.employee && this.props.employee.Firstname) {
      initials = initials + this.props.employee.Firstname.substr(0,1);
    }
    if (this.props.employee && this.props.employee.Lastname) {
      initials = initials + this.props.employee.Lastname.substr(0,1);
    }
    return initials;
  }
  render () {
    let { imgSize, bgColor, fontSize, fontColor } = this.props;
    if (imgSize === undefined) { imgSize = 70; }
    if (bgColor === undefined) { bgColor = this.bgColorRand(); }
    if (fontColor === undefined) { fontColor = '#626262'; }
    if (fontSize === undefined) { fontSize = 20; }

    return (
      <View>
        <View style={{position: 'absolute',
                        justifyContent: 'center',
                        width: imgSize-2,
                        height: imgSize-2,
                        left: 1,
                        borderRadius: ((imgSize-2)/2),
                        backgroundColor: bgColor}}>
          <Text style={{textAlign: 'center',
                          backgroundColor: 'rgba(0,0,0,0)',
                          fontSize: fontSize,
                          color: fontColor}}>
            {this.getInitials()}
          </Text>
        </View>
        <Image source={{ uri: 'https:'+this.props.employee.ProfileImageUrl+'?transparent=1' }}
            style={{width: imgSize,
                      height: imgSize,
                      borderRadius: (imgSize/2)}} />
      </View>
    )
  }
}