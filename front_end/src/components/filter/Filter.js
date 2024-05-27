import React, { useEffect, useRef, useState } from 'react'
import style from './Filter.module.css';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function Filter({priceConstraint, setPriceConstraint, indexSortOption, setIndexSortOption}) {  

  const [showPriceOption, setShowPriceOption] = useState(false)
  const [showSizeOption, setShowSizeOption] = useState(false)
  const sizeOptions = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  const [sizeConstraint, setSizeConstraint] = useState([33,35,38])
  const [showSortOption, setShowSortOption] = useState(false)
  const sortOptions = ['Giá tăng dần', 'Giá giảm dần', 'Tên: A-Z', 'Tên: Z-A'];
  const handleChange = (event, newValue) => {
    setPriceConstraint(newValue);
  };

  return (
    <div className={style.container}>
      <div className={style.type}>
        <div className={style.optionContainer}>
          <div className={style.icon}><i className="bi bi-filter"></i></div>
          <div className={style.priceContainer}>
            <span>Giá</span>
            <i
              className="bi bi-caret-down"
              onClick={() => setShowPriceOption(!showPriceOption)}
            ></i>
            {showPriceOption &&
              <div className={style.price}>
                <div>Giá từ {valuetext(priceConstraint[0])}đ - {valuetext(priceConstraint[1])}đ</div>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={priceConstraint}
                  onChange={handleChange}
                  step={50000}
                  min={0}
                  max={2000000}
                />
              </div>
            }
          </div>
        </div>
        <div className={style.sortContainer}>
          <span>Sắp xếp theo</span>
          <i
            className="bi bi-caret-down"
            onClick={() => setShowSortOption(!showSortOption)}
          ></i>
          {showSortOption &&
            <div
              className={style.sortOption}
            >
              <ul>
                {sortOptions.map((option, index) => {
                  return (
                    <li
                      onClick={() => {
                        // setIndexSortOption(index);
                        setIndexSortOption(index);
                        // setShowSortOption(false);
                      }}
                    >
                      <span>{option}</span> {indexSortOption === index && <i class="bi bi-check-lg"></i>}
                    </li>
                  )
                })}
              </ul>
            </div>
          }

        </div>
      </div>

      <div className={style.constraintContainer}>
        {(priceConstraint[0] != 0 || priceConstraint[1] != 2000000)  &&
          <div className={style.constraint}>
            <div>{valuetext(priceConstraint[0])}đ : {valuetext(priceConstraint[1])}đ</div>
            <i
              className="bi bi-x-circle"
              onClick={() => {
                setPriceConstraint([0, 2000000])
              }}
            ></i>
          </div>
        }
      </div>
    
    </div>
  )
}
