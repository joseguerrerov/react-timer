//Dependencies
import React,{Component} from 'react'
import Radium from 'radium'

class Box extends Component {

  render(){

    const styles = {
      holder:{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '0 3em 1em 3em',
        '@media(max-width: 355px)':{
          margin: '1em 0.6em',
        },
        '@media(min-width: 355px) and (max-width: 480px)':{
          margin: '1em 0.7em',
        },
        '@media(min-width: 480px) and (max-width: 768px)':{
          margin: '1em 1.2em',
        },
      },
      value: {
        fontWeight: '600',
        fontSize: '5em',
        marginBottom: '0.1em',
        marginTop: '0.4em',
        '@media(max-width: 355px)':{
          fontSize: '1.5em',
        },
        '@media(min-width: 355px) and (max-width: 480px)':{
          fontSize: '1.8em',
        },
        '@media(min-width: 480px) and (max-width: 768px)':{
          fontSize: '1.8em',
        },
      },
      time:{
        fontWeight: '300',
        color: '#8b8b8b',
        marginTop: '0.1em',
        '@media(max-width: 355px)':{
          fontSize: '1em',
        },
        '@media(min-width: 355px) and (max-width: 480px)':{
          fontSize: '1em',
        },
        '@media(min-width: 480px) and (max-width: 768px)':{
          fontSize: '1em',
        },
      }
    }

    return(
      <div style ={styles.holder}>
        <h1 style={styles.value}>{this.props.value}</h1>
        <h3 style={styles.time}>{this.props.time}</h3>
      </div>
    )
  }

}

Box = Radium(Box)
export default Box
