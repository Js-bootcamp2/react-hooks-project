import React, {useEffect, useState} from 'react'
import {Table} from 'antd'
import { useNavigate, Link } from 'react-router-dom';

export const FAKE_API_POSTS = 'https://jsonplaceholder.typicode.com'

function Posts() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = () => {
    fetch(`${FAKE_API_POSTS}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: (title, record) => (
        <Link to={`/posts/${record.id}`} >
          {title}
        </Link>
      )
    },
    {
      title: 'Text',
      dataIndex: 'body',
      key: 'body',
    },
  ];
  return (
    <>
      <h1>Posts</h1>

      <Table 
        dataSource={posts} 
        columns={columns} 
      />;  
    </>
  )
}

export default Posts