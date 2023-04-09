import React from "react";

// 라디오 버튼은 그룹을 지어 사용되므로 라디오그룹 컴포넌트 정의
function RadioGroup({ label, children }) {
    return (
        <fieldset>
            <legend>{label}</legend>
            {children}
        </fieldset>
    );
}

export default RadioGroup;