import React, { useState } from 'react';

const ListItem = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, '제목없음']);
  };

  return (
    <div>
      <button onClick={handleAddItem}>추가하기</button>
      <ul class="MuiList-root css-1uzmcsd" style={{ margin: '80px 16px 20px' }}>
        {items.map((item, index) => (
          <div>
          <div tabIndex="0" role="button" aria-describedby="rbd-hidden-text-2-hidden-text-4" data-rbd-drag-handle-draggable-id="draggableItem_3739285390" data-rbd-drag-handle-context-id="2" draggable="false" data-rbd-draggable-context-id="2" data-rbd-draggable-id="draggableItem_3739285390">
              <li key={prevItems.length + 1} class="MuiListItem-root MuiListItem-gutters css-vvazg8">
                  <div class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-qy2th" tabIndex="0" role="button" aria-label={question}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      <div class="MuiListItemIcon-root css-1f8bwsm">
                          <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(239, 248, 255)', padding: '4px 8px', borderRadius: '8px', justifyContent: 'space-between' }}>
                              <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.33329 1.33333C1.1444 1.33333 0.985959 1.26933 0.857959 1.14133C0.730404 1.01378 0.666626 0.855556 0.666626 0.666667C0.666626 0.477778 0.730404 0.319333 0.857959 0.191333C0.985959 0.0637776 1.1444 0 1.33329 0H10.6666C10.8555 0 11.0137 0.0637776 11.1413 0.191333C11.2693 0.319333 11.3333 0.477778 11.3333 0.666667C11.3333 0.855556 11.2693 1.01378 11.1413 1.14133C11.0137 1.26933 10.8555 1.33333 10.6666 1.33333H1.33329ZM1.33329 4C1.1444 4 0.985959 3.936 0.857959 3.808C0.730404 3.68044 0.666626 3.52222 0.666626 3.33333C0.666626 3.14444 0.730404 2.986 0.857959 2.858C0.985959 2.73044 1.1444 2.66667 1.33329 2.66667H6.66662C6.85551 2.66667 7.01396 2.73044 7.14196 2.858C7.26951 2.986 7.33329 3.14444 7.33329 3.33333C7.33329 3.52222 7.26951 3.68044 7.14196 3.808C7.01396 3.936 6.85551 4 6.66662 4H1.33329Z" fill="#2272AF"></path>
                              </svg>
                              <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px' }}>{prevItems.length + 1}</p>
                          </div>
                      </div>
                      <div class="MuiListItemText-root css-1tsvksn">
                          <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ minHeight: '40px', lineHeight: '40px', color: 'rgb(0, 82, 204', fontWeight: '500', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: '0.5', fontStyle: 'italic' }}>{item}</p>
                      </div>
                      <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style={{ justifyContent: 'flex-end', background: 'transparent', maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px', padding: '0px', margin: '0px' }}>
                          {showTooltip &&
                              (<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" style={{ color: 'rgb(188, 188, 188)', fontSize: '20px' }} onClick={showDelete}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>)}
                      </button>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                  </div>
              </li>
          </div>
      </div>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
