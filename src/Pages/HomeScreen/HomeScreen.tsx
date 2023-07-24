import CardSkin from "../../Components/CardSkin/CardSkin"
import "./HomeScreen.css"

interface SkinInfos {
    id: number;
    foto: string;
    nome: string;
    preco: string;
    categoria: string;
    condicao: string;
}

function HomeScreen() {

    const lista: SkinInfos[] = [{
        id: 1,
        foto: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3lb-NlvPxDLfYkWNF18lwmO7Eu4qn3FGyqBE_MGv7d47DcVJqN1nYr1Dqxuno1sLpuJvLm3cwunMl5nbD30vgALBM-J8/360fx360f",
        nome: "Nomad Knife | Fade",
        preco: "R$ 6.367,32",
        categoria: "Faca",
        condicao: "Factory New",
    },
    {
        id: 2,
        foto: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlY20jfL2Ibrum25V4dB8teXA54vwxgTnrhZuNzigJoDHJAE-aQ7Sr1jtxuvr0JW7uprInXRluXQq4HzUzRKpwUYbrrSsKrQ/360fx360f",
        nome: "Skeleton Knife | Slaughter",
        preco: "R$ 6.014,65",
        categoria: "Faca",
        condicao: "Field-Tested",
    },
    {
        id: 3,
        foto: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ95t2xgYGZqOD8Oq_UqWNU6dNoteXA54vwxlXj-EVtY2GhcI-XcFRsZ1DU_APtx--918S06svNm3divHRz7CndnxGpwUYbCdJgqAA/360fx360f",
        nome: "Driver Gloves | Snow Leopard",
        preco: "R$ 2.357,33",
        categoria: "Luvas",
        condicao: "Battle-Scarred",
    },
    {
        id: 4,
        foto: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn9u5MRjjeyPo9qgjlfnqUtvMGHzIICWew45aV-B_1bqw7u5gse16JTKwXBnvigg5WGdwUL3VYtbUA/360fx360f",
        nome: "AK-47 | Asiimov",
        preco: "R$ 274,64",
        categoria: "Rifles",
        condicao: "Minimal Wear",
    },
    {
        id: 5,
        foto: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJO5dG0m7-Ymfb_NoTdn2xZ_Pp9i_vG8MKj2A3s_xA5Yjz2d4fEdldtYFiF8lK6xeq-jMS76Zqfzno37ikqt36IgVXp1nRPIMmn/360fx360f",
        nome: "AWP | Duality",
        preco: "R$ 177,06",
        categoria: "Sniper Rifle",
        condicao: "Factory New",
    },
    ]

    const listaItens = lista.map(lista =>
        <ul key={lista.id}>
            <li className="listaHomeScreen">
                <CardSkin foto={lista.foto} nome={lista.nome} preco={lista.preco} categoria={lista.categoria} condicao={lista.condicao} />
            </li>
        </ul>
    );

    return (
        <div className="containerHomeScreen">
            {listaItens}
        </div>
    )
}

export default HomeScreen