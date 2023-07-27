import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(0);
  const [card1Selected, setCard1Selected] = useState(false);
  const [card2Selected, setCard2Selected] = useState(false);

  useEffect(() => {
    setSelectAll(card1Selected && card2Selected);
  }, [card1Selected, card2Selected]);


  const handleAllSelectChange = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    setCard1Selected(isChecked);
    setCard2Selected(isChecked);
    setSelected(isChecked ? 2 : 0);
  };

  const handleCardCheckboxChange = (event, card) => {
    const isChecked = event.target.checked;
    if (card === 'card1') {
      setCard1Selected(isChecked);
    } else if (card === 'card2') {
      setCard2Selected(isChecked);
    }
    setSelected(isChecked ? selected + 1 : selected - 1);
  };

  const actions = document.getElementsByClassName('action')

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    action.style.color = 'white'
    action.style.padding = '5px'
    if (action.textContent.trim() == 'View') {
      action.style.backgroundColor = 'green'

    }
    else if (action.textContent.trim() == 'Request') {
      action.style.backgroundColor = 'yellow'
      action.style.color = 'white'
    }
  }

  return (
    <>
      <div className='part-1'>
        <div className='flex head'>
          <h2>Followup Remainder</h2>
        </div>
        <div className='box_container flex'>
          <div className='box'>
            Total Reviews
            <br />
            <span>39</span>
          </div>
          <div className='box'>
            Avg.Rating
            <br />
            <span>4.9</span>
          </div>
          <div className='box'>
            Review Rate
            <br />
            <span>23.27%</span>
          </div>
          <div className='box'>
            Send Now
            <br />
            <span>92</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='flex part-2'>
        <h2>Select Review Message</h2>
        <div className='flex choice'>
          <p>Message</p>
          <select className='select' name="" id="">
            <option value="" >please choose</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <button className='button'>Preview or Edit Message</button>
        </div>
      </div>
      <br />
      <div className='flex part-3'>
        <h2>Filter Target Order</h2>
        <br />
        <div className='flex first'>
          <div>
            <p>Customer:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div>
            <p>Request Status:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div>
            <p>Review Status:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div>
            <p>Message:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
        <div className='flex '>
          <span>
            <p>Product:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </span>
          <span>
            <p>Order Date:</p>
            <input id='date' type='date' value="2018-07-22" />
          </span>
          <span>
            <p>Order ID:</p>
            <select name="" id="">
              <option value="">All</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </span>
          <div className='btn-div'>
            <button className='search-btn'>Seach</button>
            <button className='reset-btn'>Reset</button>
          </div>
        </div>

      </div>
      <br />
      <div className='part-4 flex'>
        <div className='select_info flex'>
          <input type="checkbox" name='allselect' onChange={handleAllSelectChange}
            checked={selectAll} />
          <p>Selected {selected} customers</p>
        </div>
        <br />
        <div className='flex field_name'>
          <p>Customer</p>
          <p>Order Info</p>
          <p>Order Date</p>
          <p>Review Status</p>
          <p>Request Status</p>
          <p>Action</p>
        </div>
        <br />
        <div className='card'>
          <div className='checkbox'>
            <input type="checkbox" onChange={(event) => handleCardCheckboxChange(event, 'card1')}
              checked={card1Selected} />
          </div>
          <div className='customer'>
            <p>Venessa Sakura</p>
            <div>
              <p>Repeat customer who have left positive reviews</p>
            </div>
          </div>
          <div className='order_info'>
            <p>#214748555</p>
            <p>Rose gold dangle earrings...</p>
            <h4>SKU:   CL00012</h4>
          </div>
          <div className='order_date'>
            2012-12-17
          </div>
          <div className='review_status'>
            Commented
          </div>
          <div className='request_status'>
            Requested
          </div>
          <div className='action'>
            View
          </div>
        </div>
        <div className='card'>
          <div className='checkbox'>
            <input type="checkbox" onChange={(event) => handleCardCheckboxChange(event, 'card2')}
              checked={card2Selected} />
          </div>
          <div className='customer'>
            <p>Venessa Sakura</p>
            <div>
              <p>Repeat customer who have left negative reviews</p>
            </div>
          </div>
          <div className='order_info'>
            <p>#214748555</p>
            <p>Rose gold dangle earrings...</p>
            <h4>SKU:   CL00012</h4>
          </div>
          <div className='order_date'>
            2012-12-17
          </div>
          <div className='review_status'>
            Not commented
          </div>
          <div className='request_status'>
            Send Now
          </div>
          <div className='action'>
            Request
          </div>
        </div>
      </div>
    </>
  )
}

export default App
