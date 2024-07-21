import { Image } from "react-native";
import { colors } from "../../presentatiion/config/theme/theme";
import { FadeInImage } from "./FadeInImage";

interface ListItemProps {
    number: number;
    
}

export const ListItems = ({number}:ListItemProps)=>{

    return(

        <FadeInImage uri={`https://picsum.photos/id/${number}/500/400`} style={{width:'100%', height: 400}}/>   
      /*  <Image source={{uri:`https://picsum.photos/id/${number}/500/400`}} 
       style={{width:'100%', height: 400}}
       /> */
    )

}