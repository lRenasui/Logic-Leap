import CardBigImage from "../components/card-big-img"
import CardIcon from "../components/card-icon"


export default function Home() {
    return (
        <div className="wrapper mx-10vw">
            <div className="container">
                <div className="row gx-5">

                    <CardBigImage title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                    <CardIcon title="CreatiVortex" category="Design" image="/Produto.png" price="€19.99/mo." />
                </div>
            </div>
        </div>
    )
}