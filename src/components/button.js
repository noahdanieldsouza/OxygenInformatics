
import { Button } from "react-native-paper";

export const StyledButton = ({title, onPress}) => {
    return (
        <Button  style = {{margin: 5}}
        color = "blue"
        mode = "contained"
        children = {title}
        onPress = {onPress}
        ></Button>
    )
}

export default StyledButton