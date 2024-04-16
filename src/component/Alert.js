import React from 'react';
// import Textarea from './Textarea';
function Alert(props) {
    
    return (
        <>  
        <div style={{height:'50px'}}>
            { props.info && (
               <div className={`alert alert-${props.info.type} alert-dismissible fade show`} role="alert">


                    <strong>{props.info.type.charAt(0).toUpperCase() + props.info.type.slice(1)}</strong> : {props.info.msg}
                   
                </div>
            )}
            </div>
        </>
    );
}

export default Alert;
