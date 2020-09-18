import React, { Component, Fragment } from 'react'
import Axios from 'axios';



class Category extends Component{

    constructor(props){
        super(props)
        this.state = {
            categories : [],

            
        }
        console.log('constructor')
    }

    componentDidMount(){
        console.log("ComponentDidMount")
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`
        Axios
        .get(url)
        .then(response => {
            console.log('Data Berhasil didapatkan', response)
            this.setState({
                categories : response.data.data,
            })
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <Fragment>
                <h1 className="mt-5 mb-3">Kategori</h1>
                
                <div className="row">
                {this.state.categories.map((data, index) => 

                        <div className="col-sm-4">
                            <button className="btn pt-0 pl-0 pb-0 pr-0 ">
                            <div className="card mr-3 mb-4">
                                <div className="body pt-0 pl-0 pb-0 pr-0">
                                    <img src={data.img} alt="" width="250" height="120" className="rounded cornerumar"/>
                                    <div class="bg-text">
                                        <p className="teks-begron">{data.name}</p>
                                    </div>
                                </div>
                            </div>
                            </button>
                        </div>
                )}
                </div>
            </Fragment>
        )
    }

}

export default Category
