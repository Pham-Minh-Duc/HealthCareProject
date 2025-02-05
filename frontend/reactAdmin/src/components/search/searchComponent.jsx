import "./searchComponent.css"

export default function Search () {
    return (
        <>
            <div id="search">
                    <input type="text" placeholder="search"/>
                    <button><i className="ti-search"></i></button>
                </div>
        </>
    )
}