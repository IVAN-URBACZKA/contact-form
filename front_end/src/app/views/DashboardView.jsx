import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import CustomerCard from '../shared/components/container/CustomerCard';

class DashboardView extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: [] 
        };

    }



    componentDidMount() {


        if (this.props.match.params.email) {
            const email = this.props.match.params.email
            const foo = async () => {
                try {

                    await axios.get(
                        'https://localhost:8000/api/message/search/' + email
                    ).then((res) => {
                        this.setState({ data: res.data })
                    })
                } catch (error) {
                    console.log(error);
                }

            }

            foo();

        }


    }


    render() {


        return (
            <div>
                    <div className="flex justify-around py-10">

                        
                            {this.state.data.map(message => (
                                

                                <CustomerCard 
                                key= {message.id}
                                id={message.id}
                                name = {message.name}
                                subject = {message.subject}
                                done= {message.done}
                                />

                            )
                            
                            )}
                        
                    </div>


            </div>
        );
    }
}




export default withRouter(DashboardView);