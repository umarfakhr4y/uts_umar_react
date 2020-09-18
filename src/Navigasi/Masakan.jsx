import React, { Component, Fragment } from 'react'
import Axios from 'axios';



class Masakan extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:"",
            harga:"",
            jumlah:"",
            rating:"",
            waktu:"",
            image:"",
            pesan:"",
 
        }
    }

    componentDidUpdate(){
        const userId = this.props.userId
        const url =`https://belajar-react.smkmadinatulquran.sch.id/api/populer/${userId}`
        Axios
        .get(url)
        .then(response => {
            console.log('respone', response)
            this.setState({
                name : response.data.data.name,
                harga : response.data.data.harga,
                jumlah : response.data.data.jumlah,
                rating : response.data.data.rating,
                waktu : response.data.data.waktu,
                image : response.data.data.image,
                pesan : response.data.data.pesan,
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    handleClick() {
        console.log("Di Klik")
        
      }



    

    render(){
        return(
            <Fragment>
                
                        <div class="modal-header">
                            <h5 class="modal-title">Pesan {this.props.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src={this.props.image} alt="" width="465" height="200"/>
                            <h5 className="mt-2">{this.props.name}</h5>
                            <p className="font-weight">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                {this.props.rating}
                                <p className="float-right mr-20">RP. {this.props.harga}</p>
                            </p>
                            <div>
                                <button className="btn float-right orencuy text-white">Pesan</button>
                                <button className="btn float-right orencuy text-white mr-2" onClick={this.handleClick}>+</button>
                                    <input type="text" name="inputmenu" className="form-controlumar float-right mr-2" value={this.props.pesan} />
                                <button className="btn float-right orencuy text-white mr-2">-</button>
                                <p className="float-left mt-1 mr-2">Stock</p>
                                <p className="float-left mt-1">{this.props.jumlah}</p>

                            </div>
                        </div>
                        
                        
            </Fragment>
        )
    }

}

export default Masakan
