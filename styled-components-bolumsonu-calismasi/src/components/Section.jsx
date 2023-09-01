import Article from "./Article";
import { StyledSection } from "./styled";

export default function Section(){
    const articles = [
        {
        title: "lorem ipsum dolor",
        src: "https://picsum.photos/id/237/200/300",
        link: "#",
        content: `
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora quo eaque eum quasi 
                neque porro eos vero blanditiis a earum dolores nam praesentium odit incidunt possimus animi
                 voluptatem, optio minus quidem. Quasi, rerum eligendi ipsam cum optio dolorum cupiditate
                  reprehenderit, ratione cumque voluptate pariatur deleniti exercitationem, blanditiis perferendis.
                   Necessitatibus quas, perferendis maxime quisquam error numquam nam cupiditate rerum ipsum 
                   possimus minima! Quo et suscipit sed cum temporibus maxime culpa illum explicabo delectus.
                </p>`
    },
    {
        title: "lorem ipsum dolor2",
        src: "https://picsum.photos/id/237/200/450",
        link: "#",
        content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora quo eaque eum quasi 
        neque porro eos vero blanditiis a earum dolores nam praesentium odit incidunt possimus animi
         voluptatem, optio minus quidem. Quasi, rerum eligendi ipsam cum optio dolorum cupiditate
          reprehenderit, ratione cumque voluptate pariatur deleniti exercitationem, blanditiis perferendis.
           Necessitatibus quas, perferendis maxime quisquam error numquam nam cupiditate rerum ipsum 
           possimus minima! Quo et suscipit sed cum temporibus maxime culpa illum explicabo delectus.
        </p>`
    },
    ]
    return (<StyledSection>
         { articles.map((item,index) => <Article key={index} title={item.title} img={item.src} link={item.link} content={item.content}/>) }
    </StyledSection>
    )
}