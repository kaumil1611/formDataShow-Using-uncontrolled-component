
import React, { Component } from 'react'

class Form extends Component {

    
    constructor(){
        super();
        this.formRef = React.createRef();
        this.name =  React.createRef();
        this.email = React.createRef();
        this.gender = React.createRef();
       
        // this.date =  React.createRef();
        this.state = {
            gender : null,
            hobby : [],
        }
        this.mobileNo = React.createRef();
        this.country = React.createRef();

        this.age = React.createRef();
        this.password = React.createRef();
       
    }
    
    submitHandler(event){
        event.preventDefault();
        console.log("gender is "+this.gender.current.value);
        const uData = {
            name:this.name.current.value,
            email:this.email.current.value,
            gender: this.state.gender,
            hobby : this.state.hobby,
            mobile: this.mobileNo.current.value,
            age: this.age.current.value,
            country : this.country.current.value,
            password : this.password.current.value,
            // date:this.date.current.value,
        };
       
        this.props.data(uData);
       
        this.formRef.current.reset();
     

    }
    changeHobbyHandler(e) {
        let tempData = this.state.hobby;
        let indexValue = tempData.indexOf(e.target.value);

        if(tempData.includes(e.target.value)){
            tempData.splice(indexValue,1);
            this.setState({
                hobby: tempData,
            })
        }
        else{
            tempData.push(e.target.value);
            this.setState({
                hobby: tempData,
            })
        }
    }
    
    render() {
        let gender1 = [{id:1,gender_value: 'Male'}, {id:2,gender_value: 'Female'} , {id:3,gender_value: 'Other'} ];
        let hobby1 = [{id:1,hobby_value: 'Cricket'}, {id:2, hobby_value: 'Football'} , {id:3, hobby_value: 'Reading'} ];
        
        return (
            <div>
                <form onSubmit={(event)=>{this.submitHandler(event)}}  ref={this.formRef}>
                    <input className="form-control form-control-lg form_data"  type="text" ref={this.name}  placeholder="Add User Name" />
                    <input className="form-control form-control-lg form_data"  type="email" ref={this.email}  placeholder="Add User Email" />
                   
                    <input type="tel" className="form-control form-control-lg form_data" ref={this.mobileNo} placeholder="enter your number"  title="Error Message" pattern="[1-9]{1}[0-9]{9}" />
                    <input type="number" className="form-control form-control-lg form_data" ref={this.age} placeholder="enter age" />
                    <label htmlFor="Male"> Gender </label> &nbsp; &nbsp; &nbsp;
                   
                    <div onChange={(e) => this.setState({
                        gender: e.target.value,
                    }) }>
                    {gender1.map((result)=>(
                
                        <div className="form-check form-check-inline" key={result.id} >
                            <input className="form-check-input" type="radio" name="gender" ref={this.gender} value={result.gender_value}/>
                            <label className="form-check-label" htmlFor={result.gender_value}>
                                {result.gender_value}
                            </label>    
                        </div>
                    ))}
                    </div>
                  
                    <br />
                    <br/>
                    <div onChange={e => this.changeHobbyHandler(e)}>
                   
                    <label > Hobby </label> &nbsp; &nbsp; &nbsp;
                    {hobby1.map((result) =>(
                        <div className="form-check form-check-inline" key={result.id}>
                            <input className="form-check-input" type="checkbox" name={result.hobby_value} value={result.hobby_value} />
                            <label className="form-check-label" htmlFor={result.hobby_value}>{result.hobby_value}</label>
                        </div>
                    ))}
                    
                    </div>
                    <div className="form-group col-md-12">
                        
                        <select defaultValue="All" id="inputState" className="form-control" ref={this.country}>
                            <option value="">Choose country...</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Russia">Russia</option>
                            <option value="United States of America">United States of America</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                    <input type="password" className="form-control form-control-lg form_data" id="inputPassword" ref={this.password} placeholder="Password"></input>
                    <button type="text" className="btn btn-outline-success button">Add User Details</button>
                </form>
            </div>
        )
    }
}
export default Form;