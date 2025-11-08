import { useMemo } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";


const PillsView = (props) => {
    const { setActivePill, activePill, data } = props;




    return (
        // FlatList is pure component that by-default will only re-render when its data changed, but can change its re-rendering nature using extraData
        <FlatList horizontal={true} extraData={activePill} data={data} keyExtractor={(item, index) => item} renderItem={({item, index, separators}) => {
            return (
                <TouchableOpacity onPress={() => {
                    setActivePill(item)
                }} style={[{
                    backgroundColor: activePill === item ? '#904bebff' : 'gray',
                    borderRadius: 30,
                    paddingVertical: 16,
                    paddingHorizontal: 24, 
                }]} activeOpacity={0.5}>
                    <Pills payload={item} />
                </TouchableOpacity>
            )
        }} style={{
            // backgroundColor: "red"
            borderRadius: 20,
        }} contentContainerStyle={{
            // backgroundColor: "yellow",
            columnGap: 20,
            alignItems: "flex-start"
        }} bounces={false} showsHorizontalScrollIndicator={false} />
    )
};


const Pills = (props) => {
    const {payload} = props;

    return (
        <Text style={{
            fontSize: 16, fontWeight: "600", color: 'white'
        }}>
            {payload}
        </Text>
    )

}

export default PillsView