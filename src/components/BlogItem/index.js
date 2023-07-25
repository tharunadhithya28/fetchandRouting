import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogListitem} = this.props
    const {
      id,
      title,
      imageUrl,
      avatarUrl,
      author,
      content,
      topic,
    } = blogListitem

    return (
      <Link to={`blogs/${id}`}>
        <li>
          <div>
            <img className="image" src={imageUrl} alt="title" />
          </div>
          <div>
            <h1>{title}</h1>
            <h1> {topic} </h1>
            <div>
              <img className="avatar" src={avatarUrl} />
              <p> {author} </p>
              <p> {content} </p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default BlogItem
