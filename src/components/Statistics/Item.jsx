import styled from "styled-components";
import getRandomHexColor from "helper";
const Item = styled('li')`
background-color: ${getRandomHexColor()};
    padding: 50px;
    display: flex;
    flex-direction: column;
`
export default Item