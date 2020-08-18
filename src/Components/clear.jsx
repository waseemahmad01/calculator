import React from 'react'

const Clear = props =>{

    const style = {
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000000',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ffffff'
    }

    const ClearStyle = {
        backgroundColor: '#ffffff',
        color: 'black',
        padding: '10px 18px',
        width: '72%',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '20px'
    }

    return(
        <div className="clear"
        style={style}>
            <h3 style = {ClearStyle}
             onClick={props.handleClear}
            >Clear</h3>
        </div>
    )
}
export default Clear