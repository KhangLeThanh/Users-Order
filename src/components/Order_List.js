import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class Order_List extends Component {
    constructor(props) {
        super(props);
        this.state = {listOrders: []};
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
        const itemRows = this.state.listOrders.map((asteroid) => 
            
            <tr key={asteroid.name}>
                <td><Link to={"/orders/"+asteroid.id}>{asteroid.products[0].name}</Link></td>
                <td>{asteroid.products[0].fromPlace.name}</td>
                <td>{asteroid.products[0].toPlace.name}</td>

            </tr>

        );

        return (  
            <div>
                 <Navigation />

                 <section className="wrapper-login-form">
                               
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <h2>Order List:</h2>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>From</th>
                                            <th>To</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemRows}
                                    </tbody>

                                </table>
                            </div>
                        </div>    
                    </div>
                </section>    
            </div>
               
            

        );
  
    }
}
export default Order_List;
