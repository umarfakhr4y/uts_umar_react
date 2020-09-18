import React, { Component, Fragment } from 'react'
import Category from'../Content/Category';
import Masakan from'../Navigasi/Masakan';
import logo from '../uts/logo.png';
import card from '../uts/card.png';
import Axios from 'axios';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            menus : [],
            categories : [],
            userId: '',
            status:'',
            passing:'',
            name:'',
            harga:'',
            waktu:'',
            jumlah:'',
            rating:'',
            image:''

            
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log("ComponentDidMount")
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`
        Axios
        .get(url)
        .then(response => {
            console.log('Data Berhasil didapatkan', response)
            this.setState({
                menus : response.data.data,
            })
            
        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        return(
            <Fragment>
                <div className="ml-5 mr-5">
                <nav className="navbar navbar-expand-lg navbar">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                
                <h2 className="navbar-brand mr-5 text-black font-weight-bold">MyKantin</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2 ml-5 searchbarpanjang bg-light" type="search" placeholder="&#xf002; Cari Makan Kuy" aria-label="Search"></input>
                            
                        </form>
                    </span>
                </div>
                <a href="#">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                </a>
                <a href="#">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle-fill float-right ml-5 mr-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                </a>
                
                
                </nav>
                <div className="row">
                    <div className="col-8">
                        <div className="card mt-3"> 
                            <div className="card-body oreniklan rounded">
                                <div className="row">
                                <div className="col-5">
                                    <img src={logo} alt="Logo" width="250px" className="float-right mt-2" />
                                </div>
                                <div className="col-7">
                                    <h3 className="mt-4 font-weight-bold orentext">Promo Hari ini</h3>
                                    <h4 className="orentext">Perut Kenyang, hati senang</h4>
                                </div>
                                </div>
                            </div>
                        </div>

                        <Category/>
                            <h1 className="mt-5 mb-3">Masakan</h1>
                            <div className="row mt-4 mr-0 pr-0">
                                {this.state.menus.map((data, index) => 

                                <div className="col-sm-4 mb-3">
                                    <button className="btn" onClick={()=> {
                                        this.setState({
                                            userId: data.category_id,
                                            name: data.name,
                                            harga: data.harga,
                                            waktu: data.waktu,
                                            jumlah: data.jumlah,
                                            rating: data.rating,
                                            image: data.image,
                                            status:'terpencet'
                                        })
                                    }}data-toggle="modal" data-target="#exampleModal">
                                        <div className="card-columns-fluid" >
                                            <div className="card cornerumar">
                                            <div className="card-body pt-0 pl-0 pb-0 pr-0">
                                                <div>
                                                    <div className="container pt-0 pl-0 pb-0 pr-0">
                                                    <img src={data.image} alt="" width= "250" height= "250" object-fit= "cover" className="cornerumar"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer mb-0 pb-0">
                                                <p className="font-weight-bold">{data.name}</p>
                                                <div className="bg-dark">
                                                    <p className="font-weight-bold teks-begrondua">{data.waktu}</p>
                                                </div>
                                                <p className="font-weight">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                    </svg>
                                                    {data.rating}
                                                    <p className="float-right mr-5">RP. {data.harga}</p>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                     </button>   
                                </div>
                                )}
                            </div>
                        </div>
                    <div className="col-4 bg-light rounded ">
                        <h3 className="mt-3">Pesanan Saya</h3>
                        <div className="card ungukasir cornerumar ">
                            <div className="card-body text-white">
                                Umar Fakhry
                            </div>
                            <div className="card-body text-white pb-0">
                                <img src={card} alt="" width="100" className="float-right"/>
                                <h1>Rp.1.000.000
                                </h1>
                            
                            </div>
                            <div className="card-body text-white pt-0">
                                <h3><code className="text-white">3758**********2021</code></h3>
                            </div>
                        </div>

                     </div>
                </div>
                </div>

                {/* Modals */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <Masakan name={this.state.name} harga={this.state.harga} waktu={this.state.waktu} jumlah={this.state.jumlah} rating={this.state.rating} image={this.state.image}/>
                        </div>
                    </div>
                </div>
                {/* Akhir Modal */}
                
            </Fragment>
        )
    }

}

export default Home
