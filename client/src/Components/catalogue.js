import React, {Component} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phones: [],
            showForm: false
        }
    }

    componentDidMount = () => {
        this.getPhones()
    }

    getPhones = async () => {
            let res = await axios.get(`/api/phones`) 
            console.log("data", res.data)
            this.setState({
                phones: res.data
            })
    }

    getPhone = async (id) => {
        let res = await axios.get(`/api/phone/${id}`) 
        console.log("phone", res.data[0])
        this.setState({
            phone: res.data[0]
        })
    }

    deletePhone = async (id) => {
        await axios.delete(`/api/phones/${id}`)
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        return (
            <div>
                <div className="add-new"><button onClick={() => this.toggleForm()}>Add new</button></div>
               {this.state.showForm 
               ? <form className="add-phone" method="POST" action="/api/phones">
                    <label for="name">Phone name:</label><br/>
                    <input type="text" id="name" name="name" /><br/>
                    <label for="description">Description:</label><br/>
                    <input type="text" id="description" name="description" /><br />
                    <label for="price">Price:</label><br/>
                    <input type="text" id="price" name="price" /><br/>
                    <label for="processor">Processor:</label><br/>
                    <input type="text" id="processor" name="processor" /><br />
                    <label for="ram">Ram:</label><br/>
                    <input type="text" id="ram" name="ram" /><br />
                    <label for="screen">Screen:</label><br/>
                    <input type="text" id="screen" name="screen" /><br />
                    <label for="color">Color:</label><br/>
                    <input type="text" id="color" name="color" /><br />
                    <button type="submit" >Add phone</button>
                </form>
                : null}
                <div className="catalogue">
                {this.state.phones.map(phone =>
                    <div key={phone.id} className="phone">
                        <Link to={`/phone/${phone.id}`}><img alt="phone" src={`img/${phone.imageFileName}`} /></Link>
                        <h2>{phone.name}</h2>
                        <p className="colour">{phone.color}</p>
                        <p className="price">{phone.price}€</p>
                        <div className="bin" onClick={() => this.deletePhone(phone.id)}> 
                            <img alt="bin" src="/img/delete.png" width="20px"/>
                        </div>
                    </div>
                )}
             </div>
            </div>
             
        )
    }
}

export default Catalogue