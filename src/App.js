import React from 'react';
import {Cards, Charts, CountryPicker} from './componets'
import styles from './App.module.css';
import {fetchData} from './api'
import coronaImg from './images/covid.png'

class App extends React.Component {
    state = {
        data:{},
        country:''
    }
    async componentDidMount() {
       const response = await fetchData();
       this.setState({ data: response});
    }
    handelCountryChange = async (country) => {
       const fetchedData = await fetchData(country);
       this.setState({ data: fetchedData, country: country});
    }
    render() {
        const {data, country } = this.state;
        return (
            <div className={styles.container}>
            <img src={coronaImg} alt="covid-19" className={styles.image}/>
                <Cards data={data}></Cards>
                <CountryPicker handelCountryChange={this.handelCountryChange}></CountryPicker>
                <Charts data={data} country={country} ></Charts>
            </div>
        )
    }
}

export default App;