import HTMLReactParser from "html-react-parser";
import { StyledArticle, StyledImg } from "./styled";


export default function Article({title, link, img, content}) {
    return  (<StyledArticle>
    <header>
        <h2>{title}</h2> 
      <StyledImg src={img} />
      {HTMLReactParser(content)}
          <footer><a href={link}>İncele</a></footer>
    </header>
  </StyledArticle>
    )
}