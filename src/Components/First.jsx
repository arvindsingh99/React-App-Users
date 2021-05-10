import React,{Component} from 'react';
import Card from './Card';

export default class First extends Component{

    constructor(props){
        super(props);

        this.state = {
            users:[],
            filteredUsers:[]
        }
        this.formValues = [];
    }

    printName=(Var)=>{
        console.log(Var, this.props.name);
    }

    changeEmail=()=> {

        this.setState({email: "Politeprogrammer369@gmail.com"});
        console.log("email chnaged");
    }

    searchByName=(name)=>{
        
        let tempUsers = this.state.users.filter((user)=>{
            return user.name.toLowerCase().includes(name.toLowerCase());
        })

        this.setState({filteredUsers:tempUsers});
    }

    searchByCity=(city)=>{

        let tempUsers = this.state.users.filter((user)=>{
            return user.address.city.toLowerCase().includes(city.toLowerCase());
        })

        this.setState({filteredUsers:tempUsers});
    }



    readValue=(event, fieldName)=>{

        this.formValues[fieldName]=event;
        console.log(this.formValues)

    }


    componentDidMount=()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((users)=>{
            this.setState({users:users});
            this.setState({filteredUsers:users});
        })
        .catch((err)=>{console.log(err)})
    }

    render(){
        return(

            <div className="container">

                <div>
                    <input type="text" placeholder="Name" onChange={(event)=>{this.readValue(event.target.value, "name")}} />
                    <input type="text" placeholder="Age" onChange={(event)=>{this.readValue(event.target.value, "age")}} />
                </div>

                <div>
                    <input type="search" onChange={(event)=>{this.searchByName(event.target.value)}} placeholder="Search by name" />
                    <input type="search" onChange={(event)=>{this.searchByCity(event.target.value)}} placeholder="Search by city" />
                </div>

                {
                    this.state.filteredUsers.map((user,index)=>{
                        return(
                            <Card user={user} key={index} />
                        )
                    })
                }

            </div>
        )
    }
}

