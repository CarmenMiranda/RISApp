import React from 'react';

export default class Logo extends React.Component {

  render() {
    return (
        <div style={this.props.type=="Header"?styles.containerRISHeader:styles.containerRIS}>
          <img 
            style = {this.props.type=="Header"?styles.imageRISHeader:styles.imageRIS}
            src = {require('../assets/icons/ris.png')}
          />
          <div style={styles.containerRIStitle}>
            <p style={this.props.type=="Header"?styles.titleHeader:styles.title}>
              R I S
            </p>
            <p style={this.props.type=="Header"?styles.subtitleHeader:styles.subtitle}>
              Registros Inteligentes de Salud
            </p>
          </div>
        </div>
    );
  }
}

const styles = {
  containerRISHeader:{
    display:'flex',
    flexDirection: 'row',
    marginLeft: 50,
    alignItems: 'center'
  },
  containerRIS:{
    display:'flex',
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center'
  },
  imageRISHeader:{
    width: 40,
    height: 40,
    marginRight: 10
  },
  imageRIS:{
    width: 60,
    height: 60,
    marginRight: 10
  },
  containerRIStitle: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  titleHeader: {
    color: '#EF3A7D',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 0,
  },
  title: {
    color: '#EF3A7D',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 0,
  },
  subtitleHeader: {
    color: 'rgba(239, 58, 125, 0.4)',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 0,
  },
  subtitle: {
    color: 'rgba(239, 58, 125, 0.4)',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 0,
  },
};
