//Dependencies
import React,{Component} from 'react'
import Radium from 'radium'

//components
import Timer from './Timer'
import FeatFooter from './FeatFooter'

class Holder extends Component {

  render() {

    const styles = {

      fondo:{
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
        backgroundImage: `url(${this.props.background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      head:{
        fontWeight: '300',
        fontSize: '2.3em',
        letterSpacing: '0.04em',
        color: '#fff',
        textAlign: 'center'
      },
      break:{
        display: 'none',
        '@media(max-width: 478px)':{
          display: 'block',
        }
      }

    }

    return(
      <div style={styles.fondo}>
        <h1 style={styles.head}>Las vaciones <br style={styles.break}/> terminan en</h1>
        <Timer deadLine= "Aug 21, 2017 00:00:00"/>
        <FeatFooter/>
      </div>
    )
  }

}

Holder = Radium(Holder)

export default Holder
