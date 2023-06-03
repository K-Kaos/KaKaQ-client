import React, { useState } from 'react';

const SurveyTest = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    '서울',
    '부산',
    '대전',
    '경상북도',
    '경상남도',
    // 나머지 카테고리들
  ];

  const subCategories = {
    서울: ['구미시', '포항시'],
    부산: ['부산시1', '부산시2'],
    대전: ['대전시1', '대전시2'],
    경상북도: ['칠곡군', '예천군'],
    경상남도: ['울진군', '창녕군'],
    // 나머지 카테고리들과 해당 카테고리의 서브 카테고리들
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        {categories.map((category) => (
          <div
            key={category}
            style={{ cursor: 'pointer' }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div>
          {subCategories[selectedCategory].map((subCategory) => (
            <div key={subCategory} value={subCategory}>{subCategory}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SurveyTest;
