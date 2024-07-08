import React,{useState} from "react";
import supabase from "./supabase.js";
import "./Nav.css";

function Ul(props){
    if(props.one=="val"){
       
    return (
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
    )
    }
    else{
        return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-3">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          
        </ul>
        );
    }
}
function Modal(){
  var [array,changeArray] = useState([]);
  async function changed(event){
    if(event.target.value==''){
      changeArray([]);
    }
    var new_val = event.target.value+'%';
    let { data: movies, error } = await supabase
    .from('movies')
    .select('film')
    .like('film',new_val)
    .limit(5);
    console.log(movies.film);
     changeArray(movies);
    console.log(array);
  }
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5 pt-5">
    <div class="modal-content">
      <div class="modal-header">
      <form class="d-flex w-100" role="search">
        <input class="form-control w-100" type="search" placeholder="Search" aria-label="Search" onChange={changed}/>
      </form>
      </div>
      <div class="modal-body">
        <ul>
      {array.map(artist => (
          <li className="sug" style={{color:"white"}}><a class="dropdown-item" href="#">{artist.film}</a></li>
        ))}
        </ul>
      </div>
    </div>
  </div>
</div>
    )
}

export default function Nav(){
    return (
<nav class="navbar navbar-expand-lg px-2 bg-transparent" data-bs-theme="dark">
  <div class="container-fluid px-5">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Ul one="val"/>
        <Ul one="tw"/>
        <input class="form-control back-color back-none" type="button" placeholder="Search" aria-label="Search" value="Search" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        <Modal/>
    </div>
  </div>
</nav>
    )
}