import React, {useEffect, useState} from 'react';
import { Table, Progress, Select, Switch } from 'antd';
import './Home.scss';

const BASE_URL = 'https://api.sampleapis.com/beers';

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [type, setType] = useState('ale');
  const [sortType, setSortType] = useState();

  const { Option } = Select;

  useEffect(() => {
    fetchData();
  }, [type]);

  useEffect(() => {
    console.log('sort type changed')

  }, [sortType]);

  const fetchData = () => {
    fetch(`${BASE_URL}/${type}`)
      .then(resp => resp.json())
      .then(data => setBeers(data));
  };

  const onChange = (value) => {
    setType(value);

  }
  const onChangeName = (sort) => {
    setSortType(sort)
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating, record) => {
        const percent = (rating.average * 100 / 5).toFixed(0);
        return (
          <div key={rating.average}>
            <Progress width={60} type="circle" percent={percent} />
            {' | '} 
            <span>{rating.reviews}</span>
          </div>
        )
      },
    },
  ];

  return (
    <div className="container">
       <Switch
        checked={showMenu}
        onChange={handleShowMenu}
        checkedChildren="Hide"
        unCheckedChildren="Show"
      />

      <Select
        placeholder="Select a beer"
        onChange={onChange}
      >
        <Option value="ale">Ale</Option>
        <Option value="stouts">Stouts</Option>
        {/* <Option value="red-ale">Red Ale</Option> */}
      </Select>
      <Select
        placeholder="Sorting by Name"
        onChange={onChangeName}
      >
        <Option value="asc">ASC</Option>
        <Option value="desc">DESC</Option>
      </Select>
      <Table dataSource={beers} columns={columns} />;
    </div>
  )
}