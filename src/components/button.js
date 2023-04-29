
import { Button } from "react-native-paper";

export const StyledButton = ({title}) => {
    return (
        <Button  style = {{margin: 5}}
        color = "blue"
        mode = "contained"
        children = {title}
        ></Button>
    )
}

export default StyledButton