import React from 'react';

export class CounterClass extends React.Component {
  state = {
    value: 0,
  }

  render() {
    // const { value } = this.state;

    // const setValue = (newValue) => {
    //   this.setState({ value: newValue })
    // }

    const useState = () => {
      const { value } = this.state;

      const setValue = (newValue) => {
        this.setState({ value: newValue })
      }

      return [value, setValue];
    }

    const [value, setValue] = useState();

   return (
     <>
      <h2>CounterClass - {value}</h2>

      <button type="button" onClick={() => setValue(10)}>10</button>
      <button type="button" onClick={() => setValue(20)}>20</button>
      <button type="button" onClick={() => setValue(30)}>30</button>
     </>
    )
  }
}