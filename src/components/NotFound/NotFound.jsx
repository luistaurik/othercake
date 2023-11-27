import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../NotFound/NotFound.css"



function NotFoundComponent() {
  return (
        <>
            <div className="notfound">
                <h1 className="message">Sorry :( this is not a page yet</h1>
                <img className="notfoundimage" src="https://img.freepik.com/vector-gratis/construccion-establecer-iconos_24877-60028.jpg?w=1380&t=st=1701046008~exp=1701046608~hmac=6f21f6b90034e4a79fb44afc6f29774a9851f1bcddb1e7c53226afd8d8c75d91"/>
            </div>
        </>
  );
}

export default NotFoundComponent;