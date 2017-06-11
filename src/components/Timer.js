//Dependencies
import React,{Component} from 'react'
import Radium from 'radium'

//Components
import Box from './Box'

class Timer extends Component {
  state = {
    distance: new Date(this.props.deadLine).getTime() - Date.now(),
  }

  getTimeToGo = () =>{
    setInterval(() => this.setState({
      distance: new Date(this.props.deadLine).getTime() - Date.now(),
      days : Math.floor(this.state.distance / (1000 * 60 * 60 * 24)),
      hours : Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes : Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds : Math.floor((this.state.distance % (1000 * 60)) / 1000)
    }), 1000);
  }

  componentWillMount = () =>{
    this.setState({
      days : Math.floor(this.state.distance / (1000 * 60 * 60 * 24)),
      hours : Math.floor((this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes : Math.floor((this.state.distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds : Math.floor((this.state.distance % (1000 * 60)) / 1000)
    })
  }

  componentDidMount = () =>{
    this.getTimeToGo()
  }

  render() {

    const styles = {
      holder:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(23, 23, 23,.9)',
        borderRadius: '20px',
        color: '#fff',
        boxShadow: '-17px 40px 91px 11px rgba(0,0,0,0.67)'
      },
      timer:{
        display: 'flex',
        alignItems: 'center',
      },
      equals: {
        '@media(max-width: 768px)':{
          fontSize: '1em'
        },
      }
    }

    return(
      <div style={styles.holder}>
        <div style={styles.timer}>
          <Box time="Dias" value={this.state.days}/>
          <h2 style={styles.equals}>:</h2>
          <Box time= 'Horas' value={this.state.hours}/>
          <h2 style={styles.equals}>:</h2>
          <Box time= 'Minutos' value={this.state.minutes}/>
          <h2 style={styles.equals}>:</h2>
          <Box time= 'Segundos' value={this.state.seconds}/>
        </div>
      </div>
    )
  }

}

Timer = Radium(Timer)

export default Timer
