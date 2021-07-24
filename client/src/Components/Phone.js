import React, {Component} from 'react'
import axios from "axios"


class Phone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: []
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.id
        console.log("id", this.props.match.params.id)
        this.getPhone(id)
    }

    getPhone = async (id) => {
        let res = await axios.get(`/api/phone/${id}`) 
        console.log("phone", res.data[0])
        this.setState({
            phone: res.data[0]
        })
    }

    render() {
       const { imageFileName, name, description, price, processor, ram, screen } = this.state.phone
        return (
            <div>
                <a href="/"><p className="back">Back</p></a>
                <div className="phone-item">
                    <div className="phone-img">
                        <img src={`/img/${imageFileName}`} />
                    </div>
                    <div className="phone-info">
                        <h2>{name}</h2>
                        <p>{price}€</p>
                        <p>{description}</p>
                        <p>Processor: {processor} </p>
                        <p>Ram: {ram} </p>
                        <p>Screen: {screen} </p>
                    </div>
                </div>
             </div>
        )
    }
}

export default Phone