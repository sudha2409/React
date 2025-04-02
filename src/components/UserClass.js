import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count1 :1,
        }
        // console.log(this.props.name + 'Child Constructor');
    }
    componentDidMount (){
        // console.log(this.props.name +'Child ComponentDidMount');
    }
    render() {
        // console.log(this.props.name +'Child Render');
        const {name,location} = this.props;
        const{count,count1} = this.state;
        return(
            
            <div className="user-card">
                 <h1>Count:{count}</h1>
                 <h1>Count1:{count1}</h1>
                 <button onClick={()=>{
                    this.setState({
                       count : this.state.count+1,
                    })
                 }}>Increase Count </button>
                <h2>Name : {name}</h2>
                <h3>Location : {location} </h3>
                <h3>GitHub: sudha2409</h3>
            </div>
        );
    }
}
export default UserClass;