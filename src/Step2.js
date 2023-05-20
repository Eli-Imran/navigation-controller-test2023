import React from 'react'
function Step2(props) {
    return (
        <div className='step2'>Step2
            <button onClick={() => { props.navigatorRef.changePage("step1"); }} >
                Back
            </button>
            <button onClick={() => { props.navigatorRef.changePage("step3"); }} >
                Next
            </button>
        </div>
    )
}
export default Step2