const Error = ({error}) =>{
    if (!error) return null;

    return (<p style={{color: '#f31'}}>{error}</p>)
}

export default Error;