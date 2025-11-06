import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function useSafeAreaStyles() {
    const { left, right, bottom, top } = useSafeAreaInsets();

    return {
        paddingLeft: left,
        paddingRight: right,
        paddingBottom: bottom,
        paddingTop: top
    }
}