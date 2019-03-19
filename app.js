'use strict'

const e = React.createElement;


class HelloWorld extends React.Component {
    handleClick = (event) => {
        alert("Hello there")
    }
    render () {
        const {userid} = this.props
        return <h1><span onClick={this.handleClick}>Hello World {userid}</span></h1>
    }
}


var containers = document.querySelectorAll(".cfe-app")

containers.forEach(domContainer => {
    const userid = domContainer.dataset.userid

    ReactDOM.render(
        e(HelloWorld, {userid: userid}),
        domContainer
    )
})


