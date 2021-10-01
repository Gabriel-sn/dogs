const Error = ({error}) =>{
    if (!error) return null;

    return (<p style={{color: '#f31', marginTop: '1rem'}}>{error}</p>)
}

export default Error;