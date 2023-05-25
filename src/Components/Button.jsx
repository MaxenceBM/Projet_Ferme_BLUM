import "../Components/style/Button.scss"

function Button(props) {
    return (
    <>
        <div className="button">
            <p className="buttonComposant">{props.nom}</p>
        </div>
    </>
)};

export default Button