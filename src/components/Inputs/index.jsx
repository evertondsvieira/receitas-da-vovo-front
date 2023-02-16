const Input = ({name, register, label, type})=> {
    return(
        <Container>
            <div>
                <span> {label} </span>
                <input name={name} type={type} {...register(name)} />
            </div>
        </Container>
    )
}

export default Input