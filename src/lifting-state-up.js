// 状态提升
import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class NumberInput extends React.Component{
  constructor(props){
    super(props)
    this.handelChange = this.handelChange.bind(this)
  }

  handelChange(e){
    this.props.onTemperatureChange(e.target.value)
  }

  render(){
    const scale = this.props.scale
    const temperature = this.props.temperature
    
    return (
      <fieldset>
        <legend>Enter the number of {scaleNames[scale]}:</legend>
        <input
          value= {temperature}
          onChange= {this.handelChange}
        />
      </fieldset>
    )
  }
  
}

class Lift extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      temperature: '', scale: 'c'
    }
    this.handelCelsiusChange = this.handelCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handelCelsiusChange(temperature){
    this.setState({
      temperature, scale: 'c'
    })
  }

  handleFahrenheitChange(temperature){
    this.setState({
      temperature, scale: 'f'
    })
  }

  render(){
    const {scale, temperature} = this.state
    const temperatureC = scale === 'f' ? tryConvert(temperature, toCelsius): temperature
    const temperatureF = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature
    return(
      <div>
        <NumberInput scale='c' temperature={temperatureC} onTemperatureChange={this.handelCelsiusChange}/>
        <NumberInput scale='f' temperature={temperatureF} onTemperatureChange={this.handleFahrenheitChange}/>
        <ResultComponent celsius={parseFloat(temperatureC)}></ResultComponent>
      </div>
    )
  }
}

function ResultComponent(props){
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default Lift