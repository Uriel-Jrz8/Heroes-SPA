import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";





export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    

    const { q = '' } = queryString.parse(location.search);
 

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSerarchSubmit = (event => {
        event.preventDefault();
        //if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`)
    })

    return (
        <>
            <h1>SearchPage</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr />
                    <form onSubmit={onSerarchSubmit}>
                        <input type="text"
                            placeholder="Ingresa el nombre"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-primary mt-2">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultdos</h4>
                    <hr />
                        {
                            (q === '')
                            ? <div className="alert alert-primary"><h3>Busca un Heroe</h3> </div>
                            : ( heroes.length === 0 )
                            && <div className="alert alert-danger"> No se Encontro { q }</div>
                        }
                    {
                        heroes.map( heroe => (
                            <HeroCard key={ heroe.id } { ...heroe } />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
