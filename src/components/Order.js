import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


import Navigation from './Navigation';


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            listOrders: [],
            lat: 60.166966,
            lon: 24.93336

        };
    }
    
    componentDidMount() {
        fetch("/data/api.json")
        .then(response => {
            if (!response.ok) {
            throw new Error("Bad response");
            }
            return response.json();
        })
        .then((responseData) => { 
            this.setState({ 
                listOrders: responseData.orders,
            }); 
        })  
        .catch(error => console.error(error));
    }
    
    render() {
        const order_id = this.state.id;
        const order_detail =  this.state.listOrders
        
            .filter(function(details) {
                return details.id == order_id;
            })
            .map(function(details){
                return  <tr key={details.id}>
                            <td>{details.products[0].name}</td>
                            <td>{details.products[0].fromPlace.name}-{details.products[0].toPlace.name}</td>

                            <td>{details.products[0].price.total} €</td>

                        </tr>
                         
            })
        return(
            <section className="wrapper-login-form">
                <Navigation />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h2>Order Detail:</h2>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Place</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {order_detail}
                                </tbody>

                            </table>
                        </div>
                    </div>   
                   
                </div>
                <Map
                    google={this.props.google}
                    initialCenter={{ lat: this.state.lat, lng: this.state.lon }}
                >
                    <Marker
                    name={'Helsinki'}/>
                
                </Map>
            </section>    
            
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyAgSweukFfUsnpK10WfBSWUar3x6NTKR_0')
  })(Order)
