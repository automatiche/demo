import React, { Component } from 'react';
import {ToyReact, Component} from "./ToyReact.js"

import {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableOpacity,
} from 'react-native';

const defaultSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
const testData = [{uername:'谢广坤',useid:'w1258536653',remark:'这是一条备注信息'},
    {uername:'王小绿',useid:'1258012580',remark:''},
    {uername:'肖宏',useid:'3215532155',remark:'宵小消失'},
    {uername:'李逸',useid:'1008610086',remark:'木子李'}];

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: defaultSource,
        };
        this.listData = [];
    }

    componentDidMount() {
        this.listData = JSON.parse(JSON.stringify(testData));
        this.setState({
            dataSource: defaultSource.cloneWithRows(testData),
        });
    }

    updateItem = (index) => {
        if (this.listData[index].username == '李明') {
            return;
        }
        this.listData[index].username = '李明';
        this.setState({
            dataSource: defaultSource.cloneWithRows(this.listData),
        });
    } 

    renderRow = (rowData,i,j) => {
        console.log('renderRow',rowData.uername);
        return (
            <SubItem rowData={rowData} updateItem={this.updateItem} index={j}/>
        )
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#faf7f7"}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
            </View>
        )
    }
}

const SubItem = ({rowData,index,updateItem,}) => {
    console.log('SubItem.render',rowData.uername);
    return (
        <View style={styles.itemStyle}>
            <TouchableOpacity onPress={()=>updateItem(index)} style={styles.updataBtn}>
                <Text style={styles.baseText}>{rowData.uername||''}</Text>
                <Text style={{fontSize:12,color:'#fff',paddingLeft:20}}>{'点我修改'}</Text>
            </TouchableOpacity>
            <Text style={styles.baseText}>{rowData.useid||''}</Text>
            <Text style={styles.baseText}>{rowData.remark||'暂无备注'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginBottom: 5,
    },
    baseText: {
        fontSize: 14,
        color: '#000',
    },
    updataBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#58A0FF',
    }
});
