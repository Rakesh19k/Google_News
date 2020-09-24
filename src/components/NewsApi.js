import React, { Component} from 'react'
import Axios from 'axios'



class NewsApi extends Component {
    constructor() {
        super()
    
        this.state = {
            Data : {},
            number: 0,
            index: 0
        }
    }


    componentDidMount() {
        Axios.get("https://newsapi.org/v2/top-headlines?pageSize=100&country=in&category=Business&apiKey=5bb8df76f578431f80c85a4c9bd311ac")
        .then (res => {
            console.log(res)
            this.setState({Data: res.data.articles})
        })

        .catch(error => {
            console.log(error)
            this.setState({errorMsg : "Something is wrong!!!"})
        })
    }


    Nextpage = ()=>{
        console.log("Next");
        var next_10=this.state.Data.slice(this.state.number)
        this.setState({number:this.state.number+10})
      }


    Previouspage = () =>{
        console.log("previous");
        var previous_10=this.state.Data.slice(this.state.number)
        this.setState({number:this.state.number-10})
      }
    

     
    render() {
        const {Data, errorMsg} = this.state

        var previous;
        var nextpage;
        if (this.state.number === 0) {
            previous = ""
            nextpage = <button className="btn btn-primary" onClick={this.Nextpage}>Next</button>
        } else if (this.state.number === Data.length) {
            previous = <button className="btn btn-primary" onClick={this.Previouspage}>Previous</button>
            nextpage = ""
        } else {
            nextpage = <button className="btn btn-primary" onClick={this.Nextpage} style={{ marginLeft: "10px" }}>Next</button>
            previous = <button className="btn btn-primary" onClick={this.Previouspage} >Previous</button>
        }
        return (
            <> 

                {
                    
                    Data.length ?
                    
                    Data.slice(this.state.number, this.state.number+10).map(articles => 
                    <div key={articles.index} className="card-div mt-1 mb-1">
                        <div className="card" style={{width:440, height:"auto"}}>  
                            <div className="card-body mt-2" style={{marginTop:-25}}>
                                <p className="card-title" style={{fontSize:15}}>{articles.title}</p>
                                <img className="card-img-right ml-2" src={articles.urlToImage} style={{height:140, width:140, float:"right"}}></img>
                                <p className="card-text pt-2" style={{fontSize:12}}>{articles.description}</p>
                                {/* <h6 className="author" style={{marginLeft:150, fontSize:10}}>By - {articles.author}</h6> */}
                            </div>
                            <div>
                                <a className="more float-left pb-2" href={articles.url} target="_blank" style={{marginLeft:165, fontSize:11}}>More</a>

                                <span className="text-center mr-5 float-right" style={{fontSize:9}}>{articles.publishedAt}</span>
                            </div>
                        </div>
                    </div>
                    
                    ) : null
                }

                {errorMsg ? <div>{errorMsg}</div> : null }
                
                <div className="text-center mb-4 mt-5">
                    {previous}
                    {nextpage}
                </div>

            </>
            
        )
    }
}

export default NewsApi
