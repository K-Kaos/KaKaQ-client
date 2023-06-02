import React from 'react';
import { Menu, MenuItem, ListItemText } from '@mui/material';
import NestedMenuItem from './NestedMenuItem';

// 1차 지역과 2차 지역 데이터
const categories = [
  {
    name: '서울특별시',
    subcategories: ['전체'],
  },
  {
    name: '부산광역시',
    subcategories: ['전체'],
  },
  {
    name: '대구광역시',
    subcategories: ['전체'],
  },
  {
    name: '인천광역시',
    subcategories: ['전체'],
  },
  {
    name: '광주광역시',
    subcategories: ['전체'],
  },
  {
    name: '대전광역시',
    subcategories: ['전체'],
  },
  {
    name: '울산광역시',
    subcategories: ['전체'],
  },
  {
    name: '세종시',
    subcategories: ['전체'],
  },
  {
    name: '경기도',
    subcategories: ['수원시', '고양시', '용인시', '성남시', '부천시', '화성시', '안산시', '남양주시', '안양시', '평택시', '시흥시', '파주시', '의정부시', '김포시', '광주시', '광명시', '군포시', '하남시', '오산시', '양주시', '이천시', '구리시', '안성시', '포천시', '의왕시', '양평군', '여주시', '동두천시', '가평군', '과천시', '연천군'],
  },
  {
    name: '강원도',
    subcategories: ['춘천시', '원주시', '강릉시', '동해시', '속초시', '삼척시', '태백시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
  },
  {
    name: '충청북도',
    subcategories: ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
  },
  {
    name: '충청남도',
    subcategories: ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
  },
  {
    name: '전라북도',
    subcategories: ['전주시', '익산시', '군산시', '정읍시', '완주군', '김제시', '남원시', '고창군', '부안군', '임실군', '순창군', '진안군', '장수군', '무주군'],
  },
  {
    name: '전라남도',
    subcategories: ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
  },
  {
    name: '경상북도',
    subcategories: ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'],
  },
  {
    name: '경상남도',
    subcategories: ['창원시', '김해시', '진주시', '양산시', '거제시', '통영시', '사천시', '밀양시', '함안군', '거창군', '창녕군', '고성군', '하동군', '합천군', '남해군', '함양군', '산청군', '의령군', '함양군'],
  },
  {
    name: '제주도',
    subcategories: ['제주시', '서귀포시'],
  },
  
];

export default function SelectCity() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    console.log(subcategory)
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>지역 선택</button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {categories.map((category) => (
          <NestedMenuItem
            key={category.name}
            label={category.name}
            parentMenuOpen={Boolean(anchorEl)}
            onClick={() => handleCategoryClick(category)}
          >
            {category.subcategories.map((subcategory) => (
              <MenuItem
                key={subcategory}
                selected={subcategory === selectedSubcategory}
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                <ListItemText primary={subcategory} />
              </MenuItem>
            ))}
          </NestedMenuItem>
        ))}
      </Menu>
    </div>
  );
}
