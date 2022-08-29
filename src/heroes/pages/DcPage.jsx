import { HeroList } from "../components";
import { getHeroes } from "../helpers"





export const DcPage = () => {

    return (
        <>
            <h1>Dc Comics</h1>
            <HeroList publisher='DC Comics' />

        </>
    )
}
