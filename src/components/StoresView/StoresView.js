import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-bootstrap';
import './StoresView.css';
import { ScrollBar } from 'react-scrollbar'

// var stores = ["Wallmart", "SafeWay", "Costco"]
const stores = [...Array(100)].map((val, i) => `store ${i}`);
var l = stores.length;

function StoresRow(props) {
    return (
            <div className="Row">
            
                <button
                    onClick={
                        () => props.removefn(props.id)
                    }>
                    -
                </button>
                {props.name}
            </div>
    )
}

function StoresView(props) {
    const [st, setItems] = useState(stores.map(
        (storeName, index) => {
            return (
                {
                    name: storeName,
                    id: index
                })
        }
    ));
    const [isOpen, setIsOpen] = useState(false);
    const [itemName, setItemName] = useState("");


    function removeStore(index) {
        setItems(st.filter(x => x.id != index))
    }

    const addStore = event => {
        event.preventDefault();
        setItems([
            ...st, { name: itemName, id: st.length }
        ]);
        setItemName("");
        setIsOpen(false);
    };

    return (
        <div className="StoreView">
            {/* <ScrollBar> */}
    
                {st.map(
                    item =>
                        (

                            <StoresRow name={item.name} id={item.id} removefn={removeStore} />
                        )
                )
                }
            {/* </ScrollBar> */}

        </div>
    );
}

// const styles = StyleSheet.create({
//     container: {
//      flex: 1,
//       paddingTop: 30,
//       paddingRight: 5,
//       paddingLeft: 5,

//       backgroundColor: '#C9BDB1',
//       alignItems: 'left',
//       // alignSelf: 'center',
//       justifyContent: 'space-between',
//     },
//     button: {
//       height: 20,
//       width: 40,
//       justifyContent: 'center',
//       alignSelf: 'center',
//       backgroundColor: "white",
//       borderWidth: 1,
//       borderRadius: 10,
//       color: '#fff'
//     },
//     text: {
//       height: 30,
//       paddingLeft: 20,
//     }
// });

export default StoresView