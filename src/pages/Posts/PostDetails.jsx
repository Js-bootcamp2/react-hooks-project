import React, {useEffect, useState} from 'react'
import {Outlet, useParams, Link} from 'react-router-dom'
import { FAKE_API_POSTS } from './Posts';

export default function PostDetails() {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (!id) return;

    fetch(`${FAKE_API_POSTS}/posts/${id}`)
      .then(response => response.json())
      .then(post => setPost(post))

    fetch(`${FAKE_API_POSTS}/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
  }, [id])

  return (
    <div>
      <Link to="/posts">Back</Link>
      <h1>PostDetails {post?.id}</h1> 
      {post && (
        <div>
          <h2>Post: {post.title}</h2>
          <text>{post.body}</text>
        </div>
      )}

      <h3>Comments:</h3>
      {comments.map(item => {
        return (
          <>
            <hr/>
            <div>Author: {item.email}</div>
            <div>Name: {item.name}</div>
            
          </>
        )
      })}
    </div>
  )
}
