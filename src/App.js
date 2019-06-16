import React from 'react'
import DropDown from './components/DropDown'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    status: 'hot',
    search: 'earthporn',
    images: [],
    after: null,
    before: null,
    page: 1
  }

  componentDidMount = () => {
    fetch(`https://www.reddit.com/r/${this.state.search}/${this.state.status}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({images: data.data.children, after: data.data.after, before: data.data.before})
        console.log(data.data)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    
    fetch(`https://www.reddit.com/r/${searchValue}/${this.state.status}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({images: data.data.children, after: data.data.after, before: data.data.before})
        console.log(this.state.images)
        console.log(data)
        console.log(this.state.next)
      })
  }

  nextPageClick = () => {
    fetch(`https://www.reddit.com/r/${this.state.search}/${this.state.status}.json?count=25&after=${this.state.after}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          images: data.data.children, 
          after: data.data.after, 
          before: data.data.before, 
          page: prevState.page + 1
        }))
        console.log(data.data.children)
      })
      window.scrollTo(0, 0);
  }

  previousPageClick = () => {
    fetch(`https://www.reddit.com/r/${this.state.search}/${this.state.status}.json?count=25&before=${this.state.before}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          return {
            images: data.data.children, 
            after: data.data.after, 
            before: data.data.before,
            page: prevState.page - 1
          }
        })
        console.log(data.data.children)
      })
      window.scrollTo(0, 0);
  }

  testSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }

  render() {
    return (
      <div className="ui container">
        <br />
        <DropDown 
          testSubmit={this.testSubmit} 
          handleChange={this.handleChange} 
          statusValue={this.state.status}
        />
        <br />
        <SearchBar 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          searchValue={this.state.search}
        />
        <br />
        <ImageList 
          images={this.state.images}
        />
        <br />
        <Navigation 
          nextPageClick={this.nextPageClick} 
          previousPageClick={this.previousPageClick} 
          page={this.state.page}
        />
        <Footer />
      </div>
    )
  }
}

export default App