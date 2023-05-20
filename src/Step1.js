import React from 'react'
function Step1(props) {
    return (
        <div className='step1'>
            Step1
            <button onClick={() => { props.navigatorRef.changePage("step2"); }} >
                Next
            </button>
        </div >
    )
}
export default Step1