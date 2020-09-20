import React, { Component } from 'react';

class Social extends Component {
    render() {
        return ( <div class = "social" >
            <div class = "btnsame btn1" >
            <a href = "https://github.com/errordube/"
            target = "_blank" > < i class = "fa fa-github" > < /i></a >
            </div> 
            <div class = "btnsame btn2" >
            <a href = "https://www.behance.net/dubeaditya"
            target = "_blank" > < i class = "fa fa-behance"> < /i></a >
            </div> 
            <div class = "btnsame btn3" >
            <a href = "https://www.linkedin.com/in/aditya-d-864192b4/"
            target = "_blank" > < i class = "fa fa-linkedin" > < /i></a >
            </div>
            <div class = "btnsame btn4" >
            <a href = "https://www.instagram.com/dubeaditya/?hl=en"
            target = "_blank" > < i class = "fa fa-instagram" > < /i></a >
            </div>
            <div class = "btnsame btn5" >
            <a href = "https://dubeaditya.blogspot.com/"
            target = "_blank" > < i class = "fa fa-rss" > < /i></a >
            </div>
            </div>
        )
    }
}

export default Social