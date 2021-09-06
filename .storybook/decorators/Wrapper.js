import React from 'react';


const Wrapper =({story})=>{
    return(<div style={{ padding: '3rem', border:'1px solid #eee', borderRadius:'5px' }}>{story()}</div>)
};

export default Wrapper;
